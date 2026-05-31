import re

css_path = "/Users/sanjaygunabalan2626gmail.com/Documents/MEDSS (windsurf)/medss-next/src/app/globals.css"
with open(css_path, "r") as f:
    css = f.read()

# Replace the hero CSS section
old_css = """
.hero {
  position: relative;
  overflow: hidden;
  color: var(--white);
  background: linear-gradient(135deg, rgba(13, 27, 61, 0.95), rgba(33, 64, 154, 0.9)), url('/assets/training/hero-road-safety.jpg') center/cover;
}

.hero .container {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;
  gap: 48px;
  min-height: 640px;
  padding: 70px 0;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--yellow);
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 13px;
}

h1,
h2,
h3 {
  margin: 0 0 16px;
  color: var(--dark);
  line-height: 1.12;
}

.hero h1,
.page-hero h1 {
  color: var(--white);
  font-size: clamp(40px, 6vw, 72px);
}

.hero p,
.page-hero p {
  color: rgba(255, 255, 255, 0.88);
  font-size: 18px;
  max-width: 680px;
}

.hero-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 28px;
  padding: 28px;
  color: var(--text);
  box-shadow: var(--shadow);
}

.hero-card img {
  height: 80px;
  width: auto;
  margin-bottom: 20px;
}

.hero-actions,
.section-actions {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin-top: 28px;
}

.stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 28px;
}

.stat {
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.22);
  border-radius: 18px;
  padding: 18px;
}

.stat strong {
  display: block;
  color: var(--yellow);
  font-size: 28px;
}
""".strip()

new_css = """
.hero {
  position: relative;
  overflow: hidden;
  color: var(--white);
  background: linear-gradient(105deg, rgba(13, 27, 61, 0.98) 0%, rgba(33, 64, 154, 0.85) 50%, rgba(33, 64, 154, 0.2) 100%), url('/assets/training/hero-road-safety.jpg') center/cover no-repeat;
  height: calc(100vh - 110px);
  min-height: 600px;
  max-height: 900px;
  display: flex;
  align-items: center;
}

.hero .container {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  align-items: center;
  gap: 60px;
  padding: 0;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--yellow);
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 12px;
  margin-bottom: 16px;
}

h1,
h2,
h3 {
  margin: 0 0 16px;
  color: var(--dark);
  line-height: 1.15;
  letter-spacing: -0.02em;
}

.hero h1,
.page-hero h1 {
  color: var(--white);
  font-size: clamp(36px, 4.5vw, 56px);
  font-weight: 800;
  margin-bottom: 24px;
}

.hero p,
.page-hero p {
  color: rgba(255, 255, 255, 0.9);
  font-size: 18px;
  max-width: 600px;
  line-height: 1.7;
}

.hero-glass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 28px;
  padding: 40px;
  color: var(--white);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2);
}

.hero-glass h2 {
  color: var(--white);
  font-size: 26px;
  margin-bottom: 16px;
}

.hero-glass p {
  color: rgba(255, 255, 255, 0.85);
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 28px;
}

.hero-glass .badges {
  margin-top: 0;
}

.hero-glass .badges img {
  background: var(--white);
  padding: 10px;
  border-radius: 12px;
}

.hero-actions,
.section-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 36px;
}

.hero-stats {
  display: flex;
  gap: 40px;
  margin-top: 48px;
  padding-top: 32px;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
}

.hero-stat-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.hero-stat-item strong {
  color: var(--yellow);
  font-size: 32px;
  font-weight: 800;
  line-height: 1;
}

.hero-stat-item span {
  color: rgba(255, 255, 255, 0.75);
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
}
""".strip()

css = css.replace(old_css, new_css)

media_query_target = """@media (max-width: 900px) {"""
media_query_new = """@media (max-width: 900px) {
  .hero {
    height: auto;
    min-height: auto;
    padding: 80px 0;
  }"""
css = css.replace(media_query_target, media_query_new)

with open(css_path, "w") as f:
    f.write(css)

# Replace the page.tsx hero structure
tsx_path = "/Users/sanjaygunabalan2626gmail.com/Documents/MEDSS (windsurf)/medss-next/src/app/page.tsx"
with open(tsx_path, "r") as f:
    tsx = f.read()

old_tsx = """
      <section className="hero">
        <div className="container">
          <div>
            <span className="eyebrow">HRDC Claimable Training Provider</span>
            <h1>Training, consultancy and compliance support for safer, stronger workplaces.</h1>
            <p>
              MEDSS helps Malaysian organisations improve safety, human resources, security readiness and management
              systems through practical training programmes and professional consulting services.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/contact">
                Send An Enquiry
              </Link>
              <Link className="btn btn-outline" href="/services">
                Explore Services
              </Link>
            </div>
            <div className="stats">
              {stats.map((item) => (
                <div className="stat" key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          <aside className="hero-card">
            <img src="/assets/logos/medss-logo-color.png" alt="MEDSS logo" />
            <h2>Your partner for training and consultancy</h2>
            <p>
              From HR advisory and ISO management systems to OSH monitoring, security consultancy and in-house training,
              MEDSS delivers structured solutions for business compliance and workforce capability.
            </p>
            <div className="badges">
              <img src="/assets/logos/hrdc-claimable.png" alt="HRD Corp claimable logo" />
            </div>
          </aside>
        </div>
      </section>
""".strip()

new_tsx = """
      <section className="hero">
        <div className="container">
          <div>
            <span className="eyebrow">HRDC Claimable Training Provider</span>
            <h1>Training, consultancy and compliance support for safer, stronger workplaces.</h1>
            <p>
              MEDSS helps Malaysian organisations improve safety, human resources, security readiness and management
              systems through practical training programmes and professional consulting services.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/contact">
                Send An Enquiry
              </Link>
              <Link className="btn btn-outline" href="/services">
                Explore Services
              </Link>
            </div>
            <div className="hero-stats">
              {stats.map((item) => (
                <div className="hero-stat-item" key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          <aside className="hero-glass">
            <h2>Your partner for training and consultancy</h2>
            <p>
              From HR advisory and ISO management systems to OSH monitoring, security consultancy and in-house training,
              MEDSS delivers structured solutions for business compliance and workforce capability.
            </p>
            <div className="badges">
              <img src="/assets/logos/hrdc-claimable.png" alt="HRD Corp claimable logo" />
              <img src="/assets/logos/hrdc-training-provider.png" alt="HRD Corp registered training provider logo" />
            </div>
          </aside>
        </div>
      </section>
""".strip()

tsx = tsx.replace(old_tsx, new_tsx)

with open(tsx_path, "w") as f:
    f.write(tsx)

