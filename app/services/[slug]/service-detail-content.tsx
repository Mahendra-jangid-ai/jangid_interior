'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, CheckCircle2, Phone, Home, ChefHat, Sofa, BedDouble, Shirt, Layers, Tv, Briefcase, Building2, Key, Wrench, Armchair } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Service, services } from '@/lib/data/services'
import { projects } from '@/lib/data/projects'
import CTASection from '@/components/sections/cta-section'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Home,
  ChefHat,
  Sofa,
  BedDouble,
  Shirt,
  Layers,
  Tv,
  Briefcase,
  Building2,
  Key,
  Wrench,
  Armchair,
}

interface Props {
  service: Service
}

const benefits = [
  'Free Design Consultation',
  'Premium Quality Materials',
  '10 Year Warranty',
  'On-time Delivery Guaranteed',
  'Dedicated Project Manager',
  'Post-installation Support',
]

const processSteps = [
  {
    number: '01',
    title: 'Consultation',
    description: 'We understand your requirements, style preferences, and budget to create a personalized plan.',
  },
  {
    number: '02',
    title: 'Design & Planning',
    description: '3D designs and detailed plans are created for your approval before any work begins.',
  },
  {
    number: '03',
    title: 'Execution',
    description: 'Our skilled craftsmen bring the design to life with premium materials and attention to detail.',
  },
  {
    number: '04',
    title: 'Handover',
    description: 'Final inspection, touch-ups, and handover of your beautifully transformed space.',
  },
]

export default function ServiceDetailContent({ service }: Props) {
  const Icon = iconMap[service.icon] || Home
  const currentIndex = services.findIndex((s) => s.id === service.id)
  const prevService = currentIndex > 0 ? services[currentIndex - 1] : null
  const nextService = currentIndex < services.length - 1 ? services[currentIndex + 1] : null
  const relatedProjects = projects.slice(0, 3)

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
          >
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm mb-8">
              <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link>
              <span className="text-muted-foreground">/</span>
              <Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors">Services</Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-foreground">{service.title}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 text-balance">
                  {service.title}
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {service.fullDesc}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/enquiry"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Get Free Quote
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="tel:+918905187368"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-border text-foreground font-semibold rounded-lg hover:bg-muted transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                </div>
              </div>

              {/* Feature Image Placeholder */}
              <div className="relative">
                <div className="aspect-[4/3] bg-muted rounded-3xl overflow-hidden border border-border">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon className="w-24 h-24 text-primary/10" />
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl">
                  <div className="text-3xl font-bold font-serif">500+</div>
                  <div className="text-sm text-primary-foreground/80">Projects Completed</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading
                badge="Why Choose Us"
                title={`Why Choose Our ${service.title}`}
                description="We deliver exceptional results with attention to every detail, ensuring your complete satisfaction."
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-card rounded-2xl p-6 border border-border">
                <div className="text-4xl font-serif font-bold text-primary mb-2">10+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div className="bg-primary rounded-2xl p-6 text-primary-foreground">
                <div className="text-4xl font-serif font-bold mb-2">98%</div>
                <div className="text-primary-foreground/80">Client Satisfaction</div>
              </div>
              <div className="bg-card rounded-2xl p-6 border border-border">
                <div className="text-4xl font-serif font-bold text-primary mb-2">2000+</div>
                <div className="text-muted-foreground">Happy Clients</div>
              </div>
              <div className="bg-card rounded-2xl p-6 border border-border">
                <div className="text-4xl font-serif font-bold text-primary mb-2">6</div>
                <div className="text-muted-foreground">Cities Covered</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Process"
            title="How We Work"
            description="A streamlined process that ensures your project is completed on time and to your satisfaction."
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-card rounded-2xl p-6 border border-border h-full">
                  <div className="text-5xl font-serif font-bold text-primary/10 mb-4">{step.number}</div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-primary/30" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Work"
            title="Related Projects"
            description="See how we&apos;ve transformed spaces with our expertise."
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {relatedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/projects/${project.id}`} className="group block">
                  <div className="relative aspect-[4/3] bg-muted rounded-2xl overflow-hidden mb-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">{project.location}</p>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-semibold rounded-lg hover:bg-muted transition-colors"
            >
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Explore More"
            title="Other Services"
            description="Discover our complete range of interior design services."
            center
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {services.filter(s => s.id !== service.id).slice(0, 8).map((s) => {
              const SIcon = iconMap[s.icon] || Home
              return (
                <Link
                  key={s.id}
                  href={`/services/${s.id}`}
                  className="group p-4 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all"
                >
                  <SIcon className="w-6 h-6 text-primary mb-3" />
                  <h3 className="font-medium text-foreground text-sm group-hover:text-primary transition-colors">
                    {s.title}
                  </h3>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Prev/Next Navigation */}
      <section className="py-12 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {prevService ? (
              <Link href={`/services/${prevService.id}`} className="group flex items-center gap-3">
                <ArrowLeft className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                <div>
                  <div className="text-xs text-muted-foreground mb-1">Previous Service</div>
                  <div className="font-medium text-foreground group-hover:text-primary transition-colors">{prevService.title}</div>
                </div>
              </Link>
            ) : <div />}
            {nextService ? (
              <Link href={`/services/${nextService.id}`} className="group flex items-center gap-3 text-right">
                <div>
                  <div className="text-xs text-muted-foreground mb-1">Next Service</div>
                  <div className="font-medium text-foreground group-hover:text-primary transition-colors">{nextService.title}</div>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  )
}
