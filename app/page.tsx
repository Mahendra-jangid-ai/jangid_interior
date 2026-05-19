import { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import HeroSection from '@/components/sections/hero-section'
import StatsSection from '@/components/sections/stats-section'
import ServicesPreview from '@/components/sections/services-preview'
import FeaturedProjects from '@/components/sections/featured-projects'
import WhyChooseUs from '@/components/sections/why-choose-us'
import ProcessSection from '@/components/sections/process-section'
import LocationsSection from '@/components/sections/locations-section'
import TestimonialsSection from '@/components/sections/testimonials-section'
import FAQSection from '@/components/sections/faq-section'
import CTASection from '@/components/sections/cta-section'

export const metadata: Metadata = {
  title: 'Jangid Interior | Best Interior Designer in Mumbai, Pune & Ahmedabad',
  description:
    'Transform your home with Jangid Interior — premium interior design services: modular kitchen, bedroom, living room, office & turnkey renovation across Mumbai, Pune & Ahmedabad. 15+ years | 500+ projects. Free consultation.',
  keywords:
    'interior designer in Mumbai, interior designer in Pune, interior designer in Ahmedabad, home interior design, modular kitchen design, luxury interiors, premium interior designer, best interior designer Mumbai, interior design company, residential interior, commercial interior. घर का डिज़ाइन, इंटीरियर डिजाइनर मुंबई, रसोई का डिज़ाइन, घर की सजावट, इंटीरियर सेवा। घरांचा डिजाइन, घराचे सजावट, मुंबई इंटीरियर, पुणे घर डिजाइन। ઘરની ડિઝાઇન, ઇન્ટીરિયર ડિજાઇનર, રસોઇની ડિઝાઇન, ઘર સજાવટ, અમદાવાદ ઇંટેરિયર।',
  alternates: {
    canonical: '/',
    languages: {
      en: 'https://jangidinterior.com',
      'hi-IN': 'https://jangidinterior.com/hi',
      'mr-IN': 'https://jangidinterior.com/mr',
      'gu-IN': 'https://jangidinterior.com/gu',
    },
  },
  openGraph: {
    title: 'Jangid Interior | Best Interior Designer in Mumbai, Pune & Ahmedabad',
    description:
      'Transform your home with Jangid Interior — premium interior design services. 15+ years | 500+ projects. Free consultation.',
    url: '/',
    type: 'website',
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <ServicesPreview />
        <FeaturedProjects />
        <WhyChooseUs />
        <ProcessSection />
        <LocationsSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
