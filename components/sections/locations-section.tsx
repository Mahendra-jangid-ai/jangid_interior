'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { MapPin, ArrowRight, Phone } from 'lucide-react'
import SectionHeading from '@/components/section-heading'
import { locations } from '@/lib/data/locations'

export default function LocationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-20 md:py-28 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Where We Work"
          title={"Serving Mumbai, Pune\n& Ahmedabad"}
          subtitle="Premium interior design services available across major cities in Maharashtra and Gujarat with their surrounding localities."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((location, i) => (
            <motion.div
              key={location.city}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: 'easeOut' }}
              className="bg-card border border-border rounded-xl p-7 hover:border-primary/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin size={18} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-medium text-foreground">{location.city}</h3>
                  <p className="text-muted-foreground text-xs font-sans">{location.state}</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm font-sans leading-relaxed mb-4">
                {location.description}
              </p>
              <Link 
                href={`tel:${location.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-2 text-sm text-primary hover:underline"
              >
                <Phone size={14} />
                <span className="font-sans">{location.phone}</span>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/locations">
            <span className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-primary hover:gap-3 transition-all cursor-pointer">
              View All Locations & Areas <ArrowRight size={15} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
