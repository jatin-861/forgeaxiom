'use client'

import { MagneticButton } from '@/components/ui/MagneticButton'
import { motion } from 'framer-motion'
import Link from 'next/link'

export function CTABanner() {
  return (
    <section className="section-container relative py-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-forge/10 to-transparent -z-10" />

      <div className="glass-card relative border-white/10 p-12 md:p-24 text-center overflow-hidden">
        {/* Animated Background Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-1/2 -left-1/4 w-[600px] h-[600px] bg-crystal/20 rounded-full blur-[100px] pointer-events-none"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-1/2 -right-1/4 w-[500px] h-[500px] bg-star/20 rounded-full blur-[100px] pointer-events-none"
        />

        <div className="relative z-10">
          <h2 className="text-h1 font-display font-semibold mb-6 uppercase tracking-tight leading-[1] max-w-4xl mx-auto">
            Ready to forge your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-forge to-star">
              digital presence?
            </span>
          </h2>

          <p className="text-white/60 text-lg md:text-xl font-body mb-12 max-w-2xl mx-auto">
            Let's build something extraordinary together. From design systems to complex full-stack architectures, we deliver perfection.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link href="/contact">
              <MagneticButton>Start a Project</MagneticButton>
            </Link>
            <Link href="/work" className="text-white/50 hover:text-white transition-colors uppercase tracking-widest text-small font-medium">
              Explore Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
