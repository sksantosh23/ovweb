import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Training & Corporate Education Programs | OMNIVERITY',
  description: 'Upskill your workforce with comprehensive AI training, technical certifications, and leadership development programs. Custom workshops and online learning.',
  keywords: 'AI training, corporate training, technical training, workforce development, certification programs, leadership training',
  
  openGraph: {
    title: 'AI Training & Education Programs',
    description: 'Empower your team with world-class AI training and technical education.',
    url: 'https://omniverity.com/services/ai-training',
    siteName: 'OMNIVERITY',
    type: 'website',
  },
  
  alternates: {
    canonical: 'https://omniverity.com/services/ai-training',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}