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
              <h3 className="mission-card-label">Mission</h3>
              <p className="mission-card-text">
                To empower Malaysian organisations with practical, accessible and high-quality
                training and consultancy.
              </p>
            </div>
            <div className="mission-card mission-card--glass">
              <h3 className="mission-card-label">Vision</h3>
              <p className="mission-card-text">
                To be Malaysia&apos;s most trusted multi-discipline training and consultancy partner.
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
              Over the years we&apos;ve grown from a specialist training provider into a full-service
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
              <p>Talk to MEDSS about your organisation&apos;s training or consultancy requirements.</p>
            </div>
            <Link className="btn btn-primary" href="/contact">
              Send Enquiry
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
