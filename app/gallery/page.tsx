import { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import CTASection from '@/components/sections/cta-section'
import GalleryContent from './gallery-content'

export const metadata: Metadata = {
  title: 'Interior Design Gallery — Luxury Spaces',
  description:
    'Browse our gallery of luxury interior design projects — living rooms, kitchens, bedrooms, dining rooms, and office spaces created across Mumbai, Pune, and Ahmedabad.',
  keywords:
    'interior design gallery, luxury interior photos, home interior gallery, modular kitchen photos, bedroom design gallery, living room interior images',
  alternates: {
    canonical: '/gallery',
  },
  openGraph: {
    title: 'Interior Design Gallery — Luxury Spaces | Jangid Interior',
    description:
      'Browse our gallery of luxury interior design projects across Mumbai, Pune, and Ahmedabad.',
    url: '/gallery',
    type: 'website',
  },
}

export default function GalleryPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <GalleryContent />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
