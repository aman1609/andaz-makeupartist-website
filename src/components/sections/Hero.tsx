import { ArrowDown, ArrowUpRight } from 'lucide-react';

export default function Hero() {
  const whatsappMessage = encodeURIComponent(
    "Hi! I'd like to book a makeup session for my special occasion."
  );
  const whatsappLink = `https://wa.me/918076989572?text=${whatsappMessage}`;

  return (
    <section id="home" className="relative min-h-screen flex flex-col overflow-hidden bg-blush">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-48 -left-48 w-[42rem] h-[42rem] rounded-full bg-rose-200/40 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-[32rem] h-[32rem] rounded-full bg-gold-300/15 blur-3xl"></div>
      </div>

      {/* Main hero area */}
      <div className="relative flex-1 flex items-center">
        {/* Artist photo — full-bleed right panel (desktop) */}
        <div className="absolute inset-y-0 right-0 w-[46vw] hidden lg:block">
          <img
            src="/artist.jpg"
            alt="Andaz — The Makeup Artist"
            className="w-full h-full object-cover"
            style={{ objectPosition: '58% 30%' }}
          />
          {/* Blend into the blush canvas — kept narrow so the photo stays rich */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(90deg, #f6edf0 0%, rgba(246,237,240,0.45) 12%, rgba(246,237,240,0) 34%)',
            }}
            aria-hidden="true"
          ></div>
          {/* Warm plum wash to harmonize with the palette */}
          <div className="absolute inset-0 bg-rose-700/15 mix-blend-multiply" aria-hidden="true"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" aria-hidden="true"></div>
          {/* Inset gold hairline frame */}
          <div className="absolute inset-6 border border-gold-300/50 pointer-events-none" aria-hidden="true"></div>

          {/* Caption */}
          <div className="absolute bottom-12 right-12 text-right">
            <p className="font-display italic text-5xl text-cream leading-none">Andaz</p>
            <p className="text-xs uppercase tracking-[0.35em] text-gold-300 mt-3">
              The Makeup Artist
            </p>
          </div>
        </div>

        <div className="container-edit w-full relative z-10 pt-36 pb-16 lg:pb-24">
          <div className="lg:w-[58%] space-y-8">
            {/* Availability pill */}
            <div className="inline-flex items-center gap-3 border border-ink-900/10 bg-white/50 backdrop-blur-sm px-5 py-2.5 animate-rise">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-500 opacity-60"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500"></span>
              </span>
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-ink-700">
                Now booking &mdash; 2026 weddings
              </span>
            </div>

            <p className="flex items-center gap-4 animate-rise delay-1">
              <span className="w-12 h-px bg-gold-500" aria-hidden="true"></span>
              <span className="eyebrow">Bridal &amp; Occasion Makeup Artistry</span>
            </p>

            <h1 className="display-xl text-ink-950 animate-rise delay-1 lg:relative lg:z-20 lg:-mr-40">
              Beauty,
              <br />
              made <span className="italic text-rose-500">timeless.</span>
            </h1>

            <p className="max-w-md text-base md:text-lg font-light text-ink-500 leading-relaxed animate-rise delay-2">
              Fresh, certified artistry for the moments you&rsquo;ll remember forever &mdash;
              from your wedding morning to the editorial spotlight.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-2 animate-rise delay-3">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-ink">
                Book on WhatsApp
                <ArrowUpRight size={16} />
              </a>
              <a
                href="#work"
                className="link-line text-sm uppercase tracking-[0.25em] text-ink-700 hover:text-ink-950 inline-flex items-center gap-2"
              >
                Explore work
                <ArrowDown size={14} />
              </a>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-10 md:gap-14 pt-8 animate-rise delay-4">
              {[
                ['Certified', 'Professional artist'],
                ['Premium', 'Products only'],
                ['100%', 'Love, guaranteed'],
              ].map(([num, label], i) => (
                <div key={label} className="flex items-center gap-10 md:gap-14">
                  {i > 0 && <span className="w-px h-10 bg-gold-500/40" aria-hidden="true"></span>}
                  <div>
                    <div className="font-display text-3xl md:text-4xl text-ink-950">{num}</div>
                    <div className="text-[11px] uppercase tracking-[0.2em] text-ink-400 mt-1">
                      {label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Artist photo — cinematic band (mobile/tablet) */}
          <div className="relative mt-14 lg:hidden animate-rise delay-4">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src="/artist.jpg"
                alt="Andaz — The Makeup Artist"
                className="w-full h-full object-cover"
                style={{ objectPosition: '58% 25%' }}
              />
              <div className="absolute inset-0 bg-rose-700/15 mix-blend-multiply" aria-hidden="true"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" aria-hidden="true"></div>
              <div className="absolute inset-4 border border-gold-300/50 pointer-events-none" aria-hidden="true"></div>
              <div className="absolute bottom-6 right-6 text-right">
                <p className="font-display italic text-3xl text-cream leading-none">Andaz</p>
                <p className="text-[10px] uppercase tracking-[0.35em] text-gold-300 mt-2">
                  The Makeup Artist
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Rotating badge — pinned to the seam between text and photo */}
        <div className="absolute left-[50%] bottom-24 z-20 w-28 h-28 xl:w-32 xl:h-32 hidden lg:block">
          <div className="absolute inset-0 rounded-full bg-white/70 backdrop-blur-sm border border-gold-500/40" aria-hidden="true"></div>
          <svg viewBox="0 0 100 100" className="relative w-full h-full animate-spin-slow">
            <defs>
              <path id="badge-circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
            </defs>
            <text className="fill-gold-600" style={{ fontSize: '9px', letterSpacing: '2.5px' }}>
              <textPath href="#badge-circle">
                BRIDAL &middot; PARTY &middot; EDITORIAL &middot;
              </textPath>
            </text>
          </svg>
          <span className="absolute inset-0 flex items-center justify-center font-display italic text-xl text-ink-950">
            A.
          </span>
        </div>

        {/* Vertical scroll cue */}
        <div className="hidden xl:flex absolute left-10 bottom-24 z-10 items-center gap-3 [writing-mode:vertical-rl] rotate-180">
          <span className="text-[10px] uppercase tracking-[0.4em] text-ink-400">Scroll to explore</span>
          <span className="w-px h-16 bg-gold-500/60" aria-hidden="true"></span>
        </div>
      </div>
    </section>
  );
}
