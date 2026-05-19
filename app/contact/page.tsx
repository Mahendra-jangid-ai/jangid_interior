import type { Metadata } from 'next'
import ContactContent from './contact-content'

export const metadata: Metadata = {
  title: 'Contact Us | Jangid Interior - Get Free Interior Design Consultation',
  description: 'Contact Jangid Interior for free interior design consultation in Jaipur, Jodhpur, Udaipur. Call +91 89051 87368 or visit our office. Transform your home today!',
  keywords: [
    'contact interior designer Jaipur',
    'interior design consultation',
    'free home interior consultation',
    'Jangid Interior contact',
    'interior designer phone number',
  ],
  openGraph: {
    title: 'Contact Us | Jangid Interior',
    description: 'Get free interior design consultation. Call us or visit our office in Jaipur, Jodhpur, Udaipur.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Jangid Interior',
  },
  alternates: {
    canonical: 'https://jangidinterior.com/contact',
  },
}

export default function ContactPage() {
  return <ContactContent />
}
