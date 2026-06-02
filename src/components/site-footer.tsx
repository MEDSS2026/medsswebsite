import Link from 'next/link';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/training-gallery', label: 'Training & Portfolio' },
  { href: '/contact', label: 'Contact' },
];

const serviceLinks = [
  { href: '/services/hr-consulting', label: 'HR Consulting' },
  { href: '/services/management-system', label: 'Management System Consulting' },
  { href: '/services/security', label: 'Security Consulting' },
  { href: '/services/osh-monitoring', label: 'OSH & Environmental Monitoring' },
  { href: '/training-gallery', label: 'Training Programmes' },
];

const phoneNumbers = [
  { label: '+60 12-274 4432', href: 'tel:+60122744432' },
  { label: '03-2116 9762', href: 'tel:+60321169762' },
];

export function SiteFooter() {
  return (
    <footer className="footer">

      {/* ── Main grid ── */}
      <div className="container">
        <div className="footer-grid">

          {/* Col 1 — Brand */}
          <div className="footer-brand">
            <img
              className="footer-logo"
              src="/assets/logos/medss-logo-white.png"
              alt="MEDSS Training and Consultancy"
            />
            <p className="footer-tagline">
              Training and consultancy solutions for safety, human resources, security,
              management systems and workplace capability across Malaysia.
            </p>
            <div className="footer-badges">
              <img src="/assets/logos/hrdc-claimable.png" alt="HRD Corp claimable" />
              <img src="/assets/logos/hrdc-training-provider.png" alt="HRD Corp registered training provider" />
            </div>
            <div className="footer-social">
              <a
                href="https://www.instagram.com/medss_trainingprovider"
                target="_blank"
                rel="noreferrer"
                className="footer-social-btn"
                aria-label="MEDSS on Instagram"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/>
                </svg>
                Instagram
              </a>
              <a
                href="https://www.facebook.com/groups/3202232860076709/user/61578132357226"
                target="_blank"
                rel="noreferrer"
                className="footer-social-btn"
                aria-label="MEDSS on Facebook"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Facebook
              </a>
              <a
                href="https://wa.me/60122744432"
                target="_blank"
                rel="noreferrer"
                className="footer-social-btn"
                aria-label="MEDSS on WhatsApp"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                  <path d="M12 2a9.92 9.92 0 00-8.48 15.14L3 22l4.92-1.3A9.94 9.94 0 1012 2zm5.7 14.56c-.24.68-1.39 1.3-1.92 1.33s-.5.43-3.23-1c-2.72-1.43-4.45-4.9-4.59-5.13a5.2 5.2 0 01-1-3.2 3.61 3.61 0 011.2-2.72 1.22 1.22 0 01.87-.3h.6c.2 0 .46-.07.72.55s.92 2.27 1 2.43a.57.57 0 010 .54 1.11 1.11 0 01-.16.24c-.08.1-.17.18-.25.29s-.18.18-.27.27A.58.58 0 0110 10a5.94 5.94 0 002.8 2.8.64.64 0 00.68-.07c.2-.24.86-1 1.09-1.35s.45-.27.75-.14 2 1 2.34 1.17.57.27.66.42a1.89 1.89 0 01-.62 1.73z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-heading">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Services */}
          <div className="footer-col">
            <h4 className="footer-col-heading">Our Services</h4>
            <ul className="footer-links">
              {serviceLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div className="footer-col">
            <h4 className="footer-col-heading">Contact Us</h4>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true" className="footer-contact-icon">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 01.97-.26 11.36 11.36 0 003.56.57 1 1 0 011 1v3.58a1 1 0 01-1 1A16.62 16.62 0 013 5a1 1 0 011-1h3.57a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.26.97z"/>
                </svg>
                <div>
                  {phoneNumbers.map((p) => (
                    <a key={p.href} href={p.href} className="footer-contact-line">{p.label}</a>
                  ))}
                </div>
              </li>
              <li className="footer-contact-item">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="footer-contact-icon">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round"/>
                </svg>
                <div>
                  <a href="mailto:consultant@medss.com.my" className="footer-contact-line">consultant@medss.com.my</a>
                  <a href="mailto:evelyndevid@medss.com.my" className="footer-contact-line">evelyndevid@medss.com.my</a>
                </div>
              </li>
              <li className="footer-contact-item">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="footer-contact-icon">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round"/>
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round"/>
                </svg>
                <address className="footer-address">
                  Suite 33-01, 33rd Floor,<br />
                  Menara Keck Seng,<br />
                  203 Jalan Bukit Bintang,<br />
                  55100 Kuala Lumpur.
                </address>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p className="footer-copyright">
            © 2026 MEDSS Training and Consultancy Sdn. Bhd. All rights reserved.
          </p>
          <nav className="footer-legal" aria-label="Legal">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <span aria-hidden="true">·</span>
            <Link href="/terms">Terms of Use</Link>
            <span aria-hidden="true">·</span>
            <a href="https://www.medss.com.my" target="_blank" rel="noreferrer">medss.com.my</a>
          </nav>
        </div>
      </div>

    </footer>
  );
}
