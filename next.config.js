/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Hide X-Powered-By header for security
  poweredByHeader: false,
  
  // Generate ETags for caching
  generateEtags: true,
  
  // Compression
  compress: true,
  
  // Image optimization - using remotePatterns (domains is deprecated)
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'omniverity.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.omniverity.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
    // Modern image formats
    formats: ['image/avif', 'image/webp'],
    // Responsive breakpoints
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Minimize image processing time
    minimumCacheTTL: 60,
    // Enable SVG support with CSP
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // Experimental features for performance
  experimental: {
    // Optimize package imports
    optimizePackageImports: ['lucide-react'],
  },
  
  // Security Headers
  async headers() {
    // Define CSP based on environment
    const isDev = process.env.NODE_ENV === 'development';
    
    // CSP directive - more permissive in dev, strict in production
    const cspDirective = isDev
      ? // Development CSP (more permissive for hot reload, etc.)
        `
          default-src 'self';
          script-src 'self' 'unsafe-eval' 'unsafe-inline';
          style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
          img-src 'self' data: https: blob:;
          font-src 'self' https://fonts.gstatic.com;
          connect-src 'self' https://api.omniverity.com ws: wss:;
          frame-ancestors 'none';
          base-uri 'self';
          form-action 'self';
        `
      : // Production CSP (strict)
        `
          default-src 'self';
          script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net https://www.googletagmanager.com https://www.google-analytics.com;
          style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
          img-src 'self' data: https: blob:;
          font-src 'self' https://fonts.gstatic.com;
          connect-src 'self' https://api.omniverity.com https://www.google-analytics.com https://analytics.google.com;
          frame-ancestors 'none';
          base-uri 'self';
          form-action 'self';
          upgrade-insecure-requests;
        `;

    return [
      {
        // Apply to all routes
        source: '/:path*',
        headers: [
          // ===================
          // Security Headers
          // ===================
          
          // Prevent clickjacking attacks
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          // Prevent MIME type sniffing
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          // XSS Protection (legacy browsers)
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          // Referrer Policy - balance privacy and analytics
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          // Permissions Policy - disable unnecessary features
          {
            key: 'Permissions-Policy',
            value: [
              'camera=()',
              'microphone=()',
              'geolocation=()',
              'interest-cohort=()',
              'payment=()',
              'usb=()',
              'magnetometer=()',
              'gyroscope=()',
              'accelerometer=()',
            ].join(', '),
          },
          // Content Security Policy
          {
            key: 'Content-Security-Policy',
            value: cspDirective.replace(/\s{2,}/g, ' ').trim(),
          },
          // HSTS (Strict Transport Security) - 1 year
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          // Prevent DNS prefetch leaks
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          // Download options for IE
          {
            key: 'X-Download-Options',
            value: 'noopen',
          },
          // Permitted cross-domain policies
          {
            key: 'X-Permitted-Cross-Domain-Policies',
            value: 'none',
          },
          
          // ===================
          // SEO Headers
          // ===================
          
          // Allow search engine indexing
          {
            key: 'X-Robots-Tag',
            value: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
          },
        ],
      },
      
      // ===================
      // Static Asset Caching
      // ===================
      
      // Cache images aggressively (1 year)
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      
      // Cache fonts (1 year)
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      
      // Cache static files (1 year)
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      
      // Cache favicon and icons (1 week - allows for updates)
      {
        source: '/(favicon.ico|icon.svg|apple-touch-icon.png|site.webmanifest)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=604800, stale-while-revalidate=86400',
          },
        ],
      },
      
      // ===================
      // API Security
      // ===================
      {
        source: '/api/:path*',
        headers: [
          // Disable caching for API routes
          {
            key: 'Cache-Control',
            value: 'no-store, no-cache, must-revalidate',
          },
          // Prevent API responses from being embedded
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ];
  },
  
  // Redirects (e.g., www to non-www, trailing slashes)
  async redirects() {
    return [
      // Redirect common typos or old URLs
      // Example:
      // {
      //   source: '/services/ai',
      //   destination: '/services/ai-solutions',
      //   permanent: true, // 308 redirect for SEO
      // },
    ];
  },
  
  // Rewrites (e.g., for API proxying)
  async rewrites() {
    return {
      beforeFiles: [],
      afterFiles: [],
      fallback: [],
    };
  },
  
  // Webpack configuration for additional optimizations
  webpack: (config, { dev, isServer }) => {
    // Production optimizations only
    if (!dev && !isServer) {
      // Optimize chunk splitting for better caching
      config.optimization.splitChunks = {
        chunks: 'all',
        minSize: 20000,
        maxSize: 244000,
        cacheGroups: {
          // Disable default cache groups
          default: false,
          vendors: false,
          
          // Framework chunk (React, React DOM)
          framework: {
            chunks: 'all',
            name: 'framework',
            test: /(?<!node_modules.*)[\\/]node_modules[\\/](react|react-dom|scheduler|prop-types|use-subscription)[\\/]/,
            priority: 40,
            enforce: true,
          },
          
          // Large libraries get their own chunks
          lib: {
            test(module) {
              return (
                module.size() > 160000 &&
                /node_modules[/\\]/.test(module.identifier())
              );
            },
            name(module) {
              const crypto = require('crypto');
              const hash = crypto.createHash('sha1');
              hash.update(module.identifier());
              return hash.digest('hex').substring(0, 8);
            },
            priority: 30,
            minChunks: 1,
            reuseExistingChunk: true,
          },
          
          // Common chunks shared between pages
          commons: {
            name: 'commons',
            minChunks: 2,
            priority: 20,
          },
          
          // Shared chunks
          shared: {
            name(module, chunks) {
              const crypto = require('crypto');
              return crypto
                .createHash('sha1')
                .update(chunks.reduce((acc, chunk) => acc + chunk.name, ''))
                .digest('hex') + (module.type === 'css/mini-extract' ? '_CSS' : '');
            },
            priority: 10,
            minChunks: 2,
            reuseExistingChunk: true,
          },
        },
      };
      
      // Terser options for better minification
      if (config.optimization.minimizer) {
        config.optimization.minimizer.forEach((minimizer) => {
          if (minimizer.constructor.name === 'TerserPlugin') {
            minimizer.options.terserOptions = {
              ...minimizer.options.terserOptions,
              compress: {
                ...minimizer.options.terserOptions?.compress,
                drop_console: true, // Remove console.log in production
              },
            };
          }
        });
      }
    }
    
    return config;
  },
};

module.exports = nextConfig;
