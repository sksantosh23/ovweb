// Save as: /app/services/ai-solutions/layout.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Solutions & Machine Learning Services | OMNIVERITY',
  description: 'Transform your business with enterprise AI solutions including machine learning, NLP, computer vision, and deep learning. Get expert AI consulting and implementation.',
  keywords: 'AI solutions, machine learning, artificial intelligence, NLP, computer vision, deep learning, AI consulting, enterprise AI, AI implementation, predictive analytics',
  
  // Open Graph
  openGraph: {
    title: 'AI Solutions & Machine Learning Services',
    description: 'Transform your business with enterprise AI solutions including machine learning, NLP, computer vision, and deep learning.',
    url: 'https://omniverity.com/services/ai-solutions',
    siteName: 'OMNIVERITY',
    type: 'website',
    images: [
      {
        url: '/images/ai-solutions-og.png', // Add your OG image
        width: 1200,
        height: 630,
        alt: 'OMNIVERITY AI Solutions',
      },
    ],
  },
  
  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'AI Solutions & Machine Learning Services',
    description: 'Enterprise AI solutions for business transformation',
    images: ['/images/ai-solutions-og.png'],
  },
  
  // Other metadata
  alternates: {
    canonical: 'https://omniverity.com/services/ai-solutions',
  },
  
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
};

export default function AISolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}