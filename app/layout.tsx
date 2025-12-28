import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Metadata, Viewport } from 'next';
import ClientSecurity from '@/components/ClientSecurity';

// Fonts
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
});

// Metadata
export const metadata: Metadata = {
  metadataBase: new URL('https://omniverity.com'),
  title: {
    default: 'OMNIVERITY - AI-First Enterprise Solutions',
    template: '%s | OMNIVERITY',
  },
  description: 'Transform your enterprise with cutting-edge AI solutions, cloud infrastructure, cybersecurity, and digital transformation services.',
  keywords: [
    'AI solutions',
    'enterprise AI',
    'digital transformation',
    'cloud infrastructure',
    'cybersecurity',
    'machine learning',
    'automation',
    'consulting',
  ],
  authors: [{ name: 'OMNIVERITY', url: 'https://omniverity.com' }],
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
    locale: 'en_US',
    url: 'https://omniverity.com',
    siteName: 'OMNIVERITY',
    title: 'OMNIVERITY - AI-First Enterprise Solutions',
    description: 'Transform your enterprise with cutting-edge AI solutions.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'OMNIVERITY - Enterprise AI Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OMNIVERITY - AI-First Enterprise Solutions',
    description: 'Transform your enterprise with cutting-edge AI solutions.',
    images: ['/images/twitter-image.jpg'],
    creator: '@omniverity',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
    shortcut: '/favicon-16x16.png',
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://omniverity.com',
  },
  verification: {
    google: 'your-google-verification-code',
  },
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
        
        {/* Safe area insets for notched devices */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body 
        className={`${inter.className} antialiased min-h-screen bg-slate-900 text-white selection:bg-purple-500/30 selection:text-white`}
        suppressHydrationWarning
      >
        {/* Skip Navigation Link for Accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-purple-600 focus:text-white focus:rounded-lg focus:outline-none"
        >
          Skip to main content
        </a>
        
        {/* Client-side security component */}
        <ClientSecurity />
        
        {/* Main content */}
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        
        {/* Noscript fallback */}
        <noscript>
          <div className="fixed inset-0 bg-slate-900 flex items-center justify-center z-[9999]">
            <div className="text-center p-8">
              <h1 className="text-2xl font-bold text-white mb-4">JavaScript Required</h1>
              <p className="text-gray-400">
                Please enable JavaScript to use this application.
              </p>
            </div>
          </div>
        </noscript>
      </body>
    </html>
  );
}
