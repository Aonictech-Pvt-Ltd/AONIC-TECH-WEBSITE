# Bugfix: Footer Logo "A" Visibility & Navbar Dropdown Transparency

**Date:** October 31, 2026  
**Branch:** `bugfix/footer-logo-a-and-dropdown-transparency`  
**Status:** Completed & Production Verified  

---

## 1. Issues Identified

1. **Footer Logo Missing Letter "A"**:
   - In the dark corporate footer (`bg-[#0E0E25]`), the logo rendered as `" ONIC TECH"`.
   - **Root Cause**: The dark variant generator script (`scripts/generate-master-assets.js`) previously recolored pixels starting at `x >= 1760`. However, in the cropped 4435px master horizontal logo, the letter "A" spans from `x = 1460` to `x = 1770`. As a result, the letter "A" remained dark navy (`#0E0E25`), blending seamlessly into the `#0E0E25` footer background and appearing invisible.

2. **Navbar Services Mega Dropdown Bleed-Through Glitch**:
   - When hovering over the `Services` navigation item, underlying page content (e.g., the "Ready to collaborate with AONIC TECH?" CTA section) overlapped and clashed with the dropdown links.
   - **Root Cause**: The dropdown container utilized the class `bg-white/98`. In Tailwind CSS, `/98` is not a valid opacity utility (standard is 0, 5, 10... 90, 95, 100). Tailwind purged the utility, resulting in a completely transparent background (`background-color: transparent`).

---

## 2. Implementations & Fixes

### A. Restoring Letter "A" in `company-logo-white.png`
- Updated the pixel processor in `scripts/generate-master-assets.js` to begin scanning at `x = 1450`.
- Applied color-aware dark pixel filtering:
  ```javascript
  for (let y = 0; y < h; y++) {
    for (let x = 1450; x < w; x++) {
      const idx = (y * w + x) * 4;
      const alpha = whiteData[idx + 3];
      if (alpha > 0) {
        const r = whiteData[idx];
        const g = whiteData[idx + 1];
        const b = whiteData[idx + 2];
        if (r <= 40 && g <= 40 && b <= 60) {
          whiteData[idx] = 255;
          whiteData[idx + 1] = 255;
          whiteData[idx + 2] = 255;
        }
      }
    }
  }
  ```
- **Verification**: Pixel verification confirmed:
  - Letter "A" (`x = 1600`): 100% pure white (`#FFFFFF`).
  - Letter "O" (`x = 2000`): 100% pure white (`#FFFFFF`).
  - Adjacent yellow circuit trace (`x <= 1459`): 100% preserved as `#FFDB18`.

### B. Solid Opaque Background for Navbar Dropdown & Mobile Drawer
- Updated `src/components/layout/Navbar.tsx`:
  - **Mega Dropdown**: Replaced `bg-white/98 backdrop-blur-2xl` with solid `bg-white` and explicit `z-50`.
  - **Mobile Drawer**: Replaced `bg-white/98 backdrop-blur-xl` with solid `bg-white`.
- This ensures 100% opacity so no underlying page text or elements bleed through the dropdown.

---

## 3. Build & Test Verification
- Ran `npx next build`: 0 errors across 14 routes.
- Confirmed zero duplicate route conflicts.

