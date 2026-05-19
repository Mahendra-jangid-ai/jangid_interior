'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import SectionHeading from '@/components/section-heading'
import { projects } from '@/lib/data/projects'

const featured = projects.slice(0, 4)

export default function FeaturedProjects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-20 md:py-28 bg-secondary" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <SectionHeading
            label="Featured Projects"
            title={'Our Work Speaks\nFor Itself'}
            subtitle="A selection of projects that showcase our commitment to craft, detail, and enduring beauty."
            className="mb-0 max-w-xl"
          />
          <Link href="/projects">
            <span className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-primary hover:gap-3 transition-all cursor-pointer whitespace-nowrap">
              See All Projects <ArrowRight size={15} />
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {featured.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: 'easeOut' }}
              className="group relative overflow-hidden rounded-xl bg-card cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              <div className="absolute top-4 left-4">
                <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-sans font-semibold rounded-full">
                  {project.category}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white/60 text-xs font-sans tracking-wider uppercase mb-1">
                  {project.location}
                </p>
                <h3 className="font-serif text-xl md:text-2xl font-medium text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-white/70 text-sm font-sans leading-relaxed hidden md:block opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
