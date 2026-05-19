import { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import CTASection from '@/components/sections/cta-section'
import AboutContent from './about-content'

export const metadata: Metadata = {
  title: 'About Jangid Interior — 15 Years of Premium Interior Design',
  description:
    'Founded in 2009, Jangid Interior has delivered 500+ projects across Mumbai, Pune and Ahmedabad. Learn about our design philosophy, mission, and the passionate team behind every transformation.',
  keywords:
    'about Jangid Interior, interior design company India, premium interior design studio, luxury home interiors, best interior designer Mumbai',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Jangid Interior — 15 Years of Premium Interior Design',
    description:
      'Founded in 2009, Jangid Interior has delivered 500+ projects across Mumbai, Pune and Ahmedabad.',
    url: '/about',
    type: 'website',
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <AboutContent />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
