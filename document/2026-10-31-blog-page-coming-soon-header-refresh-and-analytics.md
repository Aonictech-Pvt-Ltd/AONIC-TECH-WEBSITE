# Architecture & Implementation: Blog "Coming Soon", Header Refresh Glitch Resolution, and Vercel Observability

**Date:** 2026-10-31  
**Author:** AI Engineering & Architecture Team  
**Branch:** `feature/blog-page-coming-soon-and-remove-contact`

---

## 1. Executive Summary

This release resolves three critical architectural and user-experience priorities for Aonictech:
1. **Elimination of the Header Logo Refresh Glitch ("Once in Header, Stays in Header")**: Completely eradicated the visual flash, pop-in, and replay animation when reloading or navigating the site.
2. **Contact Route Deprecation & Transition to WhatsApp Quick Conversions**: Removed the legacy `/contact` page from the header and user flows, redirecting legacy traffic permanently to `/blog`, and transitioning commercial CTAs to direct pre-filled WhatsApp B2B communication channels.
3. **Launch of the Official Blog ("Coming Soon" State)**: Deployed a dual-niche engineering dispatch portal (`/blog`) featuring an interactive category selector, notification alert subscription, upcoming technical paper teasers, and strict adherence to the 7 brand colors.
4. **Vercel Web Analytics & Speed Insights Integration**: Added `@vercel/analytics` and `@vercel/speed-insights` to `layout.tsx` for real-time Core Web Vitals monitoring.

---

## 2. Technical Root Cause & Solution: Header Refresh Glitch

### The Problem
Previously, on every browser refresh or hard navigation:
- `Preloader.tsx` re-mounted and re-initialized its state from `"solo-center"`.
- `Navbar.tsx` initialized `logoVisible` to `false` (`opacity-0`), waiting for an asynchronous custom event (`aonic-preloader-docked`) after 3550ms.
- At the exact millisecond of handoff (3550ms), the preloader abruptly unmounted while the Navbar logo initiated a 200ms opacity fade.
- If a user refreshed the page, they experienced an abrupt flash of the preloader, followed by a jump in position and typography as the static logo rendered in the header.

### The Solution: Zero-Flash Dual-Layer Persistence
1. **Pre-Paint Inline Execution in `<head>` (`layout.tsx`)**:
   A synchronous 2-line script executes before the browser paints the initial DOM frame:
   ```html
   <script>
     try {
       if (sessionStorage.getItem('aonic_intro_shown') || localStorage.getItem('aonic_intro_shown')) {
         document.documentElement.classList.add('aonic-intro-done');
       }
     } catch (e) {}
   </script>
   ```
2. **Immediate CSS Rule Application (`globals.css`)**:
   ```css
   html.aonic-intro-done #aonic-preloader-root {
     display: none !important;
   }
   html.aonic-intro-done #navbar-brand-logo {
     opacity: 1 !important;
     visibility: visible !important;
   }
   ```
3. **Smooth Cross-Fade on First Load**:
   When the cinematic preloader plays on initial site entry:
   - At 3450ms, persistence flags are stored in `sessionStorage` and `localStorage`.
   - The preloader transitions to a `"fading"` stage (300ms CSS opacity transition), smoothly cross-fading into the static Navbar logo that is already positioned directly underneath it.
   - On unmount, there is zero displacement or visual flicker.
4. **Permanent Docking Across Refreshes**:
   Once the logo reaches the header, any refresh or navigation immediately loads the static header logo with 100% opacity from frame zero.

---

## 3. Deprecation of `/contact` & Route Redirection

- **Navbar Navigation**: Replaced `"Contact Us"` with `"Blog"` (`/blog`) in desktop navigation and mobile drawer.
- **Header CTAs**: Replaced `/contact` CTA links with direct WhatsApp chat links (`COMPANY_INFO.whatsappLink`) carrying encoded inquiry text.
- **Route Redirect in `next.config.ts`**: Added a permanent 308 redirect from `/contact` to `/blog` so legacy bookmarks or inbound links resolve gracefully.
- **Cleaned Internal Links**: Updated all CTA and enquiry buttons across `src/app/page.tsx`, `src/app/about/page.tsx`, `src/app/projects/page.tsx`, and `src/app/services/page.tsx` to pre-filled WhatsApp URLs.
- **Removed Deprecated Page**: Safely deleted `src/app/contact/page.tsx`.

---

## 4. The New Blog Page (`/blog`) Architecture

- **Visual Hierarchy & White Theme**: Built strictly on the White Theme (`#FFFFFF`) with Dark Navy typography (`#0E0E25`) and Royal Blue digital accents (`#1926A0`).
- **Interactive Subscription**: Client-side validated email capture with simulated priority notification registration stored in `localStorage`.
- **Dual-Niche Pipeline**:
  - *Digital Solutions*: Zero-downtime offline-first POS architecture, high-throughput Next.js App Router performance, and B2B portal security.
  - *Industrial Materials*: Grade 1 vs 5 Titanium machinability and metallurgy, Neodymium N52 thermal thresholds and coatings, and DGFT customs landed cost optimization.
- **Editorial Tenets**: Established three foundational pillars: Real Benchmark Data, Certified Chemical Analysis (EN 10204 3.1), and Dual-Niche Synergy.

---

## 5. Vercel Observability Integration

- Added `@vercel/analytics` (`Analytics`) to measure real-time unique visitors, geographic distribution, and device metrics without cookies.
- Added `@vercel/speed-insights` (`SpeedInsights`) to measure real-user Core Web Vitals (LCP, FID, CLS, INP) across Indian networks.

---

## 6. Verification & Quality Assurance

- **Static Generation**: All 14 routes compiled and generated successfully via `npm run build` (Next.js 15.5.28).
- **TypeScript**: 0 type errors.
- **Brand Palette Audit**: 100% compliant with the 7 brand colors specified in `AGENTS.md`.

