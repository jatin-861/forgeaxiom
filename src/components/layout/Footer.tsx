'use client'

import Link from 'next/link'
import { Mail, Globe, MessageCircle, Link as LinkIcon, ArrowUpRight } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-abyss pt-20 pb-10 border-t border-crystal/10 overflow-hidden">
      {/* Background Decorative Pulsing Light */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-forge/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Infinite Footer Ticker */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen overflow-hidden opacity-5 pointer-events-none">
        <div className="flex animate-marquee whitespace-nowrap text-[120px] font-display font-bold text-white uppercase py-10">
          FORGEAXIOM · DIGITAL STUDIO · FORGEAXIOM · DIGITAL STUDIO · FORGEAXIOM · DIGITAL STUDIO · 
        </div>
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* BRAND COLUMN */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 group mb-6">
              <div className="w-10 h-10 rounded bg-gradient-to-br from-forge to-crystal flex items-center justify-center transform group-hover:rotate-12 transition-transform">
                <div className="w-5 h-5 bg-abyss rotate-45 transform" />
              </div>
              <span className="font-display font-medium tracking-widest text-2xl text-white">
                FORGEAXIOM
              </span>
            </Link>
            <p className="text-white/60 max-w-sm font-body text-lg leading-relaxed">
              We forge digital axioms through code and design. 
              A premium studio dedicated to building high-fidelity web experiences 
              that leave a lasting impression.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-display font-medium text-white text-lg mb-6 uppercase tracking-widest">Navigation</h4>
            <ul className="flex flex-col gap-4">
              {['Home', 'Work', 'Services', 'Team', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-white/50 hover:text-crystal transition-colors flex items-center gap-1 group"
                  >
                    {item}
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SOCIALS & CONTACT */}
          <div>
            <h4 className="font-display font-medium text-white text-lg mb-6 uppercase tracking-widest">Connect</h4>
            <div className="flex gap-4 mb-8">
              {[
                { icon: Globe, href: '#' },
                { icon: Mail, href: '#' },
                { icon: MessageCircle, href: '#' },
                { icon: LinkIcon, href: '#' },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-forge/20 border-crystal/10 transition-colors"
                >
                  <social.icon size={20} className="text-white/70" />
                </a>
              ))}
            </div>
            <div>
              <p className="text-small text-white/40 uppercase tracking-widest mb-2">Inquiries</p>
              <a href="mailto:hello@forgeaxiom.com" className="text-white hover:text-crystal transition-colors text-lg">
                hello@forgeaxiom.com
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-white/5 gap-6">
          <p className="text-white/40 text-sm font-body">
            © {currentYear} ForgeAxiom. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link href="/privacy" className="text-white/40 hover:text-white transition-colors text-sm">Privacy Policy</Link>
            <Link href="/terms" className="text-white/40 hover:text-white transition-colors text-sm">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
