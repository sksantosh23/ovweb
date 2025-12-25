import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { username, password, accountKey, product } = await req.json();

    // Validate input
    if (!username || !password || !accountKey || !product) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate account key format
    const keyPattern = /^[A-Z]{3}-[A-Z0-9]{4}-[A-Z0-9]{4}$/;
    if (!keyPattern.test(accountKey)) {
      return NextResponse.json(
        { message: 'Invalid account key format' },
        { status: 400 }
      );
    }

    // Find user in database
    const user = await prisma.user.findUnique({
      where: { username },
    });

    if (!user) {
      return NextResponse.json(
        { message: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Verify password
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return NextResponse.json(
        { message: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Verify account key
    if (user.accountKey !== accountKey) {
      return NextResponse.json(
        { message: 'Invalid account key' },
        { status: 401 }
      );
    }

    // Check product access
    const productAccess = user.product?.split(',') || [];
    if (!productAccess.includes(product)) {
      return NextResponse.json(
        { message: 'You do not have access to this product' },
        { status: 403 }
      );
    }

    // Generate JWT token
    const token = jwt.sign(
      {
        userId: user.id,
        username: user.username,
        email: user.email,
        product: product,
      },
      process.env.JWT_SECRET || 'your-secret-key-change-in-production',
      { expiresIn: '24h' }
    );

    return NextResponse.json({
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        product: product,
      },
    });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
