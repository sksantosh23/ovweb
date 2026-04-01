import { Metadata } from 'next';
import ServicesPageClient from '@/components/pages/ServicesPageClient';
import { BreadcrumbSchema } from '@/components/seo/StructuredData';

/**
 * Services Page - Server Component
 * 
 * Handles SEO metadata and structured data.
 * Client interactivity is in ServicesPageClient.
 */

export const metadata: Metadata = {
  title: 'Enterprise Services - AI, Cloud, Cybersecurity & Digital Transformation',
  description: 'Comprehensive technology services including AI & Machine Learning, Cloud Infrastructure, Cybersecurity, Data Analytics, Process Automation, and Strategic Consulting. Transform your business with OMNIVERITY.',
  keywords: [
    'AI services',
    'machine learning consulting',
    'cloud infrastructure services',
    'cybersecurity solutions',
    'data analytics',
    'business intelligence',
    'process automation',
    'RPA services',
    'digital transformation',
    'IT consulting',
    'IoT solutions',
    'enterprise technology services',
  ],
  alternates: {
    canonical: 'https://omniverity.com/services',
  },
  openGraph: {
    title: 'Enterprise Technology Services | OMNIVERITY',
    description: 'AI, Cloud, Cybersecurity, and Digital Transformation services for enterprises. 20+ years of expertise, Fortune 500 clients, proven results.',
    url: 'https://omniverity.com/services',
    type: 'website',
    images: [
      {
        url: '/images/og-services.jpg',
        width: 1200,
        height: 630,
        alt: 'OMNIVERITY Enterprise Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enterprise Technology Services | OMNIVERITY',
    description: 'AI, Cloud, Cybersecurity, and Digital Transformation services for enterprises.',
    images: ['/images/twitter-services.jpg'],
  },
};

// Breadcrumb data for structured data
const breadcrumbs = [
  { name: 'Home', url: '/' },
  { name: 'Services', url: '/services' },
];

export default function ServicesPage() {
  return (
    <>
      {/* Structured Data */}
      <BreadcrumbSchema items={breadcrumbs} />
      
      {/* Page Content */}
      <ServicesPageClient />
    </>
  );
}
