# Why Choose MEDSS — Bento Grid Redesign

**Date:** 2026-05-28  
**Status:** Approved

## What We're Building

Replace the current split-panel "Why Choose MEDSS" section (photo left / dark card grid right) with a light-background bento grid layout. The section will remain full-width but shift to a white/light-grey background, providing contrast against the dark sections above and below it.

## Layout

Three-column bento grid (`grid-template-columns: repeat(3, 1fr)`) with mixed tile sizes:

| Row | Col 1 | Col 2 | Col 3 |
|-----|-------|-------|-------|
| 1 | HRDC Claimable (dark) | 200+ Orgs (yellow stat) | Industry Practitioners (white) |
| 2 | 50+ Programmes (white stat) | In-house & Public + Compliance (white, spans 2) | |
| 3 | Nationwide Reach (dark) | Customised Programmes (white, spans 2) | |

Section header (eyebrow, h2, lead paragraph) is centered above the grid.  
CTA button ("View Training Programmes") is centered below the grid.

## Tile Inventory

1. **HRDC Claimable** — dark (`#0d1b3d`) background, yellow icon, white text, "HRD Corp Registered" badge
2. **200+ Organisations Trained** — yellow (`#ffc20e`) background, large stat number, dark text
3. **Industry Practitioners** — white card, yellow icon, grey body text
4. **50+ HRDC Claimable Programmes** — white card, large stat number
5. **In-house & Public Formats** — half of wide white card (spans col 2–3)
6. **Full Compliance Coverage** — other half of same wide white card
7. **Nationwide Reach** — dark tile, yellow heading, muted body text
8. **Customised Programmes** — wide white card (spans col 2–3), inline "Learn More" chip

## Colours & Typography

Uses existing design tokens: `--dark: #0d1b3d`, `--yellow: #ffc20e`, `--white: #ffffff`. Section background: `#f0f2f8` (light blue-grey). No new tokens needed.

## Files Changed

- `src/app/page.tsx` — replace `.why-section` JSX with new bento grid markup; remove `.why-image` div and photo
- `src/app/globals.css` — replace `.why-*` rule block (~lines 814–1040) with new `.why-bento-*` rules

## Responsive

- Desktop (≥900px): 3-column grid as above
- Mobile (<900px): single column, all tiles stack, span overrides removed
