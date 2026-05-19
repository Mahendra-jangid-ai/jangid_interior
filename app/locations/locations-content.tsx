'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, ArrowRight, Building2, Home, Briefcase, Navigation } from 'lucide-react'
import Link from 'next/link'
import { SectionHeading } from '@/components/section-heading'
import { locations } from '@/lib/data/locations'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const serviceIcons = [
  { icon: Home, label: 'Residential' },
  { icon: Building2, label: 'Commercial' },
  { icon: Briefcase, label: 'Corporate' },
]

export default function LocationsContent() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-primary/5 to-background overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
              Mumbai | Pune | Ahmedabad
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 text-balance">
              Interior Designer Near You
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Premium interior design services across Mumbai, Pune & Ahmedabad. Find our nearest location and transform your space with Jangid Interior.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Locations"
            title="Serving Mumbai, Pune & Ahmedabad"
            description="Choose your city to explore our interior design services in your area"
            center
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16"
          >
            {locations.map((location, index) => (
              <motion.div
                key={location.city}
                variants={itemVariants}
                className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 hover:shadow-xl transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-muted">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-foreground/80" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <MapPin className="w-16 h-16 text-primary/20" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-white font-serif text-2xl font-semibold">{location.city}</span>
                    <span className="ml-2 text-white/70 text-sm">{location.state}</span>
                    {index === 0 && (
                      <span className="ml-3 px-2 py-0.5 bg-primary text-primary-foreground text-xs font-medium rounded">
                        Headquarters
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {location.description}
                  </p>

                  {/* Areas Served */}
                  <div className="mb-4">
                    <p className="text-xs text-muted-foreground mb-2 font-medium">Areas We Serve:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {location.areas.slice(0, 5).map((area) => (
                        <span key={area} className="px-2 py-0.5 bg-muted text-muted-foreground text-xs rounded">
                          {area}
                        </span>
                      ))}
                      {location.areas.length > 5 && (
                        <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded">
                          +{location.areas.length - 5} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-sm text-foreground">{location.address}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-primary shrink-0" />
                      <a href={`tel:${location.phone.replace(/\s/g, '')}`} className="text-sm text-foreground hover:text-primary transition-colors">
                        {location.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-sm text-muted-foreground">Mon - Sat: 10AM - 7PM</span>
                    </div>
                  </div>

                  {/* Services Available */}
                  <div className="flex items-center gap-4 pt-4 border-t border-border">
                    {serviceIcons.map((service) => (
                      <div key={service.label} className="flex items-center gap-1.5 text-muted-foreground">
                        <service.icon className="w-4 h-4" />
                        <span className="text-xs">{service.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="px-6 pb-6">
                  <Link
                    href={`/contact?location=${location.slug}`}
                    className="flex items-center justify-center gap-2 w-full py-3 bg-primary/10 text-primary font-medium text-sm rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    Contact {location.city} Office
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* All Areas Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Service Areas"
            title="Areas We Serve"
            description="Complete interior design services available in these localities"
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {locations.map((location) => (
              <div key={location.id} className="bg-card rounded-xl border border-border p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Navigation className="w-5 h-5 text-primary" />
                  <h3 className="font-serif text-xl font-semibold text-foreground">{location.city}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {location.areas.map((area) => (
                    <Link
                      key={area}
                      href={`/interior-designer-in-${area.toLowerCase().replace(/\s/g, '-')}`}
                      className="px-3 py-1.5 bg-muted hover:bg-primary/10 hover:text-primary text-muted-foreground text-sm rounded-lg transition-colors"
                    >
                      {area}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Local Presence */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading
                badge="Local Expertise"
                title="Why Local Presence Matters"
                description="Our deep understanding of Mumbai, Pune & Ahmedabad markets allows us to create interiors that truly resonate with your lifestyle and local aesthetics."
              />
              <div className="mt-8 space-y-4">
                {[
                  'Understanding of local climate for material selection',
                  'Knowledge of regional architectural styles',
                  'Network of trusted local craftsmen & suppliers',
                  'Quick response time & site visits',
                  'Familiarity with local building regulations',
                  'Multilingual support in Hindi, Marathi & Gujarati',
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-foreground">{point}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
              >
                Find Nearest Office
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-card rounded-2xl p-6 border border-border">
                    <div className="text-4xl font-serif font-bold text-primary mb-2">3</div>
                    <div className="text-muted-foreground">Cities Covered</div>
                  </div>
                  <div className="bg-primary rounded-2xl p-6 text-primary-foreground">
                    <div className="text-4xl font-serif font-bold mb-2">500+</div>
                    <div className="text-primary-foreground/80">Projects Delivered</div>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-card rounded-2xl p-6 border border-border">
                    <div className="text-4xl font-serif font-bold text-primary mb-2">25+</div>
                    <div className="text-muted-foreground">Localities Served</div>
                  </div>
                  <div className="bg-card rounded-2xl p-6 border border-border">
                    <div className="text-4xl font-serif font-bold text-primary mb-2">15+</div>
                    <div className="text-muted-foreground">Years Experience</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6 text-balance">
              Ready to Transform Your Space?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Visit our nearest office or schedule a free consultation. Our expert designers are ready to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/enquiry"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
              >
                Book Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+918905187368"
                className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground font-semibold rounded-lg hover:bg-muted transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call Us Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
