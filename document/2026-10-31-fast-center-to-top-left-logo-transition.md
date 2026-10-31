# 2026-10-31: Fast Center-to-Top-Left Logo Gliding Transition

**Author:** Antigravity AI / Engineering  
**Branch:** `feature/logo-glide-animation` → `develop`  
**Date:** October 31, 2026  
**Status:** Complete & Verified (`npm run build` passed)  

---

## 1. Problem & Enhancement Rationale

1. **Duration Optimization:**
   The initial splash screen duration was ~2.3 seconds with a slow progress bar, which created perceptible friction during rapid page refreshes.
   - **Resolution:** The total animation duration was reduced by ~50% to **1.25 seconds** for a snappy, responsive feel.
2. **Spatial Flight Transition (Center to Top-Left):**
   Instead of abruptly fading out in the center of the viewport, the logo and brand typography now physically **glide and scale from the dead-center of the screen directly into the top-left Navbar logo position (`#navbar-brand-logo`)**.

---

## 2. Technical Implementation & Mathematics

```
Screen Viewport (Refresh Triggered)
┌────────────────────────────────────────────────────────┐
│  Navbar [Target: top-left]                             │
│  (X: ~24px, Y: ~16px)                                  │
│       ▲                                                │
│        \                                               │
│         \                                              │
│          \   Glide Vector: ΔX, ΔY                      │
│           \  Cubic-Bezier(0.16, 1, 0.3, 1)             │
│            \                                           │
│             ● Center Stage (0ms - 650ms)               │
│               - Logo Scales In                         │
│               - "AONICTECH" opens horizontally         │
│                                                        │
└────────────────────────────────────────────────────────┘
```

### Motion Phases (Total Time: ~1.25s)
1. **0ms – 150ms:** Logo scales in at center stage (`scale(1)`).
2. **150ms – 650ms:** Company name `AONICTECH` + `Digital & Industrial` expands horizontally out from the logo (`max-w: 0` → `max-w: 340px`).
3. **650ms – 1200ms:** **The Glide Transition!**
   - Coordinates of `#navbar-brand-logo` are calculated using `getBoundingClientRect()`.
   - The logo container translates `translate3d(ΔX, ΔY, 0) scale(0.85)` using `cubic-bezier(0.16, 1, 0.3, 1)`.
   - Concurrently, the dark background overlay fades (`opacity: 1` → `0`) over 450ms.
4. **1250ms:** Preloader completely unmounts, revealing the live interactive navbar logo seamlessly beneath.

---

## 3. Verification & Build Results

`npm run build` succeeded with exit code 0 across all 11 routes.
