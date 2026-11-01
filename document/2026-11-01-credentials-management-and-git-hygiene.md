# Credentials Management & Git Security Hygiene

**Date:** 2026-11-01  
**Branch:** `feature/gitignore-credentials`  
**Scope:** Secure internal credentials documentation and git-ignore enforcement for corporate data.

---

## 1. Overview & Security Directive
To maintain strict compliance with corporate security hygiene (AGENTS.md Section 4), all administrative credentials, domain access records, SSO matrices, tax registration numbers, and banking details are consolidated into an untracked, local markdown file (`credentials.md`).

---

## 2. Changes Made
1. **`.gitignore` Hardening:**
   Added wildcard patterns and specific ignore rules to prevent accidental exposure of credentials files.
2. **Local `credentials.md` Documentation:**
   Created a structured reference containing all corporate access credentials. This file is strictly git-ignored and exists only on the local machine.

---

## 3. Verification
- `git check-ignore -v credentials.md` confirms the ignore rule is active.
- `git status` verifies `credentials.md` is never tracked or staged.

> **NOTE**: All sensitive details (emails, passwords, tax numbers, banking info) are stored exclusively in the local `credentials.md` file. This document only records the fact that such a file exists, without reproducing any of its contents.
