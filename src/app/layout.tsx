import type { Metadata } from 'next';
import { Montserrat, Outfit } from 'next/font/google';
import './globals.css';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'MEDSS Training and Consultancy',
    template: '%s | MEDSS Training and Consultancy',
  },
  description:
    'MEDSS Training and Consultancy Sdn. Bhd. delivers HRDC claimable training, HR consulting, ISO management systems, security consultancy and OSH monitoring in Malaysia.',
  metadataBase: new URL('https://www.medss.com.my'),
  openGraph: {
    title: 'MEDSS Training and Consultancy',
    description:
      'Professional HRDC claimable training, HR consulting, ISO consulting, security advisory and OSH monitoring services for Malaysian organisations.',
    type: 'website',
    url: 'https://www.medss.com.my/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${outfit.variable}`}>
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
