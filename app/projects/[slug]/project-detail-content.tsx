'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, MapPin, Tag, Share2, Heart, Phone } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Project, projects } from '@/lib/data/projects'
import CTASection from '@/components/sections/cta-section'
import { Button } from '@/components/ui/button'

interface Props {
  project: Project
}

export default function ProjectDetailContent({ project }: Props) {
  const currentIndex = projects.findIndex((p) => p.id === project.id)
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null
  const relatedProjects = projects.filter(p => p.id !== project.id && p.category === project.category).slice(0, 3)

  const projectImages = [
    project.image,
    'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm mb-6">
              <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link>
              <span className="text-muted-foreground">/</span>
              <Link href="/projects" className="text-muted-foreground hover:text-foreground transition-colors">Projects</Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-foreground">{project.title}</span>
            </nav>

            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                    {project.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-muted-foreground text-sm">
                    <MapPin className="w-4 h-4" />
                    {project.location}
                  </span>
                </div>
                <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground text-balance">
                  {project.title}
                </h1>
              </div>

              <div className="flex items-center gap-3">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Heart className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Share2 className="w-4 h-4" />
                </Button>
                <Link href="/enquiry">
                  <Button className="gap-2">
                    Get Similar Design
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-4"
          >
            {/* Main Image */}
            <div className="lg:col-span-2 lg:row-span-2">
              <div className="aspect-[4/3] lg:aspect-auto lg:h-full bg-muted rounded-2xl overflow-hidden">
                <img
                  src={projectImages[0]}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            {/* Side Images */}
            {projectImages.slice(1, 4).map((img, index) => (
              <div key={index} className="aspect-[4/3] bg-muted rounded-2xl overflow-hidden">
                <img
                  src={img}
                  alt={`${project.title} - Image ${index + 2}`}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">About This Project</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {project.description}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our team worked closely with the client to understand their lifestyle and preferences. The result is a space that perfectly balances aesthetics with functionality, creating an environment that feels both luxurious and livable.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Every element was carefully curated - from the custom furniture pieces to the lighting fixtures, from the color palette to the textures. We paid special attention to the flow of the space, ensuring that each area transitions seamlessly into the next.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap items-center gap-2">
                <Tag className="w-4 h-4 text-muted-foreground" />
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="bg-card rounded-2xl border border-border p-6 sticky top-24">
                <h3 className="font-serif text-lg font-semibold text-foreground mb-6">Project Details</h3>
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b border-border">
                    <span className="text-muted-foreground">Category</span>
                    <span className="font-medium text-foreground">{project.category}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-border">
                    <span className="text-muted-foreground">Location</span>
                    <span className="font-medium text-foreground">{project.location}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-border">
                    <span className="text-muted-foreground">Duration</span>
                    <span className="font-medium text-foreground">45 Days</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-border">
                    <span className="text-muted-foreground">Style</span>
                    <span className="font-medium text-foreground">Modern Contemporary</span>
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  <Link href="/enquiry" className="block">
                    <Button className="w-full gap-2">
                      Get Similar Design
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                  <a href="tel:+918905187368" className="block">
                    <Button variant="outline" className="w-full gap-2">
                      <Phone className="w-4 h-4" />
                      Discuss Project
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              badge="More Projects"
              title={`More ${project.category} Projects`}
              description="Explore similar projects we&apos;ve completed."
              center
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {relatedProjects.map((p, index) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={`/projects/${p.id}`} className="group block">
                    <div className="relative aspect-[4/3] bg-muted rounded-2xl overflow-hidden mb-4">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-background/90 backdrop-blur-sm text-foreground text-xs font-medium rounded-full">
                          {p.category}
                        </span>
                      </div>
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">{p.location}</p>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-semibold rounded-lg hover:bg-background transition-colors"
              >
                View All Projects
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Prev/Next Navigation */}
      <section className="py-12 border-t border-border bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {prevProject ? (
              <Link href={`/projects/${prevProject.id}`} className="group flex items-center gap-3">
                <ArrowLeft className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                <div>
                  <div className="text-xs text-muted-foreground mb-1">Previous Project</div>
                  <div className="font-medium text-foreground group-hover:text-primary transition-colors">{prevProject.title}</div>
                </div>
              </Link>
            ) : <div />}
            {nextProject ? (
              <Link href={`/projects/${nextProject.id}`} className="group flex items-center gap-3 text-right">
                <div>
                  <div className="text-xs text-muted-foreground mb-1">Next Project</div>
                  <div className="font-medium text-foreground group-hover:text-primary transition-colors">{nextProject.title}</div>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  )
}
