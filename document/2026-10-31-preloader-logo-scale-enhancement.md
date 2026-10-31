# Architectural Architecture: Preloader Splash Logo Scaling & Presence Enhancement

**Date:** 2026-10-31  
**Author:** AI Development Agent  
**Context:** Resolving user feedback where the preloader logo appeared too small on page refresh.

---

## 1. What Was Developed

- **Previous Bottleneck:** In [`Preloader.tsx`](file:///Users/surojuhomsaisantosh/Documents/PROJECTS/3%20AONITECH/1%20WEBSITE/src/components/ui/Preloader.tsx), the centered emblem card was previously constrained to `w-12 h-12 sm:w-14 sm:h-14` (48px–56px). On desktop viewports, this appeared minuscule and lost in the center of the vast white canvas.
- **The Solution:**
  1. **Scale Overhaul:** Increased the emblem card dimensions to `w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40` (120px to 160px)—almost 3x larger—with a 24px rounded card (`rounded-3xl`), deep shadow, and expansive ambient glow.
  2. **Typography Scaling:** Scaled the brand name "AONICTECH" to `text-3xl sm:text-5xl md:text-6xl font-black` with an expanded pulsing gold indicator and high-tracking subtitle (`text-xs sm:text-base md:text-lg`).
  3. **Fluid Downscaling to Header:** The dynamic flight calculation calculates `scaleRatio = navRect.height / curRect.height` (~0.30 to 0.35). As the mark glides from center to the top-left header, it smoothly shrinks down from its large splash presentation into the exact dimensions of the navbar emblem.
  4. **Clean Shell Dissolve:** The white card shell and shadow fade seamlessly to transparent during flight, allowing the clean circuit mark to dock without visual clipping.

---

## 2. Verification
- `npm run build` compiled 100% cleanly with 0 errors across 11 routes.
- Git flow: Committed on `feature/preloader-logo-scale-enhancement` for merge into `develop`.
