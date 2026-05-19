'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  badge?: string
  label?: string
  title: string
  description?: string
  subtitle?: string
  center?: boolean
  centered?: boolean
  light?: boolean
  className?: string
}

export function SectionHeading({
  badge,
  label,
  title,
  description,
  subtitle,
  center,
  centered = false,
  light = false,
  className,
}: SectionHeadingProps) {
  // Support both "badge" and "label", "description" and "subtitle", "center" and "centered"
  const displayLabel = badge || label
  const displaySubtitle = description || subtitle
  const isCentered = center || centered
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn('mb-14', isCentered && 'text-center', className)}
    >
      {displayLabel && (
        <p
          className={cn(
            'text-xs font-sans font-semibold tracking-[0.2em] uppercase mb-4',
            light ? 'text-primary/80' : 'text-primary'
          )}
        >
          {displayLabel}
        </p>
      )}
      <h2
        className={cn(
          'font-serif font-medium leading-tight whitespace-pre-line text-balance',
          'text-3xl sm:text-4xl md:text-5xl',
          light ? 'text-white' : 'text-foreground'
        )}
      >
        {title}
      </h2>
      <div
        className={cn(
          'mt-4 h-px w-12',
          isCentered && 'mx-auto',
          light ? 'bg-primary/60' : 'bg-primary'
        )}
      />
      {displaySubtitle && (
        <p
          className={cn(
            'mt-6 text-base md:text-lg leading-relaxed max-w-2xl font-sans',
            isCentered && 'mx-auto',
            light ? 'text-white/70' : 'text-muted-foreground'
          )}
        >
          {displaySubtitle}
        </p>
      )}
    </motion.div>
  )
}

export default SectionHeading
