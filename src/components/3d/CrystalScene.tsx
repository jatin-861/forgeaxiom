'use client'

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Suspense, useEffect, useRef, useState } from 'react'
import { Environment, Float, MeshTransmissionMaterial, ContactShadows } from '@react-three/drei'
import { EffectComposer, Bloom, Noise } from '@react-three/postprocessing'
import * as THREE from 'three'
import { ParticleField } from './ParticleField'

function Crystal({ mouse }: { mouse: { x: number; y: number } }) {
  const outerMesh = useRef<THREE.Mesh>(null!)
  const innerMesh = useRef<THREE.Group>(null!)
  const scrollRef = useRef(0)
  const { size } = useThree()
  
  const isMobile = size.width < 768
  const samples = isMobile ? 4 : 8
  const resolution = isMobile ? 128 : 256

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      scrollRef.current = totalScroll > 0 ? window.scrollY / totalScroll : 0
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    const targetScrollRotation = scrollRef.current * Math.PI * 2
    
    if (outerMesh.current) {
      // 1. Scroll-based 360° rotation
      // 2. Slow floating motion
      // 3. Mouse-based parallax interaction
      outerMesh.current.rotation.y = THREE.MathUtils.lerp(outerMesh.current.rotation.y, targetScrollRotation + time * 0.1, 0.05)
      outerMesh.current.rotation.x = Math.sin(time * 0.1) * 0.1 + mouse.y * 0.15
      outerMesh.current.rotation.z = mouse.x * 0.1
      outerMesh.current.position.y = Math.sin(time * 0.5) * 0.15
    }

    if (innerMesh.current) {
      innerMesh.current.rotation.y = -time * 0.4 - targetScrollRotation
      innerMesh.current.scale.setScalar(0.45 + Math.sin(time * 2) * 0.05)
    }
  })

  return (
    <group>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh ref={outerMesh} castShadow>
          <icosahedronGeometry args={[1.6, 1]} />
          <MeshTransmissionMaterial
            backside
            samples={samples}
            thickness={2.5}
            chromaticAberration={1.2}
            anisotropy={0.5}
            distortion={0.3}
            distortionScale={0.5}
            temporalDistortion={0.05}
            transmission={1.0}
            roughness={0.02}
            color="#2e1065" 
            attenuationDistance={2}
            attenuationColor="#f472b6"
            ior={1.8}
            resolution={resolution}
          />
        </mesh>
      </Float>

      <group ref={innerMesh}>
        <mesh>
          <octahedronGeometry args={[1.1, 0]} />
          <meshStandardMaterial 
            color="#d8b4fe" 
            emissive="#a855f7" 
            emissiveIntensity={25} 
            wireframe
          />
        </mesh>
      </group>

      <pointLight position={[0, 0, 0]} intensity={15} color="#a855f7" distance={6} />
      <pointLight position={[0, 2, 0]} intensity={8} color="#ec4899" distance={4} />
      <ContactShadows opacity={0.4} scale={10} blur={2.4} far={4.5} />
    </group>
  )
}

export default function CrystalScene() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 1]} // Spec: Lock DPR to [1,1]
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />
          
          <ParticleField />
          
          <Crystal mouse={mouse} />
          
          <Environment preset="night" environmentIntensity={3} />
          
          <EffectComposer enableNormalPass={false}>
            <Bloom 
              luminanceThreshold={1.2} 
              mipmapBlur 
              intensity={1.5} 
              radius={0.4} 
            />
            <Noise opacity={0.05} />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  )
}
