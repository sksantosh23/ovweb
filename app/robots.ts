import { MetadataRoute } from 'next';

/**
 * Dynamic Robots.txt Generator
 * 
 * Controls how search engines crawl your site.
 * 
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
 */

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://omniverity.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Rules for all legitimate search engines
        userAgent: '*',
        allow: '/',
        disallow: [
          // Private/admin areas
          '/api/',
          '/admin/',
          '/dashboard/',
          '/account/',
          '/settings/',
          
          // Authentication pages (no value in indexing)
          '/login',
          '/signup',
          '/register',
          '/forgot-password',
          '/reset-password',
          
          // Utility pages
          '/search',
          '/404',
          '/500',
          
          // Preview/draft content
          '/preview/',
          '/draft/',
          
          // User-generated content that shouldn't be indexed
          '/user/',
          '/profile/',
        ],
      },
      {
        // Block AI training crawlers (optional - remove if you want to allow)
        userAgent: 'GPTBot',
        disallow: '/',
      },
      {
        userAgent: 'ChatGPT-User',
        disallow: '/',
      },
      {
        userAgent: 'CCBot',
        disallow: '/',
      },
      {
        userAgent: 'anthropic-ai',
        disallow: '/',
      },
      {
        userAgent: 'Google-Extended',
        disallow: '/',
      },
      {
        // Block aggressive/problematic crawlers
        userAgent: 'AhrefsBot',
        // Allow Ahrefs but with crawl-delay would go here if supported
        allow: '/',
      },
      {
        userAgent: 'SemrushBot',
        allow: '/',
      },
    ],
    
    // Reference to sitemap
    sitemap: `${SITE_URL}/sitemap.xml`,
    
    // Optional: Add host directive (some crawlers use this)
    host: SITE_URL,
  };
}

/**
 * NOTES ON ROBOTS.TXT BEST PRACTICES:
 * 
 * 1. DO index:
 *    - Homepage and main content pages
 *    - Service/product pages
 *    - Blog posts and articles
 *    - Contact and about pages
 * 
 * 2. DON'T index:
 *    - Admin areas (/admin/, /dashboard/)
 *    - API endpoints (/api/)
 *    - Authentication pages (/login, /signup)
 *    - User-specific pages (/account/, /profile/)
 *    - Search results pages (/search)
 *    - Error pages (/404, /500)
 *    - Preview/draft content
 *    - Pagination parameters (handled by canonical URLs instead)
 * 
 * 3. AI Crawlers:
 *    - GPTBot (OpenAI) - blocks training data collection
 *    - ChatGPT-User - blocks ChatGPT browsing
 *    - CCBot (Common Crawl) - blocks training datasets
 *    - anthropic-ai - blocks Anthropic training
 *    - Google-Extended - blocks Google AI training (but allows Search)
 * 
 *    Remove these blocks if you WANT your content used for AI training.
 * 
 * 4. SEO Crawlers:
 *    - AhrefsBot, SemrushBot, MozBot, etc.
 *    - Generally safe to allow for competitive analysis tools
 *    - Can add Crawl-delay if they're too aggressive (not supported by all)
 * 
 * 5. Sitemap:
 *    - Always reference your sitemap
 *    - Helps crawlers discover all your pages
 *    - Also submit directly to Google Search Console
 */
