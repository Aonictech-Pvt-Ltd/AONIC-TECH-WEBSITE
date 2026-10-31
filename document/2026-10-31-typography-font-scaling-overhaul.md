# Typography Overhaul & Site-Wide Font Scaling

**Date:** 2026-10-31  
**Author:** AI Engineering & Design Team  
**Branch:** `feature/typography-scale-and-font-upgrade`  

---

## 1. Problem Statement
The user reported that the website typography was generic and font sizes appeared too small across components and sections:
1. `next/font/google` had been previously removed due to sandbox compile-time network constraints, leading the browser to fall back to system serif/generic sans-serif fonts in certain browsers.
2. Extensive use of `text-xs` (12px), `text-[10px]`, and tight negative tracking (`letter-spacing: -0.012em`) on the root HTML caused body text, forms, cards, and labels to appear shrunken and hard to read on high-resolution displays.

---

## 2. Technical Solution

### 2.1 Font Family Integration
- Integrated Google Fonts **Plus Jakarta Sans** (weights 300, 400, 500, 600, 700, 800) and **Space Grotesk** (weights 500, 600, 700) using:
  1. `<head>` preconnect links to `fonts.googleapis.com` and `fonts.gstatic.com` with parallel stylesheet loading in `src/app/layout.tsx`.
  2. `@import url(...)` in `src/app/globals.css`.
  3. Tailored font fallback stacks in `tailwind.config.ts` including Apple SF Pro Display, Segoe UI, and Roboto.

### 2.2 Global Font Scale & Base Typography
- Removed root negative letter-spacing from `html` element so body text renders with natural optical spacing.
- Set root base font size to 16px with `line-height: 1.68` for comfortable readability.
- Added `-webkit-text-size-adjust: 100%` and subpixel font smoothing.

### 2.3 Component & Page Scale Upscale
- **Navbar:** Nav links upgraded to `text-[15px] font-semibold`, mega dropdown items expanded to `text-sm` with `text-xs` subtitles.
- **Home Page:** Hero title bumped to `text-4xl sm:text-7xl font-black`, hero description to `text-lg sm:text-2xl`, workflow cards to `text-lg` titles with `text-sm` body, CTA buttons to `text-sm sm:text-base`.
- **Services Page:** Tab selectors, feature checklists, and materials catalog table bumped to `text-sm` and `text-base` for clarity.
- **Contact Page:** Form labels upgraded to `text-sm font-semibold`, inputs to `text-base py-3`, FAQ questions to `text-sm font-bold`, and office address card to `text-base` with high contrast.
- **Projects Page:** Case study challenges and solutions scaled to `text-sm`, commercial metrics to `text-base font-bold`, and credentials to `text-sm`.
- **About Page:** Genesis story, mission/vision, and legal credential cards scaled to `text-base` and `text-sm` with bold mono tags.
- **Footer:** Company address, quick links, capabilities, and phone/email details scaled to `text-sm` and `text-base` font weights.
