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
