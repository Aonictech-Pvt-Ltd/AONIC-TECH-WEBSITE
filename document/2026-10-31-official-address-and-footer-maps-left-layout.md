# 2026-10-31: Official Registered Address Update & Left-Aligned Google Maps Footer Layout

**Author:** Antigravity AI / Engineering  
**Branch:** `feature/update-office-address-and-footer-maps-layout` → `develop`  
**Date:** October 31, 2026  
**Status:** Complete & Verified (`npm run build` passed)  

---

## 1. Updated Corporate Information

The company's registered headquarters address and legal entity details were updated across all global constants and pages:

- **Entity Legal Name:** `AONIC TECH PRIVATE. Ltd.`
- **Registered Address:** `14-7, P & T Colony, Dilsukhnagar, Hyderabad, Telangana, 500060`
- **Pincode:** `500060`
- **Direct Google Maps Target:** `https://www.google.com/maps/search/?api=1&query=14-7,+P+%26+T+Colony,+Dilsukhnagar,+Hyderabad,+Telangana+500060`
- **Embed Coordinates:** Exact iframe query pointing directly to `14-7, P & T Colony, Dilsukhnagar, Hyderabad`.

---

## 2. Layout Repositioning: Google Maps to the LEFT

Per design requirements, the Google Maps interactive embed was relocated from the right side of the footer to the **LEFT**:

```
Footer Layout Architecture
┌────────────────────────────────────────────────────────────────────────────────────────┐
│  Column 1 (LEFT)           │ Column 2          │ Column 3          │ Column 4 (RIGHT)  │
│  ───────────────────────── │ ───────────────── │ ───────────────── │ ───────────────── │
│  • AONICTECH Logo          │ • Home            │ • Website & Ecom  │ • Phone Support   │
│  • Tagline                 │ • About Us        │ • POS Billing     │ • Email Desk      │
│  • Google Maps Embed Box   │ • Services        │ • Brand Design    │ • Operating Hours │
│    [Dilsukhnagar, HYD]     │ • Projects        │ • Titanium Import │ • GSTIN Badge     │
│  • "Open in Google Maps"   │ • Contact         │ • Neodymium N52   │ • IEC Badge       │
│  • Exact Street Address    │ • Privacy Policy  │ • IC Chip Supply  │                   │
│                            │ • Terms & Conds   │                   │                   │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 3. Verification

- Production build passed 11/11 routes.
