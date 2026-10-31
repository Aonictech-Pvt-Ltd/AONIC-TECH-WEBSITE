# Architecture & Development Documentation — Cinematic Intro Timing & Pacing Refinement

**Date:** 2026-10-31  
**Author:** Antigravity AI  
**Branch:** `feature/slow-down-cinematic-intro` -> `develop` -> `main`

---

## 1. Overview & Rationale

User requested to moderate the speed of the intro animation ("its going too fast bro once check and make it a bit slow okay not too mcuh"). The previous glide duration (900ms) with a 1000ms center hold felt slightly hurried.

The timing parameters have been calibrated to provide a luxurious, cinematic cadence without causing any perceived latency:
- **Center Presentation Hold**: Increased from `1000ms` to `1250ms` (+250ms). Gives users a comfortable window to view the centered circuit emblem and brand typography.
- **Glide Motion Duration**: Increased from `900ms` to `1250ms` (+350ms). Produces a smooth, elegant trajectory with decelerated landing using `cubic-bezier(0.16, 1, 0.3, 1)`.
- **Canvas & Ambient Fade**: Extended backdrop and atmospheric glow fade from `700ms` to `900ms`, synchronizing the reveal of the live website with the glide motion.
- **Safety Fallback Timers**: Increased `Preloader.tsx` fallback dock timer to `3000ms` and `Navbar.tsx` safety fallback to `3400ms`.

---

## 2. Technical Changes

- `src/components/ui/Preloader.tsx`:
  - `glideTimer`: `setTimeout(..., 1250)`
  - `transition`: `transform 1250ms cubic-bezier(0.16, 1, 0.3, 1)`
  - White canvas: `duration-900 ease-out`
  - Glows: `duration-900`
  - Ambient aura: `duration-700`
- `src/components/layout/Navbar.tsx`:
  - Adjusted safety fallback timeout from 2800ms to 3400ms.

---

## 3. Verification

- Production build (`next build`) compiled with 0 errors across 14 routes.
- Motion feels premium, fluid, and natural.
