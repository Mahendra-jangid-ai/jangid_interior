import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { services } from '@/lib/data/services'
import ServiceDetailContent from './service-detail-content'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.id,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((s) => s.id === slug)

  if (!service) {
    return {
      title: 'Service Not Found | SK Interior',
    }
  }

  return {
    title: `${service.title} | SK Interior - Best Interior Designer in Mumbai`,
    description: `${service.fullDesc} Get premium ${service.title.toLowerCase()} services in Mumbai. Free consultation available.`,
    keywords: [
      service.title.toLowerCase(),
      `${service.title.toLowerCase()} Mumbai`,
      `best ${service.title.toLowerCase()}`,
      'interior designer Mumbai',
    ],
    openGraph: {
      title: `${service.title} | SK Interior`,
      description: service.fullDesc,
      type: 'website',
      locale: 'en_IN',
      siteName: 'SK Interior',
    },
    alternates: {
      canonical: `https://skinterior.com/services/${slug}`,
    },
  }
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params
  const service = services.find((s) => s.id === slug)

  if (!service) {
    notFound()
  }

  return <ServiceDetailContent service={service} />
}
