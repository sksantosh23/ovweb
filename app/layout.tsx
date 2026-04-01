import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Metadata, Viewport } from 'next';
import ClientSecurity from '@/components/ClientSecurity';
import { OrganizationSchema, WebsiteSchema } from '@/components/seo/StructuredData';

// Fonts - optimized with display swap for better LCP
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
  preload: true,
});

// Site configuration for reuse
export const siteConfig = {
  name: 'OMNIVERITY',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://omniverity.com',
  description: 'Transform your enterprise with cutting-edge AI solutions, cloud infrastructure, cybersecurity, and digital transformation services.',
  twitter: '@omniverity',
  locale: 'en_US',
};

// Metadata
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'OMNIVERITY - AI-First Enterprise Solutions',
    template: '%s | OMNIVERITY',
  },
  description: siteConfig.description,
  keywords: [
    'AI solutions',
    'enterprise AI',
    'digital transformation',
    'cloud infrastructure',
    'cybersecurity',
    'machine learning',
    'automation',
    'consulting',
    'enterprise technology',
    'business intelligence',
  ],
  authors: [{ name: 'OMNIVERITY', url: siteConfig.url }],
  creator: 'OMNIVERITY',
  publisher: 'OMNIVERITY',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: 'OMNIVERITY - AI-First Enterprise Solutions',
    description: 'Transform your enterprise with cutting-edge AI solutions, cloud infrastructure, cybersecurity, and digital transformation services.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'OMNIVERITY - Enterprise AI Solutions',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OMNIVERITY - AI-First Enterprise Solutions',
    description: 'Transform your enterprise with cutting-edge AI solutions.',
    images: ['/images/twitter-image.jpg'],
    creator: siteConfig.twitter,
    site: siteConfig.twitter,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon-16x16.png',
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: siteConfig.url,
  },
  verification: {
    google: 'your-google-verification-code',
    // Add other verifications as needed
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  category: 'technology',
  classification: 'Business',
};

// Viewport configuration for mobile
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  colorScheme: 'dark light',
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="en" 
      className={`${inter.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch for external resources */}
        <link rel="dns-prefetch" href="https://api.omniverity.com" />
        
        {/* Prevent phone number detection on iOS */}
        <meta name="format-detection" content="telephone=no" />
        
        {/* Disable auto-translate */}
        <meta name="google" content="notranslate" />
        
        {/* Additional SEO meta tags */}
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Structured Data - Organization Schema */}
        <OrganizationSchema />
        
        {/* Structured Data - Website Schema with Sitelinks Search */}
        <WebsiteSchema />
      </head>
      <body 
        className={`${inter.className} antialiased min-h-screen bg-slate-900 text-white selection:bg-purple-500/30 selection:text-white`}
        suppressHydrationWarning
      >
        {/* Skip Navigation Link for Accessibility (WCAG 2.4.1) */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-purple-600 focus:text-white focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-slate-900"
        >
          Skip to main content
        </a>
        
        {/* Client-side security component */}
        <ClientSecurity />
        
        {/* Main content wrapper with proper landmark */}
        <div id="__next" className="min-h-screen flex flex-col">
          {children}
        </div>
        
        {/* Noscript fallback */}
        <noscript>
          <div className="fixed inset-0 bg-slate-900 flex items-center justify-center z-[9999]">
            <div className="text-center p-8 max-w-md">
              <h1 className="text-2xl font-bold text-white mb-4">JavaScript Required</h1>
              <p className="text-gray-400 mb-4">
                Please enable JavaScript to use this application.
              </p>
              <p className="text-gray-500 text-sm">
                OMNIVERITY requires JavaScript for interactive features, but our content is still accessible to search engines.
              </p>
            </div>
          </div>
        </noscript>
      </body>
    </html>
  );
}
