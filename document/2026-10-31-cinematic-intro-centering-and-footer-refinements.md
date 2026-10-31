# Architecture & Development Documentation — Cinematic Intro Centering & Brand Refinements

**Date:** 2026-10-31  
**Author:** Antigravity AI  
**Branch:** `feature/cinematic-intro-and-footer-refinements` -> `develop` -> `main`

---

## 1. Executive Summary

This session executed a series of targeted refinements to elevate the branding, layout hygiene, and user experience:
1. **Yellow Dot Removal Beside Brand Logo**: Completely eliminated the pulsing `#FFDB18` accent dot from `src/components/ui/Logo.tsx`, ensuring a clean, corporate presentation in both Navbar and Footer across all screen sizes.
2. **WhatsApp Action Button Label**: Updated all CTA labels from displaying the raw phone number string (`WhatsApp: +91 73968 88679` / `Chat on WhatsApp (+91 73968 88679)`) to a clean, authoritative `WhatsApp` label accompanied by the official brand vector icon.
3. **Legal Entity Name & Bottom Footer Strip**:
   - Corrected legal corporate entity name in `src/data/company.ts` to `Aonic Tech Private Limited` (replacing the previous `AONIC TECH PRIVATE. Ltd.`).
   - Cleaned the bottom legal bar by removing `Hyderabad, Telangana` and the separator bullet dot (`•`), leaving a balanced layout with copyright on the left and Privacy Policy & Terms on the right.
4. **Google Maps Yellow Vector Location Badge**:
   - Replaced the multi-colored SVG pin with a clean, branded SVG vector location pin in `#FFDB18` enclosed in a subtle `#FFDB18`/20 badge container.
   - Restored strict 100% compliance with the 7-color brand palette.
5. **Cinematic Logo Intro & Header Docking Overhaul**:
   - Re-architected `src/components/ui/Preloader.tsx` to use native CSS flexbox centering (`fixed inset-0 flex items-center justify-center`), guaranteeing true geometric dead-center alignment on all viewports without manual coordinate approximations.
   - Guaranteed full-viewport white canvas `#FFFFFF` initial paint to eliminate initial page flash on refresh.
   - Maintained an empty header state during intro via zero-hydration-mismatch `logoVisible` state in `src/components/layout/Navbar.tsx`.
   - Built a mathematically pure glide trajectory from viewport center to the exact coordinates of `#navbar-brand-logo`, scaling smoothly from `var(--logo-intro-scale)` down to `1.0` with Apple-style `cubic-bezier(0.16, 1, 0.3, 1)` easing.
   - Synchronized seamless handoff via custom event `"aonic-preloader-docked"`.

---

## 2. Technical Implementation Details

### A. Logo Component (`src/components/ui/Logo.tsx`)
- Removed the inline pulsing circle element `<span className="w-1.5 h-1.5 ... bg-[#FFDB18] ... />`.
- Cleaned the typography container to render `AONICTECH` with sharp letterforms in `#0E0E25` (light mode) or `#FFFFFF` (dark mode).

### B. Company Configuration & Footer (`src/data/company.ts`, `src/components/layout/Footer.tsx`)
- Changed `COMPANY_INFO.legalName` to `"Aonic Tech Private Limited"`.
- Removed `Hyderabad, Telangana` and separator bullet from the bottom legal bar.
- Implemented `#FFDB18` vector location badge for the Google Maps anchor link.

### C. WhatsApp Buttons (`src/app/page.tsx`, `src/app/blog/page.tsx`)
- Standardized button label to `WhatsApp` with vector handset icon.

### D. Zero-Hydration Preloader & Navbar Docking
- `src/components/layout/Navbar.tsx`:
  - `logoVisible` starts as `false` on both SSR and client initial hydration, preventing React 19 hydration mismatch warnings.
  - Listens to `"aonic-preloader-docked"` event to trigger `logoVisible = true` with a smooth 300ms fade-in.
  - Includes a fallback safety timeout (2800ms) to ensure visibility under all network conditions.
- `src/components/ui/Preloader.tsx`:
  - Uses CSS flexbox for centering the brand mark.
  - Responsive scale variables defined in `src/app/globals.css` (`--logo-intro-scale: 1.25` on mobile, `1.45` on desktop).
  - Measures `#navbar-brand-logo` bounding rect on client and glides directly to `(targetX, targetY)` with scale `1.0`.
  - Dispatches `"aonic-preloader-docked"` at 2150ms and unmounts cleanly at 2350ms.

---

## 3. Verification & Compliance
- **Next.js Production Build**: `next build` executed with 0 errors across 14 routes.
- **Hydration Matching**: Server and initial client render share identical DOM trees and attribute values.
- **Color Palette Constraint**: Strictly adhered to the 7 approved brand colors (`#FFFFFF`, `#0E0E25`, `#000000`, `#1926A0`, `#757CB6`, `#FFDB18`, `#63A26B`).
