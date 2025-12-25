import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Transformation Consulting & Strategy | OMNIVERITY',
  description: 'Navigate digital disruption with comprehensive transformation strategies. From assessment to implementation, accelerate your digital journey with expert guidance.',
  keywords: 'digital transformation, digital strategy, transformation consulting, change management, digital innovation, modernization',
  
  openGraph: {
    title: 'Digital Transformation Consulting',
    description: 'Transform your business for the digital age with proven strategies and expertise.',
    url: 'https://omniverity.com/services/digital-transformation',
    siteName: 'OMNIVERITY',
    type: 'website',
  },
  
  alternates: {
    canonical: 'https://omniverity.com/services/digital-transformation',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}