# Legal Page Renaming: `privacy-and-terms` Documentation

**Date:** 2026-10-31  
**Branch:** `feature/rename-terms-to-privacy-and-terms`  
**Topic:** Renaming route directory to `src/app/privacy-and-terms/` for explicit clarity and updating permanent redirects.

---

## 1. Summary of Changes

1. **Directory Renaming:**
   - Moved `src/app/terms` to `src/app/privacy-and-terms`.
   - Updated page heading to **"Privacy Policy & Terms of Service"**.

2. **Redirect Rules (`next.config.ts`):**
   - Configured permanent HTTP 308 redirects from:
     - `/terms` -> `/privacy-and-terms`
     - `/privacy` -> `/privacy-and-terms`
     - `/privacy-policy` -> `/privacy-and-terms`
     - `/terms-and-conditions` -> `/privacy-and-terms`

3. **Footer Navigation Link (`src/components/layout/Footer.tsx`):**
   - Updated legal strip link to `Privacy Policy & Terms` pointing to `/privacy-and-terms`.

4. **Production Deployment:**
   - Deployed live to Vercel production:
     - `https://aonictech-website.vercel.app/privacy-and-terms` (HTTP 200 OK)
     - `https://aonictech-website.vercel.app/terms` (HTTP 308 Redirect)
     - `https://aonictech-website.vercel.app/privacy` (HTTP 308 Redirect).

---

## 2. Verification
- `npm run build` compiled 14/14 routes with 0 errors.
- Verified live curl edge responses.
- Git Flow: Merged into `develop`.
