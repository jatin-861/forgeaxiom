'use client'

import { motion } from 'framer-motion'

const techs = [
  'REACT', 'NEXT.JS 14', 'THREE.JS', 'GSAP', 'FRAMER MOTION', 'NOTION CMS', 'TAILWIND CSS', 'TYPESCRIPT', 'WEBGL', 'NODE.JS', 'MONGODB'
]

export function MarqueeStrip() {
  return (
    <div className="relative py-12 overflow-hidden bg-white/[0.02] border-y border-white/5 pointer-events-none">
      <div className="flex whitespace-nowrap">
        {/* First Loop */}
        <div className="flex animate-marquee items-center">
          {techs.concat(techs).map((tech, i) => (
            <div key={i} className="flex items-center">
              <span className="text-2xl md:text-3xl font-display font-medium px-8 text-white/40 tracking-widest hover:text-crystal transition-colors duration-500">
                {tech}
              </span>
              <div className="w-2 h-2 rounded-full bg-forge/30 mx-4" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
