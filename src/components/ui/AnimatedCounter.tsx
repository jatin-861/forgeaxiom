'use client'

import { useEffect, useRef } from 'react'
import { useInView, motion, useSpring, useTransform } from 'framer-motion'

interface AnimatedCounterProps {
  value: number
  duration?: number
  className?: string
  suffix?: string
}

export function AnimatedCounter({ value, className, suffix = '' }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  
  const spring = useSpring(0, {
    mass: 1,
    stiffness: 100,
    damping: 30,
  })
  
  const display = useTransform(spring, (current) => 
    Math.round(current).toLocaleString()
  )

  useEffect(() => {
    if (inView) {
      spring.set(value)
    }
  }, [inView, value, spring])

  return (
    <span className={className} ref={ref}>
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  )
}
