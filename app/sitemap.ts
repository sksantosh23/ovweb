import { MetadataRoute } from 'next';

/**
 * Dynamic Sitemap Generator
 * 
 * This generates an XML sitemap for search engines.
 * It includes:
 * - Static pages with appropriate priorities
 * - Dynamic pages (services, products, blog posts, etc.)
 * 
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
 */

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://omniverity.com';

// Define service slugs for service pages
const services = [
  'ai-solutions',
  'automation',
  'cloud-infrastructure',
  'cybersecurity',
  'data-analytics',
  'digital-transformation',
  'consulting',
  'iot-solutions',
  'ai-training',
];

// Define product slugs
const products = [
  'ehp',
  'oims',
  'paynet',
  'clickconnect',
  'blok',
];

// Define industry slugs
const industries = [
  'healthcare',
  'finance',
  'manufacturing',
  'retail',
  'logistics',
  'education',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString();
  
  // Static pages - high priority
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/services`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/products`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/industries`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/careers`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/case-studies`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/roi-calculator`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];

  // Service pages
  const servicePages: MetadataRoute.Sitemap = services.map((slug) => ({
    url: `${SITE_URL}/services/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Product pages
  const productPages: MetadataRoute.Sitemap = products.map((slug) => ({
    url: `${SITE_URL}/products/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Industry pages (if you have individual industry pages)
  const industryPages: MetadataRoute.Sitemap = industries.map((slug) => ({
    url: `${SITE_URL}/industries/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Legal pages - low priority
  const legalPages: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/terms-of-service`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/cookie-policy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // Combine all pages
  return [
    ...staticPages,
    ...servicePages,
    ...productPages,
    ...industryPages,
    ...legalPages,
  ];
}

/**
 * DYNAMIC CONTENT EXAMPLE
 * 
 * If you have dynamic content (e.g., blog posts from a CMS or database),
 * you can fetch and add them like this:
 * 
 * async function getBlogPosts() {
 *   const posts = await prisma.post.findMany({
 *     where: { published: true },
 *     select: { slug: true, updatedAt: true },
 *   });
 *   
 *   return posts.map((post) => ({
 *     url: `${SITE_URL}/blog/${post.slug}`,
 *     lastModified: post.updatedAt,
 *     changeFrequency: 'weekly' as const,
 *     priority: 0.6,
 *   }));
 * }
 * 
 * export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
 *   const blogPosts = await getBlogPosts();
 *   return [...staticPages, ...blogPosts];
 * }
 */
