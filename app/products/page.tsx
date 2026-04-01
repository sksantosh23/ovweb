import { Metadata } from 'next';
import ProductsPortalClient from '@/components/pages/ProductsPortalClient';
import { BreadcrumbSchema, SoftwareApplicationSchema } from '@/components/seo/StructuredData';

/**
 * Products Portal Page - Server Component
 * 
 * Handles SEO metadata and structured data for the products login portal.
 * Client interactivity (login form, product selection) is in ProductsPortalClient.
 */

export const metadata: Metadata = {
  title: 'Enterprise Products Portal - Secure Access to AI Solutions',
  description: 'Access OMNIVERITY enterprise AI products including eHP (Enterprise Health Platform), OIMS (Incident Management), PayNet, ClickConnect, and BloK blockchain solutions. Secure three-factor authentication.',
  keywords: [
    'enterprise AI products',
    'eHP enterprise health platform',
    'OIMS incident management',
    'PayNet payment network',
    'ClickConnect customer suite',
    'BloK blockchain',
    'enterprise software login',
    'AI solutions portal',
    'secure product access',
    'healthcare AI platform',
    'incident management software',
    'payment processing AI',
  ],
  alternates: {
    canonical: 'https://omniverity.com/products',
  },
  openGraph: {
    title: 'Enterprise Products Portal | OMNIVERITY',
    description: 'Secure access to OMNIVERITY enterprise AI products. eHP, OIMS, PayNet, ClickConnect, and BloK solutions.',
    url: 'https://omniverity.com/products',
    type: 'website',
    images: [
      {
        url: '/images/og-products.jpg',
        width: 1200,
        height: 630,
        alt: 'OMNIVERITY Enterprise Products Portal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enterprise Products Portal | OMNIVERITY',
    description: 'Secure access to OMNIVERITY enterprise AI products and solutions.',
    images: ['/images/twitter-products.jpg'],
  },
  // Prevent indexing of login page if preferred (optional)
  // robots: {
  //   index: false,
  //   follow: true,
  // },
};

// Breadcrumb data
const breadcrumbs = [
  { name: 'Home', url: '/' },
  { name: 'Products', url: '/products' },
];

// Product data for structured data
const products = [
  {
    name: 'eHP - Enterprise Health Platform',
    description: 'AI-powered healthcare platform for patient management, diagnostics, and clinical workflows.',
    applicationCategory: 'HealthcareApplication',
    operatingSystem: 'Web, iOS, Android',
  },
  {
    name: 'OIMS - Incident Management System',
    description: 'Intelligent incident management and response platform for enterprise operations.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
  },
  {
    name: 'PayNet - Payment Network',
    description: 'Secure payment processing and financial transaction management platform.',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web, API',
  },
  {
    name: 'ClickConnect - Customer Suite',
    description: 'Comprehensive customer engagement and relationship management platform.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, iOS, Android',
  },
  {
    name: 'BloK - Blockchain Kit',
    description: 'Enterprise blockchain development and deployment toolkit.',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Web, API',
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Structured Data */}
      <BreadcrumbSchema items={breadcrumbs} />
      
      {/* Add SoftwareApplication schema for each product */}
      {products.map((product, index) => (
        <SoftwareApplicationSchema
          key={index}
          name={product.name}
          description={product.description}
          applicationCategory={product.applicationCategory}
          operatingSystem={product.operatingSystem}
        />
      ))}
      
      {/* Page Content */}
      <ProductsPortalClient />
    </>
  );
}
