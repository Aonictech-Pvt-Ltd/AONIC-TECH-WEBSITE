# 2026-10-31: Footer Google Maps Integration, Privacy Policy & Terms Pages

**Author:** Antigravity AI / Engineering  
**Branch:** `feature/footer-maps-and-legal-pages` → `develop`  
**Date:** October 31, 2026  
**Status:** Complete & Verified (`npm run build` passed)  

---

## 1. Features Added & Implemented

### 1.1 Embedded Google Maps Integration
- **Footer Google Maps Card (`src/components/layout/Footer.tsx`):**
  - High-contrast, dark-mode filtered Google Maps iframe embed showcasing Aonictech's registered corporate headquarters (HITEC City, Hyderabad, Telangana, India - 500081).
  - Quick action launcher with navigation icon linking directly to Google Maps (`COMPANY_INFO.googleMapsUrl`).
- **Contact Page Google Maps (`src/app/contact/page.tsx`):**
  - Full interactive map embedded within the primary contact card with "Get Directions in Google Maps" action button.

### 1.2 Comprehensive Privacy Policy (`src/app/privacy/page.tsx`)
- Structured B2B/B2C data policy tailored to both operating divisions:
  1. **Dual-Division Scope:** Outlining digital software versus industrial material sourcing.
  2. **Data Collection:** Contact and commercial identity data, project scope, and material RFQ specifications.
  3. **Strict Non-Disclosure (NDA):** Full protection of client proprietary engineering schematics, CAD drawings, and alloy tolerances.
  4. **GST Tax Compliance:** Proper recording of GSTIN numbers for 100% Input Tax Credit (ITC).
  5. **Data Processors:** Explicit disclosure of Supabase (RLS storage), Resend (emails), Upstash Redis (rate limiting), and Google Maps.
  6. **Grievance Redressal:** Direct communication channel to `contactus@aonictech.com` and `+91 73968 88679`.

### 1.3 Comprehensive Terms & Conditions (`src/app/terms/page.tsx`)
- Legally grounded commercial terms:
  1. **Digital Solutions Terms:** Milestone deliveries, IP and source code handover upon 100% settlement, POS software license conditions, and 30–90 day bugfix warranty.
  2. **Industrial Materials Import Terms:** Metal price validity tied to London Metal Exchange (LME) daily fluctuations, mandatory EN 10204 3.1 Mill Test Certificates, port customs clearance, and 5-day inspection/non-conformance guidelines.
  3. **GST & Taxation:** Formal tax invoicing under GSTIN `36AAICA0000A1Z5`.
  4. **Governing Law & Jurisdiction:** Exclusive legal jurisdiction in Hyderabad, Telangana, India.

### 1.4 Footer Navigation Links
- Direct navigation links to **Privacy Policy** and **Terms & Conditions** embedded in both the Quick Links column and the bottom legal compliance bar.

---

## 2. Verification Results

Production build executed via `next build` succeeded with exit code 0 across all 11 routes.
