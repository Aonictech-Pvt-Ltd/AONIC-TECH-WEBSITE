# Dissolve Preloader & Master Horizontal Logo Integration

**Date:** 2026-11-01  
**Branch:** `feature/dissolve-preloader-and-new-horizontal-logo`  
**Scope:** Re-architecture of the Preloader to a centered dissolve transition (no glide), integration of the new `Horizontal_Logo_WithoutBG.png` master logo across Header and Footer, and explanation of dev-server CSS cache behavior.

---

## 1. Overview & Objectives

1. **Preloader Transformation:**
   - Eliminated the glide-to-header motion entirely.
   - The preloader remains dead-center on a 100% spotless `#FFFFFF` canvas for 3500ms, showcasing the animated circuit WebP and staggered `"AONIC TECH"` letter reveal.
   - At 3500ms, it smoothly dissolves (`transition-opacity duration-700 ease-out`), revealing the website and navbar seamlessly underneath.
2. **Master Horizontal Logo Integration:**
   - Integrated the user's master `/Horizontal_Logo_WithoutBG.png` (834 x 299, 100% transparent PNG).
   - Trimmed and generated:
     - `public/images/company-logo.png` (Light variant for Header: Dark Navy `"AONIC TECH"` typography + colored circuit emblem, aspect ratio `3.42584`).
     - `public/images/company-logo-white.png` (Dark variant for Footer: Pure white `"AONIC TECH"` typography + colored circuit emblem, aspect ratio `3.42584`).
   - Cleaned up temporary root files and archived master in `public/images/master/`.
3. **Dev Server Unstyled HTML Root Cause Analysis:**
   - Running `next build` concurrently while `next dev` is running on `localhost:3000` causes `.next/` cache overwrites.
   - `next dev` searches for its development CSS manifests that were replaced by production artifacts, resulting in 404 for CSS chunks until `next dev` is stopped and restarted.

---

## 2. Technical Modifications

### `src/components/ui/Preloader.tsx`
- Removed all coordinate tracking, bounding rect measurements, and translation deltas.
- Fixed at `left: 50%, top: 50%, transform: translate3d(-50%, -50%, 0) scale(1.65)`.
- 3500ms center hold → 700ms dissolve transition → unmount at 4200ms.

### `src/components/ui/Logo.tsx`
- Updated aspect ratio to `3.42584` (`716 / 209`).
- Renders `company-logo.png` for Header (`variant="light"`) and `company-logo-white.png` for Footer (`variant="dark"`).
- Zero white boxes, zero borders.

### `src/components/layout/Navbar.tsx`
- Simplified `#navbar-brand-logo` to render immediately without delay.

---

## 3. Verification
- `npm run build` completed with 0 errors across all 14 routes.
- Pushed to `develop` and `main` following strict Git-Flow.
