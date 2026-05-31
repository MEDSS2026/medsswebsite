# About Page Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild `src/app/about/page.tsx` into a full-quality page matching the homepage — adding mission/vision bento, company story, and team grid sections.

**Architecture:** All new CSS goes into `globals.css` following existing patterns (kebab-case classes, CSS custom properties from `:root`). The page component is a single server component with a `team` data array at the top for easy content updates. No new files are created.

**Tech Stack:** Next.js 16.2.6, React 19, TypeScript, plain CSS in `globals.css`

> **Note:** This project uses Next.js 16.2.6 — APIs may differ from training data. The page is a static server component with a `metadata` export; no data fetching is involved, so version differences are unlikely to matter here.

---

## File Map

| File | Change |
|---|---|
| `src/app/globals.css` | Add CSS for `.mission-*`, `.story-badge*`, `.team-*` classes + responsive rules |
| `src/app/about/page.tsx` | Full rewrite — add mission/vision, story, team sections; elevate strengths with icons |

---

## Task 1: Add mission section and story badge CSS

**Files:**
- Modify: `src/app/globals.css` (append to end of file)

- [ ] **Step 1: Append mission section CSS to globals.css**

Open `src/app/globals.css` and append the following block at the very end of the file:

```css
/* ── About: Mission & Vision ── */
.mission-section {
  background: var(--dark);
  padding: 84px 0;
}

.mission-eyebrow {
  display: block;
  font-size: 11px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: rgba(255, 255, 255, 0.35);
  margin-bottom: 28px;
}

.mission-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.mission-card {
  border-radius: 20px;
  padding: 36px;
}

.mission-card--yellow {
  background: var(--yellow);
}

.mission-card--glass {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.mission-card-label {
  font-size: 10px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin-bottom: 14px;
}

.mission-card--yellow .mission-card-label {
  color: rgba(13, 27, 61, 0.5);
}

.mission-card--glass .mission-card-label {
  color: var(--yellow);
}

.mission-card-text {
  font-size: clamp(16px, 1.6vw, 20px);
  font-weight: 700;
  line-height: 1.55;
  margin: 0;
}

.mission-card--yellow .mission-card-text {
  color: var(--dark);
}

.mission-card--glass .mission-card-text {
  color: rgba(255, 255, 255, 0.88);
}

@media (max-width: 700px) {
  .mission-grid {
    grid-template-columns: 1fr;
  }
}

/* ── About: Story badges ── */
.story-badges {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 24px;
}

.story-badge {
  display: inline-block;
  background: #eef1f9;
  color: var(--blue);
  border: 1px solid var(--border);
  border-radius: 100px;
  padding: 6px 14px;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
```

- [ ] **Step 2: Verify CSS syntax by running the dev server**

```bash
cd "/Users/sanjaygunabalan2626gmail.com/Documents/MEDSS (windsurf)/medss-next" && npm run dev
```

Expected: server starts on `http://localhost:3000` with no CSS parse errors in the terminal. Visit `http://localhost:3000/about` — the existing page should still render correctly (new classes aren't used yet). Stop server with Ctrl+C.

- [ ] **Step 3: Commit**

```bash
cd "/Users/sanjaygunabalan2626gmail.com/Documents/MEDSS (windsurf)/medss-next"
git add src/app/globals.css
git commit -m "style: add mission section and story badge CSS for about page"
```

---

## Task 2: Add team section CSS

**Files:**
- Modify: `src/app/globals.css` (append to end of file)

- [ ] **Step 1: Append team section CSS to globals.css**

Open `src/app/globals.css` and append at the very end:

```css
/* ── About: Team ── */
.team-section {
  background: #f0f2f8;
  padding: 84px 0;
}

.team-section-header {
  text-align: center;
  margin-bottom: 48px;
}

.team-section-header .eyebrow {
  display: inline-block;
  margin-bottom: 12px;
}

.team-section-header h2 {
  font-size: clamp(28px, 3.2vw, 44px);
  color: var(--dark);
  margin: 0;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.team-card {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(13, 27, 61, 0.06);
  transition: transform 0.22s ease, box-shadow 0.22s ease;
}

.team-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 32px rgba(13, 27, 61, 0.12);
}

.team-card-photo {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  display: block;
}

.team-card-info {
  padding: 20px;
}

.team-card-name {
  font-size: 15px;
  font-weight: 800;
  color: var(--dark);
  margin: 0 0 4px;
}

.team-card-role {
  font-size: 10px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--yellow);
  margin: 0 0 10px;
}

.team-card-bio {
  font-size: 13px;
  color: var(--muted);
  line-height: 1.65;
  margin: 0;
}

@media (max-width: 900px) {
  .team-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 500px) {
  .team-grid {
    grid-template-columns: 1fr;
  }
}
```

- [ ] **Step 2: Commit**

```bash
cd "/Users/sanjaygunabalan2626gmail.com/Documents/MEDSS (windsurf)/medss-next"
git add src/app/globals.css
git commit -m "style: add team grid CSS for about page"
```

---

## Task 3: Rewrite page.tsx — hero, mission/vision, story

**Files:**
- Modify: `src/app/about/page.tsx`

- [ ] **Step 1: Replace the full contents of `src/app/about/page.tsx`**

Write the following — this covers sections 1 (hero), 2 (mission/vision), and 3 (story). The team data array and remaining sections are added in Tasks 4 and 5.

```tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About MEDSS',
  description:
    'Learn about MEDSS Training and Consultancy Sdn. Bhd., supporting Malaysian organisations with training, consulting and compliance services.',
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <>
      {/* 1 ── Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">Home / About</div>
          <h1>About MEDSS</h1>
          <p>
            MEDSS Training and Consultancy Sdn. Bhd. supports organisations with practical training,
            consulting and compliance-focused solutions across Malaysia.
          </p>
        </div>
      </section>

      {/* 2 ── Mission & Vision */}
      <section className="mission-section">
        <div className="container">
          <span className="mission-eyebrow">Our Purpose</span>
          <div className="mission-grid">
            <div className="mission-card mission-card--yellow">
              <div className="mission-card-label">Mission</div>
              <p className="mission-card-text">
                To empower Malaysian organisations with practical, accessible and high-quality
                training and consultancy.
              </p>
            </div>
            <div className="mission-card mission-card--glass">
              <div className="mission-card-label">Vision</div>
              <p className="mission-card-text">
                To be Malaysia's most trusted multi-discipline training and consultancy partner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3 ── Company Story */}
      <section className="section">
        <div className="container split">
          <div>
            <span className="eyebrow">Our Story</span>
            <h2>Built to strengthen workplaces across Malaysia</h2>
            <p>
              MEDSS was founded with a clear purpose: give Malaysian organisations access to
              structured, practical training and expert consultancy across every area that
              matters — safety, HR, security and management systems.
            </p>
            <p>
              Over the years we've grown from a specialist training provider into a full-service
              consultancy, serving clients across manufacturing, logistics, construction and
              corporate sectors nationwide.
            </p>
            <div className="story-badges">
              <span className="story-badge">HRD Corp Claimable</span>
              <span className="story-badge">Registered Training Provider</span>
            </div>
          </div>
          <div>
            <img
              className="rounded-img"
              src="/assets/training/road-training-3.jpg"
              alt="MEDSS road safety and defensive driving training session"
            />
          </div>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 2: Start dev server and verify sections 1–3**

```bash
cd "/Users/sanjaygunabalan2626gmail.com/Documents/MEDSS (windsurf)/medss-next" && npm run dev
```

Visit `http://localhost:3000/about`. Check:
- Hero renders with dark gradient, breadcrumb, H1 ✓
- Mission section is dark with yellow + glass cards side by side ✓
- Story section shows split layout with text left and image right ✓
- Badge chips appear below story text ✓
- No console errors ✓

Stop server with Ctrl+C.

- [ ] **Step 3: Commit**

```bash
cd "/Users/sanjaygunabalan2626gmail.com/Documents/MEDSS (windsurf)/medss-next"
git add src/app/about/page.tsx
git commit -m "feat: add mission/vision bento and story section to about page"
```

---

## Task 4: Add team section

**Files:**
- Modify: `src/app/about/page.tsx`

- [ ] **Step 1: Replace the full contents of `src/app/about/page.tsx`**

> **Before building:** Replace the placeholder `name`, `role`, `bio`, and `photo` values in the `team` array with the real data the client provides. Photo files must be placed in `medss-next/public/assets/team/` before running the dev server.

```tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About MEDSS',
  description:
    'Learn about MEDSS Training and Consultancy Sdn. Bhd., supporting Malaysian organisations with training, consulting and compliance services.',
  alternates: {
    canonical: '/about',
  },
};

const team = [
  {
    name: 'Full Name',              // ← replace with real name
    role: 'Founder & Director',     // ← replace with real role
    bio: 'Replace with a 2–3 sentence bio covering experience, specialisation and what they bring to MEDSS clients.',
    photo: '/assets/team/person-1.jpg', // ← replace with real filename
  },
  {
    name: 'Full Name',
    role: 'Lead Trainer',
    bio: 'Replace with a 2–3 sentence bio covering experience, specialisation and what they bring to MEDSS clients.',
    photo: '/assets/team/person-2.jpg',
  },
  {
    name: 'Full Name',
    role: 'HR Consultant',
    bio: 'Replace with a 2–3 sentence bio covering experience, specialisation and what they bring to MEDSS clients.',
    photo: '/assets/team/person-3.jpg',
  },
  {
    name: 'Full Name',
    role: 'OSH Specialist',
    bio: 'Replace with a 2–3 sentence bio covering experience, specialisation and what they bring to MEDSS clients.',
    photo: '/assets/team/person-4.jpg',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* 1 ── Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">Home / About</div>
          <h1>About MEDSS</h1>
          <p>
            MEDSS Training and Consultancy Sdn. Bhd. supports organisations with practical training,
            consulting and compliance-focused solutions across Malaysia.
          </p>
        </div>
      </section>

      {/* 2 ── Mission & Vision */}
      <section className="mission-section">
        <div className="container">
          <span className="mission-eyebrow">Our Purpose</span>
          <div className="mission-grid">
            <div className="mission-card mission-card--yellow">
              <div className="mission-card-label">Mission</div>
              <p className="mission-card-text">
                To empower Malaysian organisations with practical, accessible and high-quality
                training and consultancy.
              </p>
            </div>
            <div className="mission-card mission-card--glass">
              <div className="mission-card-label">Vision</div>
              <p className="mission-card-text">
                To be Malaysia's most trusted multi-discipline training and consultancy partner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3 ── Company Story */}
      <section className="section">
        <div className="container split">
          <div>
            <span className="eyebrow">Our Story</span>
            <h2>Built to strengthen workplaces across Malaysia</h2>
            <p>
              MEDSS was founded with a clear purpose: give Malaysian organisations access to
              structured, practical training and expert consultancy across every area that
              matters — safety, HR, security and management systems.
            </p>
            <p>
              Over the years we've grown from a specialist training provider into a full-service
              consultancy, serving clients across manufacturing, logistics, construction and
              corporate sectors nationwide.
            </p>
            <div className="story-badges">
              <span className="story-badge">HRD Corp Claimable</span>
              <span className="story-badge">Registered Training Provider</span>
            </div>
          </div>
          <div>
            <img
              className="rounded-img"
              src="/assets/training/road-training-3.jpg"
              alt="MEDSS road safety and defensive driving training session"
            />
          </div>
        </div>
      </section>

      {/* 4 ── Team */}
      <section className="team-section">
        <div className="container">
          <div className="team-section-header">
            <span className="eyebrow">The Team</span>
            <h2>People who make it happen</h2>
          </div>
          <div className="team-grid">
            {team.map((member) => (
              <div className="team-card" key={member.name}>
                <img
                  className="team-card-photo"
                  src={member.photo}
                  alt={member.name}
                />
                <div className="team-card-info">
                  <p className="team-card-name">{member.name}</p>
                  <p className="team-card-role">{member.role}</p>
                  <p className="team-card-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 2: Start dev server and verify team section**

```bash
cd "/Users/sanjaygunabalan2626gmail.com/Documents/MEDSS (windsurf)/medss-next" && npm run dev
```

Visit `http://localhost:3000/about`. Check:
- Team section has light blue-grey background ✓
- 4 cards render in a row, each with photo area, name, yellow role label, bio ✓
- At mobile width (resize to ≤900px) grid collapses to 2-col ✓
- No broken images errors in console (expected if placeholder filenames used — that's fine for now) ✓

Stop server with Ctrl+C.

- [ ] **Step 3: Commit**

```bash
cd "/Users/sanjaygunabalan2626gmail.com/Documents/MEDSS (windsurf)/medss-next"
git add src/app/about/page.tsx
git commit -m "feat: add team section to about page"
```

---

## Task 5: Add strengths with icons and CTA — complete the page

**Files:**
- Modify: `src/app/about/page.tsx`

- [ ] **Step 1: Replace the full contents of `src/app/about/page.tsx` with the final version**

```tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About MEDSS',
  description:
    'Learn about MEDSS Training and Consultancy Sdn. Bhd., supporting Malaysian organisations with training, consulting and compliance services.',
  alternates: {
    canonical: '/about',
  },
};

const team = [
  {
    name: 'Full Name',              // ← replace with real name
    role: 'Founder & Director',     // ← replace with real role
    bio: 'Replace with a 2–3 sentence bio covering experience, specialisation and what they bring to MEDSS clients.',
    photo: '/assets/team/person-1.jpg', // ← replace with real filename
  },
  {
    name: 'Full Name',
    role: 'Lead Trainer',
    bio: 'Replace with a 2–3 sentence bio covering experience, specialisation and what they bring to MEDSS clients.',
    photo: '/assets/team/person-2.jpg',
  },
  {
    name: 'Full Name',
    role: 'HR Consultant',
    bio: 'Replace with a 2–3 sentence bio covering experience, specialisation and what they bring to MEDSS clients.',
    photo: '/assets/team/person-3.jpg',
  },
  {
    name: 'Full Name',
    role: 'OSH Specialist',
    bio: 'Replace with a 2–3 sentence bio covering experience, specialisation and what they bring to MEDSS clients.',
    photo: '/assets/team/person-4.jpg',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* 1 ── Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">Home / About</div>
          <h1>About MEDSS</h1>
          <p>
            MEDSS Training and Consultancy Sdn. Bhd. supports organisations with practical training,
            consulting and compliance-focused solutions across Malaysia.
          </p>
        </div>
      </section>

      {/* 2 ── Mission & Vision */}
      <section className="mission-section">
        <div className="container">
          <span className="mission-eyebrow">Our Purpose</span>
          <div className="mission-grid">
            <div className="mission-card mission-card--yellow">
              <div className="mission-card-label">Mission</div>
              <p className="mission-card-text">
                To empower Malaysian organisations with practical, accessible and high-quality
                training and consultancy.
              </p>
            </div>
            <div className="mission-card mission-card--glass">
              <div className="mission-card-label">Vision</div>
              <p className="mission-card-text">
                To be Malaysia's most trusted multi-discipline training and consultancy partner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3 ── Company Story */}
      <section className="section">
        <div className="container split">
          <div>
            <span className="eyebrow">Our Story</span>
            <h2>Built to strengthen workplaces across Malaysia</h2>
            <p>
              MEDSS was founded with a clear purpose: give Malaysian organisations access to
              structured, practical training and expert consultancy across every area that
              matters — safety, HR, security and management systems.
            </p>
            <p>
              Over the years we've grown from a specialist training provider into a full-service
              consultancy, serving clients across manufacturing, logistics, construction and
              corporate sectors nationwide.
            </p>
            <div className="story-badges">
              <span className="story-badge">HRD Corp Claimable</span>
              <span className="story-badge">Registered Training Provider</span>
            </div>
          </div>
          <div>
            <img
              className="rounded-img"
              src="/assets/training/road-training-3.jpg"
              alt="MEDSS road safety and defensive driving training session"
            />
          </div>
        </div>
      </section>

      {/* 4 ── Team */}
      <section className="team-section">
        <div className="container">
          <div className="team-section-header">
            <span className="eyebrow">The Team</span>
            <h2>People who make it happen</h2>
          </div>
          <div className="team-grid">
            {team.map((member) => (
              <div className="team-card" key={member.name}>
                <img
                  className="team-card-photo"
                  src={member.photo}
                  alt={member.name}
                />
                <div className="team-card-info">
                  <p className="team-card-name">{member.name}</p>
                  <p className="team-card-role">{member.role}</p>
                  <p className="team-card-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 ── Strengths */}
      <section className="section section-light">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Our Strengths</span>
            <h2>A multi-disciplinary partner for business needs</h2>
          </div>
          <div className="grid-3">
            <div className="card">
              <div className="icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Practical Delivery</h3>
              <p>Training and advisory content is structured for clear learning, practical application and workplace relevance.</p>
            </div>
            <div className="card">
              <div className="icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>Compliance Awareness</h3>
              <p>Programmes and consulting cover HR, safety, environment, security and recognised management systems.</p>
            </div>
            <div className="card">
              <div className="icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>Flexible Support</h3>
              <p>MEDSS supports both in-house and public training needs with enquiry channels for fast coordination.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6 ── CTA */}
      <section className="section">
        <div className="container">
          <div className="cta">
            <div>
              <h2>Build a safer and better prepared workforce.</h2>
              <p>Talk to MEDSS about your organisation's training or consultancy requirements.</p>
            </div>
            <a className="btn btn-primary" href="/contact">
              Send Enquiry
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 2: Start dev server and verify the complete page**

```bash
cd "/Users/sanjaygunabalan2626gmail.com/Documents/MEDSS (windsurf)/medss-next" && npm run dev
```

Visit `http://localhost:3000/about`. Walk through the full page and check:
- All 6 sections render in order with no layout breaks ✓
- Strength cards show icon box above heading ✓
- CTA renders with yellow button ✓
- Resize to mobile — mission grid goes to 1-col, team grid goes to 2-col then 1-col ✓
- Visit `http://localhost:3000` — homepage is unaffected ✓
- No TypeScript errors in terminal ✓

Stop server with Ctrl+C.

- [ ] **Step 3: Run a production build to catch any type errors**

```bash
cd "/Users/sanjaygunabalan2626gmail.com/Documents/MEDSS (windsurf)/medss-next" && npm run build
```

Expected: build completes with no errors. Output ends with something like:
```
Route (app)                Size
├ ○ /                      ...
├ ○ /about                 ...
...
○  (Static)  prerendered as static content
```

- [ ] **Step 4: Final commit**

```bash
cd "/Users/sanjaygunabalan2626gmail.com/Documents/MEDSS (windsurf)/medss-next"
git add src/app/about/page.tsx
git commit -m "feat: complete about page rebuild — mission, story, team, strengths"
```

---

## Content Handoff

Before the page goes live, replace placeholders in the `team` array in `src/app/about/page.tsx` and place real photo files in `medss-next/public/assets/team/`:

| Placeholder | What to replace with |
|---|---|
| `'Full Name'` | Real person's full name |
| `'Founder & Director'` etc. | Real job title |
| Bio text | 2–3 sentence real bio |
| `/assets/team/person-1.jpg` | Real photo filename (square crop recommended) |

Story body paragraphs (sections 3) can also be updated with real founding year and milestones by editing the two `<p>` tags in the story section.
