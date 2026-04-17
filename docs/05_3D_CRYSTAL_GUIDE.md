# FORGEAXIOM — 3D CRYSTAL CREATION GUIDE
## Step-by-Step Pipeline: AI Generation → Blender → Optimization → Integration

---

## OVERVIEW

The 3D crystal is the centerpiece of ForgeAxiom. It's a dark obsidian gem with purple-glowing faceted edges, rendered in real-time using Three.js / React Three Fiber with MeshTransmissionMaterial for a glass-like refractive look.

---

## STEP 1: AI 3D MODEL GENERATION

### Option A — Meshy.ai (Recommended for .glb)
1. Go to **meshy.ai** → "Text to 3D"
2. Use this exact prompt:
```
Dark obsidian crystal gem, faceted, sharp geometric faces, translucent purple edges, octahedral elongated form, physically-based rendering material, PBR
```
3. Wait for generation → Download as `.glb` format
4. **Rename** to `crystal_raw.glb`

### Option B — Spline.design (Alternative)
1. Go to **spline.design**
2. Open AI menu → "Generate 3D object"
3. Use same prompt as above
4. Export as `.splinecode` for direct Spline React embed
5. OR export as `.glb` for Three.js integration

### Option C — Tripo3D / Luma AI
1. Go to **tripo3d.ai** or **lumalabs.ai/genie**
2. Use same prompt
3. Download `.glb`

---

## STEP 2: BLENDER REFINEMENT (Optional but Recommended)

### Import & Enhance
1. Open Blender → File → Import → glTF (.glb)
2. Select the crystal mesh
3. **Add Emission Shader on edges:**
   - Go to Material Properties → Add Material
   - Use Shader Editor → Add "Emission" node
   - Color: Purple (#7C3AED), Strength: 2.0
   - Connect to edge detection via AO or Fresnel node
4. **Add Interior Volumetric Scatter:**
   - Add a Volume Scatter shader inside the mesh
   - Color: Purple, Density: 0.4
5. **Clean geometry:**
   - Remove any internal faces (Mesh → Clean Up → Delete Loose)
   - Recalculate normals (Shift+N)

### Export
- File → Export → glTF 2.0 (.glb)
- Settings: Apply Modifiers ✓, Export Materials ✓
- Save as `crystal_refined.glb`

---

## STEP 3: COMPRESSION (Mandatory)

### Using gltf.report (UI)
1. Go to **gltf.report** in browser
2. Drag `crystal_refined.glb` onto the page
3. Review stats: vertices, textures, file size
4. Apply optimizations if available

### Using gltfpack CLI (Recommended)
```bash
# Install
npm install -g gltfpack

# Compress
gltfpack -i crystal_refined.glb -o crystal_opt.glb -cc

# Verify size
ls -la crystal_opt.glb  # Target: < 2MB
```

### Target Specs
| Metric | Target |
|--------|--------|
| File Size | < 2MB |
| Vertices | < 50K |
| Textures | Compressed, < 1MB total |
| Draw Calls | < 5 |

---

## STEP 4: PLACE IN PROJECT

```
public/
└── models/
    └── crystal_opt.glb    ← Place here
```

### Preload in HTML Head (optional, recommended)
```html
<link rel="preload" href="/models/crystal_opt.glb" as="fetch" crossorigin />
```

---

## STEP 5: THREE.JS / R3F INTEGRATION

### Complete CrystalScene Component
```tsx
// src/components/3d/CrystalScene.tsx
'use client'

import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Environment, Float, useGLTF, MeshTransmissionMaterial } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface CrystalProps {
  mouseX: number
  mouseY: number
}

function Crystal({ mouseX, mouseY }: CrystalProps) {
  const mesh = useRef<THREE.Mesh>(null!)
  const { nodes } = useGLTF('/models/crystal_opt.glb')

  // Find the first mesh node in the loaded model
  const crystalGeometry = Object.values(nodes).find(
    (node): node is THREE.Mesh => node instanceof THREE.Mesh
  )

  useFrame(() => {
    if (!mesh.current) return
    // Auto-rotation on Y-axis
    mesh.current.rotation.y += 0.003
    // Mouse parallax — smooth following
    mesh.current.rotation.x += (mouseY * 0.15 - mesh.current.rotation.x) * 0.05
    mesh.current.position.x += (mouseX * 0.8 - mesh.current.position.x) * 0.05
  })

  if (!crystalGeometry) return null

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.6}>
      <mesh ref={mesh} geometry={crystalGeometry.geometry} castShadow>
        <MeshTransmissionMaterial
          backside
          color="#6B21A8"
          thickness={0.5}
          roughness={0}
          transmission={0.95}
          ior={1.8}
          chromaticAberration={0.06}
          distortion={0.4}
          distortionScale={0.5}
          temporalDistortion={0.1}
        />
      </mesh>
    </Float>
  )
}

export default function CrystalScene() {
  // Mouse position state — updated via parent or hook
  const mouseRef = useRef({ x: 0, y: 0 })

  // Track mouse
  if (typeof window !== 'undefined') {
    window.addEventListener('mousemove', (e) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouseRef.current.y = (e.clientY / window.innerHeight) * 2 - 1
    })
  }

  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 1.5]}  // Cap pixel ratio for performance
      gl={{
        antialias: true,
        alpha: true,   // Transparent background
        powerPreference: 'high-performance',
      }}
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
      }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
        <pointLight position={[-5, 3, 0]} intensity={0.5} color="#7C3AED" />
        <Crystal mouseX={mouseRef.current.x} mouseY={mouseRef.current.y} />
        <Environment preset="night" />
      </Suspense>
    </Canvas>
  )
}

useGLTF.preload('/models/crystal_opt.glb')
```

### Material Properties Explained
| Property | Value | Effect |
|----------|-------|--------|
| color | #6B21A8 | Deep purple base color |
| thickness | 0.5 | Glass thickness for refraction |
| roughness | 0 | Perfectly smooth surface |
| transmission | 0.95 | Almost fully transparent glass |
| ior | 1.8 | Index of refraction (diamond-like) |
| chromaticAberration | 0.06 | Subtle rainbow edge effect |
| distortion | 0.4 | Organic surface distortion |
| distortionScale | 0.5 | Scale of the distortion pattern |
| temporalDistortion | 0.1 | Animated distortion over time |

---

## STEP 6: MOBILE & FALLBACK STRATEGY

### WebGL Detection
```typescript
function detectWebGL(): boolean {
  try {
    const canvas = document.createElement('canvas')
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    )
  } catch {
    return false
  }
}
```

### Conditional Rendering
```tsx
// In HeroSection.tsx
const CrystalScene = dynamic(
  () => import('@/components/3d/CrystalScene'),
  { ssr: false, loading: () => <CrystalFallback /> }
)

// OR with WebGL check:
const [supportsWebGL, setSupportsWebGL] = useState(true)

useEffect(() => {
  setSupportsWebGL(detectWebGL())
}, [])

return supportsWebGL ? <CrystalScene /> : <CrystalFallback />
```

### Mobile Adjustments
| Property | Desktop | Mobile |
|----------|---------|--------|
| Canvas Size | Full viewport | 300×300 centered |
| Particle Count | 2000 | 500 |
| Shadow Casting | Enabled | Disabled |
| DPR | [1, 1.5] | [1, 1] |
| Backdrop Blur | 20px | 12px |

### prefers-reduced-motion
```tsx
const reducedMotion = useReducedMotion()

// In useFrame:
if (reducedMotion) {
  // Keep crystal static — no rotation
  return
}
mesh.current.rotation.y += 0.003
```

---

## QUICK REFERENCE: 3D PIPELINE SUMMARY

```
Meshy.ai Prompt → crystal_raw.glb
       ↓
Blender (optional refinement) → crystal_refined.glb
       ↓
gltfpack compression → crystal_opt.glb (< 2MB)
       ↓
Place in /public/models/
       ↓
CrystalScene.tsx (R3F + MeshTransmissionMaterial)
       ↓
Dynamic import in HeroSection (ssr: false)
       ↓
CrystalFallback.tsx for non-WebGL devices
```
