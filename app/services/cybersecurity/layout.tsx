import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cybersecurity Services | Threat Detection & Zero Trust | OMNIVERITY',
  description: 'Protect your business with enterprise cybersecurity solutions including threat detection, zero trust architecture, and compliance management. 24/7 security monitoring.',
  keywords: 'cybersecurity, threat detection, zero trust, security consulting, SOC, SIEM, penetration testing, security audit, compliance',
  
  openGraph: {
    title: 'Enterprise Cybersecurity Services',
    description: 'Military-grade security solutions with 24/7 threat monitoring and zero trust architecture.',
    url: 'https://omniverity.com/services/cybersecurity',
    siteName: 'OMNIVERITY',
    type: 'website',
  },
  
  alternates: {
    canonical: 'https://omniverity.com/services/cybersecurity',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}