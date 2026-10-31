# 2026-10-31: Choreographed 3-Phase Logo Reveal & Header Glide

**Author:** Antigravity AI / Engineering  
**Branch:** `feature/logo-choreographed-reveal` → `develop`  
**Date:** October 31, 2026  
**Status:** Complete & Verified (`npm run build` passed)  

---

## 1. Choreography Sequence

To match the exact requested sequence:
*"when ever i refresh first it should show the logo then it should go a bit left and name should be revealed and later the same thing should go to the top left in the header part"*

```
PHASE 1 (0ms - 300ms)
The Logo alone appears in the absolute center of the viewport:
                 ┌──────────┐
                 │  [LOGO]  │
                 └──────────┘

PHASE 2 (300ms - 850ms)
The Logo smoothly moves slightly to the left, while the name expands to its right:
       ┌──────────┐  ┌───────────────────────────────────┐
       │  [LOGO]  │  │  AONICTECH • DIGITAL & INDUSTRIAL  │
       └──────────┘  └───────────────────────────────────┘

PHASE 3 (850ms - 1350ms)
The assembled [LOGO + AONICTECH] unit glides smoothly from center to the top-left in the header:
 ┌──────────┐ ┌────────────┐
 │  [LOGO]  │ │ AONICTECH  │  (Navbar Header Position)
 └──────────┘ └────────────┘
        ▲
         \
          \  Smooth FLIP cubic-bezier(0.16, 1, 0.3, 1) flight
           \
            ● Center Staging Area (Curtain fades out)
```

---

## 2. Technical Details

1. **State Machine in `Preloader.tsx`:**
   - `"logo-center"`: Logo is alone at dead center (`max-w-0 opacity-0 ml-0` on typography).
   - `"reveal-name"`: Triggers at 300ms. Typography unfolds to `max-w-[360px] opacity-100 ml-3.5`. Because the wrapper is center-aligned, the logo naturally shifts slightly left as the text blooms right.
   - `"glide-to-header"`: Triggers at 850ms. Coordinates of `#navbar-brand-logo` are read via `getBoundingClientRect()`, and `translate3d(ΔX, ΔY, 0) scale(scale)` executes over 500ms.
   - `"done"`: Preloader unmounts at 1350ms, revealing the live interactive navbar logo seamlessly.
2. **Timing Optimization:**
   Total execution duration is only **1.35 seconds**—fast enough to feel responsive, yet long enough to visually savor the brand animation.

---

## 3. Verification

- Production build passed 11/11 routes.
