import type { Metadata } from 'next'
import FAQContent from './faq-content'

export const metadata: Metadata = {
  title: 'FAQs | SK Interior - Frequently Asked Questions About Interior Design',
  description: 'Get answers to commonly asked questions about interior design services, pricing, timelines, and process. Learn everything about SK Interior services.',
  keywords: [
    'interior design FAQ',
    'interior design questions',
    'modular kitchen FAQ',
    'home interior cost questions',
    'interior designer Mumbai FAQ',
  ],
  openGraph: {
    title: 'FAQs | SK Interior',
    description: 'Get answers to commonly asked questions about interior design services.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'SK Interior',
  },
  alternates: {
    canonical: 'https://skinterior.com/faq',
  },
}

export default function FAQPage() {
  return <FAQContent />
}
