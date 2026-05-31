---
name: about-page-redesign
description: Full rebuild of the MEDSS About page to match homepage quality — Layout B (mission-first)
metadata:
  type: project
---

# About Page Redesign — Design Spec

**Date:** 2026-05-28  
**File:** `src/app/about/page.tsx`  
**Approach:** Layout B — Mission-first, full rebuild to match homepage quality

---

## Goal

Replace the current bare About page (hero + who-we-are split + 3-card strengths + CTA) with a rich, homepage-quality page that establishes MEDSS's purpose, story and team. The page must feel like a natural companion to the homepage — not a repeat of it.

---

## Page Sections (in order)

### 1. Page Hero
- **Unchanged** — keep existing `page-hero` dark gradient with breadcrumb, H1 "About MEDSS", and subtitle paragraph.
- No changes needed here.

### 2. Mission & Vision Bento
- **Background:** `var(--dark)` (#0d1b3d), full-width section.
- **Eyebrow:** "Our Purpose" — small uppercase muted white label.
- **Layout:** Two equal cards side by side in a 2-column grid.
  - **Mission card** — yellow background (`var(--yellow)`), label "Mission" in muted dark, body text in dark. Text: *"To empower Malaysian organisations with practical, accessible and high-quality training and consultancy."*
  - **Vision card** — glass style (`rgba(255,255,255,0.07)` bg + subtle white border), label "Vision" in yellow, body text in white 85% opacity. Text: *"To be Malaysia's most trusted multi-discipline training and consultancy partner."*
- Padding: 80px 0. Cards have 14px border-radius, 24px padding.
- New CSS classes needed: `.mission-section`, `.mission-grid`, `.mission-card`, `.mission-card--yellow`, `.mission-card--glass`.

### 3. Company Story
- **Background:** white, `padding: 84px 0`.
- **Layout:** `.split` grid (existing class) — text left, image right.
- **Left column:**
  - Eyebrow: "Our Story"
  - H2: "Built to strengthen workplaces across Malaysia"
  - 2–3 body paragraphs covering founding purpose and growth into a full-service consultancy.
  - HRDC badge chips row — two small text pill badges: "HRD Corp Claimable" and "Registered Training Provider". These are **not** the existing `.badges` img elements — they are a new `.story-badge` class: `display:inline-block`, small font, blue text, light blue-grey background, pill border-radius. Add to `globals.css`.
- **Right column:**
  - `<img>` using existing asset `/assets/training/road-training-3.jpg` with `.rounded-img` class (already defined).
- No new CSS needed — reuses `.split`, `.eyebrow`, `.rounded-img`.

### 4. Team
- **Background:** `#f0f2f8` (same as `why-bento-section`), `padding: 84px 0`.
- **Header:** centred eyebrow "The Team" + H2 "People who make it happen".
- **Grid:** 4-column card grid (`repeat(4, 1fr)`, gap 20px). Collapses to 2-col on ≤900px, 1-col on ≤500px.
- **Each card:**
  - Photo: `<img>` — square aspect ratio (1:1), `border-radius: 16px 16px 0 0`, `object-fit: cover`, full card width.
  - Name: bold, dark, 15px.
  - Role: yellow, uppercase, 10px, letter-spacing.
  - Bio: muted, 13px, 2–3 sentences max.
- Card style: white bg, `border: 1px solid var(--border)`, `border-radius: 16px`, overflow hidden.
- Image paths will use `/assets/team/<filename>.jpg` — user provides real photos.
- New CSS classes: `.team-section`, `.team-header`, `.team-grid`, `.team-card`, `.team-card-photo`, `.team-card-info`, `.team-card-name`, `.team-card-role`, `.team-card-bio`.

### 5. Strengths
- **Keep existing section** — `section-light` background, existing `.grid-3` card layout with "Our Strengths" eyebrow and 3 cards (Practical Delivery, Compliance Awareness, Flexible Support).
- **Elevate slightly:** add a small SVG icon to each card (matching the icon style from the homepage bento tiles — 40×40 rounded square, yellow-tinted bg, blue icon).
- New icon wrappers reuse `.why-tile-icon--light` style (already in globals.css).

### 6. CTA
- **Keep existing** `section > container > .cta` pattern.
- No changes — "Build a safer and better prepared workforce." with "Send Enquiry" button to `/contact`.

---

## Content Requirements (user to provide before build)

| Section | Content needed |
|---|---|
| Mission card | Confirm or adjust mission text |
| Vision card | Confirm or adjust vision text |
| Story paragraphs | Founding year, key milestones, growth narrative (2–3 short paragraphs) |
| Team members | Full name, role title, bio (2–3 sentences), photo file per person |

---

## CSS Strategy

- Add new classes to `globals.css` for sections 2 (mission bento) and 4 (team grid).
- Sections 3, 5, 6 reuse fully existing classes — no new CSS.
- New classes follow existing naming patterns (kebab-case, BEM-light).
- Responsive breakpoints mirror homepage: ≤900px collapses grids, ≤500px goes single column.

---

## Metadata

Keep existing `metadata` export — title "About MEDSS", description and canonical `/about` stay the same.

---

## Out of Scope

- Stats strip (already on homepage — no duplication)
- Timeline / history graphic
- Testimonials (already on homepage)
- Industries section (already on homepage)
