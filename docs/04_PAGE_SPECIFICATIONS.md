# FORGEAXIOM — PAGE-BY-PAGE SPECIFICATIONS
## Complete Wireframe & Content Blueprint for Every Page

---

## PAGE 1: HOME (/)

**Priority:** P0 — Critical  
**Purpose:** Brand intro, hero crystal, CTA

### Section 1 — Hero (100dvh)
- **Layout:** Full-viewport height, centered text, 3D crystal center-right
- **Background:** ABYSS (#07081A) + CSS radial-gradient purple nebula at 20% top-right
- **Particles:** WebGL particle field (2000 vertices, mouse-repel physics)
- **Text Line 1:** "WE FORGE" — Clash Display, 80px+
- **Text Line 2:** "DIGITAL AXIOMS" — gradient text (forge → crystal → star)
- **Subtext:** "Web Development · UI/UX · Digital Solutions"
- **Badge:** "Available for Projects" — glow badge with green pulse dot
- **CTA Primary:** "See Our Work" → /work (glass + purple border)
- **CTA Secondary:** "Book a Call" → /contact (ghost button)
- **Crystal:** 3D gem, auto-rotates Y-axis (0.003 rad/frame), mouse parallax ±15px
- **Scroll Indicator:** Animated chevron bouncing at bottom, fades at 100px scroll
- **Animation:** GSAP SplitText char-by-char stagger entrance

### Section 2 — Marquee Strip
- **Content:** Infinite scroll ticker
- **Tech List:** "REACT · NODE.JS · THREE.JS · FIGMA · NEXT.JS · TAILWIND · MONGODB · GSAP · WEBGL ·"
- **Style:** Alternating purple / white text, glass bg strip
- **Speed:** 30s linear infinite loop

### Section 3 — Stats Row
- **Layout:** 4 animated counters in a row
- **Stats:**
  - 4+ Projects Delivered
  - 2 Developers
  - 100% Client Satisfaction
  - 3+ Years Experience
- **Animation:** Count from 0 → target on viewport enter, 2s duration

### Section 4 — Featured Work
- **Layout:** 2 glass cards side by side (top projects)
- **Card Contents:** Cover image (16:9) + project title + tags + "View Case Study →"
- **Effect:** Tilt on hover (VanillaTilt or R3F raycaster, 15deg max)
- **CTA:** "View All Work →" button
- **Animation:** Cards stagger fromTo y:80→0, opacity:0→1, stagger:0.2

### Section 5 — Services Teaser
- **Layout:** 3 service tiles (glassmorphism)
- **Services:** Web Development | UI/UX Design | Digital Solutions
- **Hover:** Liquid glass morph effect
- **CTA:** "See All Services →"
- **Animation:** Tiles scale 0.9→1, opacity:0→1, stagger:0.15

### Section 6 — CTA Banner
- **Layout:** Full-width dark card with cosmic bg
- **Heading:** "Ready to forge your digital presence?"
- **Subtext:** "Let's build something extraordinary together."
- **CTA:** "Start a Project" button → /contact

---

## PAGE 2: SERVICES (/services)

**Priority:** P0 — Critical  
**Purpose:** What ForgeAxiom offers, pricing signals

### Section 1 — Page Header
- **Headline:** "OUR SERVICES"
- **Subtext:** Brief brand statement about the studio's approach
- **Decorative:** Small crystal icon SVG

### Section 2 — Services Grid
- **Layout:** 3-column (desktop), 1-column (mobile)
- **Card Design:** Tall glass cards with icon top (3D icon via Spline/Rive or SVG), title, description, tech stack tags
- **Hover Effect:** Liquid glass warp + purple glow

**Card 1 — Web Development (Saral's Domain):**
- Full Stack Development
- API Development
- MongoDB Architecture
- React/Next.js Apps
- Performance Optimization
- Tags: React, Next.js, Node.js, MongoDB, Express, TypeScript

**Card 2 — UI/UX Design (Jatin's Domain):**
- UI/UX Design (Figma)
- Component Design Systems
- Responsive Frontends
- Motion Design
- Brand Identity
- Tags: Figma, Tailwind CSS, Framer Motion, GSAP, Adobe Suite

**Card 3 — Digital Solutions (Combined):**
- E-commerce Development
- CMS Integration
- SEO Optimization
- Analytics & Tracking
- Website Maintenance
- Tags: Vercel, Notion CMS, Plausible, Shopify, Stripe

### Section 3 — Process Section
- **Layout:** 4-step horizontal timeline
- **Steps:** Discover → Design → Develop → Deploy
- **Each Step:** Icon + title + description
- **Animation:** Steps reveal sequentially on scroll

### Section 4 — Pricing Signal
- **Not exact prices** — tiers with "Starting from" ranges
- **Tiers:**
  - Starter: "Starting from ₹25K" — Single-page sites, landing pages
  - Professional: "Starting from ₹75K" — Multi-page, CMS, animations
  - Enterprise: "Starting from ₹2L" — Full-stack apps, e-commerce, custom 3D
- **Style:** Glass cards, highlighted recommended tier

### Section 5 — CTA
- **Heading:** "Let's Build Together"
- **Button:** → /contact with Calendly embed

---

## PAGE 3: WORK / PORTFOLIO (/work)

**Priority:** P0 — Critical  
**Purpose:** Case studies grid

### Section 1 — Filter Bar
- **Tags:** ALL / WEB APP / UI-UX / FULLSTACK / MOBILE
- **Style:** Horizontal tag buttons, glass-style
- **Animation:** Filter transitions (items fade/scale on filter change)

### Section 2 — Project Grid
- **Layout:** Asymmetric masonry-inspired grid — alternating large/small cards
- **Card Contents:** Cover image (16:9) + glass overlay on hover with project name, tags, year, "View Case Study →"
- **Tilt Effect:** VanillaTilt.js — 15deg max tilt, glare layer
- **Animation:** Cards stagger-reveal on scroll (GSAP fromTo opacity:0→1, y:60→0, stagger:0.15)

### Section 3 — Projects (4 Placeholder)
1. **Project 1** — Category: Web App, Year: 2025
2. **Project 2** — Category: UI-UX, Year: 2025
3. **Project 3** — Category: Full Stack, Year: 2024
4. **Project 4** — Category: Mobile, Year: 2024

*(Replace with real content via Notion CMS)*

---

## PAGE 3B: CASE STUDY (/work/[slug])

**Priority:** P0 — Critical  
**Purpose:** Individual project deep-dive

### Layout Flow:
1. **Full-screen cover image** (1920×1080 hero)
2. **Brief + Roles** — Project name, client, year, team roles
3. **Challenge** — Problem statement
4. **Solution** — How ForgeAxiom solved it
5. **Tech Stack** — Tech tags grid
6. **Results** — Metrics, screenshots, outcomes
7. **Next/Prev Nav** — Navigate between projects

---

## PAGE 4: TEAM (/team)

**Priority:** P1 — High  
**Purpose:** Saral + Jatin profiles

### Section 1 — Page Header
- **Headline:** "THE TEAM"
- **Subtext:** "Two developers. One vision. Zero compromise."

### Section 2 — Team Cards (2-column desktop, stacked mobile)

**Saral Banker Card:**
- Photo/avatar (hexagon clip-path)
- Title: "Full Stack Developer"
- Skill Tags: React, Node.js, MongoDB, Next.js, Express, TypeScript
- Social Links: GitHub, LinkedIn, Twitter
- Fun Fact: [Placeholder text]
- Aura Color: Blue-Electric glow

**Jatin Basantani Card:**
- Photo/avatar (hexagon clip-path)
- Title: "UI-UX + Frontend Developer"
- Skill Tags: Figma, React, Tailwind, Framer Motion, GSAP, Adobe Suite
- Social Links: GitHub, LinkedIn, Dribbble
- Fun Fact: [Placeholder text]
- Aura Color: Purple-Crystal glow

### Section 3 — Skills Section
- **Animated skill bars** (GSAP width transition on scroll enter)
- **Show proficiency percentages** for each tech

### Section 4 — How We Collaborate
- **Short paragraph** about their workflow
- **Visual process diagram** — Discovery → Design → Build → Ship

**Animation:** Cards slide in from left/right alternating on scroll

---

## PAGE 5: BLOG (/blog)

**Priority:** P1 — High  
**Purpose:** Articles grid (Notion CMS)

### Data Source
- Notion Database → Next.js API route → ISR (revalidate: 3600s)

### Section 1 — Featured Post
- **Layout:** Large card at top
- **Contents:** Cover image + title + excerpt + author + date + read time

### Section 2 — Blog Grid
- **Layout:** 3-per-row cards below featured
- **Card Contents:** Cover image + category tag + title + excerpt + author avatar + date + read time

### Section 3 — Filter
- **Categories:** Web Dev / UI-UX / Tutorial / Opinion / Case Study

---

## PAGE 5B: BLOG POST (/blog/[slug])

- **Rendering:** notion-to-md → MDX/HTML
- **Code Blocks:** Prism.js syntax highlighting
- **SEO:** Dynamic OG image (@vercel/og) + JSON-LD schema
- **Layout:** Article width (max 720px), padded, readable typography

---

## PAGE 6: CONTACT (/contact)

**Priority:** P0 — Critical  
**Purpose:** Form + Calendly + info

### Layout: 2-column (desktop), stacked (mobile)

**Left Column — Form:**
- Name (text input, glass-style)
- Email (email input)
- Company (optional text input)
- Project Type (select: Web Application / UI/UX Design / E-commerce / Full Stack / Other)
- Budget Range (select: Under ₹50K / ₹50K-₹2L / ₹2L-₹5L / ₹5L+ / Not Sure)
- Message (textarea)
- Submit Button: "Send Message" — magnetic on hover
- Validation: Zod schema + React Hook Form, inline errors in purple
- Success State: Form disappears → animated checkmark → "We'll be in touch within 24 hours"

**Right Column — Calendly:**
- Inline embed (not popup)
- Dark theme configured
- URL: calendly.com/forgeaxiom/discovery

**Contact Info:**
- Email: info@forgeaxiom.dev
- Location: India
- Response Time: "Within 24 hours"
- Availability: "Available for remote globally"

**WhatsApp Button:**
- Sticky bottom-right
- Mobile: prominent
- Desktop: subtle icon

**Animation:** Form fields animate in sequentially on viewport enter

---

## PAGE 7: 404 (Custom)

**Priority:** P2 — Standard

- **Headline:** "404 — Lost in the Void"
- **Subtext:** "This page doesn't exist in our dimension."
- **Decorative:** Small floating crystal with CSS animation
- **CTA:** "Return Home" button → /
- **Style:** Centered, cosmic background, minimal

---

## NAVIGATION BEHAVIOR REFERENCE

| Feature | Specification |
|---------|--------------|
| Desktop Nav | Sticky top, glass-morphism on scroll, logo left + links center (pill container) + CTA right |
| Mobile Nav | Hamburger → full-screen overlay, staggered link entrance (GSAP y:40→0, stagger 0.1s) |
| Scroll Behavior | Hides on scroll down (−10px threshold), reappears on scroll up |
| Active States | Current page link gets purple background in pill nav |
| CTA Button | "Let's Talk" — magnetic, hover: bg fills purple |
| Logo | Crystal icon SVG + "FORGEAXIOM" wordmark, hover: crystal pulses |

---

## PAGE TRANSITIONS

| Property | Value |
|----------|-------|
| Library | Framer Motion AnimatePresence + motion.div wrappers |
| Exit | opacity 1→0 + y 0→-30px (100ms) |
| Enter | opacity 0→1 + y 30→0px (300ms) |
| Crystal | Persists across transitions (not unmounted) |
| Back Nav | Reverse animation (y direction flipped) |
