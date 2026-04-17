import type { Metadata } from 'next'
import { Space_Grotesk, JetBrains_Mono, Outfit } from 'next/font/google'
import { NavBar } from '@/components/layout/NavBar'
import { Footer } from '@/components/layout/Footer'
import { CustomCursor } from '@/components/ui/CustomCursor'
import { ScrollProgress } from '@/components/ui/ScrollProgress'
import './globals.css'

// Fonts
const clashDisplay = Outfit({
  subsets: ['latin'],
  variable: '--font-display',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-body',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'ForgeAxiom | Digital Studio',
  description: 'Awwwards-grade developer portfolio for ForgeAxiom.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${clashDisplay.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-body bg-abyss text-white antialiased`}
      >
        <ScrollProgress />
        <CustomCursor />
        <NavBar />
        <main className="relative z-10">{children}</main>
        <Footer />

        {/* SVG Filter for Liquid Glass */}
        <svg className="liquid-glass-filter">
          <filter id="liquid-glass" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="3" seed="2" result="noise">
              <animate attributeName="baseFrequency" values="0.015;0.02;0.015" dur="10s" repeatCount="indefinite" />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="35" xChannelSelector="R" yChannelSelector="G" result="distort" />
            <feGaussianBlur in="distort" stdDeviation="2" result="blur" />
            <feComposite in="blur" in2="SourceGraphic" operator="over" />
          </filter>

          <filter id="chromatic-aberration">
            <feColorMatrix type="matrix" values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" in="SourceGraphic" result="red" />
            <feOffset dx="2" dy="0" in="red" result="red-offset" />
            <feColorMatrix type="matrix" values="0 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0" in="SourceGraphic" result="cyan" />
            <feOffset dx="-2" dy="0" in="cyan" result="cyan-offset" />
            <feBlend mode="screen" in="red-offset" in2="cyan-offset" />
          </filter>
        </svg>
      </body>
    </html>
  )
}
