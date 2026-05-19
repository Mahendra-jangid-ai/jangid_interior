import { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import CTASection from '@/components/sections/cta-section'
import ProjectsContent from './projects-content'

export const metadata: Metadata = {
  title: 'Interior Design Portfolio — 500+ Projects',
  description:
    'Explore our portfolio of 500+ interior design projects — luxury living rooms, modular kitchens, master bedrooms, corporate offices, and complete home transformations across Mumbai, Pune & Ahmedabad.',
  keywords:
    'interior design portfolio, home interior projects, modular kitchen designs, bedroom interior portfolio, office interior projects, living room design portfolio',
  alternates: {
    canonical: '/projects',
  },
  openGraph: {
    title: 'Interior Design Portfolio — 500+ Projects | Jangid Interior',
    description:
      'Explore our portfolio of 500+ interior design projects across Mumbai, Pune & Ahmedabad.',
    url: '/projects',
    type: 'website',
  },
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ProjectsContent />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
