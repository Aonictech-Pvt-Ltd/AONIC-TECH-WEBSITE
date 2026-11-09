# Commercial Strategy & Architecture: Complete Price & Currency Figure Removal

**Date**: 2026-11-09  
**Branch**: `feature/remove-all-price-mentions` -> `develop`  
**Status**: Completed & Verified  
**Author**: Antigravity Assistant & Engineering Team

---

## 1. Executive Summary & Rationale
To position **AONIC TECH** as a premium, bespoke provider across both digital engineering and industrial materials supply, all explicit public pricing, currency symbols (`₹`), package costs, and price references have been systematically removed from the website.

### Why Price Removal Aligns with the Business Model:
1. **Scope-Driven Digital Projects**: Software, custom Next.js web applications, and POS systems vary significantly in architectural complexity, counter count, and integration requirements. Anchoring arbitrary numbers (e.g., `₹12,000` or `₹24,000`) devalued complex enterprise work and created friction.
2. **Commodity Market Volatility**: Titanium alloys and rare-earth magnets fluctuate constantly with international commodity indices (LME). Quote-on-RFQ is the global industry standard for metallurgical and electronic component distribution.
3. **High-Conversion Inbound Lead Generation**: Shifting from fixed catalog prices to "Custom Scope" and "Tailored RFQ" directs prospects straight into direct WhatsApp and contact desk conversations, improving lead capture and qualification.

---

## 2. Technical Breakdown of Changes

### 2.1. Service Catalog Data (`src/data/services.ts`)
- Replaced `Starting from ₹12,000` with `Custom scope-based quote`.
- Replaced `Starting from ₹25,000` with `Custom scope-based quote`.
- Replaced `Starting from ₹5,000` with `Tailored brand package`.
- Replaced `Starting from ₹3,500` with `Custom design quote`.
- Replaced `Per-unit pricing with low MOQ` with `Verified lot quote with low MOQ`.

### 2.2. Services Page UI (`src/app/services/page.tsx`)
- **Package Matrix**:
  - Replaced badge `Transparent Pricing` with `Project Scope Tiers`.
  - Converted `₹12,000` → `Custom Scope` (Fast-track business deployment).
  - Converted `₹24,000` → `Tailored Build` (Comprehensive digital expansion).
  - Converted `₹45,000+` → `Enterprise Scope` (Tailored to exact architecture).
- **WhatsApp Pre-filled URLs**:
  - Stripped out all hardcoded amounts (`(₹12,000)`, `(₹24,000)`) and replaced them with requests for scope definitions and quotations.
- **POS Mock Terminal**:
  - Replaced fake currency amounts (`₹240.00`, `₹120.00`, `₹18.00`, `₹378.00`) with functional indicators: `Qty: 2 • Scanned`, `Qty: 1 • Scanned`, `Auto CGST/SGST`, and `Instant Receipt Generated`.
- **Material Catalog Subtitle**:
  - Replaced `for today's landed price` with `for current landed commercial terms`.

### 2.3. Contact Desk (`src/components/ui/ContactUs.tsx`)
- Updated bullets and subtitle copy from "factory pricing" to "factory procurement" and "transparent commercial terms".

---

## 3. Verification & Compliance
- **Grep Audit**: 0 matches for currency symbols (`₹`, `$`) or package prices across `src/`.
- **Vitest Suite**: 45/45 unit tests passed.
- **Production Build**: 14/14 static pages generated with zero errors.
