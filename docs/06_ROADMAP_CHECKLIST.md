# FORGEAXIOM — DEVELOPMENT ROADMAP & CHECKLIST
## Sprint Plan + Testing + Deployment + Awwwards Submission

---

## PHASE 1: FOUNDATION (Weeks 1–2)

### Setup
- [ ] Create Next.js 14 project with TypeScript + Tailwind + ESLint
- [ ] Install all dependencies (Three.js, R3F, GSAP, Framer Motion, etc.)
- [ ] Configure tailwind.config.ts with ForgeAxiom design tokens
- [ ] Set up globals.css with glassmorphism + liquid glass styles
- [ ] Import fonts: Clash Display (local) + Space Grotesk + JetBrains Mono (Google)
- [ ] Create .env.local with all environment variables

### Core Components
- [ ] GlassCard component
- [ ] LiquidGlass component  
- [ ] MagneticButton component (primary + ghost variants)
- [ ] CustomCursor component (Crystal Dot + Ring)
- [ ] ScrollProgress bar component
- [ ] SplitText component (GSAP integration)
- [ ] AnimatedCounter component

### Layout
- [ ] NavBar (glass, scroll-aware, hide/show)
- [ ] MobileMenu (full-screen overlay with stagger animation)
- [ ] Footer (3-column: brand, links, contact + socials)
- [ ] Root layout.tsx (fonts, metadata, cursor, nav, footer)

### Routing
- [ ] Set up all 6 page files (home, services, work, team, blog, contact)
- [ ] Set up dynamic routes: /work/[slug] and /blog/[slug]
- [ ] Create custom not-found.tsx (404 page)

### CMS Setup
- [ ] Create Notion workspace with Blog database
- [ ] Create Notion workspace with Work/Projects database
- [ ] Set up lib/notion.ts API client
- [ ] Test fetching blog posts and projects

---

## PHASE 2: 3D & CORE PAGES (Weeks 3–5)

### Crystal
- [ ] Generate 3D crystal model (Meshy.ai or Spline)
- [ ] Refine in Blender (optional — edge emission, volumetric scatter)
- [ ] Compress with gltfpack (target < 2MB)
- [ ] Place crystal_opt.glb in /public/models/
- [ ] Build CrystalScene.tsx with R3F + MeshTransmissionMaterial
- [ ] Build ParticleField.tsx (2000 particles, mouse-repel)
- [ ] Build CrystalFallback.tsx (CSS 3D for non-WebGL)
- [ ] Implement useMouseParallax hook
- [ ] Test crystal on mobile (reduced particles, smaller canvas)

### Home Page
- [ ] HeroSection: crystal + hero text + CTAs + scroll indicator
- [ ] MarqueeStrip: infinite tech ticker
- [ ] StatsSection: 4 animated counters
- [ ] FeaturedWork: 2 project preview cards with tilt
- [ ] ServicesTeaser: 3 glass tiles with liquid glass hover
- [ ] CTABanner: full-width CTA card
- [ ] GSAP ScrollTrigger setup for all sections

### Services Page
- [ ] Page header with headline + brand statement
- [ ] 3-column service cards (Web Dev, UI/UX, Digital Solutions)
- [ ] Process timeline (Discover → Design → Develop → Deploy)
- [ ] Pricing signal section (3 tiers)
- [ ] CTA section → /contact

### Loading Screen
- [ ] LoadingScreen component (cinematic crystal formation)
- [ ] Phase 1: Crystal facets scale in
- [ ] Phase 2: Glow pulse + wordmark
- [ ] Phase 3: Progress bar
- [ ] Phase 4: Crystal shatters → reveal hero

---

## PHASE 3: CONTENT PAGES (Weeks 6–8)

### Work / Portfolio
- [ ] Work grid page with filter bar (ALL / WEB APP / UI-UX / etc.)
- [ ] Asymmetric masonry card layout
- [ ] Project card: cover image + glass overlay hover
- [ ] Case study template: hero → brief → challenge → solution → tech → results
- [ ] Tilt effect on cards (VanillaTilt or custom)
- [ ] Connect to Notion CMS for project data

### Team Page
- [ ] 2-column layout (Saral + Jatin cards)
- [ ] Hexagon avatar clip-path
- [ ] Skill tags + social links
- [ ] Crystal aura (Saral: blue-electric, Jatin: purple-crystal)
- [ ] Animated skill bars (GSAP on scroll)
- [ ] "How We Collaborate" section

### Blog
- [ ] Blog list page with featured post + grid
- [ ] Blog post template (notion-to-md rendering)
- [ ] Code blocks with Prism.js/Shiki highlighting
- [ ] Category filter
- [ ] ISR: revalidate 3600s for list, 86400s for posts

### Contact Page
- [ ] Contact form (React Hook Form + Zod validation)
- [ ] Glass-style inputs
- [ ] Form submission → /api/contact → Resend email
- [ ] Success state animation
- [ ] Calendly inline embed (right column)
- [ ] Contact info section
- [ ] WhatsApp sticky button

### Page Transitions
- [ ] Framer Motion AnimatePresence on layout
- [ ] Exit: opacity 1→0, y 0→-30px
- [ ] Enter: opacity 0→1, y 30→0px
- [ ] Crystal persists across transitions

### 404 Page
- [ ] "Lost in the Void" heading
- [ ] Mini crystal CSS animation
- [ ] "Return Home" CTA

---

## PHASE 4: POLISH & LAUNCH (Weeks 9–10)

### Mobile QA
- [ ] Test on iPhone 12/13/14 Safari
- [ ] Test on Samsung Galaxy Chrome
- [ ] Test on iPad Safari
- [ ] Test 3D crystal fallback on older devices
- [ ] Test touch gestures (swipe on Work grid)
- [ ] Verify 48px tap targets
- [ ] Verify no iOS zoom on input focus (16px min font)

### Performance
- [ ] Lighthouse audit all pages → target 90+ mobile
- [ ] Bundle analyzer → keep JS < 200KB per route
- [ ] All images via next/image with sizes prop
- [ ] Dynamic import for CrystalScene (ssr: false)
- [ ] Tree-shake Three.js imports
- [ ] Preload crystal .glb in document head
- [ ] Service worker via next-pwa (optional)

### SEO
- [ ] Meta tags on every page (title, description)
- [ ] OG image generation per page/post (@vercel/og)
- [ ] JSON-LD structured data (Organization, WebSite)
- [ ] sitemap.xml generation
- [ ] robots.txt
- [ ] Canonical URLs

### Analytics
- [ ] Plausible Analytics script integration
- [ ] Vercel Speed Insights enabled
- [ ] Custom events: contact_form_submit, calendly_booking, project_view

### Deployment
- [ ] Domain purchase (forgeaxiom.dev or forgeaxiom.in)
- [ ] DNS configuration on Vercel
- [ ] vercel.json configuration (see PART 8 of Pro prompt)
- [ ] Environment variables set in Vercel dashboard
- [ ] GitHub Actions: Lighthouse CI on PRs
- [ ] GitHub Actions: TypeScript check on PRs
- [ ] GitHub Actions: ESLint + Prettier check

### Cross-Browser
- [ ] Chrome (desktop + mobile)
- [ ] Firefox
- [ ] Safari (desktop + mobile)
- [ ] Edge
- [ ] Samsung Internet

---

## AWWWARDS SUBMISSION CHECKLIST

- [ ] Screen-record 60-second demo at 1920×1080
- [ ] Capture high-res screenshots: hero, work grid, case study, mobile views
- [ ] Write site description (250–500 words) focusing on: 3D parallax crystal, glassmorphism, scroll cinematics
- [ ] Submit to: Awwwards.com
- [ ] Submit to: CSS Design Awards
- [ ] Submit to: Webby Awards
- [ ] Submit to: FWA
- [ ] Submit to: Siteinspire
- [ ] Share on Twitter/X, Dribbble, Behance on launch day
- [ ] Tags: #awwwards #webdesign #threejs #gsap #portfolio #forgeaxiom
- [ ] Submit to Made With Next.js showcase
- [ ] Submit to Vercel featured sites

---

## SUCCESS METRICS (KPIs)

| Metric | Target | Measurement |
|--------|--------|-------------|
| Awwwards Nomination | Within 6 months | Awwwards.com |
| Contact Form Submissions | 10+/month | Vercel Analytics + Email |
| Calendly Bookings | 4+ discovery calls/month | Calendly dashboard |
| Lighthouse Mobile | 90+ Performance | Lighthouse CI |
| Bounce Rate | < 45% | Plausible Analytics |
| Average Session Duration | > 2min 30sec | Plausible Analytics |
| Portfolio Views | > 60% of visitors | Plausible Events |

---

## REFERENCE & INSPIRATION

- **Bruno Simon** (bruno-simon.com) — Gold standard Three.js portfolio
- **Active Theory** (activetheory.net) — Cinematic WebGL studio
- **Roboto Studio** — Glassmorphism + 3D excellence
- **Cuberto** — Premium agency portfolio
- **Three.js Examples** (threejs.org/examples) — MeshTransmissionMaterial demos
- **GSAP Showcase** (gsap.com/showcase) — Best scroll animation examples
- **Codrops** (tympanus.net) — Free glassmorphism + liquid glass tutorials
- **Shader Park** (shaderpark.com) — Live shader editor
- **Dribbble Search:** "dark glassmorphism UI", "crystal 3D web", "space portfolio"
- **Awwwards Search:** "dark portfolio", "WebGL portfolio", "3D parallax"
