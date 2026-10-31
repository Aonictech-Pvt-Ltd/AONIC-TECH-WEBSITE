# Architecture & Implementation: Pixel-Perfect Cinematic Intro on Every Refresh

**Date:** 2026-10-31  
**Author:** AI Engineering & Architecture Team  
**Branch:** `feature/cinematic-refresh-animation-and-pixel-docking`

---

## 1. Objective

Enable the grand cinematic intro choreography on **every single refresh** while completely eliminating the handoff glitch, font scaling jump, and horizontal displacement when docking into the navbar.

---

## 2. Technical Architecture & Precision Docking

### Root Cause of Previous Glitch
1. In the previous implementation, the preloader container used an arbitrary 80px/160px emblem container with text scaled down to `scale(0.35)`.
2. When scaled down, the text on mobile shrunk to 10.8px, and upon unmounting, the navbar text was 20px, causing a 2x size pop.
3. The preloader had `px-4` padding on the wrapper, causing a 16px horizontal misalignment with the navbar logo.
4. The preloader had a pulsing yellow dot while the navbar logo did not, making it look like the brand mark changed when docked.

### The Unified Precision Docking Architecture
1. **Identical Visual Components**:
   Both `Preloader.tsx` and `Logo.tsx` now share the exact same typography, emblem dimensions (36px mobile, 42px desktop), gap (8px mobile, 12px desktop), and the official brand pulsing yellow dot (`#FFDB18`).
2. **Mathematical Scale Transition (`scale(centerScale)` -> `scale(1)`)**:
   - Initial center state: The brand mark starts centered in the viewport at `scale(2.2)` on desktop and `scale(1.75)` on mobile with `transformOrigin: "0 0"`.
   - Glide state: The brand mark smoothly glides across the screen directly into `(targetX, targetY)` while scaling down to `scale(1)`.
   - Dock state: When it lands, because it is at `scale(1)`, it matches the navbar logo underneath down to the exact pixel.
3. **Execution on Every Refresh**:
   Removed `sessionStorage` restriction so the user experiences the full AAA cinematic intro on every page refresh without any loading glitch or visual artifact.

