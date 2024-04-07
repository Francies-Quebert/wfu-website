import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Layout from '@/components/layout/layout';
import { Bonheur_Royale, Poppins } from 'next/font/google';
import Head from 'next/head';

const bonheur_royale = Bonheur_Royale({
  weight: ['400'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-bonheur-royale',
  preload: true,
});

const poppins = Poppins({
  weight: ['100', '200', '400', '600', '800'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-poppins',
  preload: true,
});

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Larson & Muriel',
  description: 'Wedding of Larson and Muriel',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bonheur_royale.variable} ${poppins.variable}`}
    >
      <body className={inter.className}>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
