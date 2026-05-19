'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import {
  Home,
  ChefHat,
  Sofa,
  BedDouble,
  Shirt,
  Layers,
  Tv,
  Briefcase,
  Building2,
  Key,
  Wrench,
  Armchair,
  ArrowRight,
} from 'lucide-react'
import { services } from '@/lib/data/services'

const iconMap: Record<string, React.ElementType> = {
  Home,
  ChefHat,
  Sofa,
  BedDouble,
  Shirt,
  Layers,
  Tv,
  Briefcase,
  Building2,
  Key,
  Wrench,
  Armchair,
}

export default function ServicesContent() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary text-xs font-sans font-semibold tracking-[0.2em] uppercase mb-5"
          >
            Our Services
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif font-medium text-white leading-tight max-w-3xl text-[clamp(2.2rem,4.5vw,3.8rem)]"
          >
            Complete Interior Design Solutions
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 h-px w-16 bg-primary"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-white/70 font-sans text-lg leading-relaxed max-w-2xl"
          >
            From concept to completion, we provide end-to-end interior design services tailored to
            your lifestyle and preferences.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28 bg-background" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] || Home
              return (
                <motion.article
                  key={service.id}
                  initial={{ opacity: 0, y: 28 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
                  transition={{ duration: 0.5, delay: i * 0.06, ease: 'easeOut' }}
                  className="group bg-card border border-border rounded-xl p-7 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon size={26} className="text-primary" />
                  </div>
                  <h2 className="font-serif text-xl font-medium text-foreground mb-3">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground text-sm font-sans leading-relaxed mb-5">
                    {service.fullDesc}
                  </p>
                  <Link href="/enquiry">
                    <span className="inline-flex items-center gap-1.5 text-primary text-sm font-sans font-semibold group-hover:gap-2.5 transition-all cursor-pointer">
                      Get Quote <ArrowRight size={14} />
                    </span>
                  </Link>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
