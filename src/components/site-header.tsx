'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services', hasDropdown: true },
  { href: '/training-gallery', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
];

const serviceCategories = [
  {
    label: 'HR Consulting',
    href: '/services/hr-consulting',
    description: 'Strategy, recruitment & employee relations',
  },
  {
    label: 'Management System Consulting',
    href: '/services/management-system',
    description: 'ISO 9001, ISO 45001, ISO 14001 & more',
  },
  {
    label: 'Security Consulting',
    href: '/services/security',
    description: 'Physical security, audits & supply chain',
  },
  {
    label: 'OSH & Environmental Monitoring',
    href: '/services/osh-monitoring',
    description: 'Noise, chemical & workplace safety',
  },
];

const primaryContact = '+60122744432';

export function SiteHeader() {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  return (
    <div className="site-header">
      <div className="announcement-bar">
        <div className="container announcement-content">
          <div className="announcement-left">
            <div className="announcement-logos">
              <img src="/assets/logos/hrdc-claimable.png" alt="HRD Corp claimable" />
              <img src="/assets/logos/hrdc-training-provider.png" alt="HRD Corp registered training provider" />
            </div>
            <span className="announcement-text">HRD Corp Registered · ISO Certified</span>
          </div>
          <div className="announcement-actions">
            <a className="contact-link" href="tel:+60122744432">
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 01.97-.26 11.36 11.36 0 003.56.57 1 1 0 011 1v3.58a1 1 0 01-1 1A16.62 16.62 0 013 5a1 1 0 011-1h3.57a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.26.97z" />
              </svg>
              <span>+60 12-274 4432</span>
            </a>
            <span className="divider" aria-hidden="true">|</span>
            <a className="contact-link contact-whatsapp" href={`https://wa.me/${primaryContact.slice(1)}`} target="_blank" rel="noreferrer">
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <path d="M12 2a9.92 9.92 0 00-8.48 15.14L3 22l4.92-1.3A9.94 9.94 0 1012 2zm5.7 14.56c-.24.68-1.39 1.3-1.92 1.33s-.5.43-3.23-1c-2.72-1.43-4.45-4.9-4.59-5.13a5.2 5.2 0 01-1-3.2 3.61 3.61 0 011.2-2.72 1.22 1.22 0 01.87-.3h.6c.2 0 .46-.07.72.55s.92 2.27 1 2.43a.57.57 0 010 .54 1.11 1.11 0 01-.16.24c-.08.1-.17.18-.25.29s-.18.18-.27.27A.58.58 0 0110 10a5.94 5.94 0 002.8 2.8.64.64 0 00.68-.07c.2-.24.86-1 1.09-1.35s.45-.27.75-.14 2 1 2.34 1.17.57.27.66.42a1.89 1.89 0 01-.62 1.73z" />
              </svg>
              <span>WhatsApp</span>
            </a>
            <span className="divider" aria-hidden="true">|</span>
            <a className="contact-link" href="tel:+60321169762">
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 01.97-.26 11.36 11.36 0 003.56.57 1 1 0 011 1v3.58a1 1 0 01-1 1A16.62 16.62 0 013 5a1 1 0 011-1h3.57a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.26.97z" />
              </svg>
              <span>03-2116 9762</span>
            </a>
          </div>
        </div>
      </div>

      <header className="header">
        <div className="container main-nav">
          <Link href="/" className="brand" aria-label="MEDSS Training and Consultancy home">
            <img className="logo" src="/assets/logos/medss-logo-color.png" alt="MEDSS Training and Consultancy logo" />
          </Link>

          {/* Desktop nav */}
          <nav className="nav-wrapper" aria-label="Primary">
            <ul className="nav-menu">
              {navLinks.map(({ href, label, hasDropdown }) =>
                hasDropdown ? (
                  <li
                    key={href}
                    className="nav-item-dropdown"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <Link
                      href={href}
                      className={pathname === href || pathname.startsWith('/services') ? 'active' : undefined}
                      aria-haspopup="true"
                      aria-expanded={servicesOpen}
                    >
                      {label}
                      <svg className={`nav-chevron${servicesOpen ? ' nav-chevron--open' : ''}`} aria-hidden="true" viewBox="0 0 24 24" width="12" height="12">
                        <path d="M6 9l6 6 6-6" strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                    <div className={`nav-dropdown${servicesOpen ? ' nav-dropdown--open' : ''}`} role="menu">
                      <div className="nav-dropdown-grid">
                        {serviceCategories.map(({ label: cat, href: catHref, description }) => (
                          <Link key={cat} href={catHref} className="nav-dropdown-item" role="menuitem" onClick={() => setServicesOpen(false)}>
                            <span className="nav-dropdown-dot" aria-hidden="true" />
                            <span className="nav-dropdown-item-content">
                              <span className="nav-dropdown-item-label">{cat}</span>
                              <span className="nav-dropdown-item-desc">{description}</span>
                            </span>
                          </Link>
                        ))}
                      </div>
                      <div className="nav-dropdown-footer">
                        <Link href="/services" onClick={() => setServicesOpen(false)}>View all services →</Link>
                      </div>
                    </div>
                  </li>
                ) : (
                  <li key={href}>
                    <Link href={href} className={pathname === href ? 'active' : undefined}>{label}</Link>
                  </li>
                )
              )}
            </ul>
          </nav>

          <Link className="schedule-link" href="/contact">
            Schedule a Consultation
            <span aria-hidden="true">↗</span>
          </Link>

          {/* Hamburger button — mobile only */}
          <button
            className="nav-hamburger"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((o) => !o)}
          >
            <span className={`nav-hamburger-icon${mobileOpen ? ' nav-hamburger-icon--open' : ''}`} aria-hidden="true">
              <span /><span /><span />
            </span>
          </button>
        </div>
      </header>

      {/* Mobile nav drawer */}
      {mobileOpen && (
        <div className="mobile-nav" role="dialog" aria-label="Mobile navigation">
          <nav>
            <ul className="mobile-nav-list">
              {navLinks.map(({ href, label, hasDropdown }) => (
                <li key={href}>
                  {hasDropdown ? (
                    <>
                      <Link
                        href={href}
                        className={`mobile-nav-link${pathname.startsWith('/services') ? ' mobile-nav-link--active' : ''}`}
                        onClick={closeMobile}
                      >
                        {label}
                      </Link>
                      <ul className="mobile-nav-sub">
                        {serviceCategories.map(({ label: cat, href: catHref }) => (
                          <li key={catHref}>
                            <Link href={catHref} className="mobile-nav-sub-link" onClick={closeMobile}>
                              {cat}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      href={href}
                      className={`mobile-nav-link${pathname === href ? ' mobile-nav-link--active' : ''}`}
                      onClick={closeMobile}
                    >
                      {label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <div className="mobile-nav-actions">
              <Link href="/contact" className="btn btn-primary" onClick={closeMobile}>
                Schedule a Consultation ↗
              </Link>
              <a href="tel:+60122744432" className="mobile-nav-phone">
                +60 12-274 4432
              </a>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
