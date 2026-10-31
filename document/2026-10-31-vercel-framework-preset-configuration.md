# Vercel Next.js Framework Preset Configuration

**Date:** 2026-10-31  
**Branch:** `feature/configure-vercel-nextjs-preset` (merged to `develop` and `main`)  
**Topic:** Explicit Vercel framework preset configuration to resolve 404 static routing on production domain.

---

## 1. Issue Analysis
- **Symptom:** Visiting `https://www.aonictech.com/` produced Vercel's default 404 page ("This page doesn't exist. It may have been moved, removed, or never existed"). However, static assets like `https://www.aonictech.com/logo.svg` and `public/images/company-logo-mark.png` returned HTTP 200 OK.
- **Root Cause:** When the project was imported into Vercel 5 hours ago on an empty initial commit, Vercel defaulted the project's Framework Preset to "Other" (static hosting). Subsequent deployments only uploaded static repository files without triggering `next build` to compile the 15 App Router routes.

---

## 2. Changes Made
- Created `vercel.json` in repository root with:
  ```json
  {
    "$schema": "https://openapi.vercel.sh/vercel.json",
    "framework": "nextjs"
  }
  ```
- Committed and pushed to `develop` and `main` branches to force Vercel to compile Next.js App Router applications on every deployment.

---

## 3. Verification
- Pushed commit `ef6a42e` to GitHub.
- Vercel automated CI/CD pipeline triggered for `main` production environment.
