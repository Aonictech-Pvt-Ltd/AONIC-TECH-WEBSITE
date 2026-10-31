# AGENTS & DEVELOPER GUIDELINES — AONICTECH WEBSITE

> **CRITICAL DIRECTIVE**: Never, under any circumstances, commit or push code directly to the `main` branch. The `main` branch is reserved strictly for production-ready, verified releases.

---

## 1. Branching Strategy & Nomenclature

All development follows a disciplined Git-Flow model with strict naming conventions.

### Branch Roles
| Branch | Role | Rules |
| :--- | :--- | :--- |
| `main` | Production-ready stable code | **NO direct commits**. Only receives merges from `develop` (or hotfixes). |
| `develop` | Primary active integration branch | Main working branch. All features and bugfixes are merged here first. |
| `feature/<feature-name>` | New features or enhancements | Branched off `develop`. Merged back into `develop` via PR or merge. |
| `bugfix/<bugfix-name>` | Non-urgent fixes / QA bug resolution | Branched off `develop`. Merged back into `develop`. |
| `hotfix/<hotfix-name>` | Urgent production bug fixes | Branched off `main`. Merged back into `main` **and** `develop`. |

### Standard Git Workflow
1. **Starting work on a new feature:**
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feature/<feature-name>
   ```
2. **Commit changes on the feature branch:**
   ```bash
   git add .
   git commit -m "feat(<scope>): description of change"
   ```
3. **Merging back to develop:**
   ```bash
   git checkout develop
   git merge feature/<feature-name>
   git push origin develop
   ```
4. **Deploying to production (`main`):**
   ```bash
   git checkout main
   git merge develop
   git push origin main
   ```

---

## 2. Change Log Tracking (`change log/`)

A dedicated local tracking folder named `change log/` is maintained for granular tracking of every modification, update, and configuration.

- **Git Status:** This directory is strictly listed in `.gitignore` so local tracking notes and personal project settings do not clutter the remote repository.
- **Entry Structure:** Every major session or task must be recorded with:
  - Exact Date & Timestamp
  - Branch worked on
  - Tabular breakdown: Module / Component, Nature of change (Feature, Refactor, Fix), Description, Impact.
  - Test/verification notes.

---

## 3. Architecture & Development Documentation (`document/`)

To preserve project history, technical rationale, and deep-dive analysis, the `document/` folder holds granular, date-prefixed markdown files:

- **Naming Convention:** `YYYY-MM-DD-<topic-name>.md` (e.g., `2026-10-31-initial-architecture-plan.md`)
- **Ordering:** Date prefixes ensure ascending chronological ordering.
- **Content Requirements:**
  1. **What was developed:** Detailed technical breakdown of modules, pages, APIs, and components.
  2. **Features added:** Rationale, user flow, and implementation details.
  3. **Features/code removed:** Explicit documentation of why something was removed or replaced.
  4. **In-depth analysis:** Performance, security, database schema decisions, and third-party integration notes.

---

## 4. Security & Sensitive Information Hygiene

- **SQL Files (`*.sql`):** Database migration files, manual dumps, and seed data scripts containing schemas or raw queries must remain in `.gitignore`.
- **Secrets & Credentials:** Environment files (`.env*`), private keys, API credentials (Supabase Service Role, Resend API key, Upstash Redis tokens) must never be committed.
- **Verification:** Always run `git status` before committing to verify untracked sensitive assets.

---

## 5. Technology Stack & Architecture

- **Framework:** Next.js (App Router), React, TypeScript
- **Styling:** Tailwind CSS, Lucide Icons, Modern responsive UI design
- **Database & Auth:** Supabase (PostgreSQL, Storage, Realtime)
- **Email Delivery:** Resend API for transactional inquiry and quote notifications
- **Rate Limiting:** Upstash Redis (`@upstash/ratelimit`) to guard public contact & demo endpoints
- **Hosting:** Vercel (CI/CD integrated with GitHub)

---

## 6. Business Domain: The Two Niches

Aonictech operates as a dual-niche enterprise under one roof:
1. **Niche 1: Digital Solutions & Branding** (Web Development, E-Commerce, POS & Billing Software, Custom Apps, Logo/Branding, Packaging Design).
2. **Niche 2: Industrial Materials Import & Supply** (Titanium & Specialty Alloys, Rare-Earth Elements, Electronic Chip IC Sourcing, Low-MOQ Supply, Custom Sourcing, Import Customs & Doorstep Delivery).

*Every developer and AI agent working on this repository must honor these standards.*
