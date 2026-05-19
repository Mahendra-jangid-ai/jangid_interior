'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, Clock, Palette, Shield, Users, Hammer } from 'lucide-react'
import SectionHeading from '@/components/section-heading'

const features = [
  {
    icon: Award,
    title: 'Bespoke Craftsmanship',
    desc: 'Every project is designed from scratch to your exact taste and lifestyle — never a template, always a one-of-a-kind creation.',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    desc: 'We commit to timelines and we keep them. Our project management process ensures handover on schedule, every time.',
  },
  {
    icon: Palette,
    title: 'End-to-End Design',
    desc: 'From initial concept to final styling, we manage every detail — so you experience the magic without the stress.',
  },
  {
    icon: Shield,
    title: 'Quality Guaranteed',
    desc: "We use premium materials sourced from trusted suppliers. Our quality checks are rigorous — we do not deliver anything we would not live in ourselves.",
  },
  {
    icon: Users,
    title: 'Client-First Approach',
    desc: 'Your vision drives every decision. We listen deeply, communicate proactively, and adapt as your needs evolve.',
  },
  {
    icon: Hammer,
    title: 'Expert Execution',
    desc: 'Our in-house team of designers, project managers, and craftspeople ensure seamless execution from drawing to delivery.',
  },
]

export default function WhyChooseUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-20 md:py-28 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Why Jangid Interior"
          title={'The Standard We Hold\nOurselves To'}
          subtitle="We do not just design beautiful spaces — we deliver on every promise that comes with them."
          centered
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-4">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 28 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
                className="p-7 rounded-lg border border-border bg-card hover:border-primary/30 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <Icon size={20} className="text-primary" />
                </div>
                <h3 className="font-serif text-lg font-medium text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm font-sans leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
