import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin', 'latin-ext'] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'GitHub Portfolio Generator',
    template: '%s | GitHub Portfolio Generator',
  },
  description: 'Transforme seu perfil GitHub em um portfólio profissional',
  applicationName: 'GitHub Portfolio Generator',
  keywords: ['GitHub', 'portfólio', 'desenvolvedor', 'projetos', 'Next.js', 'Tailwind'],
  authors: [{ name: 'GitHub Portfolio Generator' }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: '/',
    siteName: 'GitHub Portfolio Generator',
    title: 'GitHub Portfolio Generator',
    description: 'Transforme seu perfil GitHub em um portfólio profissional',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GitHub Portfolio Generator',
    description: 'Transforme seu perfil GitHub em um portfólio profissional',
  },
  robots: {
    index: true,
    follow: true,
  },
  themeColor: '#3B82F6',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#3B82F6',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}