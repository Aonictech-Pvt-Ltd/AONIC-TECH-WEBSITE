# Architecture & Feature: Post-Animation Refresh Quote Modal Popup

**Date**: 2026-11-01  
**Author**: Antigravity Assistant & Engineering Team  
**Scope**: Lead Capture, Animation Sequence, Modal Architecture  
**Branch**: `feature/refresh-quote-modal-popup`

---

## 1. Feature Purpose & Requirements
- **Visual Design (Pixel-Perfect from user reference image `media_1793535023954_e50784be.jpg`)**:
  - Dark Navy Header (`#0E0E25`): Features the official transparent master white logo (`/images/company-logo-white.png`), subtitle tag `"DIGITAL SOLUTIONS & INDUSTRIAL MATERIALS"`, and top-right close `X` button.
  - White Modal Body (`#FFFFFF`): Clean rounded card with `Full Name *`, 2-column `Phone Number *` (with live `libphonenumber-js` validation) and `Email Address *`, optional message textarea, gold action button (`#FFDB18` with dark navy text and arrow), and confidentiality reassurance lock notice.
- **Trigger Timing**:
  - Automatically triggers on every page refresh / initial load right after the preloader dissolve animation finishes (listening to `aonic-preloader-docked` event with a 750ms dissolve delay, plus a 4300ms fallback safety timer).
  - Can be dismissed via close button `X`, clicking outside on the backdrop, or pressing the `Escape` key.
  - Can also be programmatically opened from any button on the site via `window.dispatchEvent(new CustomEvent("open-quote-modal"))`.

---

## 2. Technical Stack & Security
- **Phone Validation**: Powered by `libphonenumber-js` with real-time feedback.
- **Rate Limiting**: Enforced via Upstash Redis (`contactRateLimiter` 5 requests / 10 minutes per IP).
- **Email Delivery**: Dispatches instant notification to company Gmail (`aonictech.pvtltd@gmail.com`) via Resend API.
- **Supabase Integration**: Saves leads directly into the `inquiries` table.

---

## 3. Brand Compliance & Verification
- Strictly adheres to the official White Theme and 7 official brand colors (`#FFFFFF`, `#0E0E25`, `#000000`, `#1926A0`, `#757CB6`, `#FFDB18`, `#63A26B`).
- Successfully verified via `npm run build:verify`.
