import type { Metadata } from 'next'
import EnquiryContent from './enquiry-content'

export const metadata: Metadata = {
  title: 'Get Free Quote | Jangid Interior - Interior Design Cost Calculator',
  description: 'Get a free quote for your interior design project. Fill our simple form and receive an estimate within 24 hours. Best prices for modular kitchen, home & office interior in Jaipur.',
  keywords: [
    'interior design quote',
    'interior design cost calculator',
    'free interior design estimate',
    'modular kitchen price',
    'home interior cost Jaipur',
    'interior design budget',
  ],
  openGraph: {
    title: 'Get Free Quote | Jangid Interior',
    description: 'Get a free quote for your interior design project. Receive estimate within 24 hours.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Jangid Interior',
  },
  alternates: {
    canonical: 'https://jangidinterior.com/enquiry',
  },
}

export default function EnquiryPage() {
  return <EnquiryContent />
}
