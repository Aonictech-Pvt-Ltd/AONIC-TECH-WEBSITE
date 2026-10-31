# 2026-10-31: Splash Screen Logo Preloader & Brand Asset Architecture

**Author:** Antigravity AI / Engineering  
**Branch:** `feature/logo-splash-loader` → `develop`  
**Date:** October 31, 2026  
**Status:** Complete & Verified (`npm run build` passed)  

---

## 1. Feature Purpose & Overview

When visitors load or refresh any page on the website, an animated preloader takes center stage:
1. The **Aonictech Logo Emblem** appears in the center, surrounded by an orbital glowing halo with dual-accent colors: Electric Blue (Digital) & Amber Bronze (Industrial).
2. The company name **"AONICTECH"** smoothly expands/opens horizontally out from behind the logo emblem with animated letter tracking.
3. The division subtitle **"DIGITAL • INDUSTRIAL"** reveals beneath the brand name.
4. A sleek gradient progress line charges from 0% to 100% (1.8 seconds duration).
5. The entire splash screen gently fades to `opacity: 0` (`pointer-events: none`), revealing the website with zero layout jump.

---

## 2. Logo Asset Placement & Guidelines

In Next.js App Router, all static public images are served directly from the root `public/` directory.

### Where to Place Your Logo:
Place your logo image file in:
- **Primary recommended path:**  
  `public/images/logo.png`
- **Supported alternatives:**  
  `public/images/logo.svg` or `public/logo.png`

```
AONIC-TECH-WEBSITE/
├── public/
│   ├── images/
│   │   ├── logo.png   <-- PLACE YOUR CUSTOM LOGO FILE HERE
│   │   └── logo.svg   <-- Vector backup emblem
│   └── logo.svg
```

### Automatic Fallback Behavior:
The `<Logo />` and `<Preloader />` components are engineered with graceful fallback:
- They first attempt to load `/images/logo.png`.
- If you haven't dropped your PNG file in yet, they automatically fall back to `/images/logo.svg` (the high-resolution dual-niche geometric emblem) so the website never displays a broken image icon.

---

## 3. Component Architecture

| Component | Path | Responsibility |
| :--- | :--- | :--- |
| `Preloader` | `src/components/ui/Preloader.tsx` | Full-screen overlay, orbital halo ring, horizontal name expansion animation, progress bar, smooth exit. |
| `Logo` | `src/components/ui/Logo.tsx` | Reusable logo element with fallback error handling used in Navbar, Footer, and UI. |
| `RootLayout` | `src/app/layout.tsx` | Mounts `<Preloader />` so it runs seamlessly on initial load and browser refresh. |

---

## 4. Verification & Testing

- Verified with `npm run build`: Exit code 0, 11/11 routes statically and dynamically generated without any hydration or layout warnings.
