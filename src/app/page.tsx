'use client'

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { CrystalFallback } from '@/components/3d/CrystalFallback'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { MarqueeStrip } from '@/components/sections/MarqueeStrip'
import { StatsSection } from '@/components/sections/StatsSection'
import { FeaturedWork } from '@/components/sections/FeaturedWork'
import { ServicesTeaser } from '@/components/sections/ServicesTeaser'
import { CTABanner } from '@/components/sections/CTABanner'
import Link from 'next/link'

// Dynamically import Three.js scene (no SSR to avoid hydration errors)
const CrystalScene = dynamic(
  () => import('@/components/3d/CrystalScene'),
  { ssr: false, loading: () => <CrystalFallback /> }
)

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="relative min-h-screen">

      {/* HERO SECTION */}
      <section className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden">
        {/* 3D Canvas Layer */}
        <div className="fixed inset-0 z-0 opacity-80 pointer-events-none">
          {mounted && <CrystalScene />}
        </div>

        <div className="section-container relative z-10">
          {/* HERO CONTENT */}
          <div className="max-w-4xl pt-20">
            <div className="glow-badge mb-6 w-max">
              <span className="w-2 h-2 rounded-full bg-signal animate-pulse"></span>
              Available for Projects
            </div>

            <h1 className="text-hero font-display font-semibold leading-[0.9] tracking-tighter mb-4 uppercase text-glow">
              WE FORGE
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-forge via-crystal to-star text-glow-forge">
                DIGITAL AXIOMS
              </span>
            </h1>

            <p className="text-h3 text-white/70 max-w-xl font-body mb-10 leading-relaxed text-glow">
              Premium Web Development studio creating Awwwards-grade digital experiences with 3D interaction and cinematic motion.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/work">
                <MagneticButton className="min-w-[180px]">See Our Work</MagneticButton>
              </Link>
              <Link href="/contact">
                <MagneticButton variant="ghost" className="min-w-[180px]">Book a Call</MagneticButton>
              </Link>
            </div>
          </div>
        </div>

        {/* SCROLL INDICATOR */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
          <span className="text-small tracking-[0.3em] uppercase text-crystal font-medium">Scroll</span>
          <div className="w-px h-16 bg-gradient-to-b from-crystal/50 to-transparent" />
        </div>
      </section>

      {/* MARQUEE SECTION */}
      <MarqueeStrip />

      {/* STATS SECTION */}
      <StatsSection />

      {/* FEATURED WORK SECTION */}
      <FeaturedWork />

      {/* SERVICES SECTION */}
      <ServicesTeaser />

      {/* CTA BANNER */}
      <CTABanner />

    </div>
  )
}
