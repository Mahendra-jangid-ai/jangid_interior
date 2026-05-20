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
  metadataBase: new URL('https://jangid-interior.vercel.app'),

  applicationName: 'Jangid Interior',

  title: {
    default:
      'Jangid Interior | Best Interior Designer in Mumbai, Pune & Ahmedabad',
    template: '%s | Jangid Interior',
  },

  description:
    'Transform your home with Jangid Interior — premium interior design services: modular kitchen, bedroom, living room, office & turnkey renovation across Mumbai, Pune & Ahmedabad. 15+ years | 500+ projects. Free consultation.',

  keywords: [
    'interior designer in Mumbai',
    'interior designer in Pune',
    'interior designer in Ahmedabad',
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

  authors: [{ name: 'Jangid Interior' }],

  creator: 'Jangid Interior',

  publisher: 'Jangid Interior',

  manifest: '/site.webmanifest',

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  alternates: {
    canonical: 'https://jangid-interior.vercel.app',

    languages: {
      en: 'https://jangid-interior.vercel.app',
      'hi-IN': 'https://jangid-interior.vercel.app/hi',
      'mr-IN': 'https://jangid-interior.vercel.app/mr',
      'gu-IN': 'https://jangid-interior.vercel.app/gu',
    },
  },

  openGraph: {
    title:
      'Jangid Interior | Best Interior Designer in Mumbai, Pune & Ahmedabad',

    description:
      'Transform your home with Jangid Interior — premium interior design services across Mumbai, Pune & Ahmedabad.',

    url: 'https://jangid-interior.vercel.app',

    siteName: 'Jangid Interior',

    locale: 'en_IN',

    type: 'website',

    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Jangid Interior - Premium Interior Design',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title:
      'Jangid Interior | Best Interior Designer in Mumbai, Pune & Ahmedabad',

    description:
      'Premium interior design services in Mumbai, Pune & Ahmedabad.',

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

              name: 'Jangid Interior',

              image:
                'https://jangid-interior.vercel.app/og-image.jpg',

              logo:
                'https://jangid-interior.vercel.app/logo.png',

              description:
                'Premium interior design company offering modular kitchen, bedroom, living room, office interiors and turnkey renovation services across Mumbai, Pune & Ahmedabad.',

              url: 'https://jangid-interior.vercel.app',

              telephone: '+91-89051-87368',

              email: 'mahendra.jangid.official@gmail.com',

              address: [
                {
                  '@type': 'PostalAddress',
                  addressLocality: 'Mumbai',
                  addressRegion: 'Maharashtra',
                  addressCountry: 'IN',
                },
                {
                  '@type': 'PostalAddress',
                  addressLocality: 'Pune',
                  addressRegion: 'Maharashtra',
                  addressCountry: 'IN',
                },
                {
                  '@type': 'PostalAddress',
                  addressLocality: 'Ahmedabad',
                  addressRegion: 'Gujarat',
                  addressCountry: 'IN',
                },
              ],

              areaServed: ['Mumbai', 'Pune', 'Ahmedabad'],

              priceRange: '₹₹₹',

              openingHours: 'Mo-Sa 09:00-19:00',

              sameAs: [
                'https://www.instagram.com/jangidinterior',
                'https://www.facebook.com/jangidinterior',
                'https://twitter.com/jangidinterior',
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
