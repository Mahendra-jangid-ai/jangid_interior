import { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import CTASection from '@/components/sections/cta-section'
import ServicesContent from './services-content'

export const metadata: Metadata = {
  title: 'Interior Design Services — Home, Kitchen, Office & Turnkey',
  description:
    '13+ interior design services: home interior design, modular kitchen, bedroom, wardrobe, false ceiling, TV unit, office interior, commercial spaces, and complete turnkey solutions. Serving Mumbai, Pune & Ahmedabad.',
  keywords:
    'modular kitchen design, bedroom interior, wardrobe design, false ceiling, office interior design, turnkey interior solutions, living room design, custom furniture, interior design services',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Interior Design Services — Home, Kitchen, Office & Turnkey | Jangid Interior',
    description:
      '13+ interior design services including modular kitchen, bedroom, office interiors, and turnkey solutions.',
    url: '/services',
    type: 'website',
  },
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ServicesContent />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
