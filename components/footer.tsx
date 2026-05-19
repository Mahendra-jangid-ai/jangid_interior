import Link from 'next/link'
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react'
import { LogoMark } from '@/components/logo'

const quickLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Contact', href: '/contact' },
]

const serviceLinks = [
  { label: 'Home Interior Design', href: '/services' },
  { label: 'Modular Kitchen Design', href: '/services' },
  { label: 'Bedroom Interior', href: '/services' },
  { label: 'Office Interior Design', href: '/services' },
  { label: 'Turnkey Solutions', href: '/services' },
  { label: 'Custom Furniture', href: '/services' },
]

const cityLinks = [
  { label: 'Mumbai', href: '/locations' },
  { label: 'Ahmedabad', href: '/locations' },
  { label: 'Pune', href: '/locations' },
]

const footerSeoLinks = [
  'Interior Designer in Mumbai',
  'Interior Designer in Pune',
  'Interior Designer in Ahmedabad',
]

export default function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <LogoMark size={30} color="hsl(43, 56%, 55%)" />
              <span
                className="text-white font-serif font-medium text-[1.15rem]"
                style={{ letterSpacing: '0.03em' }}
              >
                Jangid Interior
              </span>
            </div>
            <p className="text-white/55 text-sm font-sans leading-relaxed mb-6">
              Premium interior design across Mumbai, Ahmedabad and Pune. 15+ years of transforming
              spaces into personal sanctuaries.
            </p>
            <div className="flex items-center gap-2.5">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-sm border border-white/15 flex items-center justify-center text-white/50 hover:text-primary hover:border-primary/50 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={14} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-sm border border-white/15 flex items-center justify-center text-white/50 hover:text-primary hover:border-primary/50 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={14} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-sm border border-white/15 flex items-center justify-center text-white/50 hover:text-primary hover:border-primary/50 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={14} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-sm font-semibold text-white/90 uppercase tracking-widest mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/55 hover:text-primary text-sm font-sans transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services + Cities */}
          <div>
            <h4 className="font-serif text-sm font-semibold text-white/90 uppercase tracking-widest mb-5">
              Services
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/55 hover:text-primary text-sm font-sans transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="font-serif text-sm font-semibold text-white/90 uppercase tracking-widest mt-8 mb-4">
              Cities
            </h4>
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              {cityLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/55 hover:text-primary text-sm font-sans transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h4 className="font-serif text-sm font-semibold text-white/90 uppercase tracking-widest mb-5">
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+918905187368" className="flex items-start gap-3 group">
                  <Phone size={16} className="text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-white/75 font-sans text-sm group-hover:text-white transition-colors">
                      +91 89051 87368
                    </p>
                    <p className="text-white/40 font-sans text-xs">Mon–Sat, 9am–7pm</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:mahendra.jangid.official@gmail.com" className="flex items-start gap-3 group">
                  <Mail size={16} className="text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-white/75 font-sans text-sm group-hover:text-white transition-colors">
                      mahendra.jangid.official@gmail.com
                    </p>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-white/75 font-sans text-sm">Mumbai · Ahmedabad · Pune</p>
                  </div>
                </div>
              </li>
            </ul>
            <Link
              href="/enquiry"
              className="mt-6 inline-flex items-center px-5 py-2.5 bg-primary text-primary-foreground font-sans font-semibold text-sm rounded hover:bg-primary/90 transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 font-sans text-xs">
            © {new Date().getFullYear()} Jangid Interior. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-white/30 font-sans text-xs">
            {footerSeoLinks.map((text, i) => (
              <span key={i}>{text}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
