'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, Home, ChefHat, BedDouble, Layers, Briefcase, Key } from 'lucide-react'
import SectionHeading from '@/components/section-heading'

const iconMap: Record<string, React.ElementType> = {
  Home,
  ChefHat,
  BedDouble,
  Layers,
  Briefcase,
  Key,
}

const featured = [
  {
    icon: 'Home',
    title: 'Home Interior Design',
    desc: 'Holistic home transformations that unify every room under a single, cohesive design language tailored to your life.',
  },
  {
    icon: 'ChefHat',
    title: 'Modular Kitchen Design',
    desc: 'Smart, beautiful kitchens with premium hardware and ergonomic layouts — engineered for how you actually cook.',
  },
  {
    icon: 'BedDouble',
    title: 'Bedroom Interior',
    desc: 'Serene private retreats designed around rest, warmth, and personal expression. Your room, truly.',
  },
  {
    icon: 'Layers',
    title: 'False Ceiling Design',
    desc: "Architectural ceiling details — from dramatic cove lighting to coffered patterns — that define an entire room's character.",
  },
  {
    icon: 'Briefcase',
    title: 'Office Interior Design',
    desc: 'Workplaces that attract great people and inspire great work. We design offices your team will be proud of.',
  },
  {
    icon: 'Key',
    title: 'Turnkey Solutions',
    desc: 'Design to delivery, managed entirely by us. You walk in when it is finished — to exactly what you imagined.',
  },
]

export default function ServicesPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-20 md:py-28 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <SectionHeading
            label="Our Services"
            title={'Interiors Designed\nAround You'}
            subtitle="From a single room to a complete turnkey project, we bring the same standard of excellence to every space."
            className="mb-0 max-w-xl"
          />
          <Link href="/services">
            <span className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-primary hover:gap-3 transition-all cursor-pointer whitespace-nowrap">
              View All Services <ArrowRight size={15} />
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featured.map((service, i) => {
            const Icon = iconMap[service.icon]
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 28 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
                className="group bg-card border border-border rounded-lg p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <Icon size={22} className="text-primary" />
                </div>
                <h3 className="font-serif text-xl font-medium text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm font-sans leading-relaxed">
                  {service.desc}
                </p>
                <div className="mt-5 flex items-center gap-1.5 text-primary text-sm font-sans font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight size={14} />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
