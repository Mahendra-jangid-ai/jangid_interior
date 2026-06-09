import type { Metadata } from 'next'
import LocationsContent from './locations-content'

export const metadata: Metadata = {
  title: 'Our Locations | Best Interior Designer in Mumbai',
  description: 'SK Interior serves Mumbai (Andheri, Bandra, Powai, Juhu, and surrounding localities). Premium interior design services near you!',
  keywords: [
    'interior designer in Mumbai',
    'interior designer in Andheri',
    'interior designer in Bandra',
    'interior designer in Juhu',
    'interior designer in Powai',
    'best interior designer near me',
    'home interior Mumbai',
  ],
  openGraph: {
    title: 'Our Locations | SK Interior - Mumbai',
    description: 'Premium interior design services across Mumbai. Visit our office for free consultation.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'SK Interior',
  },
  alternates: {
    canonical: 'https://skinterior.com/locations',
  },
}

export default function LocationsPage() {
  return <LocationsContent />
}
