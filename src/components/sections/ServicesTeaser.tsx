'use client'

import { GlassCard } from '@/components/ui/GlassCard'
import { motion } from 'framer-motion'
import { Code2, Palette, Globe } from 'lucide-react'

const services = [
  {
    title: 'Web Development',
    desc: 'Bespoke full-stack applications built with modern frameworks and scalable architectures.',
    icon: Code2,
    techs: ['Next.js', 'Node.js', 'MongoDB', 'TypeScript']
  },
  {
    title: 'UI/UX Design',
    desc: 'Premium design systems and user journeys that balance aesthetics with functionality.',
    icon: Palette,
    techs: ['Figma', 'GSAP', 'Framer', 'Motion']
  },
  {
    title: 'Digital Solutions',
    desc: 'Strategic digital roadmaps, SEO optimization, and high-conversion landing pages.',
    icon: Globe,
    techs: ['SEO', 'Marketing', 'Systems', 'Scalability']
  }
]

export function ServicesTeaser() {
  return (
    <section className="section-container">
      <div className="text-center mb-16">
        <span className="text-small tracking-[0.3em] uppercase text-crystal/60 font-medium mb-4 block">Expertise</span>
        <h2 className="text-h1 font-display font-semibold uppercase">Our Specializations</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.8 }}
          >
            <GlassCard className="h-full flex flex-col group hover:bg-white/[0.08] transition-colors border-white/5">
              <div className="w-14 h-14 rounded-2xl bg-forge/10 flex items-center justify-center mb-8 group-hover:bg-forge/20 transition-colors">
                <service.icon size={28} className="text-crystal" />
              </div>
              <h3 className="text-2xl font-display font-medium text-white mb-4">{service.title}</h3>
              <p className="text-white/60 font-body mb-8 flex-1">{service.desc}</p>
              
              <div className="flex flex-wrap gap-2">
                {service.techs.map((tech) => (
                  <span key={tech} className="tech-tag text-[10px] py-1 px-3">
                    {tech}
                  </span>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
