'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  variant?: 'primary' | 'ghost'
  pill?: boolean
}

export function MagneticButton({
  children,
  className,
  onClick,
  variant = 'primary',
  pill = true,
}: MagneticButtonProps) {
  const container = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const currentContainer = container.current
    if (!currentContainer) return

    const xTo = gsap.quickTo(currentContainer, 'x', { duration: 1, ease: 'elastic.out(1, 0.3)' })
    const yTo = gsap.quickTo(currentContainer, 'y', { duration: 1, ease: 'elastic.out(1, 0.3)' })

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { height, width, left, top } = currentContainer.getBoundingClientRect()
      const x = clientX - (left + width / 2)
      const y = clientY - (top + height / 2)
      xTo(x * 0.35)
      yTo(y * 0.35)
    }

    const handleMouseLeave = () => {
      xTo(0)
      yTo(0)
    }

    currentContainer.addEventListener('mousemove', handleMouseMove)
    currentContainer.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      currentContainer.removeEventListener('mousemove', handleMouseMove)
      currentContainer.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div className="relative group p-2">
      <div
        ref={container}
        onClick={onClick}
        className={cn(
          'cursor-none select-none relative z-10 block whitespace-nowrap overflow-hidden transition-all duration-500',
          variant === 'primary' ? 'bg-white/5 border border-white/10' : 'bg-transparent',
          pill ? 'rounded-full px-8 py-3' : 'rounded-xl px-6 py-3',
          'backdrop-blur-xl',
          className
        )}
      >
        {/* Liquid Light Border Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-[-1px] bg-[conic-gradient(from_0deg,transparent_0deg,#d946ef_90deg,transparent_180deg,#3b82f6_270deg,transparent_360deg)] animate-[spin_4s_linear_infinite]" />
          <div className="absolute inset-[1px] bg-[#050505] rounded-[inherit]" />
        </div>

        <span className="relative z-20 mix-blend-difference group-hover:text-white transition-colors duration-500">
          {children}
        </span>

        {/* Inner Glare/Refraction */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </div>

      {/* Outer Magnetic Glow */}
      <div className="absolute inset-0 bg-forge/10 rounded-full scale-0 group-hover:scale-125 transition-transform duration-700 blur-2xl -z-10 group-active:scale-100" />
    </div>
  )
}
