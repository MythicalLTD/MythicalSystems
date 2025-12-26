import { HomeLayout } from '@/components/layout/home';
import { baseOptions } from '@/lib/layout.shared';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MythicalSystems - Open Source Hosting Solutions & Developer Tools',
  description: 'MythicalSystems provides innovative open-source solutions for developers and hosting providers. Explore FeatherPanel, MythicalDash, and more free, secure, and high-performance tools.',
  keywords: [
    'MythicalSystems',
    'open source',
    'hosting panel',
    'FeatherPanel',
    'MythicalDash',
    'Pterodactyl Panel',
    'game server hosting',
    'developer tools',
    'free hosting software',
    'server management',
    'control panel',
    'hosting provider tools',
    'MythicalSystems LTD',
    'billing software',
    'hosting automation',
    'client management',
    'open-source infrastructure',
    'web hosting tools',
    'game server management',
    'MythicalSystems documentation',
    'MythicalSystems API',
    'FeatherPanel setup',
    'MythicalDash themes',
    'open-source hosting solutions',
  ],
  authors: [{ name: 'MythicalSystems LTD' }],
  creator: 'MythicalSystems LTD',
  publisher: 'MythicalSystems LTD',
  metadataBase: new URL('https://docs.mythical.systems'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://docs.mythical.systems',
    title: 'MythicalSystems - Open Source Hosting Solutions & Developer Tools',
    description: 'Innovative open-source solutions for developers and hosting providers. Free, secure, and high-performance tools including FeatherPanel and MythicalDash.',
    siteName: 'MythicalSystems',
    images: [
      {
        url: 'https://github.com/mythicalltd.png',
        width: 1200,
        height: 630,
        alt: 'MythicalSystems Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MythicalSystems - Open Source Hosting Solutions',
    description: 'Innovative open-source solutions for developers and hosting providers.',
    images: ['https://github.com/mythicalltd.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return <HomeLayout {...baseOptions()}>{children}</HomeLayout>;
}
