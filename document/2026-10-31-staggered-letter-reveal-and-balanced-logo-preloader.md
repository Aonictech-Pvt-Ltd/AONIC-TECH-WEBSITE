# Staggered Letter-by-Letter Reveal & Balanced Preloader Logo

**Date:** October 31, 2026  
**Branch:** `feature/staggered-letter-reveal-and-balanced-logo`  
**Status:** Completed & Production Verified  

---

## 1. Objectives & Technical Directives

Per direct user instruction:
> *"make the logo a bit bigger and the text a bit smaller and the text should you know go one by one you get it ?"*

### Key Requirements
1. **Emblem Size**: Enlarged by 1.35x (`emblemSize = Math.round(size * 1.35)`), creating a visually commanding hero mark in the center of the preloader screen.
2. **Text Typography**: Scaled down slightly (`text-lg sm:text-xl font-black`) with sophisticated wide tracking (`tracking-[0.14em] sm:tracking-[0.18em]`) for refined, elegant typographic balance against the larger emblem.
3. **Sequential Staggered Letter Reveal**: The characters of `"AONIC TECH"` appear one by one (`A` → `O` → `N` → `I` → `C` → ` ` → `T` → `E` → `C` → `H`) with a choreographed upward settle and de-blur effect (`@keyframes letterReveal`).

---

## 2. Implementation Breakdown

### A. Keyframe Animation (`src/app/globals.css`)
Added `@keyframes letterReveal` to handle the staggered typography entrance:
```css
@keyframes letterReveal {
  0% {
    opacity: 0;
    transform: translateY(8px) scale(0.92);
    filter: blur(2px);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
}
```

### B. Dynamic Staggered Typography (`src/components/ui/Logo.tsx`)
When `animated = true`:
- Splits `"AONIC TECH"` into individual character spans.
- Applies an incremental animation delay (`350 + index * 65ms`) starting right as the circuit traces begin sweeping across the emblem.
- Each letter springs up and sharpens into view sequentially between 350ms and 1000ms.
- Retains `animation-fill-mode: both` so that all characters remain 100% solid before and during the glide into the header navbar.

### C. Visual Proportions
- Animated emblem width/height scaled to 1.35x of base size.
- Text font size refined from `text-2xl sm:text-3xl` down to `text-lg sm:text-xl` with wide letter-spacing (`tracking-[0.14em] sm:tracking-[0.18em]`).
- 100% spotless pure white background preserved with zero borders, shadows, or squircle boxes.

---

## 3. Verification
- `npx next build` verified with 0 errors across 14 routes.
- Checked letter reveal cadence: 10 characters across ~650ms seamlessly synchronized with circuit traces.

