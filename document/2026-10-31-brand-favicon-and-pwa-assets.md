# Brand Favicon & Web Manifest Integration Documentation

**Date:** 2026-10-31  
**Branch:** `feature/update-brand-favicon`  
**Topic:** Multi-resolution Favicon, Apple Touch Icon, and Next.js App Router Web Manifest integration using the official brand emblem.

---

## 1. Summary of Changes

To complete the brand identity and browser presence across desktop, mobile, and Apple/Android devices:
1. **Source Asset:**
   - Sourced directly from `public/images/company-logo-mark.png` (the high-definition transparent-background circuit sphere emblem featuring the 4 core brand accent colors: Green `#63A26B`, Yellow `#FFDB18`, Lavender `#757CB6`, Royal Blue `#1926A0`).
2. **Generated Multi-Format Favicon Assets:**
   - `public/favicon.ico` & `src/app/favicon.ico`: Embedded multi-size ICO binary containing 16x16, 32x32, and 48x48 icon frames.
   - `src/app/icon.png`: App Router 32x32 standard icon.
   - `src/app/apple-icon.png`: App Router 180x180 Apple touch icon.
   - `public/images/favicon-16x16.png` & `public/images/favicon-32x32.png`: Standard PNG favicons.
   - `public/images/apple-touch-icon.png`: 180x180 high-DPI iOS home screen bookmark icon.
   - `public/images/android-chrome-192x192.png` & `public/images/android-chrome-512x512.png`: Android PWA/Chrome splash icons.
3. **App Router Web Manifest:**
   - Created `src/app/manifest.ts` providing `manifest.webmanifest` with `#FFFFFF` background, `#1926A0` theme color, and responsive icon mappings.
4. **Layout Metadata & Theme Consistency:**
   - Updated `src/app/layout.tsx` metadata with `metadataBase`, comprehensive `icons` declarations (`icon`, `apple`, `shortcut`), and OpenGraph image fallback to the brand emblem.
   - Verified root `body` styling adheres cleanly to `bg-white text-[#0E0E25] selection:bg-[#1926A0] selection:text-white`.

---

## 2. Verification & Testing

- Production build test (`npm run build`):
  - All 15 routes compiled with 0 errors.
  - Next.js automatically registered `/apple-icon.png`, `/icon.png`, and `/manifest.webmanifest`.
- Git Flow: Developed on `feature/update-brand-favicon` for clean merge into `develop`.
