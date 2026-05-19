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
      title: 'Service Not Found | Jangid Interior',
    }
  }

  return {
    title: `${service.title} | Jangid Interior - Best Interior Designer in Jaipur`,
    description: `${service.fullDesc} Get premium ${service.title.toLowerCase()} services in Jaipur, Jodhpur, Udaipur. Free consultation available.`,
    keywords: [
      service.title.toLowerCase(),
      `${service.title.toLowerCase()} Jaipur`,
      `best ${service.title.toLowerCase()}`,
      'interior designer Rajasthan',
    ],
    openGraph: {
      title: `${service.title} | Jangid Interior`,
      description: service.fullDesc,
      type: 'website',
      locale: 'en_IN',
      siteName: 'Jangid Interior',
    },
    alternates: {
      canonical: `https://jangidinterior.com/services/${slug}`,
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
