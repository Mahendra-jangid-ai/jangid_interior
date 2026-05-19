'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'

export default function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-foreground" ref={ref}>
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 25px 25px, white 1px, transparent 0)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-primary text-xs font-sans font-semibold tracking-[0.2em] uppercase mb-5"
        >
          Begin Your Journey
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="font-serif font-medium text-white leading-tight text-[clamp(2rem,4.5vw,3.5rem)]"
        >
          Ready to Transform Your Space?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="mt-6 text-white/65 font-sans text-lg leading-relaxed max-w-2xl mx-auto"
        >
          Book a free consultation and take the first step toward an interior that genuinely
          reflects who you are. No commitment required.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/enquiry">
            <span className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-sans font-semibold text-sm rounded hover:bg-primary/90 transition-all duration-300 group cursor-pointer">
              Get a Free Quote
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
          <a
            href="tel:+918905187368"
            className="inline-flex items-center gap-2 px-8 py-4 border border-white/25 text-white font-sans font-medium text-sm rounded hover:border-white/60 hover:bg-white/5 transition-all duration-300"
          >
            <Phone size={15} />
            Call Us Now
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 text-white/40 text-xs font-sans"
        >
          <span>Free Initial Consultation</span>
          <span className="w-1 h-1 rounded-full bg-white/30" />
          <span>No Hidden Charges</span>
          <span className="w-1 h-1 rounded-full bg-white/30" />
          <span>Response Within 24 Hours</span>
          <span className="w-1 h-1 rounded-full bg-white/30" />
          <span>15+ Years of Excellence</span>
        </motion.div>
      </div>
    </section>
  )
}
