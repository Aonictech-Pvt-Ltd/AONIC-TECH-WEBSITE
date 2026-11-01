# Architecture & Feature: Homepage Contact/Quote Section & Navbar Navigation Integration

**Date**: 2026-11-01  
**Author**: Antigravity Assistant & Engineering Team  
**Scope**: Frontend UI, UX Flow, Reference-Based Layout, Navbar Routing  
**Branch**: `feature/homepage-contact-quote-section`

---

## 1. Feature Context & Requirements
- Implement the user's reference design layout (`media_1793533577697_fdd9c0ea.png`):
  1. Top Pill Badge (`GET A CUSTOMIZED QUOTE`).
  2. 2-Column Split:
     - Left: Bold editorial headline, value propositions, and checklist.
     - Right: Floating white card with 2-column input fields (Full Name, Phone Number with `libphonenumber-js` live validation, Email, Service dropdown, Requirement description, Terms agreement checkbox, and gold CTA action button).
- Connect "Get a Quote" buttons in the Header Navbar and Mobile Drawer directly to this section via `/#quote` with smooth scrolling.
- Include the section directly on the Homepage (`src/app/page.tsx`).

---

## 2. Implementation Details
1. **[`src/components/ui/ContactUs.tsx`](file:///Users/surojuhomsaisantosh/Documents/PROJECTS/3%20AONITECH/1%20WEBSITE/src/components/ui/ContactUs.tsx)**:
   - Added `variant?: "section" | "card"`.
   - `variant="section"` (default): Renders full 2-column section with pill badge, checklist, and floating form card.
   - `variant="card"`: Renders modular form card for sidebars or dedicated contact pages.
   - Integrated live phone validation, Upstash rate limiting protection, and Resend email dispatch.
2. **[`src/app/page.tsx`](file:///Users/surojuhomsaisantosh/Documents/PROJECTS/3%20AONITECH/1%20WEBSITE/src/app/page.tsx)**:
   - Replaced generic CTA strip with `<ContactUs id="quote" />`.
3. **[`src/components/layout/Navbar.tsx`](file:///Users/surojuhomsaisantosh/Documents/PROJECTS/3%20AONITECH/1%20WEBSITE/src/components/layout/Navbar.tsx)**:
   - Updated desktop and mobile "Get a Quote" CTAs to link to `/#quote`.
4. **[`src/app/contact/page.tsx`](file:///Users/surojuhomsaisantosh/Documents/PROJECTS/3%20AONITECH/1%20WEBSITE/src/app/contact/page.tsx)**:
   - Updated right column to `<ContactUs variant="card" />`.

---

## 3. Brand Compliance & Verification
- Strictly adheres to the 7 official brand colors: `#FFFFFF`, `#0E0E25`, `#000000`, `#1926A0`, `#757CB6`, `#FFDB18`, `#63A26B`.
- Verified Next.js build compilation across all 12 routes.
