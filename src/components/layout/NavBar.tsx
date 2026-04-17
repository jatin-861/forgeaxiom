'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { MagneticButton } from '../ui/MagneticButton'

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'
        }`}
    >
      <div className="section-container !py-0 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded bg-gradient-to-br from-forge to-crystal flex items-center justify-center transform group-hover:rotate-12 transition-transform">
            <div className="w-4 h-4 bg-abyss rotate-45 transform" />
          </div>
          <span className="font-display font-medium tracking-widest text-xl text-white">
            FORGEAXIOM
          </span>
        </Link>

        {/* DESKTOP NAV (Pill) */}
        <div className="hidden md:flex items-center gap-1 bg-abyss/70 backdrop-blur-md border border-crystal/10 rounded-full px-2 py-2">
          {['Work', 'Services', 'Team', 'Blog'].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="px-6 py-2 rounded-full text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 transition-all"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Link href="/contact">
            <MagneticButton className="px-8 flex items-center justify-center">Let&apos;s Talk</MagneticButton>
          </Link>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU (Full Screen Overlay) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-abyss/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8">
          {['Work', 'Services', 'Team', 'Blog', 'Contact'].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-3xl font-display font-medium text-white hover:text-crystal transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
