# Portfolio Page Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign `/training-gallery` into a premium portfolio page with a hero, stats strip, filterable programme cards, 9-photo gallery, 14 client logos, and a CTA section.

**Architecture:** Server component page (`training-gallery/page.tsx`) imports a single `ProgrammeFilter` client component that handles tab filtering with `useState`. All programme data lives in `src/data/programmes.ts`. New CSS is appended to `globals.css`.

**Tech Stack:** Next.js 16.2.6, React 19, TypeScript, CSS custom properties (`--blue`, `--yellow`, `--dark`, `--surface`). No test runner — `npm run build` is the verification gate.

---

## File Map

| Action | Path | Purpose |
|--------|------|---------|
| Create | `src/data/programmes.ts` | 4 categories, 32 programmes with descriptions |
| Create | `src/components/programme-filter.tsx` | Client component — tabs + filtered programme cards |
| Modify | `src/app/training-gallery/page.tsx` | Full rewrite — 6 sections |
| Modify | `src/app/globals.css` | Append all new portfolio CSS |

---

## Task 1: Programme Data File

**Files:**
- Create: `src/data/programmes.ts`

- [ ] **Step 1: Create the data file**

```typescript
// src/data/programmes.ts

export interface Programme {
  title: string;
  description: string;
}

export interface ProgrammeCategory {
  id: 'safety' | 'security' | 'hr' | 'development';
  label: string;
  programmes: Programme[];
}

export const programmeCategories: ProgrammeCategory[] = [
  {
    id: 'safety',
    label: 'Safety & Health',
    programmes: [
      {
        title: 'Basic Chemical Safe Handling',
        description:
          'Chemical hazards, SDS interpretation, PPE selection and safe storage for USECHH workplace compliance.',
      },
      {
        title: 'Energy Isolation LOTO',
        description:
          'Lockout/tagout procedures to prevent accidental machine energisation during maintenance work.',
      },
      {
        title: 'Fire Safety, Fire Extinguisher and ERP',
        description:
          'Fire prevention principles, extinguisher operation and emergency response plan activation.',
      },
      {
        title: 'Hazard Identification, Risk Assessment and Risk Control',
        description:
          'Systematic tools to identify, assess and implement controls for workplace hazards (HIRAC methodology).',
      },
      {
        title: 'Manual Handling',
        description:
          'Ergonomic lifting and carrying techniques to reduce musculoskeletal injury risk in the workplace.',
      },
      {
        title: 'Road Safety Awareness Program',
        description:
          'Defensive driving, road risk awareness and fleet safety best practice for employees who drive for work.',
      },
      {
        title: 'Forklift Safe Handling',
        description:
          'Safe operation, pre-use inspection and hazard awareness for forklift operators in warehouse and manufacturing environments.',
      },
      {
        title: 'Safety and Health Committee',
        description:
          'SHC roles, responsibilities, meeting procedures and legal requirements under OSHA 1994.',
      },
      {
        title: 'Electrical Safety',
        description:
          'Safe working practices around electrical hazards, isolation procedures and arc flash awareness.',
      },
      {
        title: 'Project Safety Management',
        description:
          'Safety planning, contractor management and incident prevention for construction and project site environments.',
      },
    ],
  },
  {
    id: 'security',
    label: 'Security',
    programmes: [
      {
        title: 'Mastering World and Malaysia Customs Organization AEO Pillar',
        description:
          'AEO framework, customs compliance obligations and authorised economic operator requirements for traders.',
      },
      {
        title: 'Facility Security Compliance',
        description:
          'TAPA-aligned physical security controls, threat assessment methodology and compliance reporting procedures.',
      },
      {
        title: 'CTPAT Awareness and Risk-Based Compliance Training',
        description:
          'US Customs Trade Partnership Against Terrorism requirements and risk-based security procedures for exporters.',
      },
      {
        title: 'Supply Chain Security, Trade Compliance and Risk Management',
        description:
          'End-to-end supply chain security controls, trade compliance frameworks and cargo risk management.',
      },
    ],
  },
  {
    id: 'hr',
    label: 'Human Resources',
    programmes: [
      {
        title: 'HR for Beginners',
        description:
          'Foundational HR concepts, employment law basics and HR function overview for new practitioners.',
      },
      {
        title: 'HR for Non-HR Managers',
        description:
          'Employment Act essentials, people management skills and HR processes for line managers and supervisors.',
      },
      {
        title: 'Conducting an Effective Domestic Inquiry',
        description:
          'Legally sound DI procedures, evidence handling and decision-making for HR teams and management.',
      },
      {
        title: 'Mastering Payroll Management and Calculations',
        description:
          'EPF, SOCSO, PCB calculations, statutory deductions and accurate payroll processing under Malaysian law.',
      },
      {
        title: 'Labour Law and IR Law',
        description:
          'Deep-dive into the Employment Act 1955, Industrial Relations Act 1967 and termination procedures in Malaysia.',
      },
      {
        title: 'KPI for HR Team',
        description:
          'Setting, measuring and reporting HR KPIs aligned to business objectives and performance management cycles.',
      },
      {
        title: 'Training and Development',
        description:
          'Training needs analysis, L&D programme design and evaluation frameworks for HR and L&D practitioners.',
      },
      {
        title: 'Recruitment and Selection',
        description:
          'Competency-based job profiling, structured interview design and evidence-based selection best practice.',
      },
      {
        title: 'Supervisory Management',
        description:
          'Leadership skills, team communication and performance management tools for front-line supervisors.',
      },
      {
        title: 'Compensation and Benefits',
        description:
          'Pay structure design, market benchmarking, grading systems and statutory benefit compliance.',
      },
    ],
  },
  {
    id: 'development',
    label: 'Self Development',
    programmes: [
      {
        title: 'Basic English at Workplace',
        description:
          'Everyday English communication skills for non-native speakers in professional workplace settings.',
      },
      {
        title: 'Basic English for Customer Service',
        description:
          'Customer-facing communication skills, handling complaints and professional service language.',
      },
      {
        title: 'Understanding Business Vocabulary',
        description:
          'Key business and industry terminology for clear communication in professional and corporate contexts.',
      },
      {
        title: 'Recognizing and Managing Work Stress',
        description:
          'Stress identification techniques and practical coping strategies to support employee wellbeing.',
      },
      {
        title: 'Basic Phone Etiquette',
        description:
          'Professional telephone manner, message taking and call handling best practice for frontline staff.',
      },
      {
        title: 'NLP Communication and Influence Programmes',
        description:
          'Neuro-linguistic programming techniques for effective communication, rapport building and workplace influence.',
      },
      {
        title: 'Positive Self-Talk and Confidence Programmes',
        description:
          'Building self-confidence, resilience and a positive mindset for improved workplace performance.',
      },
      {
        title: 'Professional Email Writing',
        description:
          'Clear, professional email structure, tone and formatting for business correspondence and internal communication.',
      },
    ],
  },
];
```

- [ ] **Step 2: Verify build passes**

```bash
cd medss-next && npm run build 2>&1 | tail -10
```

Expected: `✓ Compiled successfully` — no TypeScript errors.

---

## Task 2: ProgrammeFilter Client Component

**Files:**
- Create: `src/components/programme-filter.tsx`

- [ ] **Step 1: Create the component**

```tsx
// src/components/programme-filter.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { programmeCategories } from '@/data/programmes';

type CategoryId = 'all' | 'safety' | 'security' | 'hr' | 'development';

const tabs: { id: CategoryId; label: string; count?: number }[] = [
  { id: 'all', label: 'All Programmes' },
  { id: 'safety', label: 'Safety & Health' },
  { id: 'security', label: 'Security' },
  { id: 'hr', label: 'Human Resources' },
  { id: 'development', label: 'Self Development' },
];

export function ProgrammeFilter() {
  const [active, setActive] = useState<CategoryId>('all');

  const visible =
    active === 'all'
      ? programmeCategories.flatMap((cat) =>
          cat.programmes.map((p) => ({
            ...p,
            categoryId: cat.id,
            categoryLabel: cat.label,
          }))
        )
      : programmeCategories
          .filter((cat) => cat.id === active)
          .flatMap((cat) =>
            cat.programmes.map((p) => ({
              ...p,
              categoryId: cat.id,
              categoryLabel: cat.label,
            }))
          );

  return (
    <div className="prog-filter">
      <div className="prog-filter-tabs" role="tablist" aria-label="Filter programmes by category">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={active === tab.id}
            className={`prog-filter-tab${active === tab.id ? ' prog-filter-tab--active' : ''}`}
            onClick={() => setActive(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <p className="prog-filter-count">
        Showing {visible.length} programme{visible.length !== 1 ? 's' : ''}
      </p>

      <div className="prog-filter-grid">
        {visible.map((programme, i) => (
          <div key={`${programme.categoryId}-${i}`} className="prog-filter-card">
            <span className={`prog-filter-tag prog-filter-tag--${programme.categoryId}`}>
              {programme.categoryLabel}
            </span>
            <h3 className="prog-filter-card-title">{programme.title}</h3>
            <p className="prog-filter-card-desc">{programme.description}</p>
            <Link href="/contact" className="prog-filter-card-link">
              Enquire →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Verify build passes**

```bash
cd medss-next && npm run build 2>&1 | tail -10
```

Expected: `✓ Compiled successfully`

---

## Task 3: Rewrite Portfolio Page

**Files:**
- Modify: `src/app/training-gallery/page.tsx` (full rewrite)

Replace the entire file with:

- [ ] **Step 1: Write the new page**

```tsx
// src/app/training-gallery/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { ProgrammeFilter } from '@/components/programme-filter';

export const metadata: Metadata = {
  title: 'Training Programmes & Portfolio',
  description:
    'HRDC claimable training programmes in safety and health, security, human resources and self-development — delivered in-house or at public sessions across Malaysia.',
  alternates: {
    canonical: '/training-gallery',
  },
};

const galleryImages = [
  { src: '/assets/training/chemical-training.jpg',   alt: 'Chemical safe handling training',            span: 'row' },
  { src: '/assets/training/chemical-training-2.jpg', alt: 'Chemical handling training participants',     span: 'none' },
  { src: '/assets/training/chemical-training-3.jpg', alt: 'In-house chemical training session',         span: 'none' },
  { src: '/assets/training/electrical-training.jpg', alt: 'Electrical safety training',                 span: 'none' },
  { src: '/assets/training/electrical-training-2.jpg', alt: 'Electrical safety training session',       span: 'row' },
  { src: '/assets/training/hero-road-safety.jpg',    alt: 'Road safety programme overview',             span: 'none' },
  { src: '/assets/training/road-training-1.jpg',     alt: 'Road safety training participants',          span: 'none' },
  { src: '/assets/training/road-training-2.jpg',     alt: 'Defensive driving training activity',        span: 'none' },
  { src: '/assets/training/road-training-3.jpg',     alt: 'MEDSS defensive driving programme',          span: 'col' },
] as const;

const clientLogos = [
  { src: '/assets/clients/bmi.png',          alt: 'BMI' },
  { src: '/assets/clients/century.png',      alt: 'Century' },
  { src: '/assets/clients/jj-express.png',   alt: 'JJ Express' },
  { src: '/assets/clients/maxitulin.jpeg',   alt: 'Maxitulin' },
  { src: '/assets/clients/mepsb.png',        alt: 'MEPSB' },
  { src: '/assets/clients/microenergy.png',  alt: 'Microenergy' },
  { src: '/assets/clients/morelux.png',      alt: 'Morelux' },
  { src: '/assets/clients/ns.png',           alt: 'NS' },
  { src: '/assets/clients/prismma.png',      alt: 'Prismma' },
  { src: '/assets/clients/toll.png',         alt: 'Toll' },
  { src: '/assets/clients/tri-mode.png',     alt: 'Tri-Mode' },
  { src: '/assets/clients/twc.png',          alt: 'TWC' },
  { src: '/assets/clients/vanguards.png',    alt: 'Vanguards' },
  { src: '/assets/clients/visions.png',      alt: 'Visions' },
];

export default function TrainingGalleryPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="portfolio-hero">
        <div className="container">
          <nav className="svc-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">›</span>
            <span>Training &amp; Portfolio</span>
          </nav>
          <h1 className="portfolio-hero-title">
            Training Programmes<br />&amp; Portfolio
          </h1>
          <p className="portfolio-hero-sub">
            HRDC claimable programmes across safety, HR, security and self-development —
            delivered in-house or at public sessions nationwide.
          </p>
          <div className="portfolio-hero-actions">
            <a href="#programmes" className="btn btn-primary">View Programmes</a>
            <Link href="/contact" className="btn btn-outline portfolio-hero-btn-outline">
              Enquire Now
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section className="portfolio-stats">
        <div className="container portfolio-stats-grid">
          <div className="portfolio-stat">
            <strong>200+</strong>
            <span>Organisations trained</span>
          </div>
          <div className="portfolio-stat-divider" aria-hidden="true" />
          <div className="portfolio-stat">
            <strong>32</strong>
            <span>HRDC claimable programmes</span>
          </div>
          <div className="portfolio-stat-divider" aria-hidden="true" />
          <div className="portfolio-stat">
            <strong>4</strong>
            <span>Training categories</span>
          </div>
          <div className="portfolio-stat-divider" aria-hidden="true" />
          <div className="portfolio-stat">
            <strong>10+</strong>
            <span>Years of industry experience</span>
          </div>
        </div>
      </section>

      {/* ── Programmes ── */}
      <section className="section" id="programmes">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">HRDC Claimable Programmes</span>
            <h2>32 programmes across every discipline</h2>
            <p>All programmes are deliverable in-house at your premises or as public sessions. Most are claimable under HRD Corp.</p>
          </div>
          <ProgrammeFilter />
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="section section-light" id="gallery">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Training Gallery</span>
            <h2>Programmes in action</h2>
            <p>Selected photos from MEDSS training sessions across Malaysia.</p>
          </div>
          <div className="portfolio-gallery">
            {galleryImages.map((image) => (
              <div
                key={image.src}
                className={`portfolio-gallery-item${image.span !== 'none' ? ` portfolio-gallery-item--span-${image.span}` : ''}`}
              >
                <img src={image.src} alt={image.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Clients ── */}
      <section className="section portfolio-clients-section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Our Clients</span>
            <h2>Trusted by organisations across Malaysia</h2>
            <p>Companies from logistics, manufacturing, security, healthcare and more.</p>
          </div>
          <div className="portfolio-clients-grid">
            {clientLogos.map((logo) => (
              <div key={logo.src} className="portfolio-client-logo">
                <img src={logo.src} alt={logo.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="portfolio-cta-section">
        <div className="container">
          <div className="portfolio-cta">
            <div className="portfolio-cta-left">
              <span className="portfolio-cta-eyebrow">Get Started</span>
              <h2 className="portfolio-cta-headline">
                Looking for in-house or HRDC claimable training?
              </h2>
              <p className="portfolio-cta-sub">
                Contact MEDSS to discuss topics, participant numbers, dates and HRD Corp claim requirements.
                We respond within one business day.
              </p>
            </div>
            <div className="portfolio-cta-right">
              <Link className="btn btn-primary" href="/contact">Send Enquiry</Link>
              <Link className="portfolio-cta-link" href="/services">Explore consulting services →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 2: Verify build passes**

```bash
cd medss-next && npm run build 2>&1 | tail -15
```

Expected: `✓ Generating static pages` and `/training-gallery` listed in routes.

---

## Task 4: Add Portfolio CSS

**Files:**
- Modify: `src/app/globals.css` (append to end of file)

- [ ] **Step 1: Append all portfolio CSS**

Append the following block to the very end of `src/app/globals.css`:

```css
/* ═══════════════════════════════════════════════════
   PORTFOLIO / TRAINING GALLERY PAGE
   ═══════════════════════════════════════════════════ */

/* ── Hero ── */

.portfolio-hero {
  background:
    linear-gradient(135deg, rgba(13,27,61,0.88) 0%, rgba(13,27,61,0.65) 50%, rgba(13,27,61,0.82) 100%),
    url('/assets/training/hero-road-safety.jpg') center / cover no-repeat;
  padding: 100px 0 90px;
  color: var(--white);
  min-height: 480px;
  display: flex;
  align-items: center;
}

.portfolio-hero-title {
  font-size: clamp(34px, 5.5vw, 58px);
  font-weight: 900;
  line-height: 1.08;
  letter-spacing: -0.025em;
  color: var(--white);
  margin: 0 0 20px;
  max-width: 700px;
}

.portfolio-hero-sub {
  font-size: clamp(15px, 1.8vw, 18px);
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.65;
  max-width: 580px;
  margin: 0 0 36px;
}

.portfolio-hero-actions {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}

.portfolio-hero-btn-outline {
  border-color: rgba(255, 255, 255, 0.5);
  color: var(--white);
}

.portfolio-hero-btn-outline:hover {
  border-color: var(--white);
  background: rgba(255, 255, 255, 0.08);
}

/* ── Stats strip ── */

.portfolio-stats {
  background: var(--dark);
  padding: 0;
}

.portfolio-stats-grid {
  display: flex;
  align-items: stretch;
  justify-content: center;
}

.portfolio-stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 32px 48px;
  text-align: center;
  flex: 1;
}

.portfolio-stat strong {
  font-size: clamp(28px, 3.5vw, 40px);
  font-weight: 900;
  color: var(--yellow);
  letter-spacing: -0.02em;
  line-height: 1;
}

.portfolio-stat span {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.65);
}

.portfolio-stat-divider {
  width: 1px;
  background: rgba(255, 255, 255, 0.1);
  align-self: stretch;
  margin: 16px 0;
}

/* ── Programme filter ── */

.prog-filter {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.prog-filter-tabs {
  display: flex;
  align-items: center;
  gap: 4px;
  border-bottom: 2px solid var(--border);
  margin-bottom: 8px;
  overflow-x: auto;
  scrollbar-width: none;
}

.prog-filter-tabs::-webkit-scrollbar {
  display: none;
}

.prog-filter-tab {
  padding: 12px 20px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
  background: none;
  border: none;
  border-bottom: 2px solid transparent;
  margin-bottom: -2px;
  cursor: pointer;
  white-space: nowrap;
  transition: color 0.2s ease, border-color 0.2s ease;
}

.prog-filter-tab:hover {
  color: var(--blue);
}

.prog-filter-tab--active {
  color: var(--blue);
  border-bottom-color: var(--yellow);
}

.prog-filter-count {
  font-size: 12px;
  color: var(--muted);
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin: 16px 0 28px;
}

.prog-filter-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}

.prog-filter-card {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 24px;
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 10px;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
}

.prog-filter-card:hover {
  border-color: rgba(33, 64, 154, 0.2);
  box-shadow: 0 12px 32px rgba(13, 27, 61, 0.09);
  transform: translateY(-2px);
}

.prog-filter-tag {
  display: inline-block;
  padding: 3px 10px;
  border-radius: 999px;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  align-self: flex-start;
}

.prog-filter-tag--safety {
  background: rgba(234, 88, 12, 0.1);
  color: #c2410c;
}

.prog-filter-tag--security {
  background: rgba(33, 64, 154, 0.1);
  color: var(--blue);
}

.prog-filter-tag--hr {
  background: rgba(16, 130, 84, 0.1);
  color: #065f46;
}

.prog-filter-tag--development {
  background: rgba(109, 40, 217, 0.1);
  color: #6d28d9;
}

.prog-filter-card-title {
  font-size: 15px;
  font-weight: 800;
  color: var(--dark);
  line-height: 1.3;
  letter-spacing: -0.01em;
  margin: 0;
  flex: 1;
}

.prog-filter-card-desc {
  font-size: 13px;
  color: var(--muted);
  line-height: 1.6;
  margin: 0;
}

.prog-filter-card-link {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--blue);
  align-self: flex-start;
  transition: color 0.15s ease, letter-spacing 0.15s ease;
}

.prog-filter-card-link:hover {
  color: var(--dark);
  letter-spacing: 0.14em;
}

/* ── Training gallery ── */

.portfolio-gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 220px;
  gap: 12px;
}

.portfolio-gallery-item {
  border-radius: 8px;
  overflow: hidden;
  background: var(--surface);
}

.portfolio-gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}

.portfolio-gallery-item:hover img {
  transform: scale(1.04);
}

.portfolio-gallery-item--span-row {
  grid-row: span 2;
}

.portfolio-gallery-item--span-col {
  grid-column: span 2;
}

/* ── Clients ── */

.portfolio-clients-section {
  background: var(--white);
}

.portfolio-clients-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 16px;
  align-items: center;
}

.portfolio-client-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 12px;
  border: 1px solid var(--border);
  border-radius: 10px;
  background: var(--white);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.portfolio-client-logo:hover {
  border-color: rgba(33, 64, 154, 0.2);
  box-shadow: 0 4px 12px rgba(13, 27, 61, 0.07);
}

.portfolio-client-logo img {
  max-height: 40px;
  width: auto;
  max-width: 100%;
  object-fit: contain;
  filter: grayscale(1) opacity(0.65);
  transition: filter 0.2s ease;
}

.portfolio-client-logo:hover img {
  filter: grayscale(0) opacity(1);
}

/* ── CTA ── */

.portfolio-cta-section {
  background: linear-gradient(135deg, var(--dark) 0%, var(--blue) 100%);
  padding: 80px 0;
}

.portfolio-cta {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 64px;
}

.portfolio-cta-eyebrow {
  display: block;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--yellow);
  margin-bottom: 12px;
}

.portfolio-cta-headline {
  font-size: clamp(22px, 3vw, 32px);
  font-weight: 900;
  color: var(--white);
  letter-spacing: -0.02em;
  line-height: 1.2;
  margin: 0 0 14px;
  max-width: 520px;
}

.portfolio-cta-sub {
  font-size: 15px;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.65;
  margin: 0;
  max-width: 480px;
}

.portfolio-cta-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 16px;
  min-width: 200px;
}

.portfolio-cta-link {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.6);
  transition: color 0.2s ease;
  white-space: nowrap;
}

.portfolio-cta-link:hover {
  color: var(--yellow);
}

/* ── Responsive ── */

@media (max-width: 1000px) {
  .portfolio-clients-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 800px) {
  .portfolio-stats-grid {
    flex-wrap: wrap;
  }

  .portfolio-stat {
    flex: 1 1 40%;
    padding: 24px 20px;
  }

  .portfolio-stat-divider {
    display: none;
  }

  .portfolio-gallery {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 180px;
  }

  .portfolio-gallery-item--span-col {
    grid-column: span 1;
  }

  .portfolio-cta {
    grid-template-columns: 1fr;
    gap: 36px;
  }

  .portfolio-cta-right {
    align-items: flex-start;
  }
}

@media (max-width: 540px) {
  .portfolio-clients-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .portfolio-gallery {
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 150px;
  }

  .portfolio-gallery-item--span-row {
    grid-row: span 1;
  }

  .prog-filter-grid {
    grid-template-columns: 1fr;
  }
}
```

- [ ] **Step 2: Verify build passes**

```bash
cd medss-next && npm run build 2>&1 | tail -15
```

Expected: `✓ Generating static pages` with `/training-gallery` in routes, zero TypeScript errors.

---

## Task 5: Final Build Verification

**Files:** None (verification only)

- [ ] **Step 1: Run full build**

```bash
cd medss-next && npm run build 2>&1
```

Expected output includes:
```
✓ Compiled successfully
Route (app)
├ ○ /training-gallery
```

- [ ] **Step 2: Check no regressions**

Confirm these routes still appear:
```
○ /
○ /about
○ /services
● /services/[category]  (4 paths)
● /services/[category]/[service]  (28 paths)
○ /training-gallery
○ /contact
```

Total routes: 40 (same as before, no regressions).
