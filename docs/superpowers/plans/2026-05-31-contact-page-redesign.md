# Contact Page Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the MEDSS contact page to be premium, conversion-focused, and consistent with the rest of the site's dark/yellow design language.

**Architecture:** All changes are contained to two files — `src/app/contact/page.tsx` (JSX structure) and `src/app/globals.css` (styles). No new components or data files are needed. Sections are added in order: hero → process strip → form+sidebar → map → FAQ.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, plain CSS (no Tailwind). No new dependencies.

---

## Files

| Action | Path | Responsibility |
|--------|------|---------------|
| Modify | `src/app/contact/page.tsx` | Full JSX restructure — hero, process strip, form, sidebar, FAQ |
| Modify | `src/app/globals.css` | All new CSS classes for every new section |

---

## Task 1: Hero redesign — dark + diagonal stripe

**Files:**
- Modify: `src/app/globals.css` — replace `.contact-hero` and child classes
- Modify: `src/app/contact/page.tsx` — update hero JSX structure

The current hero is a plain dark gradient. Replace with dark navy + diagonal stripe pattern (same as `.svc-detail-hero`) + a right-side panel showing 3 quick-contact methods (WhatsApp, phone, email) as clickable rows.

- [ ] **Step 1: Replace `.contact-hero` CSS block in `globals.css`**

Find the existing block starting at `.contact-hero {` and replace everything up to and including `.contact-hero-detail-item svg {` with:

```css
/* ── Contact hero ── */
.contact-hero {
  background: var(--dark);
  position: relative;
  overflow: hidden;
  color: var(--white);
}

.contact-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: repeating-linear-gradient(
    -45deg,
    transparent,
    transparent 18px,
    rgba(255, 255, 255, 0.03) 18px,
    rgba(255, 255, 255, 0.03) 19px
  );
  pointer-events: none;
}

.contact-hero::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 65% 120% at 0% 50%, var(--dark) 30%, transparent 70%);
  pointer-events: none;
}

.contact-hero-topbar {
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  padding: 13px 0;
  position: relative;
  z-index: 1;
}

.contact-hero-breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.35);
}

.contact-hero-breadcrumb a {
  color: rgba(255, 255, 255, 0.35);
  text-decoration: none;
  transition: color 0.15s ease;
}

.contact-hero-breadcrumb a:hover { color: rgba(255, 255, 255, 0.7); }
.contact-hero-breadcrumb .sep { opacity: 0.3; }
.contact-hero-breadcrumb .current { color: rgba(255, 255, 255, 0.7); font-weight: 700; }

.contact-hero-inner {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 64px;
  align-items: center;
  padding: 64px 0 68px;
  position: relative;
  z-index: 1;
}

.contact-hero-title {
  font-size: clamp(36px, 4.5vw, 54px);
  font-weight: 900;
  line-height: 1.0;
  letter-spacing: -0.03em;
  color: var(--white);
  margin: 0 0 18px;
}

.contact-hero-sub {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.65;
  max-width: 500px;
  margin: 0 0 28px;
}

.contact-hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 194, 14, 0.12);
  border: 1px solid rgba(255, 194, 14, 0.25);
  color: var(--yellow);
  font-size: 12px;
  font-weight: 700;
  padding: 7px 14px;
  border-radius: 999px;
  letter-spacing: 0.04em;
}

.contact-hero-badge::before {
  content: '';
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--yellow);
  flex-shrink: 0;
}

.contact-hero-panel {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 14px;
  overflow: hidden;
}

.contact-hero-panel-label {
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.3);
  padding: 20px 24px 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}

.contact-hero-channel {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px 24px;
  text-decoration: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  transition: background 0.2s ease;
}

.contact-hero-channel:last-child { border-bottom: none; }
.contact-hero-channel:hover { background: rgba(255, 255, 255, 0.06); }

.contact-hero-channel-icon {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.07);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--yellow);
  flex-shrink: 0;
}

.contact-hero-channel-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.contact-hero-channel-name {
  font-size: 13px;
  font-weight: 700;
  color: var(--white);
}

.contact-hero-channel-value {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.45);
}

.contact-hero-channel-arrow {
  margin-left: auto;
  color: rgba(255, 255, 255, 0.2);
  font-size: 14px;
  transition: color 0.2s ease, transform 0.2s ease;
}

.contact-hero-channel:hover .contact-hero-channel-arrow {
  color: var(--yellow);
  transform: translateX(3px);
}

@media (max-width: 860px) {
  .contact-hero-inner {
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 48px 0 52px;
  }
}
```

- [ ] **Step 2: Update hero JSX in `src/app/contact/page.tsx`**

Replace the entire `{/* ── Hero ── */}` section with:

```tsx
{/* ── Hero ── */}
<section className="contact-hero">
  <div className="contact-hero-topbar">
    <div className="container">
      <nav className="contact-hero-breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span className="sep" aria-hidden="true">›</span>
        <span className="current">Contact</span>
      </nav>
    </div>
  </div>
  <div className="container">
    <div className="contact-hero-inner">
      <div>
        <h1 className="contact-hero-title">Let&rsquo;s Work<br />Together.</h1>
        <p className="contact-hero-sub">
          Send an enquiry about training, consultancy, HRDC claimable programmes or
          workplace compliance support. We respond within one business day.
        </p>
        <span className="contact-hero-badge">Responds within one business day</span>
      </div>
      <div className="contact-hero-panel">
        <p className="contact-hero-panel-label">Reach us directly</p>
        <a href="https://wa.me/60122744432" target="_blank" rel="noreferrer" className="contact-hero-channel">
          <span className="contact-hero-channel-icon">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M12 2a9.92 9.92 0 00-8.48 15.14L3 22l4.92-1.3A9.94 9.94 0 1012 2zm5.7 14.56c-.24.68-1.39 1.3-1.92 1.33s-.5.43-3.23-1c-2.72-1.43-4.45-4.9-4.59-5.13a5.2 5.2 0 01-1-3.2 3.61 3.61 0 011.2-2.72 1.22 1.22 0 01.87-.3h.6c.2 0 .46-.07.72.55s.92 2.27 1 2.43a.57.57 0 010 .54 1.11 1.11 0 01-.16.24c-.08.1-.17.18-.25.29s-.18.18-.27.27A.58.58 0 0110 10a5.94 5.94 0 002.8 2.8.64.64 0 00.68-.07c.2-.24.86-1 1.09-1.35s.45-.27.75-.14 2 1 2.34 1.17.57.27.66.42a1.89 1.89 0 01-.62 1.73z"/>
            </svg>
          </span>
          <span className="contact-hero-channel-text">
            <span className="contact-hero-channel-name">WhatsApp</span>
            <span className="contact-hero-channel-value">+60 12-274 4432</span>
          </span>
          <span className="contact-hero-channel-arrow" aria-hidden="true">→</span>
        </a>
        <a href="tel:+60122744432" className="contact-hero-channel">
          <span className="contact-hero-channel-icon">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 01.97-.26 11.36 11.36 0 003.56.57 1 1 0 011 1v3.58a1 1 0 01-1 1A16.62 16.62 0 013 5a1 1 0 011-1h3.57a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.26.97z"/>
            </svg>
          </span>
          <span className="contact-hero-channel-text">
            <span className="contact-hero-channel-name">Phone</span>
            <span className="contact-hero-channel-value">+60 12-274 4432</span>
          </span>
          <span className="contact-hero-channel-arrow" aria-hidden="true">→</span>
        </a>
        <a href="mailto:consultant@medss.com.my" className="contact-hero-channel">
          <span className="contact-hero-channel-icon">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round"/>
            </svg>
          </span>
          <span className="contact-hero-channel-text">
            <span className="contact-hero-channel-name">Email</span>
            <span className="contact-hero-channel-value">consultant@medss.com.my</span>
          </span>
          <span className="contact-hero-channel-arrow" aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 3: Verify at `http://localhost:3000/contact`**
  - Hero is dark navy with diagonal stripe texture visible
  - Left side: "Let's Work Together" heading, sub-text, yellow badge
  - Right side: frosted glass panel with WhatsApp / Phone / Email rows, arrows animate yellow on hover
  - No broken layout or overflow

---

## Task 2: "What to expect" process strip

**Files:**
- Modify: `src/app/globals.css` — add `.contact-process` classes after the hero responsive block
- Modify: `src/app/contact/page.tsx` — insert section between hero and `{/* ── Main grid ── */}`

Yellow background strip, 3 numbered steps: Submit → Review & call back → Propose solution.

- [ ] **Step 1: Add CSS after the `@media (max-width: 860px)` contact-hero block**

```css
/* ── Contact process strip ── */
.contact-process {
  background: var(--yellow);
  padding: 44px 0;
  border-bottom: 1px solid rgba(13, 27, 61, 0.1);
}

.contact-process-inner {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.contact-process-step {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding-right: 40px;
  margin-right: 40px;
  border-right: 1px solid rgba(13, 27, 61, 0.12);
}

.contact-process-step:last-child {
  border-right: none;
  padding-right: 0;
  margin-right: 0;
}

.contact-process-num {
  font-size: 32px;
  font-weight: 900;
  color: rgba(13, 27, 61, 0.15);
  letter-spacing: -0.04em;
  line-height: 1;
  flex-shrink: 0;
  margin-top: 2px;
}

.contact-process-label {
  font-size: 13px;
  font-weight: 800;
  color: var(--dark);
  margin: 0 0 4px;
}

.contact-process-desc {
  font-size: 13px;
  color: rgba(13, 27, 61, 0.6);
  line-height: 1.55;
  margin: 0;
}

@media (max-width: 680px) {
  .contact-process-inner { grid-template-columns: 1fr; gap: 24px; }
  .contact-process-step {
    border-right: none;
    border-bottom: 1px solid rgba(13, 27, 61, 0.12);
    padding: 0 0 24px;
    margin: 0;
  }
  .contact-process-step:last-child { border-bottom: none; padding-bottom: 0; }
}
```

- [ ] **Step 2: Add process section JSX between hero and main grid**

```tsx
{/* ── What to expect ── */}
<section className="contact-process">
  <div className="container">
    <div className="contact-process-inner">
      <div className="contact-process-step">
        <span className="contact-process-num">01</span>
        <div>
          <p className="contact-process-label">Submit your enquiry</p>
          <p className="contact-process-desc">Fill in the form with your requirement, service area and contact details.</p>
        </div>
      </div>
      <div className="contact-process-step">
        <span className="contact-process-num">02</span>
        <div>
          <p className="contact-process-label">We review &amp; call back</p>
          <p className="contact-process-desc">A MEDSS consultant reviews your needs and contacts you within one business day.</p>
        </div>
      </div>
      <div className="contact-process-step">
        <span className="contact-process-num">03</span>
        <div>
          <p className="contact-process-label">We propose a solution</p>
          <p className="contact-process-desc">We tailor a training or consultancy proposal to your organisation's specific needs.</p>
        </div>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 3: Verify**
  - Yellow strip between hero and form
  - Three numbered steps side by side with dividers
  - Numbers are large and faded

---

## Task 3: Form + sidebar redesign (business hours, trust strip, sidebar cleanup)

**Files:**
- Modify: `src/app/globals.css` — update form, sidebar, and trust strip CSS
- Modify: `src/app/contact/page.tsx` — add trust strip to form, add business hours to sidebar, remove old WhatsApp card

- [ ] **Step 1: Update `.contact-main`, `.contact-grid`, column titles in `globals.css`**

Find `.contact-main {` and update through `.contact-col-sub {`:

```css
.contact-main {
  padding: 80px 0;
  background: var(--white);
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: 80px;
  align-items: start;
}

.contact-col-title {
  font-size: 22px;
  font-weight: 900;
  color: var(--dark);
  letter-spacing: -0.02em;
  margin: 0 0 8px;
}

.contact-col-sub {
  font-size: 14px;
  color: var(--muted);
  line-height: 1.6;
  margin: 0 0 32px;
}
```

- [ ] **Step 2: Update form input/label/textarea CSS**

Find `.contact-form input, .contact-form select, .contact-form textarea {` and replace through the placeholder block:

```css
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.contact-form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.contact-form-group {
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.contact-form-group label {
  font-size: 11px;
  font-weight: 800;
  color: var(--dark);
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.contact-form input,
.contact-form select,
.contact-form textarea {
  width: 100%;
  padding: 13px 16px;
  border: 1.5px solid var(--border);
  border-radius: 8px;
  font-size: 14px;
  font-family: inherit;
  color: var(--dark);
  background: var(--white);
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  appearance: none;
}

.contact-form select {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2.5'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 14px center;
  padding-right: 40px;
  cursor: pointer;
}

.contact-form textarea {
  min-height: 130px;
  resize: vertical;
}

.contact-form input:focus,
.contact-form select:focus,
.contact-form textarea:focus {
  border-color: var(--dark);
  box-shadow: 0 0 0 3px rgba(13, 27, 61, 0.08);
}

.contact-form input::placeholder,
.contact-form textarea::placeholder {
  color: rgba(13, 27, 61, 0.28);
}
```

- [ ] **Step 3: Add trust strip + update submit button CSS**

Find `.contact-form-submit {` and replace with:

```css
.contact-form-trust {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 16px 0 0;
  border-top: 1px solid var(--border);
  flex-wrap: wrap;
}

.contact-form-trust-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  font-weight: 700;
  color: var(--muted);
  letter-spacing: 0.04em;
}

.contact-form-trust-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--yellow);
  flex-shrink: 0;
}

.contact-form-submit {
  width: 100%;
  justify-content: center;
  padding: 15px 28px;
  font-size: 15px;
  border-radius: 8px;
}
```

- [ ] **Step 4: Update sidebar CSS**

Find `.contact-info-col {` and replace through `.contact-info-list a:hover {`:

```css
.contact-info-col {
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 24px;
}

.contact-info-block {
  padding: 24px 0;
  border-bottom: 1px solid var(--border);
}

.contact-info-block:first-child { padding-top: 0; }
.contact-info-block:last-child { border-bottom: none; }

.contact-info-label {
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--muted);
  margin: 0 0 12px;
}

.contact-info-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.contact-info-list a {
  font-size: 14px;
  font-weight: 600;
  color: var(--dark);
  text-decoration: none;
  transition: color 0.15s ease;
}

.contact-info-list a:hover { color: var(--blue); }

.contact-address {
  font-size: 14px;
  color: var(--dark);
  line-height: 1.7;
  font-style: normal;
}

.contact-hours-grid {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 6px 24px;
}

.contact-hours-day { font-size: 13px; color: var(--muted); font-weight: 500; }

.contact-hours-time {
  font-size: 13px;
  color: var(--dark);
  font-weight: 700;
  text-align: right;
}

.contact-hours-closed { color: var(--muted); font-weight: 500; }

.contact-wa-sidebar {
  display: flex;
  align-items: center;
  gap: 12px;
  background: var(--dark);
  border-radius: 10px;
  padding: 16px 20px;
  text-decoration: none;
  transition: background 0.2s ease;
}

.contact-wa-sidebar:hover { background: #1a2f5e; }

.contact-wa-sidebar-icon { color: var(--yellow); flex-shrink: 0; }

.contact-wa-sidebar-title { font-size: 13px; font-weight: 800; color: var(--white); display: block; }

.contact-wa-sidebar-sub { font-size: 11px; color: rgba(255,255,255,0.5); display: block; }
```

- [ ] **Step 5: Replace sidebar JSX and add trust strip to form**

In the form JSX, add this between the textarea `</div>` and the submit `<button>`:

```tsx
<div className="contact-form-trust">
  <span className="contact-form-trust-item">
    <span className="contact-form-trust-dot" aria-hidden="true" />
    HRDC Claimable
  </span>
  <span className="contact-form-trust-item">
    <span className="contact-form-trust-dot" aria-hidden="true" />
    200+ Organisations
  </span>
  <span className="contact-form-trust-item">
    <span className="contact-form-trust-dot" aria-hidden="true" />
    Responds in 1 day
  </span>
</div>
```

Replace the entire sidebar div with:

```tsx
<div className="contact-info-col">
  <div className="contact-info-block">
    <a href="https://wa.me/60122744432" target="_blank" rel="noreferrer" className="contact-wa-sidebar">
      <svg className="contact-wa-sidebar-icon" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M12 2a9.92 9.92 0 00-8.48 15.14L3 22l4.92-1.3A9.94 9.94 0 1012 2zm5.7 14.56c-.24.68-1.39 1.3-1.92 1.33s-.5.43-3.23-1c-2.72-1.43-4.45-4.9-4.59-5.13a5.2 5.2 0 01-1-3.2 3.61 3.61 0 011.2-2.72 1.22 1.22 0 01.87-.3h.6c.2 0 .46-.07.72.55s.92 2.27 1 2.43a.57.57 0 010 .54 1.11 1.11 0 01-.16.24c-.08.1-.17.18-.25.29s-.18.18-.27.27A.58.58 0 0110 10a5.94 5.94 0 002.8 2.8.64.64 0 00.68-.07c.2-.24.86-1 1.09-1.35s.45-.27.75-.14 2 1 2.34 1.17.57.27.66.42a1.89 1.89 0 01-.62 1.73z"/>
      </svg>
      <div>
        <span className="contact-wa-sidebar-title">Chat on WhatsApp</span>
        <span className="contact-wa-sidebar-sub">Fastest way to reach us</span>
      </div>
    </a>
  </div>
  <div className="contact-info-block">
    <p className="contact-info-label">
      <svg aria-hidden="true" viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
        <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 01.97-.26 11.36 11.36 0 003.56.57 1 1 0 011 1v3.58a1 1 0 01-1 1A16.62 16.62 0 013 5a1 1 0 011-1h3.57a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.26.97z"/>
      </svg>
      Phone
    </p>
    <ul className="contact-info-list">
      {phoneNumbers.map((p) => (
        <li key={p.href}><a href={p.href}>{p.label}</a></li>
      ))}
    </ul>
  </div>
  <div className="contact-info-block">
    <p className="contact-info-label">
      <svg aria-hidden="true" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round"/>
      </svg>
      Email
    </p>
    <ul className="contact-info-list">
      {emails.map((e) => (
        <li key={e.href}><a href={e.href}>{e.label}</a></li>
      ))}
    </ul>
  </div>
  <div className="contact-info-block">
    <p className="contact-info-label">
      <svg aria-hidden="true" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2" strokeLinecap="round"/>
      </svg>
      Business Hours
    </p>
    <div className="contact-hours-grid">
      <span className="contact-hours-day">Mon – Fri</span>
      <span className="contact-hours-time">9:00 AM – 6:00 PM</span>
      <span className="contact-hours-day">Saturday</span>
      <span className="contact-hours-time">9:00 AM – 1:00 PM</span>
      <span className="contact-hours-day">Sunday</span>
      <span className="contact-hours-time contact-hours-closed">Closed</span>
    </div>
  </div>
  <div className="contact-info-block">
    <p className="contact-info-label">
      <svg aria-hidden="true" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round"/>
      </svg>
      Office Address
    </p>
    <address className="contact-address">
      {address.line1}<br />{address.line2}<br />
      {address.line3}<br />{address.line4}
    </address>
  </div>
  <div className="contact-info-block">
    <p className="contact-info-label">
      <svg aria-hidden="true" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="3"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
      </svg>
      Follow &amp; Connect
    </p>
    <ul className="contact-info-list">
      <li><a href="https://www.instagram.com/medss_trainingprovider" target="_blank" rel="noreferrer">@medss_trainingprovider</a></li>
      <li><a href="https://www.medss.com.my" target="_blank" rel="noreferrer">www.medss.com.my</a></li>
    </ul>
  </div>
</div>
```

- [ ] **Step 6: Verify at `http://localhost:3000/contact`**
  - Form labels are uppercase, inputs have clean focus rings
  - Trust strip (HRDC · 200+ Orgs · 1 day) appears above submit button
  - Sidebar: WhatsApp dark card, Phone, Email, Business Hours grid, Address, Social
  - Sidebar is sticky on desktop scroll

---

## Task 4: FAQ section

**Files:**
- Modify: `src/app/globals.css` — add `.contact-faq` classes
- Modify: `src/app/contact/page.tsx` — add FAQ section after map closing `</section>`

- [ ] **Step 1: Add FAQ CSS at the end of the contact page styles**

```css
/* ── Contact FAQ ── */
.contact-faq {
  padding: 80px 0;
  background: var(--surface);
  border-top: 1px solid var(--border);
}

.contact-faq-inner {
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: 80px;
  align-items: start;
}

.contact-faq-heading {
  font-size: clamp(22px, 3vw, 28px);
  font-weight: 900;
  color: var(--dark);
  letter-spacing: -0.03em;
  line-height: 1.15;
  margin: 0 0 10px;
  position: sticky;
  top: 24px;
}

.contact-faq-sub {
  font-size: 14px;
  color: var(--muted);
  line-height: 1.6;
  margin: 0;
}

.contact-faq-list {
  display: flex;
  flex-direction: column;
}

.contact-faq-item {
  padding: 28px 0;
  border-bottom: 1px solid var(--border);
}

.contact-faq-item:first-child { border-top: 1px solid var(--border); }

.contact-faq-q {
  font-size: 16px;
  font-weight: 800;
  color: var(--dark);
  letter-spacing: -0.01em;
  margin: 0 0 10px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.contact-faq-q::before {
  content: 'Q';
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  background: var(--yellow);
  color: var(--dark);
  font-size: 10px;
  font-weight: 900;
  border-radius: 4px;
  flex-shrink: 0;
  margin-top: 2px;
}

.contact-faq-a {
  font-size: 14px;
  color: var(--muted);
  line-height: 1.7;
  margin: 0;
  padding-left: 34px;
}

@media (max-width: 760px) {
  .contact-faq-inner { grid-template-columns: 1fr; gap: 36px; }
  .contact-faq-heading { position: static; }
}
```

- [ ] **Step 2: Add FAQ JSX after the map section**

```tsx
{/* ── FAQ ── */}
<section className="contact-faq">
  <div className="container">
    <div className="contact-faq-inner">
      <div>
        <h2 className="contact-faq-heading">Common Questions</h2>
        <p className="contact-faq-sub">Everything you need to know before reaching out.</p>
      </div>
      <div className="contact-faq-list">
        <div className="contact-faq-item">
          <p className="contact-faq-q">Are MEDSS programmes claimable under HRD Corp?</p>
          <p className="contact-faq-a">Yes. MEDSS is a registered HRD Corp training provider. Most programmes are eligible for claim under the HRD Corp levy. We assist with the paperwork and claim submission process.</p>
        </div>
        <div className="contact-faq-item">
          <p className="contact-faq-q">Can training be delivered at our premises?</p>
          <p className="contact-faq-a">Absolutely. We offer in-house delivery for all programmes. Bring us your participant count, preferred dates and location, and we will tailor the session to your organisation.</p>
        </div>
        <div className="contact-faq-item">
          <p className="contact-faq-q">How quickly will someone get back to me?</p>
          <p className="contact-faq-a">We respond to all enquiries within one business day. For urgent requirements, WhatsApp is the fastest channel — we typically reply within a few hours during business hours.</p>
        </div>
        <div className="contact-faq-item">
          <p className="contact-faq-q">Do you only do training, or consulting too?</p>
          <p className="contact-faq-a">Both. MEDSS provides HR consulting, ISO management system advisory, security consulting, and OSH &amp; environmental monitoring — not just training. Use the form to tell us which area you need support in.</p>
        </div>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 3: Verify at `http://localhost:3000/contact`**
  - FAQ section below the map on a light gray background
  - Left: "Common Questions" heading (sticky), sub-text
  - Right: 4 items, each with yellow "Q" badge, question bold, answer muted
  - Separator lines between items

---

## Self-Review

**Spec coverage:**
- ✅ Hero redesign (dark + diagonal stripe) — Task 1
- ✅ Right-side quick-contact panel (WhatsApp / Phone / Email) — Task 1
- ✅ "What to expect" 3-step process strip — Task 2
- ✅ Form visual improvements (labels, inputs, focus rings) — Task 3
- ✅ Trust strip above submit button — Task 3
- ✅ Business hours in sidebar — Task 3
- ✅ WhatsApp dark card in sidebar — Task 3
- ✅ FAQ section — Task 4

**Placeholder scan:** No TBDs or incomplete steps. All code blocks are complete.

**Type consistency:** No shared types — all changes are JSX/CSS only. Class names follow consistent namespacing: `contact-hero-*`, `contact-process-*`, `contact-form-*`, `contact-info-*`, `contact-hours-*`, `contact-faq-*`.
