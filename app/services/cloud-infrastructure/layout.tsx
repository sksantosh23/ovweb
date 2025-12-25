import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cloud Infrastructure Services | Migration & DevOps | OMNIVERITY',
  description: 'Enterprise cloud infrastructure solutions including cloud migration, hybrid cloud, multi-cloud strategy, and DevOps. AWS, Azure, and Google Cloud certified experts.',
  keywords: 'cloud infrastructure, cloud migration, AWS, Azure, Google Cloud, hybrid cloud, multi-cloud, cloud DevOps, cloud consulting',
  
  openGraph: {
    title: 'Cloud Infrastructure Services',
    description: 'Enterprise cloud solutions and migration services with AWS, Azure, GCP expertise.',
    url: 'https://omniverity.com/services/cloud-infrastructure',
    siteName: 'OMNIVERITY',
    type: 'website',
  },
  
  alternates: {
    canonical: 'https://omniverity.com/services/cloud-infrastructure',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}