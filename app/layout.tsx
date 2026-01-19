import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://cookpal.app'),
  title: {
    default: 'CookPal – Turn any recipe link into a clean, cookable recipe card',
    template: '%s | CookPal',
  },
  description:
    'Import recipes from any website, TikTok, Instagram, or YouTube into clean, easy-to-read recipe cards. Scale servings, convert units, and cook distraction-free.',
  keywords: [
    'recipe app',
    'recipe manager',
    'cooking app',
    'recipe import',
    'meal planning',
    'recipe organizer',
    'cook mode',
    'recipe card',
    'ingredient scaling',
  ],
  authors: [{ name: 'Banana Bread Labs' }],
  creator: 'Banana Bread Labs',
  publisher: 'Banana Bread Labs',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cookpal.app',
    siteName: 'CookPal',
    title: 'CookPal – Turn any recipe link into a clean, cookable recipe card',
    description:
      'Import recipes from any website, TikTok, Instagram, or YouTube into clean recipe cards. Scale servings and cook distraction-free.',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'CookPal - Clean Recipe Cards',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CookPal – Turn any recipe link into a clean, cookable recipe card',
    description:
      'Import recipes from any website, TikTok, Instagram, or YouTube into clean recipe cards. Scale servings and cook distraction-free.',
    images: ['/og-image.svg'],
    creator: '@cookpalapp',
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
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: '/favicon.png',
  },
  manifest: '/site.webmanifest',
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Banana Bread Labs',
  url: 'https://cookpal.app',
  logo: 'https://cookpal.app/favicon.png',
  sameAs: ['https://twitter.com/cookpalapp'],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'bananabreadlabs@gmail.com',
    contactType: 'customer support',
  },
}

const softwareAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'CookPal',
  operatingSystem: 'iOS',
  applicationCategory: 'LifestyleApplication',
  description:
    'Import recipes from any website, TikTok, Instagram, or YouTube into clean, easy-to-read recipe cards. Scale servings, convert units, and cook distraction-free.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    ratingCount: '1',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareAppSchema),
          }}
        />
      </head>
      <body className="font-sans">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
