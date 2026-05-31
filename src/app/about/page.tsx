import type { Metadata } from 'next';
import Link from 'next/link';

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
      <section className="about-hero">
        <div className="container about-hero-grid">
          <div className="about-hero-copy">
            <div className="about-hero-eyebrow">
              <span className="eyebrow-line"></span> ABOUT MEDSS
            </div>
            <h1>
              We turn <span className="highlight-marker">compliance</span> into a <br />
              <span className="highlight-italic">competitive</span> advantage.
            </h1>
            <p>
              MEDSS Training and Consultancy is the boutique HRD Corp-registered partner for Malaysian companies that need safety, security, HR and management-system certifications — handled end-to-end, with the paperwork closed and the team upskilled.
            </p>
          </div>

          <div className="about-hero-facts">
            <div className="facts-card">
              <div className="facts-header">The Quick Facts</div>
              <div className="facts-list">
                <div className="fact-row">
                  <span className="fact-label">Founded</span>
                  <span className="fact-value">2014</span>
                </div>
                <div className="fact-row">
                  <span className="fact-label">Headquarters</span>
                  <span className="fact-value">Malaysia</span>
                </div>
                <div className="fact-row">
                  <span className="fact-label">Domains</span>
                  <span className="fact-value">Safety · Security · HR · ISO</span>
                </div>
                <div className="fact-row">
                  <span className="fact-label">Catalogue</span>
                  <span className="fact-value">50+ Claimable Courses</span>
                </div>
                <div className="fact-row">
                  <span className="fact-label">Reg. No.</span>
                  <span className="fact-value">202501020411</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2 ── Mission & Vision */}
      <section className="mission-section">
        <div className="mission-split">
          <div className="mission-half mission-half--yellow">
            <div className="mission-half-inner">
              <div className="mission-card-icon mission-card-icon--yellow" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <p className="mission-card-label">Mission</p>
              <p className="mission-card-text">
                To empower Malaysian organisations with practical, accessible and high-quality
                training and consultancy.
              </p>
              <div className="mission-card-tags">
                <span>Practical</span>
                <span>Accessible</span>
                <span>High-Quality</span>
              </div>
            </div>
          </div>
          <div className="mission-half mission-half--dark">
            <div className="mission-half-inner">
              <div className="mission-card-icon mission-card-icon--glass" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <p className="mission-card-label">Vision</p>
              <p className="mission-card-text">
                To be Malaysia&apos;s most trusted multi-discipline training and consultancy partner.
              </p>
              <div className="mission-card-tags">
                <span className="mission-tag--glass">Trusted</span>
                <span className="mission-tag--glass">Multi-discipline</span>
                <span className="mission-tag--glass">Malaysian</span>
              </div>
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

            <div className="story-stats">
              <div className="story-stat">
                <span className="story-stat-num">2014</span>
                <span className="story-stat-label">Established</span>
              </div>
              <div className="story-stat">
                <span className="story-stat-num">50+</span>
                <span className="story-stat-label">Programmes</span>
              </div>
              <div className="story-stat">
                <span className="story-stat-num">4</span>
                <span className="story-stat-label">Disciplines</span>
              </div>
            </div>

            <p>
              Over a decade of delivery, we&apos;ve grown into a full-service consultancy trusted
              by organisations across manufacturing, logistics, construction and corporate
              sectors nationwide. Every programme is HRD Corp claimable — keeping training
              accessible for businesses of every size.
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
              alt="MEDSS training session in progress"
            />
          </div>
        </div>
      </section>

      {/* 4 ── Accreditations & Frameworks */}
      <section className="accred-section">
        <div className="container">
          <div className="accred-header">
            <div className="about-hero-eyebrow">
              <span className="eyebrow-line"></span>
              Accreditations &amp; Frameworks
            </div>
            <h2 className="accred-headline">
              Every claim, audit,<br />
              and certification.<br />
              <span className="highlight-italic">Backed by paper.</span>
            </h2>
            <div className="accred-logos">
              <img src="/assets/logos/hrdc-claimable.png" alt="HRD Corp Claimable" width={52} height={52} />
              <img src="/assets/logos/hrdc-training-provider.png" alt="HRD Corp Training Provider" width={52} height={52} />
              <span className="accred-logos-label">Recognised by Pembangunan Sumber Manusia Berhad</span>
            </div>
          </div>
          <div className="accred-grid">
            <div className="accred-card">
              <div className="accred-card-top">
                <div className="accred-card-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <span className="accred-card-category">HRD Corp</span>
              </div>
              <h3 className="accred-card-title">Claimable Training Provider</h3>
              <p className="accred-card-desc">All MEDSS training programmes are HRD Corp claimable — a direct funding pathway for Malaysian employers.</p>
            </div>
            <div className="accred-card">
              <div className="accred-card-top">
                <div className="accred-card-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <span className="accred-card-category">HRD Corp</span>
              </div>
              <h3 className="accred-card-title">Registered Training Provider</h3>
              <p className="accred-card-desc">Accredited under HRD Corp&apos;s register, audited and listed for in-house and public delivery.</p>
            </div>
            <div className="accred-card">
              <div className="accred-card-top">
                <div className="accred-card-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" stroke="currentColor" strokeWidth="2"/><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" strokeWidth="2"/></svg>
                </div>
                <span className="accred-card-category">ISO</span>
              </div>
              <h3 className="accred-card-title">9001 · Quality Management</h3>
              <p className="accred-card-desc">Consultancy and implementation support for Quality Management Systems aligned to ISO 9001.</p>
            </div>
            <div className="accred-card">
              <div className="accred-card-top">
                <div className="accred-card-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <span className="accred-card-category">ISO</span>
              </div>
              <h3 className="accred-card-title">45001 · Occupational H&amp;S</h3>
              <p className="accred-card-desc">OH&amp;S management system design, audit preparation and certification readiness.</p>
            </div>
            <div className="accred-card">
              <div className="accred-card-top">
                <div className="accred-card-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <span className="accred-card-category">ISO</span>
              </div>
              <h3 className="accred-card-title">14001 · Environmental</h3>
              <p className="accred-card-desc">Environmental management system advisory — from gap analysis to closing the audit findings.</p>
            </div>
            <div className="accred-card">
              <div className="accred-card-top">
                <div className="accred-card-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <span className="accred-card-category">Supply Chain</span>
              </div>
              <h3 className="accred-card-title">AEO · TAPA · CTPAT</h3>
              <p className="accred-card-desc">Supply-chain security frameworks for manufacturers, logistics operators and distributors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5 ── How We Engage */}
      <section className="principles-section">
        <div className="container">
          <div className="principles-header">
            <div className="principles-eyebrow">
              <span className="eyebrow-line"></span>
              How We Engage
            </div>
            <h2 className="principles-headline">
              Four operating principles.<br />
              <span className="principles-italic">Non-negotiable.</span>
            </h2>
          </div>
          <div className="principles-grid">
            <div className="principle-item">
              <span className="principle-num" aria-hidden="true">01</span>
              <div>
                <h3 className="principle-title">Diagnose before we train.</h3>
                <p className="principle-desc">Every engagement starts with a gap analysis — DOSH compliance, ISO readiness, HRDC eligibility. We don&apos;t propose training plans we can&apos;t justify on a worksheet.</p>
              </div>
            </div>
            <div className="principle-item">
              <span className="principle-num" aria-hidden="true">02</span>
              <div>
                <h3 className="principle-title">Embed with your team.</h3>
                <p className="principle-desc">We come to your floor. We meet your supervisors. We learn your equipment. The training plan reflects what your team actually does — not a generic syllabus.</p>
              </div>
            </div>
            <div className="principle-item">
              <span className="principle-num" aria-hidden="true">03</span>
              <div>
                <h3 className="principle-title">Document everything.</h3>
                <p className="principle-desc">Every session is documented to HRD Corp audit standards: attendance, evaluation, learning outcomes, post-training report. You get the binder; we keep the originals.</p>
              </div>
            </div>
            <div className="principle-item">
              <span className="principle-num" aria-hidden="true">04</span>
              <div>
                <h3 className="principle-title">Stay with you post-engagement.</h3>
                <p className="principle-desc">Once a course closes, the relationship doesn&apos;t. We re-engage at re-certification time, refresh schedules, or when your team or scope changes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6 ── Team */}
      <section className="team-section">
        <div className="container">
          <div className="team-section-header">
            <span className="eyebrow">The Team</span>
            <h2>People who make it happen</h2>
          </div>
          <div className="team-grid">
            {team.map((member) => (
              <div className="team-card" key={member.role}>
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
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Compliance Awareness</h3>
              <p>Programmes and consulting cover HR, safety, environment, security and recognised management systems.</p>
            </div>
            <div className="card">
              <div className="icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Flexible Support</h3>
              <p>MEDSS supports both in-house and public training needs with enquiry channels for fast coordination.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9 ── FAQ */}
      <section className="faq-section">
        <div className="container">
          <div className="faq-header">
            <span className="eyebrow">Common Questions</span>
            <h2>Frequently asked questions</h2>
          </div>
          <div className="faq-grid">
            <details className="faq-item">
              <summary>Are all training programmes HRD Corp claimable?</summary>
              <p className="faq-answer">Yes. MEDSS is a registered HRD Corp training provider. All our programmes are claimable, and we guide you through the submission process.</p>
            </details>
            <details className="faq-item">
              <summary>Do you offer in-house training at our premises?</summary>
              <p className="faq-answer">Yes. In-house delivery is our preferred mode. We come to your site, customise the content to your industry context and run training at a time that suits your operations.</p>
            </details>
            <details className="faq-item">
              <summary>What industries do you serve?</summary>
              <p className="faq-answer">We work across manufacturing, logistics, construction, facilities management and the corporate sector. Our multi-discipline approach means we can support organisations in any industry.</p>
            </details>
            <details className="faq-item">
              <summary>How long does ISO certification take?</summary>
              <p className="faq-answer">Timelines depend on the standard and your current readiness. ISO 9001 typically takes 3–6 months; ISO 45001 and 14001 are similar. We conduct a gap assessment at the start to give you a realistic roadmap.</p>
            </details>
            <details className="faq-item">
              <summary>Are your trainers industry-certified?</summary>
              <p className="faq-answer">Yes. Every MEDSS trainer holds relevant professional certifications — DOSH, NIOSH, HRDC accreditation, ISO lead auditor or equivalent — backed by hands-on field experience.</p>
            </details>
            <details className="faq-item">
              <summary>What is the minimum group size for in-house training?</summary>
              <p className="faq-answer">We typically work with groups of 10 or more for in-house delivery. Smaller groups can join a public run or be accommodated for consultancy-focused engagements.</p>
            </details>
            <details className="faq-item">
              <summary>Can you handle both training and ISO implementation?</summary>
              <p className="faq-answer">Yes. MEDSS is a full-service provider. We take you from gap analysis through training, documentation, internal audit and final certification — under one engagement.</p>
            </details>
            <details className="faq-item">
              <summary>How do we get started?</summary>
              <p className="faq-answer">Send an enquiry via the Contact page. We respond within one business day to discuss your requirements and arrange a briefing or site visit.</p>
            </details>
          </div>
        </div>
      </section>

      {/* 10 ── CTA */}
      <section className="about-cta-section">
        <div className="container">
          <div className="about-cta">
            <div className="about-cta-left">
              <span className="about-cta-eyebrow">Ready to get started?</span>
              <h2 className="about-cta-headline">Build a safer and better prepared workforce.</h2>
              <p className="about-cta-sub">
                Talk to MEDSS about your organisation&apos;s training or consultancy requirements.
                We respond within one business day.
              </p>
            </div>
            <div className="about-cta-right">
              <Link className="btn btn-primary" href="/contact">Send Enquiry</Link>
              <Link className="about-cta-link" href="/services">View our services →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
