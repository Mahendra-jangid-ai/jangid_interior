import type { Metadata } from 'next'
import LocationsContent from './locations-content'

export const metadata: Metadata = {
  title: 'Our Locations | Best Interior Designer in Mumbai, Pune & Ahmedabad',
  description: 'Jangid Interior serves Mumbai (Andheri, Bandra, Powai), Pune (Baner, Wakad, Hinjewadi) & Ahmedabad (Navrangpura, Satellite, Bopal). Premium interior design services near you!',
  keywords: [
    'interior designer in Mumbai',
    'interior designer in Pune',
    'interior designer in Ahmedabad',
    'interior designer in Andheri',
    'interior designer in Bandra',
    'interior designer in Baner',
    'interior designer in Hinjewadi',
    'interior designer in Navrangpura',
    'interior designer in Satellite',
    'best interior designer near me',
    'home interior Mumbai',
    'modular kitchen Pune',
    'office interior Ahmedabad',
  ],
  openGraph: {
    title: 'Our Locations | Jangid Interior - Mumbai, Pune & Ahmedabad',
    description: 'Premium interior design services across Mumbai, Pune & Ahmedabad. Visit our nearest office for free consultation.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Jangid Interior',
  },
  alternates: {
    canonical: 'https://jangidinterior.com/locations',
  },
}

export default function LocationsPage() {
  return <LocationsContent />
}
