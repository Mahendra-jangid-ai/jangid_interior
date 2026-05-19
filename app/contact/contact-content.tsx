'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { SectionHeading } from '@/components/section-heading'
import { locations } from '@/lib/data/locations'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 89051 87368',
    href: 'tel:+918905187368',
    description: 'Mon-Sat, 10AM to 7PM',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'mahendra.jangid.official@gmail.com',
    href: 'mailto:mahendra.jangid.official@gmail.com',
    description: 'We reply within 24 hours',
  },
  {
    icon: MessageSquare,
    label: 'WhatsApp',
    value: '+91 89051 87368',
    href: 'https://wa.me/918905187368',
    description: 'Quick response guaranteed',
  },
  {
    icon: Clock,
    label: 'Working Hours',
    value: 'Mon - Sat: 10AM - 7PM',
    href: null,
    description: 'Sunday by appointment',
  },
]

const services = [
  'Residential Interior',
  'Commercial Interior',
  'Modular Kitchen',
  'Office Interior',
  'Renovation',
  'Consultation Only',
]

export default function ContactContent() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    service: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

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
              Get In Touch
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 text-balance">
              Let&apos;s Create Something Beautiful
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ready to transform your space? Reach out to us for a free consultation. Our expert designers are here to bring your vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 -mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {info.href ? (
                  <a
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="block p-6 bg-card rounded-2xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 h-full"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-sm text-muted-foreground mb-1">{info.label}</div>
                    <div className="font-semibold text-foreground mb-1">{info.value}</div>
                    <div className="text-xs text-muted-foreground">{info.description}</div>
                  </a>
                ) : (
                  <div className="p-6 bg-card rounded-2xl border border-border h-full">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-sm text-muted-foreground mb-1">{info.label}</div>
                    <div className="font-semibold text-foreground mb-1">{info.value}</div>
                    <div className="text-xs text-muted-foreground">{info.description}</div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading
                badge="Contact Form"
                title="Send Us a Message"
                description="Fill out the form below and we&apos;ll get back to you within 24 hours."
              />

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-8 p-8 bg-primary/5 rounded-2xl border border-primary/20 text-center"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">Thank You!</h3>
                  <p className="text-muted-foreground mb-6">
                    Your message has been sent successfully. Our team will contact you shortly.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)} variant="outline">
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 89051 87368"
                        value={formState.phone}
                        onChange={(e) => {
                          const value = e.target.value.replace(/\D/g, '')
                          if (value.length <= 10 || (value.startsWith('91') && value.length <= 12)) {
                            setFormState({ ...formState, phone: e.target.value })
                          }
                        }}
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="h-12"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-foreground mb-2">
                        Your City *
                      </label>
                      <Select
                        value={formState.location}
                        onValueChange={(value) => setFormState({ ...formState, location: value })}
                      >
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select city" />
                        </SelectTrigger>
                        <SelectContent>
                          {locations.map((loc) => (
                            <SelectItem key={loc.city} value={loc.city.toLowerCase()}>
                              {loc.city}
                            </SelectItem>
                          ))}
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                        Service Required
                      </label>
                      <Select
                        value={formState.service}
                        onValueChange={(value) => setFormState({ ...formState, service: value })}
                      >
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service.toLowerCase().replace(/\s+/g, '-')}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project requirements..."
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 text-base"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Office Locations */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading
                badge="Visit Us"
                title="Our Offices"
                description="Visit any of our offices in Mumbai, Pune or Ahmedabad for a personalized consultation."
              />

              <div className="mt-8 space-y-4">
                {locations.map((location) => (
                  <div
                    key={location.city}
                    className="p-5 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-serif text-lg font-semibold text-foreground">{location.city}</h3>
                        <p className="text-xs text-muted-foreground">{location.state}</p>
                        <p className="text-sm text-muted-foreground mt-1">{location.address}</p>
                      </div>
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <MapPin className="w-4 h-4 text-primary" />
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <a href={`tel:${location.phone.replace(/\s/g, '')}`} className="flex items-center gap-1.5 text-primary hover:underline">
                        <Phone className="w-3.5 h-3.5" />
                        {location.phone}
                      </a>
                      <span className="flex items-center gap-1.5 text-muted-foreground">
                        <Clock className="w-3.5 h-3.5" />
                        10AM - 7PM
                      </span>
                    </div>
                  </div>
                ))}

                <Link
                  href="/locations"
                  className="flex items-center justify-center gap-2 w-full py-3 border border-border rounded-xl text-foreground font-medium hover:bg-muted transition-colors"
                >
                  View All Locations
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 h-64 bg-muted rounded-2xl border border-border overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-primary/30 mx-auto mb-3" />
                    <p className="text-muted-foreground text-sm">Interactive map coming soon</p>
                    <a
                      href="https://maps.google.com/?q=Mumbai,Maharashtra"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-3 text-primary text-sm font-medium hover:underline"
                    >
                      Open in Google Maps
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-balance">
              Prefer to Talk?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Our design consultants are available to discuss your project. Call us now or schedule a callback at your convenient time.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+918905187368"
                className="inline-flex items-center gap-2 px-8 py-4 bg-background text-foreground font-semibold rounded-lg hover:bg-background/90 transition-colors"
              >
                <Phone className="w-4 h-4" />
                +91 89051 87368
              </a>
              <a
                href="https://wa.me/918905187368"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary-foreground/30 text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground/10 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
