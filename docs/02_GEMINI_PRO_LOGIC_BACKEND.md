# FORGEAXIOM — GEMINI 3.1 PRO PROMPT
## Logic, Backend, 3D Engine, API, CMS, State Management

> **Role:** You are a Senior Full Stack Developer building ForgeAxiom — an Awwwards-grade developer portfolio.  
> **Stack:** Next.js 14 (App Router) + TypeScript + Three.js/R3F + GSAP + Notion CMS + Resend + Vercel  
> **Your Focus:** Project setup, folder structure, API routes, CMS integration, 3D crystal logic, hooks, state management, form handling, email delivery, deployment config.

---

## PART 1: PROJECT INITIALIZATION

### 1.1 Create Next.js 14 Project
```bash
npx create-next-app@14 forgeaxiom --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
```

### 1.2 Install Dependencies
```bash
# 3D Engine
npm install three @react-three/fiber @react-three/drei @react-spring/three

# Animation
npm install gsap @gsap/react framer-motion

# Forms & Validation
npm install react-hook-form @hookform/resolvers zod

# CMS
npm install @notionhq/client notion-to-md

# Email
npm install resend

# Utilities
npm install lucide-react clsx

# Dev
npm install -D @types/three @next/bundle-analyzer
```

### 1.3 Tailwind Config (tailwind.config.ts)
```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        abyss: '#07081A',
        void: '#0D0E2A',
        nebula: '#12143A',
        forge: '#7C3AED',
        crystal: '#A78BFA',
        electric: '#818CF8',
        pulse: '#C084FC',
        star: '#38BDF8',
        signal: '#34D399',
        flare: '#FBBF24',
      },
      fontFamily: {
        display: ['Clash Display', 'sans-serif'],
        body: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        hero: 'clamp(48px, 8vw, 96px)',
        h1: 'clamp(32px, 5vw, 56px)',
        h2: 'clamp(22px, 3.5vw, 36px)',
        h3: 'clamp(16px, 2.5vw, 22px)',
        body: 'clamp(14px, 1.5vw, 16px)',
        small: 'clamp(11px, 1.2vw, 13px)',
      },
      borderRadius: {
        glass: '16px',
        liquid: '24px',
      },
      animation: {
        'liquid-shift': 'liquid-shift 8s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        'liquid-shift': {
          '0%, 100%': { '--hue': '0deg' },
          '50%': { '--hue': '30deg' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(124, 58, 237, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(124, 58, 237, 0.6)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
```

---

## PART 2: FOLDER STRUCTURE

```
forgeaxiom/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── page.tsx                  # Home
│   │   ├── services/page.tsx
│   │   ├── work/
│   │   │   ├── page.tsx              # Work grid
│   │   │   └── [slug]/page.tsx       # Case study
│   │   ├── team/page.tsx
│   │   ├── blog/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── not-found.tsx             # Custom 404
│   │   ├── api/
│   │   │   ├── contact/route.ts      # Resend email
│   │   │   ├── revalidate/route.ts   # On-demand ISR
│   │   │   └── og/route.tsx          # OG image generation
│   │   ├── layout.tsx                # Root layout
│   │   └── globals.css
│   ├── components/
│   │   ├── 3d/
│   │   │   ├── CrystalScene.tsx      # R3F canvas + crystal
│   │   │   ├── ParticleField.tsx     # WebGL particles
│   │   │   └── CrystalFallback.tsx   # CSS 3D fallback
│   │   ├── layout/
│   │   │   ├── NavBar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── MobileMenu.tsx
│   │   │   └── LoadingScreen.tsx
│   │   ├── ui/
│   │   │   ├── GlassCard.tsx
│   │   │   ├── LiquidGlass.tsx
│   │   │   ├── MagneticButton.tsx
│   │   │   ├── CustomCursor.tsx
│   │   │   ├── AnimatedCounter.tsx
│   │   │   ├── SplitText.tsx
│   │   │   ├── ScrollProgress.tsx
│   │   │   └── MarqueeStrip.tsx
│   │   ├── sections/                 # Page-specific sections
│   │   │   ├── HeroSection.tsx
│   │   │   ├── StatsSection.tsx
│   │   │   ├── FeaturedWork.tsx
│   │   │   ├── ServicesTeaser.tsx
│   │   │   └── CTABanner.tsx
│   │   └── forms/
│   │       └── ContactForm.tsx
│   ├── lib/
│   │   ├── notion.ts                 # Notion API client
│   │   ├── resend.ts                 # Email helper
│   │   ├── constants.ts              # Site-wide constants
│   │   └── utils.ts                  # Utility functions
│   ├── hooks/
│   │   ├── useMouseParallax.ts
│   │   ├── useSmoothScroll.ts
│   │   ├── useReducedMotion.ts
│   │   ├── useInView.ts
│   │   └── useMediaQuery.ts
│   ├── types/
│   │   ├── notion.ts
│   │   ├── project.ts
│   │   └── blog.ts
│   └── styles/
│       ├── glassmorphism.css
│       └── liquid-glass.css
├── public/
│   ├── models/
│   │   └── crystal_opt.glb           # 3D crystal model (<2MB)
│   ├── fonts/
│   │   └── ClashDisplay-*.woff2
│   └── images/
├── vercel.json
├── next.config.js
└── .env.local
```

---

## PART 3: 3D CRYSTAL IMPLEMENTATION (THREE.JS / R3F)

### 3.1 Crystal Scene Component
```tsx
// src/components/3d/CrystalScene.tsx
'use client'

import { Canvas } from '@react-three/fiber'
import { Suspense, lazy } from 'react'
import { Environment, Float, useGLTF, MeshTransmissionMaterial } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useMouseParallax } from '@/hooks/useMouseParallax'

function Crystal() {
  const mesh = useRef<THREE.Mesh>(null!)
  const { nodes } = useGLTF('/models/crystal_opt.glb')
  const { mouseX, mouseY } = useMouseParallax()

  useFrame((state, delta) => {
    if (!mesh.current) return
    // Auto-rotation
    mesh.current.rotation.y += 0.003
    // Mouse parallax
    mesh.current.rotation.x = mouseY * 0.15
    mesh.current.position.x = mouseX * 0.8
  })

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.6}>
      <mesh ref={mesh} geometry={(nodes.Crystal as THREE.Mesh).geometry} castShadow>
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
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Crystal />
        <Environment preset="night" />
      </Suspense>
    </Canvas>
  )
}

// Preload model
useGLTF.preload('/models/crystal_opt.glb')
```

### 3.2 Mouse Parallax Hook
```tsx
// src/hooks/useMouseParallax.ts
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
```

### 3.3 Particle Field
```tsx
// src/components/3d/ParticleField.tsx
'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function ParticleField({ count = 2000 }: { count?: number }) {
  const points = useRef<THREE.Points>(null!)

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 20
    }
    return positions
  }, [count])

  useFrame((state) => {
    if (!points.current) return
    points.current.rotation.y += 0.0005
    points.current.rotation.x += 0.0002
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#A78BFA"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}
```

### 3.4 CSS Fallback Crystal (No WebGL)
```tsx
// src/components/3d/CrystalFallback.tsx
'use client'

export default function CrystalFallback() {
  return (
    <div className="crystal-fallback">
      <div className="crystal-shape">
        <div className="crystal-face top" />
        <div className="crystal-face bottom" />
        <div className="crystal-glow" />
      </div>
      <style jsx>{`
        .crystal-fallback {
          width: 300px;
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 800px;
        }
        .crystal-shape {
          position: relative;
          width: 150px;
          height: 300px;
          transform-style: preserve-3d;
          animation: crystal-rotate 8s linear infinite;
        }
        .crystal-face {
          position: absolute;
          width: 100%;
          height: 50%;
          clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
          background: linear-gradient(
            135deg,
            rgba(124, 58, 237, 0.3),
            rgba(167, 139, 250, 0.1)
          );
          border: 1px solid rgba(167, 139, 250, 0.2);
        }
        .crystal-face.top { top: 0; }
        .crystal-face.bottom {
          bottom: 0;
          transform: rotate(180deg);
        }
        .crystal-glow {
          position: absolute;
          inset: -20%;
          background: radial-gradient(
            circle,
            rgba(124, 58, 237, 0.15) 0%,
            transparent 70%
          );
          animation: pulse-glow 3s ease-in-out infinite;
        }
        @keyframes crystal-rotate {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(360deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  )
}
```

### 3.5 Performance Strategy
| Metric | Target |
|--------|--------|
| Crystal Model | < 2MB (.glb compressed with gltfpack) |
| Draw Calls | < 5 for crystal scene |
| Particles | 2000 desktop / 500 mobile / 0 reduced-motion |
| Canvas DPR | Capped at 1.5 (not 2) |
| Mobile Fallback | WebGL check → if fail: CSS 3D fallback |
| Lazy Load | Crystal canvas loads after hero in viewport (IntersectionObserver) |
| Suspense | `<Suspense fallback={<CrystalFallback />}>` |

---

## PART 4: NOTION CMS INTEGRATION

### 4.1 Notion Client
```typescript
// src/lib/notion.ts
import { Client } from '@notionhq/client'
import { NotionToMarkdown } from 'notion-to-md'

const notion = new Client({ auth: process.env.NOTION_TOKEN })
const n2m = new NotionToMarkdown({ notionClient: notion })

// Blog Posts
export async function getBlogPosts() {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_BLOG_DB_ID!,
    filter: {
      property: 'Status',
      select: { equals: 'Published' },
    },
    sorts: [{ property: 'PublishDate', direction: 'descending' }],
  })
  return response.results
}

export async function getBlogPost(slug: string) {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_BLOG_DB_ID!,
    filter: {
      property: 'Slug',
      rich_text: { equals: slug },
    },
  })
  const page = response.results[0]
  if (!page) return null
  const mdBlocks = await n2m.pageToMarkdown(page.id)
  const mdString = n2m.toMarkdownString(mdBlocks)
  return { page, content: mdString.parent }
}

// Work Projects
export async function getProjects() {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_WORK_DB_ID!,
    filter: {
      property: 'Status',
      select: { equals: 'Published' },
    },
    sorts: [{ property: 'SortOrder', direction: 'ascending' }],
  })
  return response.results
}

export async function getProject(slug: string) {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_WORK_DB_ID!,
    filter: {
      property: 'Slug',
      rich_text: { equals: slug },
    },
  })
  const page = response.results[0]
  if (!page) return null
  const mdBlocks = await n2m.pageToMarkdown(page.id)
  const mdString = n2m.toMarkdownString(mdBlocks)
  return { page, content: mdString.parent }
}
```

### 4.2 Notion Database Schemas

**Blog Posts Database:**

| Property | Type | Values |
|----------|------|--------|
| Title | Title | Post headline |
| Slug | Text | URL-safe string |
| Status | Select | Draft / Published / Archived |
| Category | Multi-select | Web Dev, UI-UX, Tutorial, Opinion, Case Study |
| Author | Select | Saral Banker / Jatin Basantani |
| CoverImage | Files & Media | 1200×630 min |
| Excerpt | Text | Max 160 chars (meta description) |
| ReadTime | Number | Minutes |
| PublishDate | Date | ISO date |
| Tags | Multi-select | react, nextjs, threejs, gsap, figma, etc. |
| Featured | Checkbox | Show on homepage |

**Work/Projects Database:**

| Property | Type | Values |
|----------|------|--------|
| Title | Title | Project name |
| Slug | Text | URL-safe string |
| Status | Select | Draft / Published |
| Category | Multi-select | Web App, UI-UX, Full Stack, Mobile, Branding |
| Client | Text | Client name or "Confidential" |
| Year | Number | 2024 / 2025 |
| CoverImage | Files & Media | 16:9, min 1600×900 |
| HeroImage | Files & Media | 1920×1080 |
| Description | Text | Max 200 chars |
| TechStack | Multi-select | React, Next.js, Node.js, MongoDB, Figma |
| LiveURL | URL | Optional live link |
| Featured | Checkbox | Featured on home |
| SortOrder | Number | Display order |

### 4.3 ISR Strategy
| Page | Revalidate | Note |
|------|-----------|------|
| Blog List | 3600s (1 hour) | New posts appear hourly |
| Blog Post | 86400s (24 hours) | Content updates daily |
| Work Grid | 3600s | Project updates hourly |
| Work Detail | 86400s | Detailed content daily |
| Static Pages | No revalidation | Home, Team, Services, Contact |

---

## PART 5: API ROUTES

### 5.1 Contact Form API
```typescript
// src/app/api/contact/route.ts
import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'

const resend = new Resend(process.env.RESEND_API_KEY)

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email'),
  company: z.string().optional(),
  projectType: z.enum([
    'Web Application',
    'UI/UX Design',
    'E-commerce',
    'Full Stack',
    'Other',
  ]),
  budget: z.enum([
    'Under ₹50K',
    '₹50K - ₹2L',
    '₹2L - ₹5L',
    '₹5L+',
    'Not Sure',
  ]),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const data = contactSchema.parse(body)

    await resend.emails.send({
      from: 'ForgeAxiom <contact@forgeaxiom.dev>',
      to: [
        process.env.CONTACT_EMAIL_SARAL!,
        process.env.CONTACT_EMAIL_JATIN!,
      ],
      subject: `New Inquiry: ${data.projectType} — ${data.name}`,
      html: `
        <h2>New ForgeAxiom Inquiry</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Company:</strong> ${data.company || 'N/A'}</p>
        <p><strong>Project Type:</strong> ${data.projectType}</p>
        <p><strong>Budget:</strong> ${data.budget}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { errors: error.flatten().fieldErrors },
        { status: 400 }
      )
    }
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}
```

### 5.2 On-Demand Revalidation
```typescript
// src/app/api/revalidate/route.ts
import { revalidatePath } from 'next/cache'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { searchParams } = new URL(request.url)
  const secret = searchParams.get('secret')

  if (secret !== process.env.REVALIDATION_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  revalidatePath('/blog')
  revalidatePath('/work')
  return NextResponse.json({ revalidated: true })
}
```

---

## PART 6: HOOKS & UTILITIES

### 6.1 Reduced Motion Detection
```typescript
// src/hooks/useReducedMotion.ts
'use client'
import { useState, useEffect } from 'react'

export function useReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return reducedMotion
}
```

### 6.2 InView Detection
```typescript
// src/hooks/useInView.ts
'use client'
import { useRef, useState, useEffect } from 'react'

export function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2, ...options }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [options])

  return { ref, inView }
}
```

---

## PART 7: ENVIRONMENT VARIABLES

```env
# .env.local

# Notion CMS
NOTION_TOKEN=secret_xxxxx
NOTION_BLOG_DB_ID=xxxxx
NOTION_WORK_DB_ID=xxxxx

# Email
RESEND_API_KEY=re_xxxxx
CONTACT_EMAIL_SARAL=saral@forgeaxiom.dev
CONTACT_EMAIL_JATIN=jatin@forgeaxiom.dev

# Calendly
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/forgeaxiom/discovery

# Site
NEXT_PUBLIC_SITE_URL=https://forgeaxiom.dev

# Analytics
PLAUSIBLE_DOMAIN=forgeaxiom.dev

# ISR Revalidation
REVALIDATION_SECRET=your-strong-secret-here
```

---

## PART 8: VERCEL CONFIGURATION

```json
{
  "buildCommand": "next build",
  "framework": "nextjs",
  "regions": ["bom1"],
  "headers": [
    {
      "source": "/models/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "Referrer-Policy", "value": "strict-origin" }
      ]
    }
  ]
}
```

---

## PART 9: TYPE DEFINITIONS

```typescript
// src/types/project.ts
export interface Project {
  id: string
  title: string
  slug: string
  category: string[]
  client: string
  year: number
  coverImage: string
  heroImage: string
  description: string
  techStack: string[]
  liveUrl?: string
  featured: boolean
  sortOrder: number
  content?: string
}

// src/types/blog.ts
export interface BlogPost {
  id: string
  title: string
  slug: string
  status: 'Draft' | 'Published' | 'Archived'
  category: string[]
  author: 'Saral Banker' | 'Jatin Basantani'
  coverImage: string
  excerpt: string
  readTime: number
  publishDate: string
  tags: string[]
  featured: boolean
  content?: string
}
```

---

## INSTRUCTIONS FOR GEMINI 3.1 PRO

When building this project, follow these rules:

1. **TypeScript Strict Mode** — All files must be TypeScript with strict type checking
2. **Server Components by Default** — Only add 'use client' when React hooks or browser APIs are needed
3. **Error Boundaries** — Wrap 3D components in error boundaries with CSS fallbacks
4. **Dynamic Imports** — Use `dynamic(() => import('./CrystalScene'), { ssr: false })` for all Three.js components
5. **SEO** — Every page must have proper metadata export with title, description, and OG image
6. **Accessibility** — All interactive elements must be keyboard-navigable and screen-reader friendly
7. **Performance** — Follow the optimization checklist in Part 3.5, target Lighthouse 90+ mobile
8. **ISR** — Use Incremental Static Regeneration for Notion-sourced pages
9. **prefers-reduced-motion** — Respect user preference, disable animations when set
10. **Mobile First** — Design layout mobile-first, enhance for desktop
