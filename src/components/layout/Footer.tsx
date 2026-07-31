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
    <footer className="bg-ink-950 text-cream">
      {/* Marquee strip */}
      <div className="border-b border-cream/10 py-4 overflow-hidden select-none" aria-hidden="true">
        <div className="flex w-max animate-marquee">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0">
              {marqueeItems.map((item) => (
                <span
                  key={`${copy}-${item}`}
                  className="font-display italic text-2xl md:text-3xl text-cream/90 px-8 whitespace-nowrap"
                >
                  {item} <span className="text-gold-400 not-italic px-6">&#10022;</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="container-edit py-16 md:py-20">
        {/* Giant wordmark */}
        <a
          href="#home"
          className="block font-display leading-none text-cream hover:text-rose-300 transition-colors duration-500"
          style={{ fontSize: 'clamp(3.5rem, 13vw, 11rem)' }}
        >
          Andaz<span className="italic text-gold-400">.</span>
        </a>
        <p className="mt-4 text-[10px] md:text-xs uppercase tracking-[0.4em] text-gold-400">
          The Makeup Artist
        </p>

        <div className="mt-12 md:mt-16 flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div className="flex flex-wrap gap-x-10 gap-y-3">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="link-line text-xs uppercase tracking-[0.25em] text-cream/60 hover:text-cream transition-colors"
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
              className="w-11 h-11 border border-cream/20 flex items-center justify-center hover:bg-cream hover:text-ink-950 transition-all duration-300"
            >
              <Instagram size={17} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-11 h-11 border border-cream/20 flex items-center justify-center hover:bg-cream hover:text-ink-950 transition-all duration-300"
            >
              <Facebook size={17} />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cream/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-cream/40 tracking-wide">
          <p>&copy; {currentYear} Andaz &mdash; The Makeup Artist. All rights reserved.</p>
          <p>Bridal &amp; occasion makeup &mdash; by appointment</p>
        </div>
      </div>
    </footer>
  );
}
