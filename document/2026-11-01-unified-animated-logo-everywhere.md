# Unified Animated Logo Across Preloader, Header & Footer

**Date:** 2026-11-01  
**Branch:** `feature/unified-animated-logo-everywhere`  
**Scope:** Eliminate visual "swap" when preloader docks into header; unify logo rendering across all placements.

---

## 1. Problem Statement

When the preloader animation glided from the center of the screen into the header, the user noticed a jarring visual discontinuity — the preloader displayed a **WebP animated circuit emblem + staggered "AONIC TECH" text**, but the header (and footer) rendered a completely different **static PNG horizontal lockup image** (`company-logo.png` / `company-logo-white.png`). The moment the preloader faded out and the navbar logo faded in, the layout, sizing, and imagery all changed, creating a visible "refresh/swap" artifact.

## 2. Solution Architecture

Restructured the `Logo` component so that **all placements** (Preloader, Header Navbar, Footer) render the **same unified DOM structure**:

```
[Animated Circuit WebP Emblem] + [AONIC TECH text]
```

The only difference between animated and static rendering is a CSS `animation` property:
- **`animated={true}`** (Preloader only): Letters have staggered entrance reveal (`letterReveal` keyframe with progressive delays).
- **`animated={false}`** (Header & Footer): Identical layout renders instantly, no CSS animation.

This means the preloader glider and the navbar logo are now **pixel-identical** DOM trees, so the fade-out/fade-in handoff is completely invisible.

## 3. Technical Changes

### `src/components/ui/Logo.tsx` — Complete Rewrite
- **Removed**: Static PNG lockup branch (`company-logo.png`, `company-logo-white.png`).
- **Unified**: `showText=true` always renders WebP emblem (`size * 1.45`) + BRAND_CHARS text.
- **Conditional animation**: `animated` prop only adds/removes CSS `animation` style on each letter `<span>`.
- **Emblem-only** (`showText=false`): Also switched from static `company-logo-mark.png` to the WebP emblem for brand consistency.
- **Dark variant**: Text color switches to `text-white` for footer placement on `#0E0E25` background.

### `src/components/layout/Navbar.tsx` — No Changes Required
Already calls `<Logo size={42} variant="light" />` which now automatically renders the unified layout.

### `src/components/layout/Footer.tsx` — No Changes Required
Already calls `<Logo size={46} variant="dark" />` which now automatically renders white text + WebP emblem on the dark navy footer.

### `src/components/ui/Preloader.tsx` — No Changes Required
Already calls `<Logo size={42} variant="light" animated={true} />` which renders the same layout with entrance animation.

## 4. Visual Flow Summary
```
[Page Load / Refresh]
  ↓
[Preloader] — WebP emblem + staggered "AONIC TECH" text (centered, scale 1.65)
  ↓ (3.8s hold → 1.4s glide)
[Header Navbar] — SAME WebP emblem + "AONIC TECH" text (no animation, instant)
  ↓ (seamless handoff — zero visual discontinuity)
[Footer] — SAME WebP emblem + "AONIC TECH" text (white text on dark navy)
```

## 5. Verification
- `npm run build`: 0 errors, 14/14 routes generated.
- Brand palette compliance: All text uses `#0E0E25` (light) or `#FFFFFF` (dark).
