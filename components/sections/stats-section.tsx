'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const stats = [
  { value: '15+', label: 'Years of Excellence', desc: 'Crafting premium interiors since 2009' },
  {
    value: '500+',
    label: 'Projects Completed',
    desc: 'Across residential and commercial spaces',
  },
  { value: '2,000+', label: 'Happy Clients', desc: 'Families and businesses who trust us' },
  { value: '3', label: 'Cities Served', desc: 'Mumbai, Ahmedabad and Pune' },
]

export default function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section id="stats" className="bg-foreground" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10 divide-y lg:divide-y-0">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
              className="px-6 py-10 lg:py-12 text-center lg:text-left"
            >
              <div
                className="font-serif font-medium text-primary leading-none text-[clamp(2rem,4vw,3rem)]"
              >
                {stat.value}
              </div>
              <div className="mt-2 text-white font-sans font-medium text-sm md:text-base">
                {stat.label}
              </div>
              <div className="mt-1 text-white/45 font-sans text-xs md:text-sm leading-snug hidden md:block">
                {stat.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
