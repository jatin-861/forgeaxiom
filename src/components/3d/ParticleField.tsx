'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function ParticleField({ count = 1200 }) {
  const points = useRef<THREE.Points>(null!)
  
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const sizes = new Float32Array(count)
    const offsets = new Float32Array(count)
    
    for (let i = 0; i < count; i++) {
        // Larger distribution for space feel
        const r = 3 + Math.random() * 8
        const theta = Math.random() * Math.PI * 2
        const phi = Math.acos(2 * Math.random() - 1)
        
        positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
        positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
        positions[i * 3 + 2] = r * Math.cos(phi)
        
        // Vastly varied sizes
        sizes[i] = Math.random() < 0.1 ? 0.25 : 0.08 + Math.random() * 0.1
        offsets[i] = Math.random() * Math.PI * 2
    }

    return { positions, sizes, offsets }
  }, [count])

  const shaderMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('#A78BFA') }
      },
      vertexShader: `
        attribute float size;
        attribute float offset;
        varying float vOpacity;
        uniform float uTime;
        void main() {
          vOpacity = 0.4 + sin(uTime * 2.0 + offset) * 0.4;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying float vOpacity;
        uniform vec3 uColor;
        void main() {
          float strength = distance(gl_PointCoord, vec2(0.5));
          strength = 1.0 - strength;
          strength = pow(strength, 3.0);
          gl_FragColor = vec4(uColor, strength * vOpacity);
        }
      `
    })
  }, [])

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    if (points.current) {
      points.current.rotation.y = time * 0.015 // Very slow rotation
      shaderMaterial.uniforms.uTime.value = time
    }
  })

  return (
    <points ref={points} material={shaderMaterial}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particles.positions, 3]}
        />
        <bufferAttribute
          attach="attributes-size"
          args={[particles.sizes, 1]}
        />
        <bufferAttribute
          attach="attributes-offset"
          args={[particles.offsets, 1]}
        />
      </bufferGeometry>
    </points>
  )
}
