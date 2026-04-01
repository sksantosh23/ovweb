import { Metadata } from 'next';
import IndustriesPageClient from '@/components/pages/IndustriesPageClient';
import { BreadcrumbSchema } from '@/components/seo/StructuredData';

/**
 * Industries Page - Server Component
 * 
 * Handles SEO metadata and structured data.
 * Client interactivity is in IndustriesPageClient.
 */

export const metadata: Metadata = {
  title: 'Industry Solutions - AI & Digital Transformation by Sector',
  description: 'OMNIVERITY delivers specialized AI solutions for Healthcare, Financial Services, Manufacturing, Retail, and more. Industry-specific expertise with proven results.',
  keywords: [
    'healthcare AI solutions',
    'financial services AI',
    'manufacturing automation',
    'retail technology',
    'industry digital transformation',
    'enterprise AI by sector',
    'vertical AI solutions',
    'industry-specific technology',
  ],
  alternates: {
    canonical: 'https://omniverity.com/industries',
  },
  openGraph: {
    title: 'Industry Solutions | OMNIVERITY',
    description: 'Specialized AI and digital transformation solutions tailored for your industry.',
    url: 'https://omniverity.com/industries',
    type: 'website',
    images: [
      {
        url: '/images/og-industries.jpg',
        width: 1200,
        height: 630,
        alt: 'OMNIVERITY Industry Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Industry Solutions | OMNIVERITY',
    description: 'Specialized AI and digital transformation solutions tailored for your industry.',
    images: ['/images/twitter-industries.jpg'],
  },
};

// Breadcrumb data for structured data
const breadcrumbs = [
  { name: 'Home', url: '/' },
  { name: 'Industries', url: '/industries' },
];

export default function IndustriesPage() {
  return (
    <>
      {/* Structured Data */}
      <BreadcrumbSchema items={breadcrumbs} />
      
      {/* Page Content */}
      <IndustriesPageClient />
    </>
  );
}
