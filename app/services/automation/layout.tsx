import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Intelligent Process Automation Services | RPA Solutions | OMNIVERITY',
  description: 'Streamline operations with robotic process automation (RPA), workflow automation, and intelligent automation solutions. Reduce costs by 70% with our automation services.',
  keywords: 'RPA, robotic process automation, workflow automation, intelligent automation, business process automation, automation consulting, process optimization',
  
  openGraph: {
    title: 'Intelligent Process Automation Services',
    description: 'Streamline operations with RPA and intelligent automation. Reduce costs by 70%.',
    url: 'https://omniverity.com/services/automation',
    siteName: 'OMNIVERITY',
    type: 'website',
  },
  
  alternates: {
    canonical: 'https://omniverity.com/services/automation',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
