'use client'

import { useState, useEffect, useCallback } from 'react'

export function useMouseParallax() {
  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)

  const handleMouseMove = useCallback((e: MouseEvent) => {
    // Normalize to [-1, 1] range relative to viewport center
    const x = (e.clientX / window.innerWidth) * 2 - 1
    const y = (e.clientY / window.innerHeight) * 2 - 1
    setMouseX(x)
    setMouseY(y)
  }, [])

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [handleMouseMove])

  return { mouseX, mouseY }
}
