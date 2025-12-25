import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Strategic Business & Technology Consulting | OMNIVERITY',
  description: 'Expert consulting services for strategy, technology, operations, and transformation. Solve complex challenges and accelerate growth with proven methodologies.',
  keywords: 'business consulting, strategy consulting, technology consulting, management consulting, operations consulting',
  
  openGraph: {
    title: 'Strategic Business Consulting',
    description: 'Expert guidance to solve complex challenges and accelerate business growth.',
    url: 'https://omniverity.com/services/consulting',
    siteName: 'OMNIVERITY',
    type: 'website',
  },
  
  alternates: {
    canonical: 'https://omniverity.com/services/consulting',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}