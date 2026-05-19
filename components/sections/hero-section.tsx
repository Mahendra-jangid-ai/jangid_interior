'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ChevronDown } from 'lucide-react'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1920&q=80'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut', delay },
  }),
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={HERO_IMAGE}
          alt="Luxury interior by Jangid Interior"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/60 to-foreground/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-foreground/10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-20">
        <div className="max-w-2xl">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
            className="text-primary text-xs font-sans font-semibold tracking-[0.25em] uppercase mb-6"
          >
            Premium Interior Design — Mumbai · Ahmedabad · Pune
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.25}
            className="font-serif font-medium text-white leading-tight text-[clamp(2.4rem,5vw,4.2rem)]"
            style={{ lineHeight: 1.12 }}
          >
            Spaces That Speak.
            <br />
            <span className="text-primary italic">Interiors That Last.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.4}
            className="mt-6 text-white/75 text-lg md:text-xl font-sans leading-relaxed max-w-xl"
          >
            Award-winning interior design crafted for lives worth living. We transform your space
            into an experience that reflects who you are.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.55}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Link href="/projects">
              <span className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-sans font-semibold text-sm rounded hover:bg-primary/90 transition-all duration-300 group cursor-pointer">
                Explore Our Work
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </span>
            </Link>
            <Link href="/enquiry">
              <span className="inline-flex items-center px-7 py-3.5 border border-white/40 text-white font-sans font-medium text-sm rounded hover:border-white hover:bg-white/10 transition-all duration-300 cursor-pointer">
                Get a Free Consultation
              </span>
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.7}
            className="mt-14 flex flex-wrap gap-x-8 gap-y-3"
          >
            {[
              { value: '15+', label: 'Years Experience' },
              { value: '500+', label: 'Projects Done' },
              { value: '2,000+', label: 'Happy Clients' },
            ].map((stat) => (
              <div key={stat.label} className="flex items-baseline gap-2">
                <span className="font-serif text-2xl font-medium text-primary">{stat.value}</span>
                <span className="text-white/55 text-xs font-sans tracking-wider uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <a
          href="#stats"
          className="flex flex-col items-center text-white/50 hover:text-white/80 transition-colors"
        >
          <span className="text-xs font-sans tracking-wider uppercase mb-2">Scroll</span>
          <ChevronDown size={20} className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  )
}
