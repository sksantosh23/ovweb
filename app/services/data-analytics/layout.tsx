import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Data Analytics Services | Business Intelligence & Big Data | OMNIVERITY',
  description: 'Transform data into insights with advanced analytics, business intelligence, predictive analytics, and big data solutions. Real-time dashboards and visualization.',
  keywords: 'data analytics, business intelligence, big data, predictive analytics, data visualization, BI consulting, real-time analytics',
  
  openGraph: {
    title: 'Data Analytics & Business Intelligence',
    description: 'Turn data into actionable insights with advanced analytics and real-time BI.',
    url: 'https://omniverity.com/services/data-analytics',
    siteName: 'OMNIVERITY',
    type: 'website',
  },
  
  alternates: {
    canonical: 'https://omniverity.com/services/data-analytics',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}