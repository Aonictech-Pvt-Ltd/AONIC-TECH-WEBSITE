# Brand Color Palette & Official Company Logo Integration

**Date:** 2026-10-31  
**Author:** AI Engineering & Design Team  
**Branch:** `feature/brand-color-palette-integration`  

---

## 1. Overview
This task unified the website visual design system with the company's official branding assets and color palette provided by leadership. The source logo image `AONIC_LOGO1 3.png` was moved, standardized, and integrated across the Next.js App Router application.

---

## 2. Official Brand Palette

The user specified the following precise hex color values, derived directly from the four circuit traces and typography of the company logo:

| Name | HEX Code | Purpose & Application |
| :--- | :--- | :--- |
| **Dark Navy** | `#0E0E25` | Master atmospheric background canvas, deep glassmorphic panel base, scrollbar track, preloader backdrop |
| **Royal Blue** | `#1926A0` | Primary brand identity, Digital Solutions division, primary action buttons, glow halos |
| **Yellow** | `#FFDB18` | Industrial Materials division, titanium & alloy badges, high-contrast gold accents, star ratings |
| **Lavender** | `#757CB6` | Secondary tech elegance, circuit trace accent, subtle glassmorphic borders, subheaders, chip icons |
| **Green** | `#63A26B` | Direct WhatsApp communication buttons, verified GSTIN/IEC status badges, MTC certificates, live status indicators |
| **Black** | `#000000` | Deep contrast card containers, text on bright yellow buttons, terminal backgrounds |
| **White** | `#FFFFFF` | Primary high-contrast typography, crossbeam accents, crisp headings |

---

## 3. Logo Relocation & Standardization

### 3.1 File Relocation
- Moved `/Users/surojuhomsaisantosh/Documents/PROJECTS/3 AONITECH/1 WEBSITE/AONIC_LOGO1 3.png` from root to:
  - `public/images/company-logo.png` (Full original asset, 2364 x 928)
  - `public/images/logo.png` (Standard fallback alias)
  - `public/images/company-logo-mark.png` (High-DPI transparent circular emblem with 4 circuit traces: Green, Yellow, Lavender, Royal Blue)
  - `public/images/company-logo-white.png` (Full logo with transparent background and white typography for dark mode)

### 3.2 Component Integration
- **`src/components/ui/Logo.tsx`**: Renders `public/images/company-logo-mark.png` with subtle drop-shadow, paired with `AONICTECH` typography, pulsing `#FFDB18` dot, and `#757CB6` subtext.
- **`src/components/ui/Preloader.tsx`**: Features the company circuit emblem in the cinematic center stage before expanding the name and smoothly gliding into the header position.
- **`src/components/layout/Navbar.tsx`**: Uses `#0E0E25` Dark Navy background, `#757CB6` borders, `#63A26B` WhatsApp button, and `#1926A0` Quote CTA.
- **`src/components/layout/Footer.tsx`**: Uses `#0E0E25` Dark Navy, `#1926A0` to `#FFDB18` ambient gradient, and `#63A26B` verified indicators.
- **`src/app/page.tsx` & `src/app/services/page.tsx`**: Distinct visual styling for Digital Solutions (`#1926A0` & `#757CB6`) versus Industrial Supply (`#FFDB18`).
