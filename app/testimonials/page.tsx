import { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import CTASection from '@/components/sections/cta-section'
import TestimonialsContent from './testimonials-content'

export const metadata: Metadata = {
  title: 'Client Reviews & Testimonials',
  description:
    'Read reviews from 2,000+ happy clients who chose Jangid Interior for their home and office interiors across Mumbai, Pune, and Ahmedabad. Rated 4.9/5 for design quality and service.',
  keywords:
    'interior design reviews, Jangid Interior testimonials, interior designer reviews Mumbai, best interior company reviews, client testimonials',
  alternates: {
    canonical: '/testimonials',
  },
  openGraph: {
    title: 'Client Reviews & Testimonials | Jangid Interior',
    description:
      'Read reviews from 2,000+ happy clients who chose Jangid Interior for their interiors.',
    url: '/testimonials',
    type: 'website',
  },
}

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <TestimonialsContent />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
