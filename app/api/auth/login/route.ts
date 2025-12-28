import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

// Use a singleton pattern for Prisma in production
const globalForPrisma = global as unknown as { prisma: PrismaClient };

const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

// Types
interface LoginRequest {
  username: string;
  password: string;
  accountKey: string;
  product: string;
}

interface TokenPayload {
  userId: string;
  username: string;
  email: string;
  product: string;
  iat: number;
  exp: number;
}

// Security Configuration
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = '24h';
const COOKIE_NAME = 'auth_token';
const COOKIE_MAX_AGE = 24 * 60 * 60; // 24 hours in seconds

// Input Sanitization
function sanitizeInput(input: string): string {
  if (typeof input !== 'string') return '';
  
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML/script tags
    .slice(0, 255); // Limit length
}

// Validate Account Key Format
function isValidAccountKey(key: string): boolean {
  const keyPattern = /^[A-Z]{3}-[A-Z0-9]{4}-[A-Z0-9]{4}$/;
  return keyPattern.test(key);
}

// Validate Product Code
function isValidProduct(product: string): boolean {
  const validProducts = ['ehp', 'oims', 'paynet', 'clickconnect', 'blok'];
  return validProducts.includes(product.toLowerCase());
}

// Generate Secure Token
function generateToken(payload: Omit<TokenPayload, 'iat' | 'exp'>): string {
  if (!JWT_SECRET) {
    throw new Error('JWT_SECRET is not configured');
  }
  
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN,
    algorithm: 'HS256',
  });
}

// Set Secure Cookie
async function setAuthCookie(token: string): Promise<void> {
  const cookieStore = await cookies();
  
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: COOKIE_MAX_AGE,
    path: '/',
  });
}

// Main Login Handler
export async function POST(request: Request) {
  try {
    // Check if JWT_SECRET is configured
    if (!JWT_SECRET) {
      console.error('JWT_SECRET environment variable is not set');
      return NextResponse.json(
        { message: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Parse request body
    let body: LoginRequest;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { message: 'Invalid request body' },
        { status: 400 }
      );
    }

    const { username, password, accountKey, product } = body;

    // Validate required fields
    if (!username || !password || !accountKey || !product) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedUsername = sanitizeInput(username);
    const sanitizedAccountKey = sanitizeInput(accountKey).toUpperCase();
    const sanitizedProduct = sanitizeInput(product).toLowerCase();

    // Validate account key format
    if (!isValidAccountKey(sanitizedAccountKey)) {
      return NextResponse.json(
        { message: 'Invalid account key format' },
        { status: 400 }
      );
    }

    // Validate product
    if (!isValidProduct(sanitizedProduct)) {
      return NextResponse.json(
        { message: 'Invalid product selection' },
        { status: 400 }
      );
    }

    // Find user in database
    const user = await prisma.user.findUnique({
      where: { username: sanitizedUsername },
      select: {
        id: true,
        username: true,
        email: true,
        password: true,
        accountKey: true,
        product: true,
        isActive: true,
        failedLoginAttempts: true,
        lockedUntil: true,
      },
    });

    // Generic error message to prevent username enumeration
    const invalidCredentialsResponse = NextResponse.json(
      { message: 'Invalid credentials' },
      { status: 401 }
    );

    if (!user) {
      // Add artificial delay to prevent timing attacks
      await new Promise(resolve => setTimeout(resolve, 100));
      return invalidCredentialsResponse;
    }

    // Check if account is locked
    if (user.lockedUntil && new Date(user.lockedUntil) > new Date()) {
      const remainingTime = Math.ceil(
        (new Date(user.lockedUntil).getTime() - Date.now()) / 1000 / 60
      );
      return NextResponse.json(
        { message: `Account locked. Try again in ${remainingTime} minutes.` },
        { status: 423 }
      );
    }

    // Check if account is active
    if (user.isActive === false) {
      return NextResponse.json(
        { message: 'Account is deactivated. Contact support.' },
        { status: 403 }
      );
    }

    // Verify password
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      // Increment failed login attempts
      const newFailedAttempts = (user.failedLoginAttempts || 0) + 1;
      const shouldLock = newFailedAttempts >= 5;
      
      await prisma.user.update({
        where: { id: user.id },
        data: {
          failedLoginAttempts: newFailedAttempts,
          ...(shouldLock && {
            lockedUntil: new Date(Date.now() + 15 * 60 * 1000), // Lock for 15 minutes
          }),
        },
      });

      if (shouldLock) {
        return NextResponse.json(
          { message: 'Too many failed attempts. Account locked for 15 minutes.' },
          { status: 423 }
        );
      }

      return invalidCredentialsResponse;
    }

    // Verify account key
    if (user.accountKey !== sanitizedAccountKey) {
      return NextResponse.json(
        { message: 'Invalid account key' },
        { status: 401 }
      );
    }

    // Check product access
    const productAccess = user.product?.split(',').map(p => p.trim().toLowerCase()) || [];
    if (!productAccess.includes(sanitizedProduct)) {
      return NextResponse.json(
        { message: 'You do not have access to this product' },
        { status: 403 }
      );
    }

    // Reset failed login attempts on successful login
    await prisma.user.update({
      where: { id: user.id },
      data: {
        failedLoginAttempts: 0,
        lockedUntil: null,
        lastLoginAt: new Date(),
      },
    });

    // Generate JWT token
    const token = generateToken({
      userId: user.id,
      username: user.username,
      email: user.email,
      product: sanitizedProduct,
    });

    // Set HTTP-only cookie
    await setAuthCookie(token);

    // Return success response (without token in body for security)
    return NextResponse.json({
      success: true,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        product: sanitizedProduct,
      },
      // Include token for backward compatibility, but prefer cookie
      token,
    });

  } catch (error) {
    console.error('Login error:', error);
    
    // Don't expose internal errors to client
    return NextResponse.json(
      { message: 'An error occurred. Please try again.' },
      { status: 500 }
    );
  }
}

// Logout Handler
export async function DELETE() {
  try {
    const cookieStore = await cookies();
    
    // Clear the auth cookie
    cookieStore.delete(COOKIE_NAME);
    
    return NextResponse.json({ success: true, message: 'Logged out successfully' });
  } catch (error) {
    console.error('Logout error:', error);
    return NextResponse.json(
      { message: 'Error during logout' },
      { status: 500 }
    );
  }
}

// Verify Token Handler (GET)
export async function GET(request: Request) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(COOKIE_NAME)?.value;
    
    if (!token) {
      return NextResponse.json(
        { authenticated: false, message: 'No token found' },
        { status: 401 }
      );
    }
    
    if (!JWT_SECRET) {
      return NextResponse.json(
        { authenticated: false, message: 'Server configuration error' },
        { status: 500 }
      );
    }
    
    try {
      const decoded = jwt.verify(token, JWT_SECRET) as TokenPayload;
      
      return NextResponse.json({
        authenticated: true,
        user: {
          userId: decoded.userId,
          username: decoded.username,
          email: decoded.email,
          product: decoded.product,
        },
      });
    } catch {
      // Token is invalid or expired
      cookieStore.delete(COOKIE_NAME);
      return NextResponse.json(
        { authenticated: false, message: 'Invalid or expired token' },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error('Token verification error:', error);
    return NextResponse.json(
      { authenticated: false, message: 'Error verifying token' },
      { status: 500 }
    );
  }
}
