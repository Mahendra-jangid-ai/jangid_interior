'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MessageSquare, PenLine, Package, Hammer, CheckCircle2 } from 'lucide-react'
import SectionHeading from '@/components/section-heading'

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Consultation',
    desc: 'We begin with a detailed discussion to understand your vision, requirements, lifestyle, and budget — at your property or our studio.',
  },
  {
    number: '02',
    icon: PenLine,
    title: 'Planning & Design',
    desc: 'Our team creates detailed 3D renderings and design plans, iterating with you until every element is exactly right.',
  },
  {
    number: '03',
    icon: Package,
    title: 'Material Selection',
    desc: 'We guide you through premium material options — from finishes and fabrics to hardware and fixtures — ensuring perfect alignment with the design vision.',
  },
  {
    number: '04',
    icon: Hammer,
    title: 'Execution',
    desc: 'Our skilled in-house team brings the design to life with precision craftsmanship, managed by a dedicated project manager who keeps you updated throughout.',
  },
  {
    number: '05',
    icon: CheckCircle2,
    title: 'Final Handover',
    desc: 'We conduct a thorough quality inspection before handing over your completed space — styled, finished, and ready to be lived in.',
  },
]

export default function ProcessSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-20 md:py-28 bg-secondary" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Our Process"
          title={'How We Bring Your\nSpace to Life'}
          subtitle="A structured, collaborative process designed to keep you informed, comfortable, and excited at every stage."
          centered
        />

        <div className="relative mt-4">
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-px bg-border z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 28 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-background border-2 border-border flex flex-col items-center justify-center mb-5 group">
                      <span className="text-xs font-sans font-semibold text-primary tracking-wider">
                        {step.number}
                      </span>
                      <Icon size={22} className="text-foreground mt-1" />
                    </div>
                  </div>
                  <h3 className="font-serif text-lg font-medium text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm font-sans leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
