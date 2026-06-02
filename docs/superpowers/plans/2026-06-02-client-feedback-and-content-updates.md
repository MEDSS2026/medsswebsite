# MEDSS Client Feedback & Content Updates — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Apply all client-requested content, contact, and UX changes to the MEDSS Next.js website, plus add a client review submission feature.

**Architecture:** All changes are to existing pages and components in `medss-next/src/`. The "Leave a Review" feature uses a mailto-based form (same pattern as the existing enquiry form) so no backend is needed; approved reviews are manually added to the homepage testimonials array.

**Tech Stack:** Next.js (App Router), React 19, TypeScript, plain CSS (globals.css + page.module.css). No Tailwind.

---

## ⚠️ Prerequisites — Files You Must Obtain Before Starting

Before starting Tasks 9 and 15, the MEDSS team must supply:
- **HT Logistics logo** — place at `public/assets/clients/ht-logistics.png`
- **Yellow logo with red in middle** — place at `public/assets/clients/[name].png` (confirm filename with client)
- **Promotional flyers** — place in `public/assets/flyers/` directory

These tasks are marked with 🔴 and can be done last once files are received.

---

## File Map

| File | Changes |
|---|---|
| `src/components/site-header.tsx` | Add office landline to announcement bar |
| `src/app/page.tsx` | Tagline, remove 200+/10+ stats |
| `src/app/contact/page.tsx` | Remove 012-6679601, fix hours, FAQ edit, add FB link, add both emails in hero |
| `src/components/site-footer.tsx` | Remove 012-6679601, add FB social button |
| `src/app/about/page.tsx` | Founded 2023, updated Our Story text, hide team section |
| `src/components/client-marquee.tsx` | Add 2 missing logos, make logos bigger |
| `src/app/globals.css` | Bigger marquee logos, HRD Corp logo white background |
| `src/components/review-form.tsx` | NEW — client review submission form |
| `src/app/page.tsx` | Add ReviewForm component + `<LeaveAReview>` section |
| `src/app/training-gallery/page.tsx` | Add promotional flyers section 🔴 |

---

## Task 1: Homepage tagline — "Empowerment Fuels Excellence."

**Files:**
- Modify: `src/app/page.tsx:55`

- [ ] **Step 1: Update the `<h1>` tagline**

In `src/app/page.tsx` find:
```tsx
<h1>Empower Your Workforce.<br />Ensure <span className="text-yellow">Compliance.</span></h1>
```
Replace with:
```tsx
<h1>Empowerment Fuels Excellence.<br />Ensure <span className="text-yellow">Compliance.</span></h1>
```

- [ ] **Step 2: Verify visually**

Run `npm run dev` and open `http://localhost:3000`. Confirm the hero headline reads "Empowerment Fuels Excellence. Ensure Compliance."

---

## Task 2: Add office landline to header announcement bar

**Files:**
- Modify: `src/components/site-header.tsx:38–73`

The footer already lists `03-2116 9762` as the office landline. Add it to the top announcement bar.

- [ ] **Step 1: Add landline to announcement actions**

In `src/components/site-header.tsx`, after the WhatsApp `<a>` tag (around line 71), add a divider and a phone link for the landline:

```tsx
<span className="divider" aria-hidden="true">|</span>
<a className="contact-link" href="tel:+60321169762">
  <svg aria-hidden="true" viewBox="0 0 24 24">
    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 01.97-.26 11.36 11.36 0 003.56.57 1 1 0 011 1v3.58a1 1 0 01-1 1A16.62 16.62 0 013 5a1 1 0 011-1h3.57a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.26.97z" />
  </svg>
  <span>03-2116 9762</span>
</a>
```

- [ ] **Step 2: Verify**

Reload the home page. The announcement bar should now show: `+60 12-274 4432 | WhatsApp | 03-2116 9762`.

---

## Task 3: Remove 012-6679601 from the entire site

**Files:**
- Modify: `src/components/site-footer.tsx:19–23`
- Modify: `src/app/contact/page.tsx:13–17`

- [ ] **Step 1: Remove from footer**

In `src/components/site-footer.tsx`, change `phoneNumbers` from:
```tsx
const phoneNumbers = [
  { label: '+60 12-274 4432', href: 'tel:+60122744432' },
  { label: '+60 12-667 9601', href: 'tel:+60126679601' },
  { label: '03-2116 9762', href: 'tel:+60321169762' },
];
```
to:
```tsx
const phoneNumbers = [
  { label: '+60 12-274 4432', href: 'tel:+60122744432' },
  { label: '03-2116 9762', href: 'tel:+60321169762' },
];
```

- [ ] **Step 2: Remove from contact page**

In `src/app/contact/page.tsx`, change `phoneNumbers` from:
```tsx
const phoneNumbers = [
  { label: '+60 12-274 4432', href: 'tel:+60122744432' },
  { label: '+60 12-667 9601', href: 'tel:+60126679601' },
  { label: '03-2116 9762', href: 'tel:+60321169762' },
];
```
to:
```tsx
const phoneNumbers = [
  { label: '+60 12-274 4432', href: 'tel:+60122744432' },
  { label: '03-2116 9762', href: 'tel:+60321169762' },
];
```

- [ ] **Step 3: Verify number is gone**

Run: `grep -r "6679601" src/`
Expected: no output (zero matches).

---

## Task 4: Business hours — Saturday & Sunday both Closed

**Files:**
- Modify: `src/app/contact/page.tsx:292–301`

- [ ] **Step 1: Update Saturday to Closed**

In `src/app/contact/page.tsx`, find the `contact-hours-grid` block:
```tsx
<div className="contact-hours-grid">
  <span className="contact-hours-day">Mon – Fri</span>
  <span className="contact-hours-time">9:00 AM – 6:00 PM</span>
  <span className="contact-hours-day">Saturday</span>
  <span className="contact-hours-time">9:00 AM – 1:00 PM</span>
  <span className="contact-hours-day">Sunday</span>
  <span className="contact-hours-time contact-hours-closed">Closed</span>
</div>
```
Replace with:
```tsx
<div className="contact-hours-grid">
  <span className="contact-hours-day">Mon – Fri</span>
  <span className="contact-hours-time">9:00 AM – 6:00 PM</span>
  <span className="contact-hours-day">Saturday</span>
  <span className="contact-hours-time contact-hours-closed">Closed</span>
  <span className="contact-hours-day">Sunday</span>
  <span className="contact-hours-time contact-hours-closed">Closed</span>
</div>
```

- [ ] **Step 2: Verify**

Open `/contact` and confirm Saturday now shows "Closed" in the same red/grey style as Sunday.

---

## Task 5: Add Facebook to "Follow & Connect" section and footer social

**Files:**
- Modify: `src/app/contact/page.tsx:320–326`
- Modify: `src/components/site-footer.tsx:48–76`

- [ ] **Step 1: Add FB to contact page Follow & Connect section**

In `src/app/contact/page.tsx`, find the "Follow & Connect" `contact-info-list`:
```tsx
<ul className="contact-info-list">
  <li><a href="https://www.instagram.com/medss_trainingprovider" target="_blank" rel="noreferrer">@medss_trainingprovider</a></li>
  <li><a href="https://www.medss.com.my" target="_blank" rel="noreferrer">www.medss.com.my</a></li>
</ul>
```
Replace with:
```tsx
<ul className="contact-info-list">
  <li><a href="https://www.instagram.com/medss_trainingprovider" target="_blank" rel="noreferrer">Instagram: @medss_trainingprovider</a></li>
  <li><a href="https://www.facebook.com/MedssConsultancy" target="_blank" rel="noreferrer">Facebook: Medss Consultancy</a></li>
  <li><a href="https://www.medss.com.my" target="_blank" rel="noreferrer">www.medss.com.my</a></li>
</ul>
```

- [ ] **Step 2: Add FB social button to footer**

In `src/components/site-footer.tsx`, after the Instagram `<a>` tag and before the WhatsApp `<a>` tag, add:
```tsx
<a
  href="https://www.facebook.com/MedssConsultancy"
  target="_blank"
  rel="noreferrer"
  className="footer-social-btn"
  aria-label="MEDSS on Facebook"
>
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
  Facebook
</a>
```

- [ ] **Step 3: Verify**

Open `/contact` and check "Follow & Connect". Open any page and scroll to footer — confirm Facebook button appears between Instagram and WhatsApp.

---

## Task 6: HRD Corp FAQ — remove "We assist..." sentence

**Files:**
- Modify: `src/app/contact/page.tsx:398–400`

- [ ] **Step 1: Trim the FAQ answer**

In `src/app/contact/page.tsx`, find:
```tsx
<p className="contact-faq-a">Yes. MEDSS is a registered HRD Corp training provider. Most programmes are eligible for claim under the HRD Corp levy. We assist with the paperwork and claim submission process.</p>
```
Replace with:
```tsx
<p className="contact-faq-a">Yes. MEDSS is a registered HRD Corp training provider. Most programmes are eligible for claim under the HRD Corp levy.</p>
```

- [ ] **Step 2: Verify**

Open `/contact` and scroll to FAQ. The HRD Corp answer should now stop after "HRD Corp levy."

---

## Task 7: Remove "200+ Organisations Trained" from all locations

**Files:**
- Modify: `src/app/page.tsx:154–176` (stats-strip), `199–201` (bento tile), `481–483` (CTA trust list)
- Modify: `src/app/contact/page.tsx:228–230` (trust badge)

- [ ] **Step 1: Remove from homepage stats-strip**

In `src/app/page.tsx`, find the `stats-strip` section and remove the "200+" stat item AND its adjacent divider:
```tsx
<div className="stat-divider" aria-hidden="true" />
<div className="stat-item">
  <strong>200+</strong>
  <span>Organisations trained</span>
</div>
```
Delete both the divider and stat-item entirely.

- [ ] **Step 2: Remove "200+" bento tile from homepage**

In `src/app/page.tsx`, in the `why-bento-grid` section, remove the yellow tile:
```tsx
{/* 200+ stat — yellow tile */}
<div className="why-tile why-tile--yellow">
  <strong className="why-tile-stat">200+</strong>
  <span className="why-tile-stat-label">Organisations<br />Trained</span>
</div>
```
Delete the entire `<div>` block.

- [ ] **Step 3: Remove from CTA trust list on homepage**

In `src/app/page.tsx` inside the `cta-full-trust` `<ul>`, remove:
```tsx
<li>200+ organisations served nationwide</li>
```

- [ ] **Step 4: Remove from contact page trust badge**

In `src/app/contact/page.tsx`, remove:
```tsx
<span className="contact-form-trust-item">
  <span className="contact-form-trust-dot" aria-hidden="true" />
  200+ Organisations
</span>
```

- [ ] **Step 5: Verify**

Run: `grep -r "200+" src/`
Expected: no matches in the client-facing page files.

---

## Task 8: Remove "10+ Years of Industry Experience" stat

**Files:**
- Modify: `src/app/page.tsx:154–162`

- [ ] **Step 1: Remove from stats-strip**

In `src/app/page.tsx`, in the `stats-strip` section, remove the "10+" stat item AND its adjacent divider:
```tsx
<div className="stat-item">
  <strong>10+</strong>
  <span>Years of industry experience</span>
</div>
<div className="stat-divider" aria-hidden="true" />
```
Delete both.

- [ ] **Step 2: Verify**

Reload the homepage. The stats bar should only show "50+ HRDC Claimable Programmes" and "4 Core service pillars".

---

## Task 9: Client logos — make bigger and add 2 missing logos 🔴

> **Blocker:** HT Logistics logo file and yellow/red logo file must be placed in `public/assets/clients/` before this task. Confirm the exact filename for the yellow/red logo with the MEDSS team.

**Files:**
- Modify: `src/components/client-marquee.tsx`
- Modify: `src/app/globals.css` (or wherever `.marquee-item img` styles are)

- [ ] **Step 1: Find current marquee logo CSS**

Run: `grep -n "marquee-item" src/app/globals.css`

Note the current `width`/`height` values on `.marquee-item img`.

- [ ] **Step 2: Increase logo size in CSS**

Find the `.marquee-item img` rule in `src/app/globals.css`. Increase `height` from its current value to `48px` (or `56px` if they look too small) and set `width: auto`. Also add `filter: none` to ensure colour (remove any grayscale filter if present):

```css
.marquee-item img {
  height: 48px;
  width: auto;
  max-width: 140px;
  object-fit: contain;
  filter: none;
}
```

- [ ] **Step 3: Add 2 missing logos to client-marquee.tsx**

In `src/components/client-marquee.tsx`, add to the `clients` array:
```tsx
{ src: '/assets/clients/ht-logistics.png', alt: 'HT Logistics' },
{ src: '/assets/clients/[yellow-red-logo-filename].png', alt: '[Logo name — confirm with client]' },
```
Replace `[yellow-red-logo-filename]` and `[Logo name]` with the actual values once files are provided.

- [ ] **Step 4: Verify**

Open the homepage and check the client marquee. All logos should be visible in colour at a larger size. Confirm HT Logistics and the new logo appear in the scroll.

---

## Task 10: Change "Founded" to 2023 throughout About page

**Files:**
- Modify: `src/app/about/page.tsx:65, 145, 157, 163, 173`

- [ ] **Step 1: Update the Quick Facts card**

In `src/app/about/page.tsx`, find:
```tsx
<span className="fact-value">2014</span>
```
Replace with:
```tsx
<span className="fact-value">2023</span>
```

- [ ] **Step 2: Update the story-stat**

In `src/app/about/page.tsx`, find:
```tsx
<span className="story-stat-num">2014</span>
<span className="story-stat-label">Established</span>
```
Replace with:
```tsx
<span className="story-stat-num">2023</span>
<span className="story-stat-label">Established</span>
```

- [ ] **Step 3: Verify no stale 2014 references**

Run: `grep -n "2014" src/app/about/page.tsx`
Expected: no output.

---

## Task 11: Update "Our Story" text with new company history

**Files:**
- Modify: `src/app/about/page.tsx:139–188`

The client's requested addition: "Formerly we were known as MED Systems Solutions and we started with consultancy. Upon the request of training from our trusted clients, we ventured into MEDSS Training and Consultancy Sdn. Bhd. to provide training too. Started with consultancy from the year 2023."

- [ ] **Step 1: Replace the story body paragraphs**

In `src/app/about/page.tsx`, find and replace the two story paragraphs:
```tsx
<p>
  MEDSS was established in 2014 with a single goal: make high-quality, structured
  training and expert consultancy genuinely accessible to Malaysian organisations.
  From day one, we focused on the disciplines that matter most — workplace safety,
  legal compliance, HR frameworks and management system certification.
</p>
<p>
  We deliver everything under one roof. Whether your team needs OSHA compliance
  training, security management, an ISO certification pathway or tailored HR
  consultancy, MEDSS handles it end-to-end — with practitioners who have worked
  inside the industries they train.
</p>
```
Replace with:
```tsx
<p>
  Formerly known as MED Systems Solutions, MEDSS began as a consultancy practice —
  supporting Malaysian organisations with HR, safety and management system advisory.
  Upon the request of training from our trusted clients, we evolved into
  MEDSS Training and Consultancy Sdn. Bhd., adding structured training programmes
  to our offering starting from 2023.
</p>
<p>
  Today we deliver everything under one roof. Whether your team needs OSHA compliance
  training, security management, an ISO certification pathway or tailored HR
  consultancy, MEDSS handles it end-to-end — with practitioners who have worked
  inside the industries they train.
</p>
```

- [ ] **Step 2: Update the "Over a decade..." paragraph to match the new timeline**

Find:
```tsx
<p>
  Over a decade of delivery, we&apos;ve grown into a full-service consultancy trusted
  by organisations across manufacturing, logistics, construction and corporate
  sectors nationwide. Every programme is HRD Corp claimable — keeping training
  accessible for businesses of every size.
</p>
```
Replace with:
```tsx
<p>
  Since 2023, we have grown into a full-service consultancy trusted by organisations
  across manufacturing, logistics, construction and corporate sectors nationwide.
  Every programme is HRD Corp claimable — keeping training accessible for businesses
  of every size.
</p>
```

- [ ] **Step 3: Verify**

Open `/about` and read the Our Story section to confirm the new text reads naturally and references 2023 correctly.

---

## Task 12: HRD Corp logo — add white round background for visibility

**Files:**
- Modify: `src/app/globals.css`
- Modify: `src/app/page.tsx:84–86` (hero badge `<img>` tags)

The HRD Corp logos appear over dark/blue sections and are invisible. The fix is to wrap them in a white circle container.

- [ ] **Step 1: Add a CSS class for the logo wrapper**

In `src/app/globals.css`, add:
```css
.logo-badge-wrap {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 50%;
  padding: 6px;
  width: 52px;
  height: 52px;
}
.logo-badge-wrap img {
  width: 36px;
  height: 36px;
  object-fit: contain;
}
```

- [ ] **Step 2: Apply wrapper in homepage hero glass card**

In `src/app/page.tsx`, find the `.badges` div:
```tsx
<div className="badges">
  <img src="/assets/logos/hrdc-claimable.png" alt="HRD Corp claimable logo" />
  <img src="/assets/logos/hrdc-training-provider.png" alt="HRD Corp registered training provider logo" />
</div>
```
Replace with:
```tsx
<div className="badges">
  <span className="logo-badge-wrap">
    <img src="/assets/logos/hrdc-claimable.png" alt="HRD Corp claimable logo" />
  </span>
  <span className="logo-badge-wrap">
    <img src="/assets/logos/hrdc-training-provider.png" alt="HRD Corp registered training provider logo" />
  </span>
</div>
```

- [ ] **Step 3: Apply wrapper in about page accreditations section too**

In `src/app/about/page.tsx`, find the `.accred-logos` block:
```tsx
<div className="accred-logos">
  <img src="/assets/logos/hrdc-claimable.png" alt="HRD Corp Claimable" width={52} height={52} />
  <img src="/assets/logos/hrdc-training-provider.png" alt="HRD Corp Training Provider" width={52} height={52} />
  <span className="accred-logos-label">Recognised by Pembangunan Sumber Manusia Berhad</span>
</div>
```
Replace with:
```tsx
<div className="accred-logos">
  <span className="logo-badge-wrap">
    <img src="/assets/logos/hrdc-claimable.png" alt="HRD Corp Claimable" width={36} height={36} />
  </span>
  <span className="logo-badge-wrap">
    <img src="/assets/logos/hrdc-training-provider.png" alt="HRD Corp Training Provider" width={36} height={36} />
  </span>
  <span className="accred-logos-label">Recognised by Pembangunan Sumber Manusia Berhad</span>
</div>
```

- [ ] **Step 4: Verify**

Open homepage hero and `/about` accreditations section. Both HRD Corp logos should now be clearly visible inside white circles.

---

## Task 13: Team section — put on hold (hide, not delete)

**Files:**
- Modify: `src/app/about/page.tsx:321–345`

- [ ] **Step 1: Wrap team section in a hidden div**

In `src/app/about/page.tsx`, find:
```tsx
{/* 6 ── Team */}
<section className="team-section">
```
Add a wrapping div with `style={{ display: 'none' }}` around the entire section:
```tsx
{/* 6 ── Team — on hold pending final photos */}
<div style={{ display: 'none' }}>
<section className="team-section">
  ...entire section...
</section>
</div>
```

- [ ] **Step 2: Verify**

Open `/about`. The "People who make it happen" team section should not be visible on the page.

---

## Task 14: Add "Leave a Review" section and form

**Files:**
- Create: `src/components/review-form.tsx`
- Modify: `src/app/page.tsx` — add section before the final CTA

This feature uses the same mailto pattern as the existing enquiry form. Submitted reviews go to the MEDSS email inbox; the team manually adds approved ones to the `testimonials-grid` section in `page.tsx`.

- [ ] **Step 1: Create the ReviewForm component**

Create `src/components/review-form.tsx`:
```tsx
export function ReviewForm() {
  return (
    <section className="review-section">
      <div className="container">
        <div className="review-inner">
          <div className="review-header">
            <span className="eyebrow">Share Your Experience</span>
            <h2>Leave Us a Review</h2>
            <p className="review-subhead">
              Enjoyed your training or consultancy with MEDSS? We&rsquo;d love to hear from you.
            </p>
          </div>
          <form
            className="review-form"
            action="mailto:consultant@medss.com.my"
            method="post"
            encType="text/plain"
          >
            <div className="review-form-row">
              <div className="review-form-group">
                <label htmlFor="review-name">Your Name *</label>
                <input id="review-name" type="text" name="name" placeholder="Your full name" required />
              </div>
              <div className="review-form-group">
                <label htmlFor="review-company">Company / Organisation</label>
                <input id="review-company" type="text" name="company" placeholder="Your organisation" />
              </div>
            </div>
            <div className="review-form-group">
              <label htmlFor="review-rating">Rating *</label>
              <select id="review-rating" name="rating" required>
                <option value="">Select a rating</option>
                <option value="5 stars - Excellent">★★★★★ Excellent</option>
                <option value="4 stars - Good">★★★★ Good</option>
                <option value="3 stars - Average">★★★ Average</option>
              </select>
            </div>
            <div className="review-form-group">
              <label htmlFor="review-message">Your Review *</label>
              <textarea
                id="review-message"
                name="review"
                placeholder="Tell us about your experience with MEDSS training or consultancy..."
                required
              />
            </div>
            <button className="btn btn-primary review-form-submit" type="submit">
              Submit Review
              <svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16">
                <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <p className="review-form-note">
              Submitted reviews are moderated before appearing on our website.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add CSS for the review section**

In `src/app/globals.css`, add:
```css
/* ── Leave a Review section ── */
.review-section {
  padding: 80px 0;
  background: #f8f9fa;
}
.review-inner {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 60px;
  align-items: start;
}
@media (max-width: 768px) {
  .review-inner {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}
.review-header h2 {
  margin: 8px 0 12px;
}
.review-subhead {
  color: #666;
  line-height: 1.6;
}
.review-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.review-form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
@media (max-width: 600px) {
  .review-form-row {
    grid-template-columns: 1fr;
  }
}
.review-form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.review-form-group label {
  font-size: 0.875rem;
  font-weight: 600;
  color: #111;
}
.review-form-group input,
.review-form-group select,
.review-form-group textarea {
  padding: 10px 14px;
  border: 1.5px solid #ddd;
  border-radius: 8px;
  font-size: 0.9375rem;
  font-family: inherit;
  background: #fff;
}
.review-form-group textarea {
  min-height: 120px;
  resize: vertical;
}
.review-form-submit {
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.review-form-note {
  font-size: 0.8125rem;
  color: #888;
  margin: 0;
}
```

- [ ] **Step 3: Import and add ReviewForm to homepage**

In `src/app/page.tsx`, add the import at the top:
```tsx
import { ReviewForm } from '@/components/review-form';
```

Then insert `<ReviewForm />` between the testimonials section and the industries section:
```tsx
      </section>

      <ReviewForm />

      {/* ── Industries We Serve ── */}
```

- [ ] **Step 4: Verify**

Open the homepage. Between the testimonials and industries sections, a "Leave Us a Review" form with name, company, rating, and review textarea fields should appear. Submitting should open the default email client with the form data.

---

## Task 15: Add promotional flyers to Training Gallery 🔴

> **Blocker:** Flyer image files must be placed in `public/assets/flyers/` before this task. Confirm filenames with the MEDSS team.

**Files:**
- Modify: `src/app/training-gallery/page.tsx`

- [ ] **Step 1: Read current gallery page structure**

Run: `head -60 src/app/training-gallery/page.tsx`

Note how images are structured (grid layout, image tags, etc.).

- [ ] **Step 2: Add a flyers array and section to gallery page**

At the top of `src/app/training-gallery/page.tsx`, add a `flyers` array with the actual filenames received from the client:
```tsx
const flyers = [
  { src: '/assets/flyers/flyer-1.jpg', alt: 'MEDSS Training Programme Flyer' },
  // add more as provided
];
```

Then add a "Promotional Flyers" section at the end of the page (before the closing `</>`) using the same image grid pattern already used in the gallery.

- [ ] **Step 3: Verify**

Open `/training-gallery` and confirm the flyers section appears at the bottom with all provided flyer images displayed clearly.

---

## Self-Review

**Spec coverage check:**
| Requirement | Task |
|---|---|
| Tagline → "Empowerment Fuels Excellence" | Task 1 ✓ |
| Add office landline to header | Task 2 ✓ |
| Add both emails (visible on contact page hero) | Covered — both already in contact sidebar; hero only shows one channel |
| Remove 012-6679601 | Task 3 ✓ |
| Saturday & Sunday closed | Task 4 ✓ |
| Add IG & FB to Follow & Connect | Task 5 ✓ |
| Remove "We assist..." from FAQ | Task 6 ✓ |
| Remove 200+ organisations trained | Task 7 ✓ |
| Remove 10+ years of industry experience | Task 8 ✓ |
| Client logos bigger + add 2 missing | Task 9 ✓ |
| Founded 2023 not 2014 | Task 10 ✓ |
| Updated Our Story text | Task 11 ✓ |
| HRD Corp logo visible on blue background | Task 12 ✓ |
| Team section on hold | Task 13 ✓ |
| Leave a Review feature | Task 14 ✓ |
| Promotional flyers in gallery | Task 15 ✓ |

**Note on "add both emails" in contact hero:** The contact hero panel currently shows WhatsApp, Phone, and Email (consultant only). It should show both emails. Add this to Task 6's scope — in `src/app/contact/page.tsx` around line 96–107, replace the single email channel with both emails displayed:

```tsx
<a href="mailto:consultant@medss.com.my" className="contact-hero-channel">
  ...
  <span className="contact-hero-channel-value">consultant@medss.com.my</span>
  ...
</a>
<a href="mailto:evelyndevid@medss.com.my" className="contact-hero-channel">
  ...copy same icon and structure...
  <span className="contact-hero-channel-value">evelyndevid@medss.com.my</span>
  ...
</a>
```
