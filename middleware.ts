import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Rate limiting store (in production, use Redis)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

// Rate limit configuration
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 100; // 100 requests per minute
const AUTH_RATE_LIMIT = 5; // 5 auth attempts per minute

// Trusted API routes that have their own validation
const TRUSTED_API_ROUTES = [
  '/api/bookings',
  '/api/contact',
];

// Check rate limit
function checkRateLimit(ip: string, isAuthRoute: boolean): boolean {
  const now = Date.now();
  const key = isAuthRoute ? `auth:${ip}` : `general:${ip}`;
  const limit = isAuthRoute ? AUTH_RATE_LIMIT : MAX_REQUESTS_PER_WINDOW;
  
  const record = rateLimitStore.get(key);
  
  if (!record || now > record.resetTime) {
    rateLimitStore.set(key, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }
  
  if (record.count >= limit) {
    return false;
  }
  
  record.count++;
  return true;
}

// Check if route is trusted (has its own validation)
function isTrustedRoute(pathname: string): boolean {
  return TRUSTED_API_ROUTES.some(route => pathname.startsWith(route));
}

// Sanitize and validate request
function validateRequest(request: NextRequest): { valid: boolean; reason?: string } {
  const url = request.nextUrl;
  
  // Skip validation for trusted API routes (they have their own validation)
  if (isTrustedRoute(url.pathname)) {
    return { valid: true };
  }
  
  // Block suspicious paths (common attack vectors)
  const suspiciousPaths = [
    '/wp-admin', '/wp-login', '/.env', '/config', 
    '/phpmyadmin', '/.git', '/backup',
    '/sql', '/database', '/shell', '/cmd',
    '/.htaccess', '/.htpasswd', '/web.config'
  ];
  
  const pathLower = url.pathname.toLowerCase();
  if (suspiciousPaths.some(path => pathLower.includes(path))) {
    return { valid: false, reason: 'Suspicious path detected' };
  }
  
  // Block suspicious query parameters (code execution attempts)
  const suspiciousParams = ['eval(', 'exec(', 'system(', 'passthru(', 'shell_exec('];
  const searchParams = url.searchParams.toString().toLowerCase();
  
  if (suspiciousParams.some(param => searchParams.includes(param))) {
    return { valid: false, reason: 'Suspicious parameters detected' };
  }
  
  // Check for obvious SQL injection patterns (only clear attacks)
  const sqlPatterns = [
    /union\s+select/i,
    /;\s*drop\s+table/i,
    /;\s*delete\s+from/i,
    /;\s*insert\s+into/i,
    /'\s*or\s+'1'\s*=\s*'1/i,
    /'\s*or\s+1\s*=\s*1/i,
  ];
  
  const fullUrl = url.pathname + url.search;
  if (sqlPatterns.some(pattern => pattern.test(fullUrl))) {
    return { valid: false, reason: 'SQL injection attempt detected' };
  }
  
  // Check for obvious XSS patterns (only clear attacks)
  const xssPatterns = [
    /<script[\s>]/i,
    /javascript\s*:/i,
    /<iframe[\s>]/i,
    /<object[\s>]/i,
    /<embed[\s>]/i,
    /onerror\s*=/i,
    /onload\s*=/i,
    /onclick\s*=/i,
  ];
  
  try {
    const decodedUrl = decodeURIComponent(fullUrl);
    if (xssPatterns.some(pattern => pattern.test(decodedUrl))) {
      return { valid: false, reason: 'XSS attempt detected' };
    }
  } catch {
    // If URL can't be decoded, it might be malformed - but don't block
  }
  
  return { valid: true };
}

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  
  // Get client IP
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 
             request.headers.get('x-real-ip') || 
             'unknown';
  
  // Check if this is an auth route
  const isAuthRoute = request.nextUrl.pathname.startsWith('/api/auth');
  
  // Rate limiting (applies to all routes)
  if (!checkRateLimit(ip, isAuthRoute)) {
    return new NextResponse(
      JSON.stringify({ 
        error: 'Too many requests', 
        message: 'Please try again later' 
      }),
      { 
        status: 429, 
        headers: { 
          'Content-Type': 'application/json',
          'Retry-After': '60'
        } 
      }
    );
  }
  
  // Validate request (skipped for trusted API routes)
  const validation = validateRequest(request);
  if (!validation.valid) {
    console.warn(`Blocked request from ${ip}: ${validation.reason}`);
    return new NextResponse(
      JSON.stringify({ error: 'Bad request' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }
  
  // Add security headers to response
  response.headers.set('X-Request-Id', crypto.randomUUID());
  response.headers.set('X-DNS-Prefetch-Control', 'off');
  
  // Prevent caching of sensitive pages
  if (request.nextUrl.pathname.startsWith('/products') || 
      request.nextUrl.pathname.startsWith('/api')) {
    response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    response.headers.set('Pragma', 'no-cache');
    response.headers.set('Expires', '0');
  }
  
  return response;
}

// Configure which routes to run middleware on
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|images|fonts).*)',
  ],
};