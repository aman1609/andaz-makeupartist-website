'use client';

import { useEffect, useState } from 'react';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'work', label: 'Portfolio' },
  { id: 'services', label: 'Services' },
  { id: 'about', label: 'About' },
  { id: 'testimonials', label: 'Kind words' },
  { id: 'contact', label: 'Contact' },
];

export default function SectionNav() {
  const [activeId, setActiveId] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const marker = window.scrollY + window.innerHeight * 0.4;
      let current = sections[0].id;
      for (const { id } of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= marker) current = id;
      }
      setActiveId(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      aria-label="Page sections"
      className="fixed right-5 xl:right-7 top-1/2 -translate-y-1/2 z-40 hidden lg:block"
    >
      <div className="flex flex-col items-center gap-3.5 rounded-full bg-white/55 backdrop-blur-md border border-ink-900/10 px-2.5 py-4 shadow-sm">
        {sections.map(({ id, label }) => {
          const active = activeId === id;
          return (
            <a
              key={id}
              href={`#${id}`}
              aria-label={label}
              aria-current={active ? 'true' : undefined}
              className="group relative flex items-center justify-center p-0.5"
            >
              {/* Tooltip */}
              <span className="absolute right-full mr-3 whitespace-nowrap bg-ink-950 text-cream text-[9px] uppercase tracking-[0.25em] px-2.5 py-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                {label}
              </span>
              <span
                className={`rounded-full transition-all duration-300 ${
                  active
                    ? 'w-2.5 h-2.5 bg-gold-600'
                    : 'w-2 h-2 bg-ink-900/25 group-hover:bg-ink-900/55'
                }`}
              ></span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
