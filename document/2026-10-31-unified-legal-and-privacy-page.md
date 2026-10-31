# Unified Terms & Privacy Page Documentation

**Date:** 2026-10-31  
**Branch:** `feature/combine-privacy-and-terms`  
**Topic:** Merging Privacy Policy and Terms & Conditions into a single unified legal document with interactive tabs and automated redirect routing.

---

## 1. Summary of Changes

1. **Unified Page Architecture (`src/app/terms/page.tsx`):**
   - Merged both **Part I: Terms & Conditions of Engagement** and **Part II: Customer & Enterprise Privacy Policy** into a single page.
   - Added interactive quick-filter tab switcher:
     - `All Documents`: Reads both parts seamlessly with a stylized separator.
     - `Terms & Conditions`: Focused view on commercial engagements, software terms, MTC assays, DGFT clearance, and Hyderabad court jurisdiction.
     - `Privacy Policy`: Focused view on client data protection, proprietary CAD non-disclosure, GSTIN invoicing compliance, and TLS/Resend infrastructure.
   - Styled consistently with the 7 brand colors (Royal Blue `#1926A0`, Dark Navy `#0E0E25`, Lavender `#757CB6`, White `#FFFFFF`, Green `#63A26B`, Yellow `#FFDB18`).
   - Integrated corporate contact card with CIN, GSTIN, IEC, and direct contact buttons.

2. **Route Consolidation & Permanent Redirects (`next.config.ts`):**
   - Removed duplicate directory `src/app/privacy/`.
   - Configured permanent HTTP 308 redirects from `/privacy` and `/privacy-policy` to `/terms`.

3. **Footer Single Link (`src/components/layout/Footer.tsx`):**
   - Updated legal strip to reference a single unified link: `Terms of Service & Privacy Policy` pointing to `/terms`.

4. **Production Deployment:**
   - Deployed live to Vercel production:
     - `/terms` -> HTTP 200 OK
     - `/privacy` -> HTTP 308 Permanent Redirect to `/terms`.

---

## 2. Verification
- `npm run build` compiled 14/14 routes with 0 errors.
- Verified live curl responses on Vercel production edge (`bom1`).
- Git Flow: Developed on `feature/combine-privacy-and-terms` for merge into `develop`.
