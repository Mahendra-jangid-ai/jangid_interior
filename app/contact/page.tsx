import type { Metadata } from 'next'
import ContactContent from './contact-content'

export const metadata: Metadata = {
  title: 'Contact Us | SK Interior - Get Free Interior Design Consultation',
  description: 'Contact SK Interior for free interior design consultation in Mumbai. Call +91 75684 91519 or visit our office. Transform your home today!',
  keywords: [
    'contact interior designer Mumbai',
    'interior design consultation',
    'free home interior consultation',
    'SK Interior contact',
    'interior designer phone number',
  ],
  openGraph: {
    title: 'Contact Us | SK Interior',
    description: 'Get free interior design consultation. Call us or visit our office in Mumbai.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'SK Interior',
  },
  alternates: {
    canonical: 'https://skinterior.com/contact',
  },
}

export default function ContactPage() {
  return <ContactContent />
}
