'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'
import SectionHeading from '@/components/section-heading'
import { faqs } from '@/lib/data/faqs'

const featured = faqs.slice(0, 4)

export default function FAQSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <section className="py-20 md:py-28 bg-background" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="FAQ"
          title={'Questions We Hear\nMost Often'}
          subtitle="Everything you need to know before getting started with your interior project."
          centered
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="space-y-3"
        >
          {featured.map((faq) => (
            <div
              key={faq.id}
              className={`border rounded-lg px-6 bg-card transition-colors ${
                openId === faq.id ? 'border-primary/30' : 'border-border'
              }`}
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full flex items-center justify-between py-5 text-left"
              >
                <span className="font-serif text-base md:text-lg font-medium text-foreground pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`text-muted-foreground shrink-0 transition-transform duration-200 ${
                    openId === faq.id ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openId === faq.id && (
                <div className="pb-5 text-muted-foreground font-sans text-sm leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </motion.div>

        <div className="mt-10 text-center">
          <Link href="/faq">
            <span className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-primary hover:gap-3 transition-all cursor-pointer">
              View All FAQs <ArrowRight size={15} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
