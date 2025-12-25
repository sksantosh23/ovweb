import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IoT Solutions | Industrial IoT & Smart Systems | OMNIVERITY',
  description: 'Connect and control everything with enterprise IoT solutions. Industrial IoT, smart cities, connected healthcare, and real-time monitoring with 10B+ devices.',
  keywords: 'IoT solutions, Industrial IoT, IIoT, smart cities, connected devices, IoT platform, sensor networks, edge computing',
  
  openGraph: {
    title: 'Enterprise IoT Solutions',
    description: 'Connect everything with intelligent IoT systems. Industrial IoT and smart infrastructure.',
    url: 'https://omniverity.com/services/iot-solutions',
    siteName: 'OMNIVERITY',
    type: 'website',
  },
  
  alternates: {
    canonical: 'https://omniverity.com/services/iot-solutions',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
