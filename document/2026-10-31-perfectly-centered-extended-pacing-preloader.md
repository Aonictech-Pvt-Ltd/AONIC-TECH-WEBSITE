# Perfectly Centered Extended-Pacing Preloader & Solid Mega Dropdown Architecture

**Date:** 2026-10-31  
**Branch:** `feature/centered-extended-pacing-preloader`  
**Scope:** Client-side refresh animation centering, timing extension (+2.0s hold), letter reveal choreography, and solid navbar dropdown rendering.

---

## 1. Executive Summary & Problem Analysis

Two critical visual glitches were identified and resolved:

### A. Preloader Off-Center Glitch
- **Observed Behavior:** During the initial refresh hold, the animated emblem and text appeared noticeably shifted to the right of the screen rather than dead-center.
- **Root Cause:** In the previous implementation, centering was computed relative to `#navbar-brand-logo`'s bounding box (`152px` wide). However, the animated glider (`<Logo size={42} animated={true} />`) rendered an emblem (`57px`), gap (`16px`), and text (`"AONIC TECH"` ~ `180px`), creating a total content width of ~`253px`. Centering the 152px container caused the extra ~101px to overflow to the right, placing the visual center 50.5px off-center.
- **Solution:** Switched to CSS viewport anchor positioning: `position: fixed; left: 50%; top: 50%; transform: translate3d(-50%, -50%, 0) scale(1.65)`. This mathematically guarantees 100.00% dead-center horizontal and vertical placement regardless of content size or font rendering delays.

### B. Animation Pacing (+2.0s Extension)
- **Observed Behavior:** The intro animation glided into the navbar too quickly before the user could fully absorb the animated circuit traces and staggered brand typography.
- **Solution:** Extended the center hold by +2.0 seconds (from 1800ms to 3800ms). Glide transition duration set to 1400ms (`cubic-bezier(0.16, 1, 0.3, 1)`). Safety fallback timers synchronized in `Preloader.tsx` (5600ms) and `Navbar.tsx` (6000ms).

### C. Services Mega-Dropdown Opacity & Elevation Glitch (Image 1)
- **Observed Behavior:** On `/services` or when scrolling, the mega-dropdown appeared translucent under certain browser compositing modes, causing underlying page headings and CTA text to collide and bleed through.
- **Solution:** Enforced strict solid background opacity (`style={{ backgroundColor: "#FFFFFF" }}`), boosted z-index to `z-[60]`, and added deep elevation shadow (`shadow-2xl shadow-[#0E0E25]/15`).

---

## 2. Technical Implementation Details

### `src/components/ui/Preloader.tsx`
1. **Geometric Centering & Docking Formula:**
   ```ts
   const targetCenterX = navRect.left + gliderWidth / 2;
   const targetCenterY = navRect.top + gliderHeight / 2;
   const viewportCenterX = window.innerWidth / 2;
   const viewportCenterY = window.innerHeight / 2;

   setTargetOffset({
     x: targetCenterX - viewportCenterX,
     y: targetCenterY - viewportCenterY,
   });
   ```
2. **Transform States:**
   - **Center Hold (`stage === "center"`):**
     `translate3d(-50%, -50%, 0) scale(1.65)`
   - **Gliding (`stage === "gliding"`):**
     `translate3d(calc(-50% + ${targetOffset.x}px), calc(-50% + ${targetOffset.y}px), 0) scale(1)`
3. **Pacing:**
   - Hold: `3800ms` (+2.0s extension)
   - Glide: `1400ms` (`cubic-bezier(0.16, 1, 0.3, 1)`)
   - Preloader Fallback: `5600ms`

### `src/components/ui/Logo.tsx`
1. Enlarged emblem: `emblemSize = Math.round(size * 1.45)` (61px desktop, 52px mobile).
2. Refined typography: `text-base sm:text-lg font-black tracking-[0.16em] sm:tracking-[0.20em]`.
3. Staggered letter reveal cadence: `400ms + index * 75ms` with 420ms duration. All 10 characters reveal by 1.5s, allowing a luxurious 2.3s static display before gliding.

### `src/components/layout/Navbar.tsx`
1. Mega dropdown: `style={{ backgroundColor: "#FFFFFF" }}`, `z-[60]`, `shadow-2xl shadow-[#0E0E25]/15`.
2. Mobile menu drawer: `style={{ backgroundColor: "#FFFFFF" }}`.
3. Fallback timer updated from 4000ms to 6000ms.

---

## 3. Brand Compliance Verification
- Canvas: 100% spotless `#FFFFFF` (zero blur halos, zero boxes, zero borders).
- Typography: `#0E0E25` (Dark Navy) on pure white.
- Palette: Royal Blue (`#1926A0`), Lavender (`#757CB6`), Yellow (`#FFDB18`), Green (`#63A26B`), Dark Navy (`#0E0E25`), White (`#FFFFFF`), Black (`#000000`).
