import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { projects } from '@/lib/data/projects'
import ProjectDetailContent from './project-detail-content'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.id === slug)

  if (!project) {
    return {
      title: 'Project Not Found | Jangid Interior',
    }
  }

  return {
    title: `${project.title} | Jangid Interior - Interior Design Portfolio`,
    description: `${project.description} View this stunning ${project.category.toLowerCase()} interior design project by Jangid Interior in ${project.location}.`,
    keywords: [
      project.title.toLowerCase(),
      `${project.category.toLowerCase()} interior design`,
      `interior design ${project.location}`,
      ...project.tags.map(t => t.toLowerCase()),
    ],
    openGraph: {
      title: `${project.title} | Jangid Interior`,
      description: project.description,
      type: 'article',
      locale: 'en_IN',
      siteName: 'Jangid Interior',
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    alternates: {
      canonical: `https://jangidinterior.com/projects/${slug}`,
    },
  }
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params
  const project = projects.find((p) => p.id === slug)

  if (!project) {
    notFound()
  }

  return <ProjectDetailContent project={project} />
}
