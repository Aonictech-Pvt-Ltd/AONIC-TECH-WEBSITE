# Architecture & Configuration: Isolated Verification Build Pipeline & Dev Cache Shield

**Date**: 2026-11-01  
**Author**: Antigravity Assistant & Engineering Team  
**Scope**: Next.js Build Pipeline, Webpack Runtime Stability, Dev Experience  
**Branch**: `feature/isolate-verification-build-dir`

---

## 1. Problem Diagnosis: "Cannot find module './611.js'" & Unstyled Cascading Failures
### Root Cause Analysis
- During active local development, Next.js runs `next dev` which maintains an in-memory webpack runtime manifest mapped to development chunks inside `.next/server/`.
- Concurrently executing standard `next build` (`npm run build`) in the background or during automated verification wipes `.next/` and replaces it with production hashed chunks.
- When an active browser tab or hot reload requests any route (such as `/`, `/favicon.ico`, or CSS chunks), the still-running `next dev` server attempts to require its development chunks (e.g. `./611.js`).
- Because `.next/` was overwritten with production artifacts, Node throws `Cannot find module './611.js'` (500 Internal Server Error) and fails to deliver CSS styles until the developer manually terminates and restarts the dev server.

---

## 2. Architectural Solution
1. **Isolated Verification Directory**:
   - Updated `next.config.ts` to accept `distDir: process.env.BUILD_DIR || ".next"`.
   - Added `build:verify` script in `package.json`:
     `"build:verify": "BUILD_DIR=.next-verify next build"`
   - Automated quality checks and test builds now target `.next-verify/`, completely shielding `.next/` and ensuring active `next dev` processes remain 100% uninterrupted and stable.
2. **Git Hygiene**:
   - Added `.next*/` to `.gitignore` to ensure `.next-verify/` is ignored by Git.
3. **Static Favicon Redundancy**:
   - Copied `src/app/favicon.ico` to `public/favicon.ico` to allow direct static asset serving without relying exclusively on dynamic runtime route handlers.

---

## 3. Verification & Results
- Verified that `npm run build:verify` completes cleanly and builds into `.next-verify/`.
- Developer's `next dev` server in `.next/` will no longer experience cache desynchronization or missing webpack chunk errors.
