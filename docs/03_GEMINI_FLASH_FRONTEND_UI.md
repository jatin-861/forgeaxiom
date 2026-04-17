# FORGEAXIOM — GEMINI FLASH PROMPT
## Frontend UI, Components, Animations, Pages, Styling

> **Role:** You are a Senior Frontend Developer & UI Engineer building ForgeAxiom — an Awwwards-grade developer portfolio.
> **Stack:** Next.js 14 (App Router) + Tailwind CSS + GSAP ScrollTrigger + Framer Motion + CSS Modules
> **Your Focus:** All visual components, page layouts, animations, micro-interactions, responsive design, glassmorphism/liquid glass effects, custom cursor, navigation, loading screen.

---

## DESIGN REFERENCE IMAGES

The design follows these visual references:
1. **Hero Section:** Dark cosmic space background with a large 3D crystal gem floating center-screen. Behind the crystal, huge display text "Mar_ope" / "FORGEAXIOM" style lettering. Navigation bar at top with glassmorphism blur. Star/sparkle decorative elements.
2. **Brand Card:** Shows "FORGEAXIOM" with tagline "Web Development · UI/UX · Digital Solutions" below a glowing crystal on dark space background with particles.
3. **Business Card:** Deep space background with light streaks, QR code with glowing border, services listed (Website Development, Responsive Design, E-commerce Development, Performance Optimization, Website Maintenance).
4. **Overall Vibe:** Dark (#07081A), cosmic, crystalline, premium, glassmorphism panels floating in space.

---

## PART 1: ROOT LAYOUT

```tsx
// src/app/layout.tsx
import type { Metadata } from 'next'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import localFont from 'next/font/local'
import { NavBar } from '@/components/layout/NavBar'
import { Footer } from '@/components/layout/Footer'
import { CustomCursor } from '@/components/ui/CustomCursor'
import { ScrollProgress } from '@/components/ui/ScrollProgress'
import './globals.css'

const clashDisplay = localFont({
  src: [
    { path: '../../public/fonts/ClashDisplay-Medium.woff2', weight: '500' },
    { path: '../../public/fonts/ClashDisplay-Semibold.woff2', weight: '600' },
    { path: '../../public/fonts/ClashDisplay-Bold.woff2', weight: '700' },
  ],
  variable: '--font-display',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'ForgeAxiom — Web Development · UI/UX · Digital Solutions',
    template: '%s | ForgeAxiom',
  },
  description: 'Awwwards-grade developer portfolio by Saral Banker & Jatin Basantani. Premium web development, UI/UX design, and digital solutions.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: 'ForgeAxiom',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${clashDisplay.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-abyss text-white font-body antialiased overflow-x-hidden">
        <CustomCursor />
        <ScrollProgress />
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
```

---

## PART 2: GLOBALS CSS

```css
/* src/app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* ══════════════════════════════════════════════
   FORGEAXIOM — GLOBAL DESIGN SYSTEM
   ══════════════════════════════════════════════ */

@layer base {
  :root {
    --bg-abyss: #07081A;
    --bg-void: #0D0E2A;
    --bg-nebula: #12143A;
    --clr-forge: #7C3AED;
    --clr-crystal: #A78BFA;
    --clr-electric: #818CF8;
    --clr-pulse: #C084FC;
    --clr-star: #38BDF8;
    --glass-bg: rgba(255, 255, 255, 0.04);
    --glass-border: rgba(167, 139, 250, 0.15);
    --glass-blur: blur(20px) saturate(180%);
    --ease-out: cubic-bezier(0.23, 1, 0.32, 1);
    --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
    --ease-expo: cubic-bezier(0.87, 0, 0.13, 1);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background: var(--bg-abyss);
    color: rgba(255, 255, 255, 0.87);
    cursor: none; /* Custom cursor replaces native */
  }

  ::selection {
    background: rgba(124, 58, 237, 0.4);
    color: white;
  }

  /* Scrollbar */
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background: var(--bg-abyss);
  }
  ::-webkit-scrollbar-thumb {
    background: var(--clr-forge);
    border-radius: 3px;
  }
}

@layer components {
  /* ─── GLASSMORPHISM ─── */
  .glass-card {
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(20px) saturate(180%);
    -webkit-backdrop-filter: blur(20px) saturate(180%);
    border: 1px solid rgba(167, 139, 250, 0.15);
    border-radius: 16px;
    box-shadow:
      0 8px 32px rgba(0, 0, 0, 0.4),
      inset 0 1px 0 rgba(255, 255, 255, 0.08);
    transition: all 0.3s var(--ease-out);
  }

  .glass-card:hover {
    background: rgba(255, 255, 255, 0.07);
    border-color: rgba(167, 139, 250, 0.35);
    box-shadow:
      0 16px 64px rgba(124, 58, 237, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.12);
    transform: translateY(-4px);
  }

  /* ─── GLASS NAVIGATION ─── */
  .glass-nav {
    background: rgba(7, 8, 26, 0.7);
    backdrop-filter: blur(20px) saturate(180%);
    -webkit-backdrop-filter: blur(20px) saturate(180%);
    border-bottom: 1px solid rgba(167, 139, 250, 0.1);
  }

  /* ─── GLASS INPUT ─── */
  .glass-input {
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(167, 139, 250, 0.15);
    border-radius: 12px;
    color: white;
    padding: 14px 18px;
    font-size: 16px; /* Prevents iOS zoom */
    transition: all 0.3s var(--ease-out);
  }

  .glass-input:focus {
    outline: none;
    border-color: var(--clr-forge);
    box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.15);
  }

  /* ─── MAGNETIC BUTTON ─── */
  .btn-primary {
    background: linear-gradient(135deg, var(--clr-forge), var(--clr-crystal));
    color: white;
    border: none;
    border-radius: 12px;
    padding: 14px 32px;
    font-family: var(--font-body);
    font-weight: 600;
    font-size: 16px;
    cursor: none;
    position: relative;
    overflow: hidden;
    transition: all 0.3s var(--ease-out);
  }

  .btn-primary::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, var(--clr-crystal), var(--clr-star));
    opacity: 0;
    transition: opacity 0.3s;
  }

  .btn-primary:hover::after {
    opacity: 1;
  }

  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(124, 58, 237, 0.4);
  }

  .btn-ghost {
    background: transparent;
    border: 1px solid rgba(167, 139, 250, 0.3);
    color: var(--clr-crystal);
    border-radius: 12px;
    padding: 14px 32px;
    font-weight: 600;
    cursor: none;
    transition: all 0.3s var(--ease-out);
  }

  .btn-ghost:hover {
    background: rgba(124, 58, 237, 0.1);
    border-color: var(--clr-forge);
    transform: translateY(-2px);
  }

  /* ─── SECTION CONTAINER ─── */
  .section-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: clamp(80px, 12vw, 160px) clamp(16px, 5vw, 80px);
  }

  /* ─── TAGS ─── */
  .tech-tag {
    display: inline-block;
    padding: 4px 12px;
    background: rgba(124, 58, 237, 0.1);
    border: 1px solid rgba(124, 58, 237, 0.2);
    border-radius: 4px;
    font-size: var(--fs-small, 12px);
    color: var(--clr-crystal);
    transition: all 150ms;
  }

  .tech-tag:hover {
    background: var(--clr-forge);
    color: white;
  }

  /* ─── GLOW BADGE ─── */
  .glow-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 16px;
    background: rgba(124, 58, 237, 0.08);
    border: 1px solid rgba(124, 58, 237, 0.2);
    border-radius: 50px;
    font-size: 13px;
    color: var(--clr-crystal);
    animation: pulse-glow 3s ease-in-out infinite;
  }
}

/* ─── LIQUID GLASS SVG FILTER ─── */
.liquid-glass-filter {
  display: none;
}

.liquid-glass {
  filter: url(#liquid-glass);
  backdrop-filter: blur(24px) saturate(200%);
  background: rgba(124, 58, 237, 0.06);
  border-radius: 24px;
  animation: liquid-shift 8s ease-in-out infinite;
}

@keyframes liquid-shift {
  0%, 100% { filter: hue-rotate(0deg); }
  50% { filter: hue-rotate(30deg); }
}

/* ─── COSMIC BACKGROUND ─── */
.cosmic-bg {
  background:
    radial-gradient(
      ellipse at 20% 0%,
      rgba(124, 58, 237, 0.15) 0%,
      transparent 50%
    ),
    radial-gradient(
      ellipse at 80% 100%,
      rgba(56, 189, 248, 0.08) 0%,
      transparent 50%
    ),
    var(--bg-abyss);
}

/* ─── NEBULA GRADIENT ─── */
.nebula-gradient {
  background:
    radial-gradient(
      600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
      rgba(124, 58, 237, 0.06),
      transparent 40%
    );
}
```

---

## PART 3: NAVIGATION COMPONENTS

### 3.1 NavBar
```tsx
// src/components/layout/NavBar.tsx
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MobileMenu } from './MobileMenu'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/work', label: 'Work' },
  { href: '/team', label: 'Team' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export function NavBar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      setScrolled(currentY > 50)
      setHidden(currentY > lastScrollY && currentY > 100)
      setLastScrollY(currentY)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300
          ${scrolled ? 'glass-nav' : 'bg-transparent'}
          ${hidden ? '-translate-y-full' : 'translate-y-0'}
        `}
      >
        <nav className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* Crystal SVG icon + wordmark */}
            <svg className="w-8 h-8 text-forge group-hover:animate-spin transition-transform duration-600" viewBox="0 0 32 32">
              <polygon points="16,2 28,12 24,28 8,28 4,12" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              <polygon points="16,6 24,14 21,24 11,24 8,14" fill="currentColor" opacity="0.2"/>
            </svg>
            <span className="font-display font-bold text-lg tracking-wider">
              FORGEAXIOM
            </span>
          </Link>

          {/* Desktop Nav Links - Glass pill container */}
          <div className="hidden lg:flex items-center gap-1 px-2 py-1.5 rounded-full glass-card !border-opacity-10 !bg-opacity-[0.03]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                  ${pathname === link.href
                    ? 'bg-forge/20 text-white'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                  }
                `}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <Link href="/contact" className="hidden lg:block btn-primary text-sm py-2.5 px-6">
              Let's Talk
            </Link>
            <button
              className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} links={navLinks} />
    </>
  )
}
```

### 3.2 Mobile Menu
```tsx
// src/components/layout/MobileMenu.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  links: { href: string; label: string }[]
}

export function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  const pathname = usePathname()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  // Close on route change
  useEffect(() => { onClose() }, [pathname, onClose])

  return (
    <div
      className={`
        fixed inset-0 z-40 bg-abyss/95 backdrop-blur-xl
        transition-all duration-500
        ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
      `}
    >
      <nav className="flex flex-col items-center justify-center h-full gap-8">
        {links.map((link, i) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className={`
              text-4xl font-display font-bold tracking-wider
              transition-all duration-500
              ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
              ${pathname === link.href ? 'text-forge' : 'text-white/70 hover:text-white'}
            `}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/contact"
          onClick={onClose}
          className="btn-primary mt-8 text-xl px-12 py-4"
          style={{ transitionDelay: `${links.length * 100}ms` }}
        >
          Let's Talk
        </Link>
      </nav>
    </div>
  )
}
```

---

## PART 4: UI COMPONENTS

### 4.1 Custom Cursor (Option A — Crystal Dot + Ring)
```tsx
// src/components/ui/CustomCursor.tsx
'use client'

import { useEffect, useState, useRef } from 'react'

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const [isTouch, setIsTouch] = useState(false)
  const position = useRef({ x: 0, y: 0 })
  const ringPosition = useRef({ x: 0, y: 0 })

  useEffect(() => {
    // Detect touch device
    setIsTouch('ontouchstart' in window)

    const handleMouseMove = (e: MouseEvent) => {
      position.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 5}px, ${e.clientY - 5}px)`
      }
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('a, button, [role="button"], input, textarea, select')) {
        setIsHovering(true)
      }
    }

    const handleMouseOut = () => setIsHovering(false)

    // Spring lag animation for ring
    const animate = () => {
      ringPosition.current.x += (position.current.x - ringPosition.current.x) * 0.15
      ringPosition.current.y += (position.current.y - ringPosition.current.y) * 0.15
      if (ringRef.current) {
        const size = isHovering ? 60 : 40
        ringRef.current.style.transform = `translate(${ringPosition.current.x - size / 2}px, ${ringPosition.current.y - size / 2}px)`
        ringRef.current.style.width = `${size}px`
        ringRef.current.style.height = `${size}px`
      }
      requestAnimationFrame(animate)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)
    const animFrame = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
      cancelAnimationFrame(animFrame)
    }
  }, [isHovering])

  if (isTouch) return null

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-forge z-[9999] pointer-events-none mix-blend-difference"
        style={{ willChange: 'transform' }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        className={`
          fixed top-0 left-0 rounded-full border-2 z-[9998] pointer-events-none
          transition-[width,height,background] duration-200
          ${isHovering
            ? 'border-forge/50 bg-forge/10'
            : 'border-crystal/30 bg-transparent'
          }
        `}
        style={{ willChange: 'transform', width: 40, height: 40 }}
      />
    </>
  )
}
```

### 4.2 Scroll Progress Bar
```tsx
// src/components/ui/ScrollProgress.tsx
'use client'

import { useEffect, useState } from 'react'

export function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-[2px] z-[60] bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-forge via-crystal to-star"
        style={{ width: `${progress}%`, transition: 'width 100ms linear' }}
      />
    </div>
  )
}
```

### 4.3 Animated Counter
```tsx
// src/components/ui/AnimatedCounter.tsx
'use client'

import { useEffect, useState, useRef } from 'react'
import { useInView } from '@/hooks/useInView'

interface AnimatedCounterProps {
  target: number
  suffix?: string
  prefix?: string
  duration?: number
  label: string
}

export function AnimatedCounter({
  target,
  suffix = '',
  prefix = '',
  duration = 2000,
  label,
}: AnimatedCounterProps) {
  const { ref, inView } = useInView()
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let startTime: number
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [inView, target, duration])

  return (
    <div ref={ref as any} className="text-center">
      <div className="font-display text-h1 font-bold text-white">
        {prefix}{count}{suffix}
      </div>
      <div className="text-sm text-white/50 mt-2">{label}</div>
    </div>
  )
}
```

### 4.4 Marquee Strip
```tsx
// src/components/ui/MarqueeStrip.tsx
'use client'

const techs = [
  'REACT', 'NODE.JS', 'THREE.JS', 'FIGMA', 'NEXT.JS',
  'TAILWIND', 'MONGODB', 'GSAP', 'WEBGL', 'TYPESCRIPT',
  'FRAMER MOTION', 'VERCEL', 'NOTION',
]

export function MarqueeStrip() {
  return (
    <div className="relative overflow-hidden py-6 glass-nav">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...techs, ...techs].map((tech, i) => (
          <span
            key={i}
            className={`mx-8 text-lg font-display font-bold tracking-wider ${
              i % 2 === 0 ? 'text-forge' : 'text-white/40'
            }`}
          >
            {tech} ·
          </span>
        ))}
      </div>
      {/* Add to globals.css: */}
      {/* @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } } */}
      {/* .animate-marquee { animation: marquee 30s linear infinite; } */}
    </div>
  )
}
```

### 4.5 GlassCard Component
```tsx
// src/components/ui/GlassCard.tsx
interface GlassCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  tilt?: boolean
}

export function GlassCard({ children, className = '', hover = true, tilt = false }: GlassCardProps) {
  return (
    <div className={`glass-card p-8 ${hover ? '' : '!transition-none hover:!transform-none'} ${className}`}>
      {children}
    </div>
  )
}
```

---

## PART 5: PAGE SECTIONS

### 5.1 Hero Section (Home)
```tsx
// src/components/sections/HeroSection.tsx
'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import { CrystalFallback } from '@/components/3d/CrystalFallback'

// Dynamic import — no SSR for Three.js
const CrystalScene = dynamic(
  () => import('@/components/3d/CrystalScene'),
  { ssr: false, loading: () => <CrystalFallback /> }
)

export function HeroSection() {
  return (
    <section className="relative h-[100dvh] flex items-center justify-center overflow-hidden cosmic-bg">
      {/* Particle dust overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="stars" /> {/* CSS stars or canvas */}
      </div>

      {/* 3D Crystal — positioned center-right */}
      <div className="absolute inset-0 z-10">
        <CrystalScene />
      </div>

      {/* Hero Text Content */}
      <div className="relative z-20 text-center max-w-5xl px-6">
        <div className="glow-badge mb-8 mx-auto w-fit">
          <span className="w-2 h-2 rounded-full bg-signal animate-pulse" />
          <span>Available for Projects</span>
        </div>

        <h1 className="font-display font-bold text-hero leading-[0.95] tracking-tight">
          <span className="block">WE FORGE</span>
          <span className="block bg-gradient-to-r from-forge via-crystal to-star bg-clip-text text-transparent">
            DIGITAL AXIOMS
          </span>
        </h1>

        <p className="text-lg text-white/50 mt-6 max-w-lg mx-auto">
          Web Development · UI/UX · Digital Solutions
        </p>

        <div className="flex gap-4 justify-center mt-10">
          <Link href="/work" className="btn-primary">
            See Our Work
          </Link>
          <Link href="/contact" className="btn-ghost">
            Book a Call
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/30">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
        </svg>
      </div>
    </section>
  )
}
```

### 5.2 Stats Section
```tsx
// src/components/sections/StatsSection.tsx
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'

const stats = [
  { target: 4, suffix: '+', label: 'Projects Delivered' },
  { target: 2, suffix: '', label: 'Developers' },
  { target: 100, suffix: '%', label: 'Client Satisfaction' },
  { target: 3, suffix: '+', label: 'Years Experience' },
]

export function StatsSection() {
  return (
    <section className="section-container">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <AnimatedCounter
            key={stat.label}
            target={stat.target}
            suffix={stat.suffix}
            label={stat.label}
          />
        ))}
      </div>
    </section>
  )
}
```

### 5.3 CTA Banner
```tsx
// src/components/sections/CTABanner.tsx
import Link from 'next/link'

export function CTABanner() {
  return (
    <section className="section-container">
      <div className="glass-card p-12 lg:p-16 text-center cosmic-bg rounded-liquid">
        <h2 className="font-display text-h1 font-bold mb-4">
          Ready to forge your digital presence?
        </h2>
        <p className="text-white/50 mb-8 max-w-lg mx-auto">
          Let's build something extraordinary together.
          Premium web development & design for ambitious brands.
        </p>
        <Link href="/contact" className="btn-primary text-lg px-10 py-4">
          Start a Project
        </Link>
      </div>
    </section>
  )
}
```

---

## PART 6: HOME PAGE ASSEMBLY

```tsx
// src/app/page.tsx
import { HeroSection } from '@/components/sections/HeroSection'
import { MarqueeStrip } from '@/components/ui/MarqueeStrip'
import { StatsSection } from '@/components/sections/StatsSection'
import { FeaturedWork } from '@/components/sections/FeaturedWork'
import { ServicesTeaser } from '@/components/sections/ServicesTeaser'
import { CTABanner } from '@/components/sections/CTABanner'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MarqueeStrip />
      <StatsSection />
      <FeaturedWork />
      <ServicesTeaser />
      <CTABanner />
    </>
  )
}
```

---

## PART 7: LOADING SCREEN (Option A — Cinematic Crystal Formation)

```tsx
// src/components/layout/LoadingScreen.tsx
'use client'

import { useState, useEffect } from 'react'

export function LoadingScreen() {
  const [phase, setPhase] = useState(1)
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    // Phase progression
    const t1 = setTimeout(() => setPhase(2), 800)
    const t2 = setTimeout(() => setPhase(3), 1600)
    const t3 = setTimeout(() => setPhase(4), 2400)
    const t4 = setTimeout(() => setVisible(false), 3000)

    // Progress bar
    const interval = setInterval(() => {
      setProgress((p) => Math.min(p + 2, 100))
    }, 50)

    return () => {
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4)
      clearInterval(interval)
    }
  }, [])

  if (!visible) return null

  return (
    <div
      className={`
        fixed inset-0 z-[100] bg-abyss flex flex-col items-center justify-center
        transition-all duration-500
        ${phase === 4 ? 'opacity-0 scale-110' : 'opacity-100 scale-100'}
      `}
    >
      {/* Crystal formation animation */}
      <div className={`
        relative w-24 h-32 transition-all duration-800
        ${phase >= 1 ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}
      `}>
        {/* Crystal SVG faces that scale in */}
        <svg viewBox="0 0 96 128" className="w-full h-full">
          <polygon
            points="48,4 88,48 72,120 24,120 8,48"
            fill="none"
            stroke="#7C3AED"
            strokeWidth="1.5"
            className={`transition-all duration-500 ${phase >= 1 ? 'opacity-100' : 'opacity-0'}`}
          />
          <polygon
            points="48,4 88,48 48,64"
            fill="rgba(124, 58, 237, 0.15)"
            className={`transition-all duration-500 delay-100 ${phase >= 1 ? 'opacity-100' : 'opacity-0'}`}
          />
          <polygon
            points="48,4 8,48 48,64"
            fill="rgba(167, 139, 250, 0.1)"
            className={`transition-all duration-500 delay-200 ${phase >= 1 ? 'opacity-100' : 'opacity-0'}`}
          />
        </svg>

        {/* Glow pulse in phase 2 */}
        {phase >= 2 && (
          <div className="absolute inset-0 rounded-full bg-forge/20 blur-3xl animate-pulse" />
        )}
      </div>

      {/* Wordmark types in phase 2 */}
      <h2 className={`
        font-display text-2xl font-bold mt-8 tracking-[0.3em]
        transition-all duration-500
        ${phase >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
      `}>
        FORGEAXIOM
      </h2>

      {/* Progress bar in phase 3 */}
      <div className={`
        w-48 h-[2px] bg-white/10 mt-6 rounded-full overflow-hidden
        transition-opacity duration-300
        ${phase >= 3 ? 'opacity-100' : 'opacity-0'}
      `}>
        <div
          className="h-full bg-forge rounded-full transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}
```

---

## PART 8: FOOTER

```tsx
// src/components/layout/Footer.tsx
import Link from 'next/link'
import { Github, Linkedin, Twitter, Dribbble, Mail } from 'lucide-react'

const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'Team', href: '/team' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

const socialLinks = [
  { icon: Github, href: 'https://github.com/forgeaxiom', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/company/forgeaxiom', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/forgeaxiom', label: 'Twitter' },
  { icon: Dribbble, href: 'https://dribbble.com/forgeaxiom', label: 'Dribbble' },
]

export function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="section-container !py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-display font-bold text-xl mb-4">FORGEAXIOM</h3>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Crafting premium digital experiences. Web development, UI/UX design, and digital solutions for ambitious brands.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-sm text-white/60 mb-4 uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/40 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm text-white/60 mb-4 uppercase tracking-wider">Get in Touch</h4>
            <a href="mailto:info@forgeaxiom.dev" className="flex items-center gap-2 text-white/40 hover:text-forge transition-colors text-sm mb-4">
              <Mail className="w-4 h-4" /> info@forgeaxiom.dev
            </a>
            <div className="flex gap-4 mt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full glass-card !p-0 flex items-center justify-center text-white/40 hover:text-forge hover:scale-110 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} ForgeAxiom. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            Designed & Developed by Saral Banker × Jatin Basantani
          </p>
        </div>
      </div>
    </footer>
  )
}
```

---

## PART 9: GSAP SCROLL ANIMATION MAP

Use this map when implementing GSAP ScrollTrigger on each section:

| Section | Trigger | Animation | Scrub |
|---------|---------|-----------|-------|
| Hero Text | On load | SplitText chars stagger in from y:60, opacity:0 | No |
| Crystal | Always | Continuous Y-rotation + mouse parallax | No |
| Marquee | Enter viewport | CSS infinite scroll | No |
| Stats | Enter viewport | Count 0→target over 2s | No |
| Featured Work | Enter viewport | Cards fromTo y:80→0, opacity:0→1, stagger:0.2 | No |
| Services Teaser | Enter viewport | Tiles scale 0.9→1, opacity 0→1, stagger:0.15 | No |
| Services Page | Scroll through | Horizontal scroll (pinned) | Yes |
| Work Grid | Enter viewport | Masonry items fall in stagger | No |
| Team Cards | Enter viewport | Slide from left/right alternating | No |
| Blog Cards | Enter viewport | Fade + translateY stagger | No |
| Contact Form | Enter viewport | Fields animate in sequentially | No |

---

## PART 10: MICRO-INTERACTIONS REFERENCE

- **Button hover:** background fill wipe left→right (CSS ::after, clip-path)
- **Link hover:** text slides up 2px + underline draws from left
- **Card hover:** translateY(-4px) + deeper box-shadow + border opacity increase
- **Input focus:** border-color → purple + subtle glow ring
- **Tag hover:** background fills purple + text inverts (150ms)
- **Logo hover:** crystal icon rotates 360deg (600ms ease-in-out)
- **Social icons:** scale(1.2) + color → purple on hover
- **Mobile menu open:** hamburger morphs to × (path animation, 300ms)
- **Scroll progress:** thin purple line at top growing with scroll

---

## INSTRUCTIONS FOR GEMINI FLASH

When building components, follow these rules:

1. **'use client'** — Add to any component using hooks, event handlers, or browser APIs
2. **Glass Everything** — All cards, inputs, nav use glassmorphism tokens defined in globals.css
3. **Dark Canvas** — NEVER use white/light backgrounds. Everything sits on #07081A → #0D0E2A → #12143A
4. **Purple Energy** — #7C3AED is the signature accent. Use it for hovers, CTAs, glows, active states
5. **Fluid Typography** — Use CSS clamp() values — never hardcoded pixel breakpoints for font sizes
6. **Animation Priority** — GSAP for scroll-based, Framer Motion for page transitions, CSS for micro-interactions
7. **Mobile First** — Layout must work at 375px width. Enhance up to 1536px
8. **No Layout Shift** — Always reserve space for dynamic content (crystal, images, counters)
9. **Custom Cursor** — cursor: none on all elements, custom cursor component handles the rest
10. **Performance** — backdrop-filter: blur(12px) on mobile (reduced from 20px). Disable particles on reduced-motion
