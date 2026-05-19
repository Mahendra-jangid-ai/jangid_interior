'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Heart, Eye, Star, Users, Award, Leaf } from 'lucide-react'
import SectionHeading from '@/components/section-heading'

const values = [
  {
    icon: Heart,
    title: 'Client-First Philosophy',
    desc: 'Every decision begins with your needs, aspirations, and way of life. Your home should be an extension of you — not our portfolio.',
  },
  {
    icon: Star,
    title: 'Uncompromising Quality',
    desc: 'We use premium materials, engage skilled craftspeople, and conduct rigorous quality checks at every stage. Average is not an option.',
  },
  {
    icon: Eye,
    title: 'Attention to Detail',
    desc: 'The difference between a good interior and a great one lives in the details most people never consciously notice — but always feel.',
  },
  {
    icon: Users,
    title: 'Transparent Collaboration',
    desc: 'We communicate proactively, share progress openly, and invite your input at every milestone. No surprises — ever.',
  },
  {
    icon: Award,
    title: 'Design Excellence',
    desc: 'Our designers stay current with global trends while remaining grounded in timeless principles of space, light, and proportion.',
  },
  {
    icon: Leaf,
    title: 'Sustainable Sourcing',
    desc: 'Where possible, we source materials responsibly — choosing suppliers who share our commitment to environmental stewardship.',
  },
]

export default function AboutContent() {
  const storyRef = useRef(null)
  const valuesRef = useRef(null)
  const storyInView = useInView(storyRef, { once: true, margin: '-80px' })
  const valuesInView = useInView(valuesRef, { once: true, margin: '-80px' })

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
            Our Story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif font-medium text-white leading-tight max-w-3xl text-[clamp(2.2rem,4.5vw,3.8rem)]"
          >
            Fifteen Years of Transforming Spaces Into Stories
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 h-px w-16 bg-primary"
          />
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28 bg-background" ref={storyRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={storyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <div className="aspect-[4/5] overflow-hidden rounded-xl relative">
                <Image
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80"
                  alt="Jangid Interior — premium interior design studio Mumbai"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={storyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
            >
              <p className="text-primary text-xs font-sans font-semibold tracking-[0.2em] uppercase mb-4">
                Est. 2009
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground leading-tight mb-6">
                Built on Passion, Refined by Experience
              </h2>
              <div className="h-px w-12 bg-primary mb-6" />
              <div className="space-y-5 text-muted-foreground font-sans text-base leading-relaxed">
                <p>
                  Jangid Interior began in 2009 with a single studio in Mumbai and a clear vision:
                  to create interior spaces that would stand the test of time — both in design and
                  construction.
                </p>
                <p>
                  Over 15 years, we have grown to serve 2000+ happy clients across Mumbai, Ahmedabad,
                  and Pune with our talented team of designers, architects, and craftspeople. Our portfolio now
                  includes over 500 completed projects across homes, offices, and commercial spaces.
                </p>
                <p>
                  What has never changed is our commitment to honest craftsmanship, transparent
                  communication, and designs that put the client first. We believe every space tells
                  a story — and our job is to help you tell yours.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-secondary" ref={valuesRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Values"
            title={'What Guides Every\nDecision We Make'}
            subtitle="Six principles that shape how we work, design, and relate to our clients."
            centered
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-4">
            {values.map((value, i) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 28 }}
                  animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
                  className="p-7 rounded-lg border border-border bg-card hover:border-primary/30 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <h3 className="font-serif text-lg font-medium text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm font-sans leading-relaxed">
                    {value.desc}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
