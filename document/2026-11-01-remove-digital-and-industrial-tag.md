# Remove Digital and Industrial Tag from Logo Architecture

**Date:** 2026-11-01  
**Branch:** `feature/remove-digital-industrial-tag`  
**Scope:** Removal of the "DIGITAL & INDUSTRIAL" secondary tag line beneath the brand logo lockup.

---

## 1. Overview & Objective
Per explicit user directive, the secondary subtitle tag `"DIGITAL & INDUSTRIAL"` has been completely removed from the brand logo presentation. The logo now focuses exclusively and cleanly on:
1. The circular circuit emblem
2. The core brand mark `"AONIC TECH"`

---

## 2. Technical Modifications

### `src/components/ui/Logo.tsx`
- Removed the secondary `<span ...>DIGITAL &amp; INDUSTRIAL</span>` node from the animated preloader variant.
- Streamlined the typography container to render only the letter-by-letter staggered entrance reveal for `"AONIC TECH"` (`BRAND_CHARS.map(...)`).
- Header and Footer master lockups (`company-logo.png` and `company-logo-white.png`) remain 100% transparent and seamless with zero subtitle clutter.

---

## 3. Verification
- `npm run build` completed with 0 errors across 14 routes.
- Visual check: No "DIGITAL & INDUSTRIAL" subtitle renders under the logo anywhere.
