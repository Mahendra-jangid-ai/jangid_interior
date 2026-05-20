import { MetadataRoute } from 'next'
import { services } from '@/lib/data/services'
import { projects } from '@/lib/data/projects'
import { locations } from '@/lib/data/locations'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://jangid-interior.vercel.app'

  // Static pages
  const staticPages = [
    '',
    '/about',
    '/services',
    '/projects',
    '/gallery',
    '/testimonials',
    '/locations',
    '/contact',
    '/enquiry',
    '/faq',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly' as const,
    priority: route === '' ? 1 : route === '/services' || route === '/projects' ? 0.9 : 0.8,
  }))

  // Service pages
  const servicePages = services.map((service) => ({
    url: `${baseUrl}/services/${service.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Project pages
  const projectPages = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // City-specific pages for local SEO
  const cityPages = locations.map((location) => ({
    url: `${baseUrl}/interior-designer-in-${location.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  // Area-specific pages for local SEO
  const areaPages = locations.flatMap((location) =>
    location.areas.map((area) => ({
      url: `${baseUrl}/interior-designer-in-${area.toLowerCase().replace(/\s/g, '-')}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }))
  )

  // Service + City combination pages
  const serviceCityPages = locations.flatMap((location) => [
    {
      url: `${baseUrl}/modular-kitchen-in-${location.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/2bhk-interior-cost-${location.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/3bhk-interior-cost-${location.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ])

  return [
    ...staticPages,
    ...servicePages,
    ...projectPages,
    ...cityPages,
    ...areaPages,
    ...serviceCityPages,
  ]
}
