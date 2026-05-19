'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight, ArrowLeft, Home, Building2, Store, Warehouse, Phone, Shield, Clock, Award } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { locations } from '@/lib/data/locations'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { cn } from '@/lib/utils'

const propertyTypes = [
  { id: 'apartment', label: '1/2/3 BHK Apartment', icon: Home, description: 'Flats & Apartments' },
  { id: 'villa', label: 'Villa / Independent House', icon: Building2, description: 'Bungalows & Villas' },
  { id: 'office', label: 'Office Space', icon: Store, description: 'Corporate & Co-working' },
  { id: 'commercial', label: 'Commercial Space', icon: Warehouse, description: 'Shops & Showrooms' },
]

const services = [
  { id: 'full', label: 'Full Home Interior' },
  { id: 'modular-kitchen', label: 'Modular Kitchen' },
  { id: 'wardrobes', label: 'Wardrobes & Storage' },
  { id: 'living-room', label: 'Living Room Design' },
  { id: 'bedroom', label: 'Bedroom Interior' },
  { id: 'bathroom', label: 'Bathroom Renovation' },
  { id: 'office-interior', label: 'Office Interior' },
  { id: 'renovation', label: 'Renovation Work' },
]

const budgetRanges = [
  { id: 'under-5', label: 'Under ₹5 Lakh' },
  { id: '5-10', label: '₹5 - 10 Lakh' },
  { id: '10-20', label: '₹10 - 20 Lakh' },
  { id: '20-50', label: '₹20 - 50 Lakh' },
  { id: '50-plus', label: 'Above ₹50 Lakh' },
]

const timelines = [
  { id: 'immediate', label: 'Immediately' },
  { id: '1-month', label: 'Within 1 Month' },
  { id: '3-months', label: 'Within 3 Months' },
  { id: 'flexible', label: 'Flexible' },
]

const benefits = [
  { icon: Shield, text: 'Free Design Consultation' },
  { icon: Clock, text: 'Quote within 24 Hours' },
  { icon: Award, text: 'Best Price Guarantee' },
]

export default function EnquiryContent() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    propertyType: '',
    services: [] as string[],
    budget: '',
    timeline: '',
    name: '',
    phone: '',
    email: '',
    city: '',
    address: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const totalSteps = 4

  const handleServiceToggle = (serviceId: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter(s => s !== serviceId)
        : [...prev.services, serviceId]
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const canProceed = () => {
    switch (step) {
      case 1: return formData.propertyType !== ''
      case 2: return formData.services.length > 0
      case 3: return formData.budget !== '' && formData.timeline !== ''
      case 4: return formData.name !== '' && formData.phone !== '' && formData.city !== ''
      default: return false
    }
  }

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-background pt-32 pb-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-card rounded-3xl border border-border p-8 md:p-12 text-center"
          >
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-primary" />
            </div>
            <h1 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Enquiry Submitted!
            </h1>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Thank you for your interest! Our design consultant will contact you within 24 hours with a personalized quote.
            </p>
            <div className="bg-muted/50 rounded-xl p-6 mb-8">
              <p className="text-sm text-muted-foreground mb-2">Your Reference Number</p>
              <p className="font-mono text-2xl font-bold text-primary">JI-{Date.now().toString().slice(-6)}</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+918905187368"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call Us Now
              </a>
              <Button variant="outline" onClick={() => { setIsSubmitted(false); setStep(1); setFormData({ propertyType: '', services: [], budget: '', timeline: '', name: '', phone: '', email: '', city: '', address: '', message: '' }) }}>
                Submit Another Enquiry
              </Button>
            </div>
          </motion.div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
              Free Quote
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-6 text-balance">
              Get Your Free Interior Design Quote
            </h1>
            <p className="text-lg text-muted-foreground">
              Tell us about your project and receive a detailed estimate within 24 hours
            </p>

            {/* Benefits */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
              {benefits.map((benefit) => (
                <div key={benefit.text} className="flex items-center gap-2 text-sm">
                  <benefit.icon className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">{benefit.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              {[1, 2, 3, 4].map((s) => (
                <div
                  key={s}
                  className={cn(
                    'flex items-center justify-center w-10 h-10 rounded-full font-semibold text-sm transition-all',
                    step >= s
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground'
                  )}
                >
                  {step > s ? <CheckCircle2 className="w-5 h-5" /> : s}
                </div>
              ))}
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-primary"
                initial={{ width: '0%' }}
                animate={{ width: `${(step / totalSteps) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="flex justify-between mt-2 text-xs text-muted-foreground">
              <span>Property Type</span>
              <span>Services</span>
              <span>Budget & Timeline</span>
              <span>Contact Details</span>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Step 1: Property Type */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <SectionHeading
                  title="What type of property?"
                  description="Select the type of property you want to design"
                  center
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  {propertyTypes.map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, propertyType: type.id })}
                      className={cn(
                        'p-6 rounded-2xl border-2 text-left transition-all',
                        formData.propertyType === type.id
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/50'
                      )}
                    >
                      <type.icon className={cn(
                        'w-8 h-8 mb-3',
                        formData.propertyType === type.id ? 'text-primary' : 'text-muted-foreground'
                      )} />
                      <h3 className="font-semibold text-foreground">{type.label}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{type.description}</p>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 2: Services */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <SectionHeading
                  title="What services do you need?"
                  description="Select all the services you&apos;re interested in"
                  center
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => handleServiceToggle(service.id)}
                      className={cn(
                        'p-4 rounded-xl border-2 text-left transition-all flex items-center justify-between',
                        formData.services.includes(service.id)
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/50'
                      )}
                    >
                      <div>
                        <h3 className="font-medium text-foreground">{service.label}</h3>
                      </div>
                      <div className={cn(
                        'w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all',
                        formData.services.includes(service.id)
                          ? 'border-primary bg-primary'
                          : 'border-muted-foreground'
                      )}>
                        {formData.services.includes(service.id) && (
                          <CheckCircle2 className="w-4 h-4 text-primary-foreground" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 3: Budget & Timeline */}
            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <SectionHeading
                  title="Budget & Timeline"
                  description="Help us understand your requirements better"
                  center
                />
                <div className="space-y-8 mt-8">
                  <div>
                    <h3 className="font-semibold text-foreground mb-4">What&apos;s your budget range?</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {budgetRanges.map((budget) => (
                        <button
                          key={budget.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: budget.id })}
                          className={cn(
                            'py-3 px-4 rounded-xl border-2 font-medium text-sm transition-all',
                            formData.budget === budget.id
                              ? 'border-primary bg-primary text-primary-foreground'
                              : 'border-border text-foreground hover:border-primary/50'
                          )}
                        >
                          {budget.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-4">When do you want to start?</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {timelines.map((timeline) => (
                        <button
                          key={timeline.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, timeline: timeline.id })}
                          className={cn(
                            'py-3 px-4 rounded-xl border-2 font-medium text-sm transition-all',
                            formData.timeline === timeline.id
                              ? 'border-primary bg-primary text-primary-foreground'
                              : 'border-border text-foreground hover:border-primary/50'
                          )}
                        >
                          {timeline.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 4: Contact Details */}
            {step === 4 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <SectionHeading
                  title="Your Contact Details"
                  description="We&apos;ll use this information to send you the quote"
                  center
                />
                <div className="space-y-5 mt-8 max-w-lg mx-auto">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 89051 87368"
                        value={formData.phone}
                        onChange={(e) => {
                          const value = e.target.value.replace(/\D/g, '')
                          if (value.length <= 10 || (value.startsWith('91') && value.length <= 12)) {
                            setFormData({ ...formData, phone: value })
                          }
                        }}
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-foreground mb-2">
                        City *
                      </label>
                      <Select
                        value={formData.city}
                        onValueChange={(value) => setFormData({ ...formData, city: value })}
                      >
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select city" />
                        </SelectTrigger>
                        <SelectContent>
                          {locations.map((loc) => (
                            <SelectItem key={loc.city} value={loc.city}>
                              {loc.city}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
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
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-foreground mb-2">
                      Property Address
                    </label>
                    <Input
                      id="address"
                      type="text"
                      placeholder="Full address of the property"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Additional Requirements
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Any specific requirements or preferences..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="resize-none"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-12 pt-8 border-t border-border">
              {step > 1 ? (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setStep(step - 1)}
                  className="gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </Button>
              ) : (
                <div />
              )}

              {step < totalSteps ? (
                <Button
                  type="button"
                  onClick={() => setStep(step + 1)}
                  disabled={!canProceed()}
                  className="gap-2"
                >
                  Continue
                  <ArrowRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button
                  type="submit"
                  disabled={!canProceed() || isSubmitting}
                  className="gap-2"
                >
                  {isSubmitting ? 'Submitting...' : 'Get My Free Quote'}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              )}
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}
