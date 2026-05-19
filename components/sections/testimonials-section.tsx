'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { Star, ArrowRight, Quote } from 'lucide-react'
import SectionHeading from '@/components/section-heading'
import { testimonials } from '@/lib/data/testimonials'

const featured = testimonials.slice(0, 3)

export default function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-20 md:py-28 bg-secondary" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <SectionHeading
            label="Client Stories"
            title={'Spaces They Now\nCall Home'}
            subtitle="The best endorsement is a client who cannot stop talking about their home."
            className="mb-0 max-w-xl"
          />
          <Link href="/testimonials">
            <span className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-primary hover:gap-3 transition-all cursor-pointer whitespace-nowrap">
              All Stories <ArrowRight size={15} />
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {featured.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
              className="bg-card border border-border rounded-xl p-7 hover:shadow-md hover:border-primary/20 transition-all duration-300 flex flex-col"
            >
              <Quote size={24} className="text-primary/40 mb-4" />
              <p className="text-foreground font-sans text-sm leading-relaxed flex-grow italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 pt-5 border-t border-border flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center font-serif font-semibold text-primary text-sm">
                  {t.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-sans font-semibold text-foreground text-sm truncate">
                    {t.name}
                  </p>
                  <p className="text-muted-foreground text-xs font-sans truncate">{t.location}</p>
                </div>
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={13} className="fill-primary text-primary" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
