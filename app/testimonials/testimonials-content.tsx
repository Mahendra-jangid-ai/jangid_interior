'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star, Quote } from 'lucide-react'
import { testimonials } from '@/lib/data/testimonials'

export default function TestimonialsContent() {
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
            Client Stories
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif font-medium text-white leading-tight max-w-3xl text-[clamp(2.2rem,4.5vw,3.8rem)]"
          >
            What Our Clients Say About Us
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
            Over 2,000 families and businesses have trusted Jangid Interior to transform their
            spaces. Here is what some of them have to say.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-serif text-3xl md:text-4xl font-medium text-primary">4.9/5</div>
              <div className="mt-1 text-muted-foreground text-sm font-sans">Average Rating</div>
            </div>
            <div>
              <div className="font-serif text-3xl md:text-4xl font-medium text-primary">2,000+</div>
              <div className="mt-1 text-muted-foreground text-sm font-sans">Happy Clients</div>
            </div>
            <div>
              <div className="font-serif text-3xl md:text-4xl font-medium text-primary">500+</div>
              <div className="mt-1 text-muted-foreground text-sm font-sans">Projects Completed</div>
            </div>
            <div>
              <div className="font-serif text-3xl md:text-4xl font-medium text-primary">98%</div>
              <div className="mt-1 text-muted-foreground text-sm font-sans">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 md:py-28 bg-background" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 28 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
                className="bg-card border border-border rounded-xl p-7 hover:shadow-md hover:border-primary/20 transition-all duration-300 flex flex-col"
              >
                <Quote size={28} className="text-primary/30 mb-4" />
                <p className="text-foreground font-sans text-sm leading-relaxed flex-grow italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 pt-5 border-t border-border flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center font-serif font-semibold text-primary text-base">
                    {t.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-sans font-semibold text-foreground text-sm">{t.name}</p>
                    <p className="text-muted-foreground text-xs font-sans">{t.location}</p>
                    <p className="text-muted-foreground/60 text-xs font-sans">{t.role}</p>
                  </div>
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={14} className="fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
