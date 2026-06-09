import type { Metadata, Viewport } from 'next'
import { DM_Sans, Cormorant_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
})

export const viewport: Viewport = {
  themeColor: '#C9A66B',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://sk-interior.vercel.app'),

  applicationName: 'SK Interior',

  title: {
    default:
      'SK Interior | Best Interior Designer in Mumbai',
    template: '%s | SK Interior',
  },

  description:
    'Transform your home with SK Interior — premium interior design services: modular kitchen, bedroom, living room, office & turnkey renovation in Mumbai. 15+ years | 500+ projects. Free consultation.',

  keywords: [
    'interior designer in Mumbai',
    'home interior design',
    'modular kitchen',
    'bedroom interior',
    'turnkey solutions',
    'luxury interior designer',
    'best interior designer',
    'interior design company',
    'residential interior design',
    'commercial interior designer',
    'office interior design',
    'villa interior designer',
    'apartment interior design',
    'modern interior design',
    'premium home interiors',
    'interior designer near me',
    '2bhk interior design',
    '3bhk interior design',

    // Hindi
    'घर का डिज़ाइन',
    'इंटीरियर डिजाइनर',
    'रसोई का डिज़ाइन',
    'घर की सजावट',

    // Marathi
    'घरांचा डिझाइन',
    'इंटीरियर डिजाइनर',
    'घर सजावट',

    // Gujarati
    'ઘરની ડિઝાઇન',
    'ઇન્ટીરિયર ડિઝાઇનર',
    'ઘર સજાવટ',
  ],

  authors: [{ name: 'SK Interior' }],

  creator: 'SK Interior',

  publisher: 'SK Interior',

  manifest: '/site.webmanifest',

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  alternates: {
    canonical: 'https://sk-interior.vercel.app',

    languages: {
      en: 'https://sk-interior.vercel.app',
      'hi-IN': 'https://sk-interior.vercel.app/hi',
      'mr-IN': 'https://sk-interior.vercel.app/mr',
    },
  },

  openGraph: {
    title:
      'SK Interior | Best Interior Designer in Mumbai',

    description:
      'Transform your home with SK Interior — premium interior design services in Mumbai.',

    url: 'https://sk-interior.vercel.app',

    siteName: 'SK Interior',

    locale: 'en_IN',

    type: 'website',

    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SK Interior - Premium Interior Design',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title:
      'SK Interior | Best Interior Designer in Mumbai',

    description:
      'Premium interior design services in Mumbai.',

    images: ['/og-image.jpg'],
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
      {
        url: '/favicon.ico',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
      {
        url: '/icon-light-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],

    shortcut: '/favicon.ico',

    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${cormorant.variable} bg-background`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',

              '@type': 'LocalBusiness',

              name: 'SK Interior',

              image:
                'https://sk-interior.vercel.app/og-image.jpg',

              logo:
                'https://sk-interior.vercel.app/logo.png',

              description:
                'Premium interior design company offering modular kitchen, bedroom, living room, office interiors and turnkey renovation services in Mumbai.',

              url: 'https://sk-interior.vercel.app',

              telephone: '+91-75684-91519',

              email: 'mahendra.jangid.official@gmail.com',

              address: [
                {
                  '@type': 'PostalAddress',
                  addressLocality: 'Mumbai',
                  addressRegion: 'Maharashtra',
                  addressCountry: 'IN',
                },
              ],

              areaServed: ['Mumbai'],

              priceRange: '₹₹₹',

              openingHours: 'Mo-Sa 09:00-19:00',

              sameAs: [
                'https://www.instagram.com/skinterior',
                'https://www.facebook.com/skinterior',
                'https://twitter.com/skinterior',
              ],

              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                reviewCount: '500',
              },
            }),
          }}
        />
      </head>

      <body className="font-sans antialiased">
        <Header />

        {children}

        <Footer />

        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
