import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Strategy | OMNIVERITY',
  description: 'Build a working AI Strategy',
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}