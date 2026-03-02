# Avizzo Digital - Frontend Architecture & Design System

## 1. Project Overview
A modern, premium "Liquid Glass" styled marketing agency portfolio, heavily inspired by Apple's design aesthetics. The interface is characterized by dark backgrounds, translucent glassmorphism elements, vibrant neon green accents, and buttery smooth animations.

**Language:** Portuguese (PT-BR) only.

---

## 2. Technology Stack
- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4 (Vanilla CSS variables architecture)
- **Animations:** Framer Motion (for fluid liquid-glass effects, scrolling reveals, and layout transitions)
- **Utilities:** `clsx` and `tailwind-merge` for dynamic classes
- **Icons:** Lucide React

---

## 3. Design System & Theming

### Colors
We will use a sleek and deep dark mode palette with the corporate green (`#1BCC94`) as the primary accent:
- **Background Deep:** `#0A0A0A` (Almost black, premium depth)
- **Background Surface (Cards):** `rgba(255, 255, 255, 0.03)`
- **Primary Brand:** `#1BCC94` (Avizzo Green)
- **Primary Text:** `#FFFFFF` (White)
- **Secondary Text:** `#A1A1AA` (Zinc-400 for better readability on dark)
- **Borders:** `rgba(255, 255, 255, 0.08)` (Subtle glass borders)

### Typography
To achieve the premium Apple-like modern vibe:
- **Headings (Display):** `Outfit` or `Inter` (geometric, sharp, and confident)
- **Body Text:** `Inter` (high legibility, neutral, sleek)

### The Liquid Glass Effect
A customized UI style ensuring maximum premium feel:
- **Translucency:** Backgrounds at `3%` to `10%` white opacity.
- **Backdrop Blur:** `backdrop-blur-xl` for heavy frosted glass where appropriate.
- **Borders:** Ultra-thin `1px` borders with low opacity white.
- **Shadows:** Soft glow shadows around green accents instead of harsh dropshadows.

---

## 4. Site Structure (Pages/Routing)

Based on the header navigation:
1. **`/` (Início):** Hero section, Value proposition, Selected works, and Call to action.
2. **`/sobre` (A Avizzo):** The story, the team, the vision.
3. **`/portfolio` (Portfólio):** A grid of past projects with hover glass reveals.
4. **`/contato` (Contato):** Contact form and location details.
5. **`/portal` (Portal):** Client login or private area portal link.

---

## 5. Logo & Assets Placement

**For the user:**
1. Please place the **main logo** in: `public/images/logo.png` or `public/images/logo.svg` (SVG preferred for crispness).
2. Place the **favicon** in: `app/favicon.ico` (or `public/favicon.ico`).
3. If you have an Apple Touch Icon, place it as `app/apple-icon.png`.
4. Any hero or portfolio photos should go inside `public/images/...`

I will reference these directly in the Next.js `Image` components.

---

## 6. Animation Guidelines (Framer Motion)
- **Staggered Reveals:** Content inside sections will fade in and float up smoothly.
- **Glass Hover:** Cards will subtly increase their white background opacity, push up slightly, and increase their backdrop blur on user hover.
- **Liquid Buttons:** Buttons will have an active spring-based scale down and a soft glow on hover.

*This structure ensures every page maintains a consistent, premium feel across the whole platform.*
