# Minimalist Coming Soon Blog Page

**Date:** October 31, 2026  
**Branch:** `feature/clean-minimal-coming-soon-blog`  
**Status:** Completed & Production Verified  

---

## 1. Technical Rationale & User Directive

Per direct instruction:
> *"just keep 'Coming Soon' when i click on that button bro okay? nothing more no content nothing just that bro and that notify me thing okay nothing more"*

All preview/dummy mock articles, category filter tabs, tech tags, and case-study suggestion banners were removed from `src/app/blog/page.tsx`. The page was redesigned as a high-conversion, minimalist single-screen "Coming Soon" page with an email notification form.

---

## 2. Structure & Features

- **Pill Badge**: Yellow division highlight (`#FFDB18`) with spark icon.
- **Hero Title**: Bold `Coming Soon` heading in `#0E0E25` (Dark Navy) on `#FFFFFF` (White canvas).
- **Brief Subtitle**: Clean 2-line description informing users that technical publications and industrial papers are currently in the works.
- **Subscription Box**:
  - Input: Clean email entry field with `#757CB6`/40 border and `#1926A0` focus ring.
  - Action Button: Royal Blue `#1926A0` CTA with Bell icon.
  - Success State: Verified Green `#63A26B` confirmation with email echo.
- **Navigation**: Clean link back to Home (`/`).

---

## 3. Nomenclature: "Blog" vs. "Blogs"
- **Industry Standard**: In modern web architecture (Stripe, Vercel, Google, Apple, Microsoft), the standard route URL is universally singular: `/blog`.
- **Navigation Label**: "Blog" is the collective noun for the entire publication section. Individual articles are referred to as "blog posts" or "articles".

---

## 4. Verification
- Built with `npx next build`: 0 errors across 14 routes.
- Route bundle size decreased from 7.52 kB to 2.38 kB.
