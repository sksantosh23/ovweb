/**
 * Structured Data Components (JSON-LD)
 * 
 * These components generate Schema.org structured data for SEO.
 * JSON-LD is the preferred format by Google.
 * 
 * @see https://developers.google.com/search/docs/appearance/structured-data
 */

// Site configuration - should match layout.tsx
const SITE_CONFIG = {
  name: 'OMNIVERITY',
  legalName: 'OMNIVERITY Inc.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://omniverity.com',
  logo: '/images/logo.png',
  description: 'Transform your enterprise with cutting-edge AI solutions, cloud infrastructure, cybersecurity, and digital transformation services.',
  foundingDate: '2020',
  email: 'info@omniverity.com',
  phone: '+1-234-567-890',
  address: {
    streetAddress: '123 Enterprise Way',
    addressLocality: 'San Francisco',
    addressRegion: 'CA',
    postalCode: '94105',
    addressCountry: 'US',
  },
  social: {
    linkedin: 'https://linkedin.com/company/omniverity',
    twitter: 'https://twitter.com/omniverity',
    facebook: 'https://facebook.com/omniverity',
  },
};

/**
 * Organization Schema
 * Helps Google understand your organization and may appear in Knowledge Panel
 */
export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_CONFIG.url}/#organization`,
    name: SITE_CONFIG.name,
    legalName: SITE_CONFIG.legalName,
    url: SITE_CONFIG.url,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_CONFIG.url}${SITE_CONFIG.logo}`,
      width: 512,
      height: 512,
    },
    description: SITE_CONFIG.description,
    foundingDate: SITE_CONFIG.foundingDate,
    email: SITE_CONFIG.email,
    telephone: SITE_CONFIG.phone,
    address: {
      '@type': 'PostalAddress',
      ...SITE_CONFIG.address,
    },
    sameAs: [
      SITE_CONFIG.social.linkedin,
      SITE_CONFIG.social.twitter,
      SITE_CONFIG.social.facebook,
    ].filter(Boolean),
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: SITE_CONFIG.phone,
        contactType: 'customer service',
        email: SITE_CONFIG.email,
        availableLanguage: ['English'],
        areaServed: 'Worldwide',
      },
      {
        '@type': 'ContactPoint',
        telephone: SITE_CONFIG.phone,
        contactType: 'sales',
        email: 'sales@omniverity.com',
        availableLanguage: ['English'],
        areaServed: 'Worldwide',
      },
    ],
    // Areas of expertise - helps with E-E-A-T
    knowsAbout: [
      'Artificial Intelligence',
      'Machine Learning',
      'Cloud Infrastructure',
      'Cybersecurity',
      'Digital Transformation',
      'Enterprise Software',
      'Business Intelligence',
      'Automation',
      'Data Analytics',
      'IoT Solutions',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * WebSite Schema with Sitelinks Search Box
 * Enables sitelinks search box in Google results
 */
export function WebsiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_CONFIG.url}/#website`,
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    publisher: {
      '@id': `${SITE_CONFIG.url}/#organization`,
    },
    inLanguage: 'en-US',
    // Sitelinks Search Box - requires site search to be implemented
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_CONFIG.url}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Breadcrumb Schema
 * Use on inner pages to show navigation path
 */
interface BreadcrumbItem {
  name: string;
  url: string;
}

export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_CONFIG.url}${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Service Schema
 * Use on service pages to describe offerings
 */
interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  image?: string;
  provider?: string;
  areaServed?: string;
  serviceType?: string;
}

export function ServiceSchema({
  name,
  description,
  url,
  image,
  provider = SITE_CONFIG.name,
  areaServed = 'Worldwide',
  serviceType,
}: ServiceSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: url.startsWith('http') ? url : `${SITE_CONFIG.url}${url}`,
    image: image ? (image.startsWith('http') ? image : `${SITE_CONFIG.url}${image}`) : undefined,
    provider: {
      '@type': 'Organization',
      name: provider,
      '@id': `${SITE_CONFIG.url}/#organization`,
    },
    areaServed,
    serviceType,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * FAQ Schema
 * Use on pages with FAQ sections for rich snippets
 */
interface FAQItem {
  question: string;
  answer: string;
}

export function FAQSchema({ items }: { items: FAQItem[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Article Schema
 * Use on blog posts and articles
 */
interface ArticleSchemaProps {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author: {
    name: string;
    url?: string;
  };
  section?: string;
  keywords?: string[];
}

export function ArticleSchema({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
  author,
  section,
  keywords,
}: ArticleSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url: url.startsWith('http') ? url : `${SITE_CONFIG.url}${url}`,
    image: {
      '@type': 'ImageObject',
      url: image.startsWith('http') ? image : `${SITE_CONFIG.url}${image}`,
      width: 1200,
      height: 630,
    },
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Person',
      name: author.name,
      url: author.url,
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${SITE_CONFIG.url}/#organization`,
      name: SITE_CONFIG.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_CONFIG.url}${SITE_CONFIG.logo}`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url.startsWith('http') ? url : `${SITE_CONFIG.url}${url}`,
    },
    articleSection: section,
    keywords: keywords?.join(', '),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Product Schema
 * Use on product pages
 */
interface ProductSchemaProps {
  name: string;
  description: string;
  image: string;
  url: string;
  brand?: string;
  sku?: string;
  offers?: {
    price: number;
    priceCurrency: string;
    availability: 'InStock' | 'OutOfStock' | 'PreOrder';
  };
  rating?: {
    ratingValue: number;
    reviewCount: number;
  };
}

export function ProductSchema({
  name,
  description,
  image,
  url,
  brand = SITE_CONFIG.name,
  sku,
  offers,
  rating,
}: ProductSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    image: image.startsWith('http') ? image : `${SITE_CONFIG.url}${image}`,
    url: url.startsWith('http') ? url : `${SITE_CONFIG.url}${url}`,
    brand: {
      '@type': 'Brand',
      name: brand,
    },
    sku,
    offers: offers
      ? {
          '@type': 'Offer',
          price: offers.price,
          priceCurrency: offers.priceCurrency,
          availability: `https://schema.org/${offers.availability}`,
          seller: {
            '@type': 'Organization',
            name: SITE_CONFIG.name,
          },
        }
      : undefined,
    aggregateRating: rating
      ? {
          '@type': 'AggregateRating',
          ratingValue: rating.ratingValue,
          reviewCount: rating.reviewCount,
          bestRating: 5,
          worstRating: 1,
        }
      : undefined,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * LocalBusiness Schema
 * Use if you have physical locations
 */
interface LocalBusinessSchemaProps {
  name: string;
  description: string;
  image?: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo?: {
    latitude: number;
    longitude: number;
  };
  telephone?: string;
  openingHours?: string[];
  priceRange?: string;
}

export function LocalBusinessSchema({
  name,
  description,
  image,
  address,
  geo,
  telephone,
  openingHours,
  priceRange,
}: LocalBusinessSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_CONFIG.url}/#localbusiness`,
    name,
    description,
    image: image ? (image.startsWith('http') ? image : `${SITE_CONFIG.url}${image}`) : undefined,
    url: SITE_CONFIG.url,
    telephone,
    priceRange,
    address: {
      '@type': 'PostalAddress',
      ...address,
    },
    geo: geo
      ? {
          '@type': 'GeoCoordinates',
          latitude: geo.latitude,
          longitude: geo.longitude,
        }
      : undefined,
    openingHoursSpecification: openingHours?.map((hours) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: hours,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * SoftwareApplication Schema
 * Use for your software products like eHP, OIMS, PayNet, etc.
 */
interface SoftwareApplicationSchemaProps {
  name: string;
  description: string;
  url: string;
  image?: string;
  applicationCategory: string;
  operatingSystem?: string;
  offers?: {
    price: number | string;
    priceCurrency: string;
  };
  rating?: {
    ratingValue: number;
    reviewCount: number;
  };
}

export function SoftwareApplicationSchema({
  name,
  description,
  url,
  image,
  applicationCategory,
  operatingSystem = 'Web Browser',
  offers,
  rating,
}: SoftwareApplicationSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    description,
    url: url.startsWith('http') ? url : `${SITE_CONFIG.url}${url}`,
    image: image ? (image.startsWith('http') ? image : `${SITE_CONFIG.url}${image}`) : undefined,
    applicationCategory,
    operatingSystem,
    offers: offers
      ? {
          '@type': 'Offer',
          price: offers.price,
          priceCurrency: offers.priceCurrency,
        }
      : undefined,
    aggregateRating: rating
      ? {
          '@type': 'AggregateRating',
          ratingValue: rating.ratingValue,
          reviewCount: rating.reviewCount,
          bestRating: 5,
          worstRating: 1,
        }
      : undefined,
    author: {
      '@type': 'Organization',
      '@id': `${SITE_CONFIG.url}/#organization`,
      name: SITE_CONFIG.name,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Homepage Combined Schema
 * Combines multiple schemas for the homepage
 */
export function HomepageSchema() {
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SITE_CONFIG.url}/#webpage`,
    url: SITE_CONFIG.url,
    name: 'OMNIVERITY - AI-First Enterprise Solutions',
    description: SITE_CONFIG.description,
    isPartOf: {
      '@id': `${SITE_CONFIG.url}/#website`,
    },
    about: {
      '@id': `${SITE_CONFIG.url}/#organization`,
    },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: `${SITE_CONFIG.url}/images/og-image.jpg`,
    },
    datePublished: '2020-01-01',
    dateModified: new Date().toISOString().split('T')[0],
    inLanguage: 'en-US',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
    />
  );
}
