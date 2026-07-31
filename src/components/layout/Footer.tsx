import { Instagram, Facebook } from 'lucide-react';

const footerLinks = [
  { name: 'Portfolio', href: '#work' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

const marqueeItems = ['Bridal', 'Party', 'Editorial', 'Traditional', 'Engagement', 'HD Makeup'];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blush border-t border-ink-900/10">
      {/* Marquee strip */}
      <div className="border-b border-ink-900/10 py-4 overflow-hidden select-none" aria-hidden="true">
        <div className="flex w-max animate-marquee">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0">
              {marqueeItems.map((item) => (
                <span
                  key={`${copy}-${item}`}
                  className="font-display italic text-2xl md:text-3xl text-ink-950 px-8 whitespace-nowrap"
                >
                  {item} <span className="text-gold-500 not-italic px-6">&#10022;</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="container-edit py-14 md:py-16">
        {/* Giant wordmark */}
        <a
          href="#home"
          className="block font-display leading-none text-ink-950 hover:text-rose-500 transition-colors duration-500"
          style={{ fontSize: 'clamp(3.5rem, 13vw, 11rem)' }}
        >
          Andaz<span className="italic text-gold-600">.</span>
        </a>
        <p className="mt-4 text-[10px] md:text-xs uppercase tracking-[0.4em] text-gold-600">
          The Makeup Artist
        </p>

        <div className="mt-10 md:mt-14 flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div className="flex flex-wrap gap-x-10 gap-y-3">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="link-line text-xs uppercase tracking-[0.25em] text-ink-500 hover:text-ink-950 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-5">
            <a
              href="https://www.instagram.com/andazthemakeupartist"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-11 h-11 border border-ink-900/20 text-ink-950 flex items-center justify-center hover:bg-ink-950 hover:text-cream transition-all duration-300"
            >
              <Instagram size={17} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-11 h-11 border border-ink-900/20 text-ink-950 flex items-center justify-center hover:bg-ink-950 hover:text-cream transition-all duration-300"
            >
              <Facebook size={17} />
            </a>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-ink-900/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-ink-400 tracking-wide">
          <p>&copy; {currentYear} Andaz &mdash; The Makeup Artist. All rights reserved.</p>
          <p>Bridal &amp; occasion makeup &mdash; by appointment</p>
        </div>
      </div>
    </footer>
  );
}
