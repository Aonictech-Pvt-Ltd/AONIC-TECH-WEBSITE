# Architecture & Feature: ContactUs Component, Phone Validation & Automated Notifications

**Date**: 2026-11-01  
**Author**: Antigravity Assistant & Engineering Team  
**Scope**: Frontend UI, Form Validation, Email Notification, Phone Standard  
**Branch**: `feature/contact-us-component-with-phone-validation`

---

## 1. Feature Requirements
1. **Contact Us Component (`src/components/ui/ContactUs.tsx`)**:
   - Collects Phone Number, Email Address, and Requirement Description (plus optional Name).
   - Real-time client-side phone number validation and formatting.
   - Strict adherence to the official White Theme palette (`#FFFFFF`, `#0E0E25`, `#1926A0`, `#757CB6`, `#63A26B`, `#FFDB18`).
2. **Phone Validation Package**:
   - Integrated `libphonenumber-js` (gold-standard international and national E.164 library).
   - Validates 10-digit Indian mobile numbers and international numbers with country codes.
3. **Automated Notification**:
   - Sends HTML notification directly to the company email (`aonictech.pvtltd@gmail.com` / `Aonic.tech@gmail.com`) via Resend API.
   - Includes one-click "Chat on WhatsApp" and "Reply via Email" buttons.
   - Protected by Upstash Redis sliding-window rate limiter (5 requests / 10 minutes per IP).
   - Persists inquiries to Supabase database.
4. **Dedicated Contact Page (`src/app/contact/page.tsx`)**:
   - Removed old redirect from `/contact` to `/blog`.
   - Embeds `<ContactUs />` alongside corporate address, phones, GSTIN, CIN, and direct desk channels.
   - Added `Contact` navigation links to `Navbar.tsx` and `Footer.tsx`.
