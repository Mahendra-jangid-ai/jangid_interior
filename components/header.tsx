'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { LogoMarkAlt } from '@/components/logo'

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Locations', href: '/locations' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const isTransparent = isHome && !scrolled

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-400',
          isTransparent
            ? 'bg-transparent'
            : 'bg-background/96 backdrop-blur-md border-b border-border/60 shadow-sm'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px] md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 cursor-pointer group">
              <LogoMarkAlt size={32} color="hsl(43, 56%, 55%)" />
              <span
                className={cn(
                  'font-serif font-medium tracking-wide transition-colors duration-300 leading-none',
                  'text-[1.15rem] md:text-[1.2rem]',
                  isTransparent ? 'text-white' : 'text-foreground'
                )}
                style={{ letterSpacing: '0.03em' }}
              >
                Jangid Interior
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-7">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span
                    className={cn(
                      'text-sm font-sans font-medium transition-colors duration-200 relative group cursor-pointer',
                      isTransparent
                        ? 'text-white/85 hover:text-white'
                        : 'text-muted-foreground hover:text-foreground',
                      pathname === link.href && !isTransparent && 'text-primary',
                      pathname === link.href && isTransparent && 'text-white'
                    )}
                  >
                    {link.label}
                    <span
                      className={cn(
                        'absolute -bottom-0.5 left-0 h-px bg-primary transition-all duration-300',
                        pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                      )}
                    />
                  </span>
                </Link>
              ))}
            </nav>

            {/* Right Section */}
            <div className="flex items-center gap-3">
              <a
                href="tel:+918905187368"
                className={cn(
                  'hidden xl:flex items-center gap-1.5 text-sm font-sans font-medium transition-colors',
                  isTransparent
                    ? 'text-white/80 hover:text-white'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                <Phone size={14} />
                +91 89051 87368
              </a>

              <Link
                href="/enquiry"
                className="hidden md:inline-flex items-center px-5 py-2.5 bg-primary text-primary-foreground font-sans font-semibold text-sm rounded hover:bg-primary/90 transition-colors"
              >
                Get a Quote
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={cn(
                  'lg:hidden w-10 h-10 flex items-center justify-center rounded transition-colors',
                  isTransparent ? 'text-white hover:bg-white/10' : 'text-foreground hover:bg-muted'
                )}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[60] bg-foreground/50 backdrop-blur-sm lg:hidden"
              onClick={() => setMenuOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 z-[70] w-[85vw] max-w-[400px] h-full lg:hidden"
            >
              <div className="h-full bg-[#faf8f5] shadow-2xl flex flex-col">
                {/* Sidebar Header */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-[#e8e4de]">
                  <Link
                    href="/"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-2.5"
                  >
                    <LogoMarkAlt size={28} color="hsl(43, 56%, 55%)" />
                    <span className="font-serif font-medium text-lg text-[#2c2825]">
                      Jangid Interior
                    </span>
                  </Link>
                  <button
                    onClick={() => setMenuOpen(false)}
                    className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#e8e4de] transition-colors"
                    aria-label="Close menu"
                  >
                    <X size={20} className="text-[#2c2825]" />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 overflow-y-auto py-4 px-4">
                  <div className="space-y-1">
                    {navLinks.map((link, index) => {
                      const isActive = pathname === link.href || pathname.startsWith(link.href + '/')
                      return (
                        <motion.div
                          key={link.href}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Link
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className={cn(
                              'flex items-center justify-between py-3.5 px-4 rounded-lg font-sans text-base transition-all duration-200',
                              isActive
                                ? 'bg-[#c4a053]/15 text-[#c4a053] font-semibold'
                                : 'text-[#2c2825] hover:bg-[#e8e4de] hover:pl-5'
                            )}
                          >
                            <span>{link.label}</span>
                            {isActive && (
                              <ChevronRight size={18} className="text-[#c4a053]" />
                            )}
                          </Link>
                        </motion.div>
                      )
                    })}
                  </div>
                </nav>

                {/* Sidebar Footer */}
                <div className="p-6 border-t border-[#e8e4de] space-y-4">
                  <Link
                    href="/enquiry"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-center w-full py-4 bg-[#c4a053] text-white font-sans font-semibold text-sm rounded-lg hover:bg-[#b08d3e] transition-colors shadow-sm"
                  >
                    Get a Free Quote
                  </Link>

                  <a
                    href="tel:+918905187368"
                    className="flex items-center justify-center gap-2.5 py-3 text-[#6b6560] font-sans text-sm hover:text-[#2c2825] transition-colors"
                  >
                    <Phone size={16} className="text-[#c4a053]" />
                    <span>+91 89051 87368</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
