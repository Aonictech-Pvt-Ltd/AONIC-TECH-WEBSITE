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
   Added wildcard patterns and specific ignore rules:
   ```gitignore
   # Credentials & Internal Company Records (Sensitive Information)
   credentials.md
   credentials/
   *credentials*
   *.credentials*
   ```
2. **Local `credentials.md` Documentation:**
   Created a structured reference containing:
   - Primary administrative Gmail (`aonictech.pvtltd@gmail.com`)
   - WordPress registrar login (`Aonic.tech@gmail.com`)
   - Cloud SSO matrix (GitHub, Supabase, Vercel, Cloudflare nameservers, Resend, Upstash Redis)
   - Legal company credentials extracted from official certificate:
     - Incorporation Date: 09/07/2021
     - Commencement Date: 27/11/2022
     - CIN: `U33129TG2021PTC153000`
     - PAN: `AAVCA4598B`
     - TAN: `HYDA27223A`
     - GSTIN: `36AAVCA4598B1Z9`
     - IMPEXP / IEC: `AAVCA4598B`
     - Udyam MSME: `UDYAM-TS-02-0098309`
     - ESIC: `52000969610000699`
     - ITR Code: `aavca4598b09072021`
   - Corporate Banking Information (State Bank of India account & IFSC)

---

## 3. Verification
- `git check-ignore -v credentials.md` confirms rule `.gitignore:27:*credentials*`.
- `git status` verifies `credentials.md` is never tracked or staged.
