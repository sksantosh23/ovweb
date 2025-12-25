import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Technology Services & Solutions | OMNIVERITY',
  description: 'Comprehensive enterprise technology services including AI, cloud infrastructure, cybersecurity, data analytics, and digital transformation solutions.',
  keywords: 'technology services, IT services, enterprise solutions, AI services, cloud services',
  
  openGraph: {
    title: 'OMNIVERITY Technology Services',
    description: 'End-to-end enterprise technology solutions and consulting services.',
    url: 'https://omniverity.com/services',
    siteName: 'OMNIVERITY',
    type: 'website',
  },
  
  alternates: {
    canonical: 'https://omniverity.com/services',
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}