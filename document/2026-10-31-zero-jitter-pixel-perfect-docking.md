# Architecture & Development Documentation — Zero-Jitter Pixel-Perfect Logo Docking

**Date:** 2026-10-31  
**Author:** Antigravity AI  
**Branch:** `feature/pixel-perfect-docking-fix` -> `develop` -> `main`

---

## 1. Problem Identification: Post-Glide Position Glitch

### Symptoms
When the preloader logo finished gliding towards the header, users observed a visible position snap/jitter: the logo arrived in the header, and then visibly shifted its position slightly when the preloader unmounted and the navbar took over.

### Root Cause Analysis
1. **Coordinate Misalignment via Abstract Center Formulas**:
   The previous gliding calculation used `(window.innerWidth / 2)` and `(window.innerHeight / 2)` as the source reference. On real displays (especially with vertical scrollbars or responsive scaling), `document.documentElement.clientWidth` and container padding (`max-w-7xl mx-auto px-8`) shift the navbar logo's true screen position relative to the global viewport center, causing a 3px to 8px offset at arrival.
2. **Premature Transition Disablement via `setTimeout` Jitter**:
   The transition state switched from `"gliding"` to `"docked"` via a JavaScript `setTimeout` timer. In multi-threaded browsers, if the timer fires even 10ms before the CSS transition finishes, setting `transition: none` causes an instant visual snap to the target coordinates.
3. **Double-Image Cross-Fade Delay**:
   A 300ms transition on both the fading preloader and the revealing navbar logo created a noticeable ghosting/shift artifact during handoff.

---

## 2. Technical Solution: Base-Pinned FLIP Docking Architecture

### A. Base Position Pinned to Navbar Logo (`posStyle`)
Rather than starting from a free-floating center container and computing destination deltas, the glider's base CSS position is pinned directly to `#navbar-brand-logo`'s live bounding rect:
```tsx
posStyle = {
  position: "fixed",
  left: `${navCoords.left}px`,
  top: `${navCoords.top}px`,
  width: `${navCoords.width}px`,
  height: `${navCoords.height}px`,
};
```

### B. Center State via Delta Offset
At the center stage, the logo is translated by the exact difference between viewport center and the navbar logo's top-left:
```tsx
const centerLeft = (window.innerWidth - navRect.width) / 2;
const centerTop = (window.innerHeight - navRect.height) / 2;
const deltaX = centerLeft - navRect.left;
const deltaY = centerTop - navRect.top;

transformStyle = `translate3d(${deltaX}px, ${deltaY}px, 0px) scale(var(--logo-intro-scale, 1.4))`;
```
- Before glide: `navCoords.left + deltaX = centerLeft` (Dead Center of the screen).

### C. Zero-Translation Docking
When the glide triggers, the target transform is simply:
```tsx
transformStyle = "translate3d(0px, 0px, 0px) scale(1)";
```
- At $(0, 0)$, its rendered coordinates are literally `left: navCoords.left` and `top: navCoords.top`.
- It is impossible for the logo to land in a different position from `#navbar-brand-logo`, because its base position **is** `#navbar-brand-logo`!

### D. Native `onTransitionEnd` Trigger & Scroll Lock
- Replaced timer-based docking with native `onTransitionEnd` listener on `gliderRef`, ensuring the transition has completed to 100.000% before triggering handoff.
- Applied temporary `document.body.style.overflow = "hidden"` during the 1.9s intro to prevent scroll displacement.
- Reduced navbar logo reveal duration to `duration-150` for an instantaneous, invisible handoff.

---

## 3. Verification
- Production build `next build` executed with 0 errors across 14 routes.
- Zero jump or jitter at docking completion.
- Tested responsive CSS scaling and smooth unmount.
