# FORGEAXIOM — MASTER SYSTEM PROMPT
## For Gemini 3.1 Pro (Logic/Backend) + Gemini Flash (Frontend/UI)

---

## PROJECT IDENTITY

**Name:** ForgeAxiom  
**Tagline:** "We Forge Digital Axioms"  
**Type:** Awwwards-grade Developer Portfolio & Studio Website  
**Developers:** Saral Banker (Full Stack) × Jatin Basantani (UI-UX + Frontend)  
**Goal:** Premium digital identity that attracts high-value freelance clients, demonstrates technical mastery, and establishes the ForgeAxiom brand.

**Services Offered:**
- Web Development
- UI/UX Design
- Digital Solutions
- E-commerce Development
- Responsive Design
- Performance Optimization
- Website Maintenance

**Contact Info (placeholder — replace with real):**
- Phone: +91 98765 43210
- Email: info@axiomforge.com
- Website: www.axiomforge.com

---

## DESIGN VISION

The centerpiece is an **interactive 3D crystal gem** rendered in WebGL (Three.js / React Three Fiber). The crystal floats center-screen, auto-rotates, and responds to mouse movement with parallax. Surrounding it: deep-space cosmic aesthetic with glassmorphism panels, liquid glass effects, WebGL particle fields, and GSAP cinematic scroll animations.

**Core Visual Keywords:** Dark cosmic, deep space, crystalline, glassmorphism, liquid glass, parallax, cinematic, premium, Awwwards-grade.

**Design Philosophy:**
- Deep-space aesthetic with cosmic nebula backgrounds
- Glassmorphism (frosted-glass cards with backdrop-filter blur)
- Liquid Glass (SVG feTurbulence + feDisplacementMap refractive effects)
- 3D parallax crystal as the hero centerpiece
- Cinematic scroll animations via GSAP ScrollTrigger
- WebGL particle field (2000 particles on desktop, 500 on mobile)
- Custom cursor with spring-lag physics

---

## BRAND COLORS (CSS Custom Properties)

```css
:root {
  /* PRIMARY BACKGROUNDS */
  --bg-abyss: #07081A;    /* Page background — deepest dark */
  --bg-void: #0D0E2A;     /* Section backgrounds */
  --bg-nebula: #12143A;   /* Cards, modals */

  /* PRIMARY ACCENTS */
  --clr-forge: #7C3AED;   /* Primary purple accent */
  --clr-crystal: #A78BFA; /* Secondary light purple */

  /* SECONDARY & UTILITY */
  --clr-electric: #818CF8; /* Hover states */
  --clr-pulse: #C084FC;   /* Glow effects */
  --clr-star: #38BDF8;    /* CTA electric blue */
  --clr-signal: #34D399;  /* Success states */
  --clr-flare: #FBBF24;   /* Warning / tags */

  /* GLASSMORPHISM TOKENS */
  --glass-bg: rgba(255, 255, 255, 0.04);
  --glass-border: rgba(167, 139, 250, 0.15);
  --glass-blur: blur(20px) saturate(180%);

  /* TYPOGRAPHY SCALE (fluid) */
  --fs-hero: clamp(48px, 8vw, 96px);
  --fs-h1: clamp(32px, 5vw, 56px);
  --fs-h2: clamp(22px, 3.5vw, 36px);
  --fs-h3: clamp(16px, 2.5vw, 22px);
  --fs-body: clamp(14px, 1.5vw, 16px);
  --fs-small: clamp(11px, 1.2vw, 13px);

  /* ANIMATION TOKENS */
  --ease-out: cubic-bezier(0.23, 1, 0.32, 1);
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-expo: cubic-bezier(0.87, 0, 0.13, 1);
  --dur-fast: 150ms;
  --dur-normal: 300ms;
  --dur-slow: 600ms;
  --dur-cinematic: 1200ms;
}
```

---

## TYPOGRAPHY (Option A — Recommended)

| Role | Font | Source |
|------|------|--------|
| Display/Hero Headlines | **Clash Display** | fonts.cdnfonts.com |
| Body Text / UI | **Space Grotesk** | Google Fonts |
| Code Snippets | **JetBrains Mono** | Google Fonts |

---

## GLASSMORPHISM BASE CSS

```css
.glass-card {
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(167, 139, 250, 0.15);
  border-radius: 16px;
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
}

.glass-card:hover {
  background: rgba(255, 255, 255, 0.07);
  border-color: rgba(167, 139, 250, 0.35);
  box-shadow:
    0 16px 64px rgba(124, 58, 237, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.12);
  transform: translateY(-4px);
}
```

---

## LIQUID GLASS CSS (Advanced Effect)

```html
<svg style="display:none">
  <filter id="liquid-glass">
    <feTurbulence type="turbulence" baseFrequency="0.015 0.02"
      numOctaves="3" seed="2" result="noise"/>
    <feDisplacementMap in="SourceGraphic" in2="noise"
      scale="12" xChannelSelector="R" yChannelSelector="G"/>
  </filter>
</svg>
```

```css
.liquid-glass {
  filter: url(#liquid-glass);
  backdrop-filter: blur(24px) saturate(200%) hue-rotate(var(--hue, 0deg));
  background: rgba(124, 58, 237, 0.06);
  border-radius: 24px;
  animation: liquid-shift 8s ease-in-out infinite;
}

@keyframes liquid-shift {
  0%, 100% { --hue: 0deg; }
  50% { --hue: 30deg; }
}
```

---

## GRID & SPACING SYSTEM

| Token | Value |
|-------|-------|
| Layout Grid | 12-column CSS Grid, 24px gap, max-width 1400px, center |
| Base Unit | 4px — all spacing is multiples of 4px |
| Section Padding | clamp(80px, 12vw, 160px) top/bottom |
| Container Padding | clamp(16px, 5vw, 80px) left/right |
| Card Padding | 32px desktop / 20px mobile |
| Border Radius | 4px (tags) / 12px (inputs) / 16px (cards) / 24px (panels) / 50% (avatars) |
| Breakpoints | xs: 375px / sm: 640px / md: 768px / lg: 1024px / xl: 1280px / 2xl: 1536px |

---

## TECH STACK

| Layer | Technology | Version | Purpose |
|-------|-----------|---------|---------|
| Framework | Next.js | 14 (App Router) | SSG/ISR/SSR hybrid |
| 3D Engine | Three.js + @react-three/fiber | R3F v8 | 3D crystal + particles |
| 3D Helpers | @react-three/drei | Latest | Environment, Float, useGLTF |
| Animation | GSAP + ScrollTrigger | 3.x | Scroll + entrance animations |
| Animation (React) | Framer Motion | 11.x | Page transitions + spring physics |
| Styling | Tailwind CSS | 3.4 | Utility-first + custom tokens |
| CSS Extra | CSS Modules | Native | Complex glass/liquid effects |
| CMS | Notion API + notion-to-md | v3 | Blog + project data |
| Forms | React Hook Form + Zod | Latest | Form validation |
| Email | Resend | v3 | Contact form delivery |
| Booking | Calendly Embed | v2 | Call scheduling |
| Hosting | Vercel | Pro | Deploy + ISR + Edge |
| Analytics | Plausible Analytics | Cloud | Privacy-first analytics |
| OG Images | @vercel/og | Latest | Dynamic social share images |
| Icons | Lucide React | Latest | Icon system |
| Dev Tools | TypeScript + ESLint + Prettier | Strict | Code quality |
