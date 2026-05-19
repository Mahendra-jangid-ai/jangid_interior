import type { Metadata } from 'next'
import FAQContent from './faq-content'

export const metadata: Metadata = {
  title: 'FAQs | Jangid Interior - Frequently Asked Questions About Interior Design',
  description: 'Get answers to commonly asked questions about interior design services, pricing, timelines, and process. Learn everything about Jangid Interior services.',
  keywords: [
    'interior design FAQ',
    'interior design questions',
    'modular kitchen FAQ',
    'home interior cost questions',
    'interior designer Jaipur FAQ',
  ],
  openGraph: {
    title: 'FAQs | Jangid Interior',
    description: 'Get answers to commonly asked questions about interior design services.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Jangid Interior',
  },
  alternates: {
    canonical: 'https://jangidinterior.com/faq',
  },
}

export default function FAQPage() {
  return <FAQContent />
}
