import { Metadata } from 'next';
import HomePageClient from '@/components/pages/HomePageClient';
import { HomepageSchema } from '@/components/seo/StructuredData';

/**
 * Homepage - Server Component
 * 
 * This server component handles:
 * - Page-specific metadata for SEO
 * - Structured data (JSON-LD)
 * - Server-rendered content
 * 
 * Client-side interactivity is handled by HomePageClient
 */

// Page-specific metadata (exported from server component)
export const metadata: Metadata = {
  title: 'OMNIVERITY - AI-First Enterprise Solutions | Digital Transformation',
  description: 'Transform your enterprise with cutting-edge AI solutions, cloud infrastructure, cybersecurity, and digital transformation services. 100+ enterprise clients, 95% success rate.',
  keywords: [
    'AI solutions',
    'enterprise AI',
    'digital transformation',
    'cloud infrastructure',
    'cybersecurity',
    'machine learning',
    'automation',
    'consulting',
    'enterprise technology solutions',
    'business intelligence',
    'data analytics',
    'IoT solutions',
  ],
  alternates: {
    canonical: 'https://omniverity.com',
  },
  openGraph: {
    title: 'OMNIVERITY - AI-First Enterprise Solutions',
    description: 'Transform your enterprise with cutting-edge AI solutions, cloud infrastructure, cybersecurity, and digital transformation services.',
    url: 'https://omniverity.com',
    type: 'website',
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
  },
};

export default function HomePage() {
  return (
    <>
      {/* Structured Data for Homepage */}
      <HomepageSchema />
      
      {/* Main Content (Client Component) */}
      <HomePageClient />
    </>
  );
}
