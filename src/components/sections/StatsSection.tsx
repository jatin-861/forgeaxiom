'use client'

import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { motion } from 'framer-motion'

const stats = [
  { label: 'Projects Delivered', value: 4, suffix: '+' },
  { label: 'Developers', value: 2, suffix: '' },
  { label: 'Client Satisfaction', value: 100, suffix: '%' },
  { label: 'Years Experience', value: 3, suffix: '+' },
]

export function StatsSection() {
  return (
    <section className="section-container">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.8 }}
            className="flex flex-col items-center text-center p-8 glass-card border-white/5"
          >
            <div className="text-4xl md:text-6xl font-display font-semibold text-white mb-2">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </div>
            <p className="text-small uppercase tracking-widest text-crystal/60 font-medium">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
