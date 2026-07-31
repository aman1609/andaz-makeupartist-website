'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Portfolio', href: '#work' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Words', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl transition-all duration-700 ${
          isScrolled
            ? 'bg-blush/90 shadow-[0_1px_24px_rgba(24,17,20,0.08)]'
            : 'bg-blush/70'
        }`}
      >
        <div className="container-edit">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Wordmark */}
            <a href="#home" className="flex flex-col leading-none">
              <span className="font-display text-3xl md:text-4xl tracking-tight text-ink-950">
                Andaz<span className="italic text-rose-500">.</span>
              </span>
              <span className="text-[9px] md:text-[10px] uppercase tracking-[0.35em] mt-1.5 text-gold-600">
                The Makeup Artist
              </span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="link-line text-xs uppercase tracking-[0.25em] font-medium text-ink-700 hover:text-rose-600 transition-colors duration-500"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="text-xs uppercase tracking-[0.25em] font-medium bg-ink-950 text-cream hover:bg-gold-600 hover:text-white px-6 py-3 transition-all duration-500"
              >
                Book &rarr;
              </a>
            </nav>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-ink-950 transition-colors duration-500"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-blush flex flex-col justify-center transition-all duration-500 md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="container-edit flex flex-col gap-2">
          {navLinks.map((link, i) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-display text-5xl py-3 text-ink-950 hover:text-rose-500 hover:italic transition-colors border-b border-ink-900/10"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-8 eyebrow"
          >
            Book your session &rarr;
          </a>
        </nav>
      </div>
    </>
  );
}
