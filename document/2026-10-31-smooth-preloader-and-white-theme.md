# Architectural Architecture: Smooth Preloader & Strict White Theme Transformation

**Date:** 2026-10-31  
**Author:** AI Development Agent  
**Context:** Eliminating preloader animation stutter/vanishing artifacts during flight to header, updating `AGENTS.md` with strict 7-color palette mandates, and executing an ultra-clean White Theme overhaul across all application routes.

---

## 1. What Was Developed

### A. Silky-Smooth Preloader Center-to-Header Choreography
- **Root Cause of Prior Stutter:** Previously, when `stage` transitioned to `"glide-to-header"`, the outer preloader wrapper was assigned `opacity-0` with a 900ms transition. This caused the brand emblem to dissolve into invisibility mid-flight while traveling. Concurrently, the static navbar logo was already mounted and visible, resulting in visual doubling and an abrupt pop upon unmount.
- **The Solution:**
  1. **Decoupled Opacity:** The white backdrop and radiant halos fade out over 1000ms (`ease-out`), while the assembled brand unit (`stageRef`) maintains full `opacity: 1` throughout its 1200ms flight.
  2. **Touchdown Synchronization (`aonic-preloader-docked`):** The navbar logo is initially set to `opacity-0`. The exact millisecond the gliding clone completes its flight (`3450ms`), a custom DOM event `aonic-preloader-docked` is dispatched, setting the navbar logo to `opacity-100` and unmounting the preloader. This guarantees a seamless handoff with zero ghosting and zero coordinate jumps.
  3. **Precision Easing:** Tuned the transform trajectory with `cubic-bezier(0.16, 1, 0.3, 1)` for physics-grade ease-out motion.

### B. Strict Brand Color Palette Governance (`AGENTS.md`)
Added Section 7 to `AGENTS.md` strictly prohibiting external hues, arbitrary grays, or off-palette tokens. All elements must exclusively use:
- **White** (`#FFFFFF`): Primary canvas, cards, navbar background.
- **Dark Navy** (`#0E0E25`): Primary headings, body copy, grounding footer.
- **Black** (`#000000`): Maximum contrast typography and dark accents.
- **Royal Blue** (`#1926A0`): Primary CTAs, digital division accent, interactive links.
- **Lavender** (`#757CB6`): Subtitles, card borders (`#757CB6`/20), subtle dividers.
- **Yellow** (`#FFDB18`): Industrial division accent, status dots, gold footer headings.
- **Green** (`#63A26B`): WhatsApp integration, positive validation badges.

### C. Comprehensive White Theme Transformation
- **`globals.css`:** Switched root canvas to pure `#FFFFFF`, text to `#0E0E25`, and refreshed glassmorphic utilities and scrollbar tracks.
- **`Navbar.tsx`:** Converted to a clean white glassmorphic header (`bg-white/95 backdrop-blur-md border-b border-[#757CB6]/20 shadow-md`) with `#0E0E25` text and `#1926A0` interactive states.
- **`Logo.tsx`:** Enhanced with `variant="light" | "dark"` to render high-contrast Dark Navy typography on white surfaces and White typography on dark surfaces.
- **All Core Pages Transformed:**
  - `page.tsx` (Home): Clean white canvas, high-contrast headings, two-niche cards, trust strip, 4-pillar benefits, featured projects, and workflow.
  - `services/page.tsx`: White niche switcher, high-contrast digital & industrial service cards, POS demo spotlight, website pricing matrix, and interactive materials catalog table.
  - `about/page.tsx`: White executive presentation, values cards, and compliance badges.
  - `projects/page.tsx`: Filterable white case study cards with POS terminal preview.
  - `contact/page.tsx`: Clean white inquiry form, interactive fields, contact cards, and FAQs.
  - `privacy/page.tsx` & `terms/page.tsx`: Crisp legal documentation with high-legibility layout.

---

## 2. Verification & Compliance
- **Compilation:** `npm run build` completed successfully with 0 errors across 11 routes.
- **Branch Discipline:** Work performed strictly on `feature/smooth-preloader-and-white-theme` to be merged into `develop` (`main` untouched).

