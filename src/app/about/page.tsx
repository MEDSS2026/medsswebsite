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
                To be Malaysia’s most trusted multi-discipline training and consultancy partner.
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
              Over the years we’ve grown from a specialist training provider into a full-service
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
