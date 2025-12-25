import Head from 'next/head';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  noindex?: boolean;
  nofollow?: boolean;
  twitterHandle?: string;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  jsonLd?: any;
  alternates?: {
    languages?: { [key: string]: string };
    canonical?: string;
  };
}

export function SEOHead({ 
  title = 'Omniverity - Enterprise Technology Solutions',
  description = 'Transform your business with Omniverity. Leading provider of AI, Cloud, Cybersecurity, IoT, and Digital Transformation solutions. Trusted by Fortune 500 companies worldwide.',
  keywords = 'AI solutions, machine learning, cloud infrastructure, cybersecurity, digital transformation, IoT, data analytics, enterprise software, technology consulting, automation, RPA, business intelligence',
  ogImage = 'https://omniverity.com/og-image.png',
  ogType = 'website',
  canonicalUrl,
  author = 'Omniverity',
  publishedTime,
  modifiedTime,
  noindex = false,
  nofollow = false,
  twitterHandle = '@omniverity',
  twitterCard = 'summary_large_image',
  jsonLd,
  alternates
}: SEOProps) {
  
  // Generate the full title with branding
  const fullTitle = title === 'Omniverity - Enterprise Technology Solutions' 
    ? title 
    : `${title} | Omniverity - Enterprise Technology Solutions`;

  // Default JSON-LD structured data for organization
  const defaultJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Omniverity",
    "description": "Leading provider of enterprise technology solutions including AI, Cloud, Cybersecurity, and Digital Transformation",
    "url": "https://omniverity.com",
    "logo": "https://omniverity.com/logo.png",
    "sameAs": [
      "https://www.linkedin.com/company/omniverity",
      "https://twitter.com/omniverity",
      "https://www.facebook.com/omniverity",
      "https://github.com/omniverity"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-234-567-890",
      "contactType": "customer service",
      "email": "support@omniverity.com",
      "availableLanguage": ["English", "Spanish", "French", "German"],
      "areaServed": "Worldwide"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Technology Drive",
      "addressLocality": "Innovation City",
      "addressRegion": "IC",
      "postalCode": "12345",
      "addressCountry": "US"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1250",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  // Merge custom JSON-LD with default
  const structuredData = jsonLd || defaultJsonLd;

  // Generate robots meta tag
  const robotsContent = `${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'},max-image-preview:large,max-snippet:-1,max-video-preview:-1`;

  return (
    <Head>
      {/* Essential Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      
      {/* Robots and Crawling */}
      <meta name="robots" content={robotsContent} />
      <meta name="googlebot" content={robotsContent} />
      <meta name="bingbot" content={robotsContent} />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:url" content={canonicalUrl || 'https://omniverity.com'} />
      <meta property="og:site_name" content="Omniverity" />
      <meta property="og:locale" content="en_US" />
      
      {/* Article Meta Tags (for blog posts) */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {author && <meta property="article:author" content={author} />}
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={title} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="application-name" content="Omniverity" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="OMNIVERITY" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content="#000000" />
      
      {/* Performance and Security Headers */}
      <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      <meta name="referrer" content="origin-when-cross-origin" />
      
      {/* Geo Tags for Local SEO */}
      <meta name="geo.region" content="US" />
      <meta name="geo.placename" content="Innovation City" />
      <meta name="geo.position" content="40.7128;-74.0060" />
      <meta name="ICBM" content="40.7128, -74.0060" />
      
      {/* Language Alternates */}
      {alternates?.languages && Object.entries(alternates.languages).map(([lang, url]) => (
        <link key={lang} rel="alternate" hrefLang={lang} href={url} />
      ))}
      
      {/* Preconnect for Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      
      {/* Favicons and Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
      
      {/* RSS Feed */}
      <link rel="alternate" type="application/rss+xml" title="Omniverity Blog RSS" href="/rss.xml" />
      
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Additional Schema for Services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Technology Solutions",
            "provider": {
              "@type": "Organization",
              "name": "Omniverity"
            },
            "offers": [
              {
                "@type": "Offer",
                "name": "AI & Machine Learning Solutions",
                "description": "Custom AI models and machine learning implementations"
              },
              {
                "@type": "Offer",
                "name": "Cloud Infrastructure",
                "description": "Scalable cloud solutions and migration services"
              },
              {
                "@type": "Offer",
                "name": "Cybersecurity",
                "description": "Comprehensive security solutions and compliance"
              },
              {
                "@type": "Offer",
                "name": "Digital Transformation",
                "description": "End-to-end digital transformation consulting"
              }
            ],
            "areaServed": {
              "@type": "Place",
              "name": "Worldwide"
            }
          })
        }}
      />
      
      {/* FAQ Schema for better search results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What services does Omniverity offer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Omniverity offers comprehensive enterprise technology solutions including AI & Machine Learning, Cloud Infrastructure, Cybersecurity, Data Analytics, IoT Solutions, Digital Transformation, and Strategic Consulting services."
                }
              },
              {
                "@type": "Question",
                "name": "Which industries does Omniverity serve?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We serve various industries including Finance, Healthcare, Manufacturing, Retail, Government, Education, Energy, and Logistics sectors with tailored technology solutions."
                }
              },
              {
                "@type": "Question",
                "name": "How can I get started with Omniverity?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can get started by contacting our team through our website contact form, calling us at +1-234-567-890, or emailing support@omniverity.com for a free consultation."
                }
              }
            ]
          })
        }}
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://omniverity.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Services",
                "item": "https://omniverity.com/services"
              }
            ]
          })
        }}
      />
    </Head>
  );
}

// SEO utility functions
export function generateMetaTags(page: string): SEOProps {
  const metaTags: { [key: string]: SEOProps } = {
    home: {
      title: 'Omniverity - Enterprise Technology Solutions',
      description: 'Transform your business with Omniverity . Leading provider of AI, Cloud, Cybersecurity, IoT, and Digital Transformation solutions. Trusted by Fortune 500 companies worldwide.',
      keywords: 'AI solutions, enterprise technology, cloud computing, digital transformation, cybersecurity, IoT, business intelligence',
      canonicalUrl: 'https://omniverity.com'
    },
    services: {
      title: 'Technology Services',
      description: 'Comprehensive enterprise technology services including AI, Cloud Infrastructure, Cybersecurity, Data Analytics, and Digital Transformation solutions.',
      keywords: 'technology services, IT consulting, AI services, cloud services, cybersecurity services, digital transformation services',
      canonicalUrl: 'https://omniverity.com/services'
    },
    about: {
      title: 'About Us',
      description: 'Learn about Omniverity - Your trusted partner in enterprise technology transformation with 20+ years of experience serving Fortune 500 companies.',
      keywords: 'about omniverity, technology company, enterprise solutions provider, IT consulting firm',
      canonicalUrl: 'https://omniverity.com/about'
    },
    contact: {
      title: 'Contact Us',
      description: 'Get in touch with Omniverity  for enterprise technology solutions. Free consultation available.',
      keywords: 'contact omniverity, technology consultation, enterprise solutions contact',
      canonicalUrl: 'https://omniverity.com/contact'
    }
  };

  return metaTags[page] || metaTags.home;
}

// Export default for backward compatibility
export default SEOHead;