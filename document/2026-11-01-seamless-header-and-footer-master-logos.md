# Seamless Header & Footer Master Logos Architecture

**Date:** 2026-11-01  
**Branch:** `bugfix/seamless-header-footer-logos`  
**Scope:** Elimination of white-box sticker artifacts in Header and Footer, restoration of official transparent master lockups, and harmonic subtitle parity in Preloader.

---

## 1. Problem Identification

In the previous commit, `Logo.tsx` attempted to render the animated WebP circuit emblem (`logo-animated.webp`) directly inside the Header Navbar and Footer. Because `logo-animated.webp` has an opaque white rectangular background:

1. **Footer Artifact (Dark Navy `#0E0E25`):**
   The WebP emblem appeared as a jarring white square card/sticker pasted over the dark background.
2. **Header Artifact:**
   The WebP emblem showed visible rectangular borders and mismatched padding against the header's translucent `bg-white/80` backdrop blur.
3. **Typography Disconnect:**
   The official brand subtitle (`DIGITAL & INDUSTRIAL`) was omitted, and letter spacing did not match the official master lockup.

---

## 2. Solution Architecture

### A. Footer Placement (`variant === "dark"`)
- Renders `/images/company-logo-white.png`.
- **Properties:** Aspect ratio `4435 / 1228 = 3.61156`, 600 DPI master lockup, **100% transparent alpha channel (RGBA)**.
- **Visual Impact:** Pure white typography and glowing circuit emblem blend seamlessly onto the `#0E0E25` Dark Navy canvas with **zero white box, zero borders, and zero sticker artifacts**.

### B. Header Navbar Placement (`variant === "light"`, `animated === false`)
- Renders `/images/company-logo.png`.
- **Properties:** Aspect ratio `4435 / 1228 = 3.61156`, 600 DPI master lockup, **100% transparent alpha channel (RGBA)**.
- **Visual Impact:** Dark Navy typography, Lavender subtitle, and glowing circuit emblem sit directly on the header with **zero white box and zero border artifacts**.

### C. Preloader Placement (`animated === true`)
- Renders on the 100% spotless `#FFFFFF` pure white canvas.
- Features `logo-animated.webp` with `mix-blend-multiply` ensuring zero edge artifacts against the white background.
- Features staggered letter reveal for `AONIC TECH` (`400ms + index * 75ms`) and smooth entrance for the matching Lavender subtitle `DIGITAL & INDUSTRIAL` (`1150ms`).
- Both the preloader unit and navbar target share harmonic layout parity (Emblem + Title + Subtitle), making the glide docking transition seamless without jarring layout jumps.

---

## 3. Verification
- `npm run build` completed with 0 errors across all 14 routes.
- Zero white boxes in footer or header verified by alpha channel inspection.
- Full Git-Flow compliance: branch off `develop`, merged into `develop` and `main`.
