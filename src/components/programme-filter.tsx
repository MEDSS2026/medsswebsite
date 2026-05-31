'use client';

import { useState } from 'react';
import Link from 'next/link';
import { programmeCategories } from '@/data/programmes';

type CategoryId = 'all' | 'safety' | 'security' | 'hr' | 'development';

const tabs: { id: CategoryId; label: string }[] = [
  { id: 'all', label: 'All Programmes' },
  { id: 'safety', label: 'Safety & Health' },
  { id: 'security', label: 'Security' },
  { id: 'hr', label: 'Human Resources' },
  { id: 'development', label: 'Self Development' },
];

export function ProgrammeFilter() {
  const [active, setActive] = useState<CategoryId>('all');

  const visible =
    active === 'all'
      ? programmeCategories.flatMap((cat) =>
          cat.programmes.map((p) => ({
            ...p,
            categoryId: cat.id,
            categoryLabel: cat.label,
          }))
        )
      : programmeCategories
          .filter((cat) => cat.id === active)
          .flatMap((cat) =>
            cat.programmes.map((p) => ({
              ...p,
              categoryId: cat.id,
              categoryLabel: cat.label,
            }))
          );

  return (
    <div className="prog-filter">
      <div className="prog-filter-tabs" role="tablist" aria-label="Filter programmes by category">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={active === tab.id}
            className={`prog-filter-tab${active === tab.id ? ' prog-filter-tab--active' : ''}`}
            onClick={() => setActive(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <p className="prog-filter-count">
        Showing {visible.length} programme{visible.length !== 1 ? 's' : ''}
      </p>

      <div className="prog-filter-grid">
        {visible.map((programme, i) => (
          <div key={`${programme.categoryId}-${i}`} className="prog-filter-card">
            <span className={`prog-filter-tag prog-filter-tag--${programme.categoryId}`}>
              {programme.categoryLabel}
            </span>
            <h3 className="prog-filter-card-title">{programme.title}</h3>
            <p className="prog-filter-card-desc">{programme.description}</p>
            <Link href="/contact" className="prog-filter-card-link">
              Enquire →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
