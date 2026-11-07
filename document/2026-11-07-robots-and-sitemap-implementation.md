# Search & Discovery Architecture: Robots.txt, XML Sitemap & LLMs.txt

**Date**: 2026-11-07  
**Branch**: `feature/seo-robots-and-sitemaps` -> `develop`  
**Status**: Completed & Verified  
**Author**: Antigravity Assistant & Engineering Team

---

## 1. Context & Rationale
During the recent SEOptimer audit, the site received two medium-priority On-Page SEO alerts:
1. `Implement a robots.txt File`
2. `Implement an XML Sitemaps File`
along with a low-priority GEO alert:
3. `Implement an llms.txt File`

Prior to this implementation, search engines were required to explore the site ad-hoc without structured indexation manifests or explicit crawl guidelines. Furthermore, automated bots could inadvertently exhaust server resources on internal API routes like `/api/contact`.

---

## 2. Technical Architecture

### 2.1. `src/app/robots.ts` (Robots Exclusion Protocol)
- **Role**: Informs web crawlers which parts of the site they may crawl and which parts are off-limits.
- **Rules**:
  - `userAgent: "*"`: Appreciates all standard crawlers (Googlebot, Bingbot, DuckDuckBot, Applebot).
  - `allow: "/"`: Authorizes complete indexation of public marketing, case study, and service content.
  - `disallow: ["/api/"]`: Shields serverless API endpoints from crawler spam and wasted crawl budget.
  - `sitemap: "https://aonictech.com/sitemap.xml"`: Direct pointer to the XML sitemap.
  - `host: "https://aonictech.com"`: Affirms the canonical primary host.

### 2.2. `src/app/sitemap.ts` (XML Sitemap Protocol)
- **Role**: Provides a comprehensive machine-readable catalog of all canonical public pages on `aonictech.com`.
- **Entries**:
  - `/` (Priority: 1.0, ChangeFrequency: weekly)
  - `/services` (Priority: 0.9, ChangeFrequency: weekly)
  - `/projects` (Priority: 0.8, ChangeFrequency: weekly)
  - `/about` (Priority: 0.8, ChangeFrequency: monthly)
  - `/contact` (Priority: 0.8, ChangeFrequency: monthly)
  - `/blog` (Priority: 0.7, ChangeFrequency: weekly)
  - `/privacy-and-terms` (Priority: 0.5, ChangeFrequency: monthly)

### 2.3. `public/llms.txt` (Generative Engine Optimization - GEO)
- **Role**: A plain-text markdown file structured specifically for Large Language Model crawlers (ChatGPT Search, Perplexity AI, Claude Search, Google AI Overviews).
- **Contents**: Summarizes company identity, the two distinct niches (Digital Solutions & Software vs. Industrial Materials Import), key certifications, registered physical address, and canonical URLs.

---

## 3. Verification & Validation
- **Unit Tests**: Added `test/seo-metadata.test.ts` to validate rule shape, route inclusion, and priority thresholds. All 45 unit tests passed.
- **Production Build**: Verified with `npm run build:verify`. All 14 routes (including static `/robots.txt` and `/sitemap.xml`) compiled with zero errors.
