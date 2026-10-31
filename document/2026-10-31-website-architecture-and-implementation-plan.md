# 2026-10-31: Website Architecture & Comprehensive Implementation Plan

**Author:** Antigravity AI / Engineering  
**Project:** Aonictech Dual-Niche Corporate Website  
**Date:** October 31, 2026  
**Status:** In Progress (Planning & Scaffolding)  

---

## 1. Executive Summary & Company Profile

Aonictech operates as a unified company serving two distinct B2B/B2C market segments under one digital roof:

```
                          ┌────────────────────────┐
                          │    AONICTECH PORTAL    │
                          └───────────┬────────────┘
                                      │
            ┌─────────────────────────┴─────────────────────────┐
            │                                                   │
  ┌─────────▼───────────────┐                       ┌───────────▼───────────────┐
  │   NICHE 1: DIGITAL      │                       │   NICHE 2: INDUSTRIAL     │
  │ SOLUTIONS & BRANDING    │                       │ MATERIALS IMPORT & SUPPLY │
  │                         │                       │                           │
  │ Tagline:                │                       │ Tagline:                  │
  │ "Your brand, website,   │                       │ "Global materials,        │
  │  and software, all      │                       │  delivered to your        │
  │  under one roof."       │                       │  doorstep."               │
  │                         │                       │                           │
  │ Target:                 │                       │ Target:                   │
  │ Restaurants, shops,     │                       │ Workshops, R&D labs,      │
  │ startups, local retail  │                       │ small factories, units    │
  └─────────────────────────┘                       └───────────────────────────┘
```

**Unified Pitch:** *"We build your brand, your website and your software, and we supply specialty materials to your factory floor."*

---

## 2. Technical Stack & Architectural Decisions

| Layer | Chosen Technology | Architectural Justification |
| :--- | :--- | :--- |
| **Framework** | **Next.js 15+ (App Router)** | Server Components (RSC) for lightning-fast initial load times, high SEO ranking on material catalogs and services, and zero-layout-shift routing. |
| **UI & Styling** | **Tailwind CSS + Lucide Icons + Radix UI** | Modern, token-based design system allowing dual-theme accents (e.g. Electric Blue for Digital, Titanium Grey / Amber for Industrial). |
| **Database & Auth** | **Supabase (PostgreSQL + RLS)** | Reliable managed Postgres for storing enquiries, material catalogs, project showcases, and POS demo leads with Row Level Security. |
| **Email Delivery** | **Resend** | High-deliverability transactional emails for immediate notification of quote requests to `contactus@aonictech.com` and customer confirmations. |
| **API Protection** | **Upstash Redis (`@upstash/ratelimit`)** | Sliding-window rate limiting on API routes (`/api/contact`, `/api/quote`, `/api/demo-request`) to prevent spam and DDoS attacks. |
| **Deployment** | **Vercel** | Git-integrated automated deployments with preview environments for `develop` and production deployments for `main`. |

---

## 3. Site Structure & Information Architecture

### 3.1 Global Header & Footer
- **Header:**
  - Sticky glassmorphic bar with company logo.
  - Desktop Navigation: `Home`, `About Us`, `Services` (interactive mega-dropdown: Digital Solutions vs Industrial Materials), `Projects`, `Contact Us`.
  - Right Actions: High-contrast **"Get a Quote"** primary CTA button, direct WhatsApp quick-action icon (`+91 7396888679`).
  - Mobile: Clean slide-out drawer with accordion navigation.
- **Footer:**
  - 4-Column Layout:
    1. *About:* Logo, brand elevator pitch, social media handles (LinkedIn, Instagram, X).
    2. *Quick Links:* Top-level page navigation.
    3. *Services:* 6 digital services + 6 industrial material services.
    4. *Contact Info:* Registered address, phone `7396888679`, email `contactus@aonictech.com`, operating hours.
  - *Trust & Compliance Bottom Bar:* Copyright, Privacy Policy, Terms, plus verified **GSTIN** and **IEC (Import Export Code)** badge for corporate credibility.

---

### 3.2 Page-by-Page Specifications

#### 1. Home Page (`/`)
- **Hero Section:** Split headline highlighting dual capability; primary action buttons: *"Digital Solutions"* and *"Industrial Supply"*.
- **Interactive Two-Niche Cards:** High-visual selector cards routing users instantly to their specific domain.
- **Services Overview Grid:** 12 micro-cards highlighting key offerings across both domains.
- **Why Choose Us:** 4 pillars (All-in-one team, Small-quantity MOQ flexibility, Custom-tailored builds, Doorstep delivery & support).
- **Featured Projects & Supply Highlights:** 4 key showcases (Websites, POS software demo, Titanium supply case study).
- **How We Work (4 Steps):** Requirement Discovery → Instant Transparent Quote → Build / Source → Deliver & Long-term Support.
- **Live Trust Counters:** Real numbers of completed deliverables, materials supplied, clients served.
- **Client Testimonials & Final CTA Strip.**

#### 2. Services Page (`/services`)
- **Dual Tab Switcher:** `Digital Solutions & Branding` | `Industrial Materials Import & Supply`.
- **Digital Solutions Section:**
  - 6 Core blocks: Website Dev, E-commerce, POS Software (with interactive feature list & Demo Request modal), Custom Apps, Logo/Identity, Packaging Design.
  - Website Packages Comparison Table (Starter / Standard / Premium tiers).
- **Industrial Materials Section:**
  - 6 Core blocks: Titanium & Specialty Alloys, Rare-Earth Elements, Electronic Chip (IC) Sourcing, Low MOQ Small Orders, Custom Sourcing, Customs Clearance & Doorstep Delivery.
  - Live Material Catalog Table (Material name, Grade, Available Forms: sheet/rod/wire/powder/ingot, Test Cert info, and per-item *"Enquire Now"* button).
  - Detailed Sourcing & Delivery Workflow.
- **Comprehensive FAQ Section** (5 questions per niche).

#### 3. Projects Page (`/projects` & `/projects/[slug]`)
- **Category Filter Tabs:** `All`, `Websites`, `E-Commerce`, `POS & Billing`, `Custom Software`, `Branding`, `Material Supply`.
- **Project Cards:** Screenshots, metadata badges, summary, and links to full case studies.
- **Live POS Sandbox Demo:** Embedded interactive demo preview for retail & restaurant billing software.
- **Supply Case Studies:** Documented anonymized industrial supply deliveries with material grades, test certificates, and delivery timelines.

#### 4. About Us Page (`/about`)
- **Company Story:** Why and how Aonictech brings together cutting-edge software engineering and precision global material sourcing.
- **Mission & Vision Statements.**
- **Core Values:** Quality, Radical Transparency, On-time Logistics, Honest Pricing.
- **Leadership & Engineering/Supply Teams.**
- **Tech Stack & Material Quality Credentials** (Logos of Next.js, React, Supabase, Python alongside ASTM/ISO material standards, GST, and IEC badges).

#### 5. Contact & Dynamic Quotation Page (`/contact`)
- **Dynamic Conditional Form:**
  - Standard Fields: Name, Phone, Email, Message, File Upload (specifications/drawings).
  - Domain Selector Dropdown: `Website`, `E-commerce`, `POS Software`, `Custom Software`, `Design`, `Material Import`.
  - *Conditional Logic:* When `Material Import` is selected, dynamically unveils:
    - Material Grade (e.g. Grade 5 Titanium, Neodymium N52, etc.)
    - Form Required (Sheet, Rod, Wire, Powder, Ingot, IC Component)
    - Quantity Needed (kg / pieces / sample batches)
    - Target Delivery Destination
- **Direct WhatsApp Chat Launcher (`7396888679`).**
- **Office Map & Direct Contact Card.**

---

## 4. Database Schema Specification (Supabase PostgreSQL)

```sql
-- Schema concept (Excluded from git tracking via .gitignore)

-- 1. Inquiries & Quote Requests
CREATE TABLE inquiries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    category TEXT NOT NULL, -- 'digital' | 'materials'
    service_type TEXT NOT NULL,
    message TEXT,
    -- Materials specific fields
    material_grade TEXT,
    material_form TEXT,
    quantity TEXT,
    delivery_location TEXT,
    attachment_url TEXT,
    status TEXT DEFAULT 'pending' -- 'pending' | 'contacted' | 'quoted' | 'closed'
);

-- 2. Material Catalog Items
CREATE TABLE materials (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    category TEXT NOT NULL,
    grade TEXT NOT NULL,
    available_forms TEXT[] NOT NULL,
    purity TEXT,
    moq TEXT,
    specs_sheet_url TEXT,
    in_stock BOOLEAN DEFAULT true
);

-- 3. Projects Showcase
CREATE TABLE projects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    niche TEXT NOT NULL, -- 'digital' | 'materials'
    category TEXT NOT NULL,
    thumbnail_url TEXT,
    description TEXT NOT NULL,
    client_type TEXT,
    deliverables TEXT[],
    demo_url TEXT,
    featured BOOLEAN DEFAULT false
);
```

---

## 5. Implementation Roadmap & Phased Execution

| Phase | Objective | Branch | Key Deliverables |
| :--- | :--- | :--- | :--- |
| **Phase 1** | Project Initialization & Tooling | `feature/project-scaffold` | Next.js 15, Tailwind CSS, Lucide icons, directory layout, environment configuration. |
| **Phase 2** | Design System, Header & Footer | `feature/layout-header-footer` | Sticky header with mega-dropdown, responsive mobile menu, 4-column footer with GST/IEC badges. |
| **Phase 3** | Home Page Development | `feature/home-page` | Dual hero section, two-niche cards, services overview, why choose us, trust strip. |
| **Phase 4** | Services Page & Materials Catalog | `feature/services-page` | Dual-tab view, POS highlight demo CTA, interactive material search/filter table. |
| **Phase 5** | Contact Us & Dynamic Quote Engine | `feature/contact-quote-system` | Conditional quotation form, Upstash Redis rate limiter, Resend email notification service, Supabase integration. |
| **Phase 6** | Projects & About Us Pages | `feature/projects-about-pages` | Filterable project showcase, POS demo view, About story, trust credentials. |
| **Phase 7** | QA, SEO, Security, & Deployment | `feature/seo-performance-polish` | Metadata optimization, OpenGraph tags, Vercel production deployment pipeline. |

---

*This document serves as the architectural reference for all development iterations.*
