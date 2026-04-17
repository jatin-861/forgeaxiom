'use client'

import { GlassCard } from '@/components/ui/GlassCard'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

const projects = [
  {
    title: 'Vaidya AI',
    category: 'Full Stack App',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070',
    color: '#7C3AED'
  },
  {
    title: 'Macros Nutri',
    category: 'E-commerce UI-UX',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=2070',
    color: '#38BDF8'
  }
]

export function FeaturedWork() {
  return (
    <section className="section-container relative overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div>
          <h2 className="text-h1 font-display font-semibold mb-4 uppercase tracking-tighter">
            Featured <br /><span className="text-white/40 italic font-medium">Work</span>
          </h2>
          <p className="text-white/60 max-w-sm font-body">
            A selection of our most impactful digital weapons, 
            forged with precision and intent.
          </p>
        </div>
        
        <Link href="/work">
          <MagneticButton variant="ghost">View All Projects</MagneticButton>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2, duration: 0.8 }}
          >
            <GlassCard tilt className="group !p-0 aspect-[16/10] flex flex-col">
              {/* Image Container */}
              <div className="relative flex-1 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-abyss/80 via-transparent to-transparent" />
                
                {/* Info Overlay */}
                <div className="absolute inset-x-8 bottom-8 flex justify-between items-end">
                  <div>
                    <span className="text-small uppercase tracking-widest text-crystal/80 mb-2 block">{project.category} · {project.year}</span>
                    <h3 className="text-2xl md:text-3xl font-display font-medium text-white">{project.title}</h3>
                  </div>
                  <div className="w-12 h-12 rounded-full glass-card border-white/20 flex items-center justify-center -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <ArrowUpRight size={24} className="text-white" />
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-screen bg-forge/5 blur-[120px] rounded-full -z-10 pointer-events-none" />
    </section>
  )
}
