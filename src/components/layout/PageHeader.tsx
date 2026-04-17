'use client'

import { motion } from 'framer-motion'

interface PageHeaderProps {
  title: string
  subtitle?: string
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="section-container !pb-10 pt-48 relative overflow-hidden">
      {/* Background Decorative Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-screen bg-forge/5 blur-[120px] rounded-full -z-10 pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className="max-w-4xl"
      >
        <h1 className="text-hero font-display font-semibold uppercase tracking-tighter leading-[0.9] mb-6">
          {title}
        </h1>
        {subtitle && (
          <p className="text-h3 text-white/60 font-body max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </motion.div>
    </section>
  )
}
