# Animated WebP Preloader & Dynamic Refresh Animation

**Date:** October 31, 2026  
**Branch:** `feature/animated-webp-preloader`  
**Status:** Completed & Production Verified  

---

## 1. Objectives & Technical Scope

Per direct instruction:
> *"did we use it for starting animation ? explain me bro what the hell i want this and that text 'AONIC TECH'. Header and footer are fine bro dont touch them only the refresh animation part i want to use this webp thing can we do that"*

### Scope Boundaries
1. **Header & Footer Preserved**: Completely untouched; they continue to display the official 600 DPI static master lockups (`company-logo.png` in the header, `company-logo-white.png` in the dark footer) for permanent stability and crispness.
2. **Refresh / Starting Animation (`Preloader.tsx`)**: Upgraded to use the dynamic 42-frame circuit sweep animation (`public/images/logo-animated.webp` copied from `converted logo .webp`) paired with the bold brand typography **"AONIC TECH"** and *"Digital & Industrial"*.

---

## 2. Implementation Details

### A. Asset Integration
- Copied `converted logo .webp` to `public/images/logo-animated.webp`.
- The WebP contains a 42-frame looping animation (3.0s total: 540ms pause + 2460ms circuit trace sweep) showing the multi-color traces (green, lavender, royal blue, yellow) drawing themselves dynamically.

### B. `Logo.tsx` Component Architecture
- Added an `animated?: boolean` property to `LogoProps`.
- When `animated={false}` (default for Header and Footer): Renders the official static master horizontal lockup.
- When `animated={true}` (used exclusively by `Preloader.tsx`):
  - Renders the animated circuit emblem with `mix-blend-multiply` and `scale-[1.3]` for tight margin cropping against the pure white `#FFFFFF` canvas.
  - Renders the bold typography `"AONIC TECH"` and `"Digital & Industrial"` side-by-side.

### C. Cinematic Preloader Pacing
- In `Preloader.tsx`:
  - Center Hold: Set to 1800ms so users can fully experience the animated circuit traces sweeping into place in the center of the screen with radiant atmospheric brand glows.
  - Smooth Glide: 1250ms with `cubic-bezier(0.16, 1, 0.3, 1)`.
  - Seamless Dock: When the glider docks at `navbar-brand-logo`, the header's static master logo takes over smoothly, and the preloader fades away.

---

## 3. Verification
- `npx next build` compiled with 0 errors across all 14 routes.
- Header and footer verified as 100% static.
- Refresh preloader plays the animated WebP and glides smoothly into the navbar.
