import Reveal from '@/components/ui/Reveal';

const highlights = [
  ['Certified professional', 'Trained at a top makeup academy with professional certification'],
  ['Personal approach', 'Every face is unique — so is every look I create'],
  ['Premium products', 'High-end, skin-friendly, long-lasting formulas only'],
  ['Latest techniques', 'Trained in current bridal and editorial trends, not decade-old habits'],
];

export default function About() {
  return (
    <section id="about" className="bg-blush overflow-hidden">
      <div className="container-edit py-14 md:py-20">
        <div className="grid lg:grid-cols-12 gap-14 lg:gap-20 items-center">
          {/* Left — image with pull quote */}
          <div className="lg:col-span-5 relative">
            <Reveal>
              <div className="relative">
                <div className="absolute -bottom-5 -left-5 w-full h-full border border-gold-400 hidden sm:block" aria-hidden="true"></div>
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=900&q=80"
                    alt="Andaz at work"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <blockquote className="absolute -right-4 sm:-right-10 bottom-10 bg-white/85 backdrop-blur-sm px-6 py-5 max-w-[240px] border border-gold-500/40">
                  <p className="font-display italic text-xl leading-snug text-ink-950">
                    &ldquo;Each face is a canvas, each session a story.&rdquo;
                  </p>
                </blockquote>
              </div>
            </Reveal>
          </div>

          {/* Right — story */}
          <div className="lg:col-span-7 space-y-8">
            <Reveal>
              <p className="eyebrow !text-gold-600 mb-5">About</p>
              <h2 className="display-lg text-ink-950">
                Making every face
                <br />
                <span className="italic text-rose-500">unforgettable</span>
              </h2>
            </Reveal>

            <Reveal delay={100}>
              <div className="space-y-5 max-w-xl">
                <p className="text-lg text-ink-700 font-light leading-relaxed">
                  I&rsquo;m Andaz &mdash; The Makeup Artist. Certified, obsessed with the
                  craft, and building something new: makeup that reveals rather than masks,
                  for brides on their most important mornings, models under studio lights,
                  and everyone who wants to feel like the best version of themselves.
                </p>
                <p className="text-ink-500 font-light leading-relaxed">
                  Being new means every client gets my full energy — unhurried sessions,
                  honest consultations, and a look built around your features, your skin,
                  and your story.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <dl className="grid sm:grid-cols-2 gap-x-10 gap-y-7 pt-4 border-t border-ink-200 mt-2">
                {highlights.map(([title, text]) => (
                  <div key={title} className="pt-5">
                    <dt className="text-xs uppercase tracking-[0.2em] text-gold-600 mb-2">{title}</dt>
                    <dd className="text-sm text-ink-500 font-light leading-relaxed">{text}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={300}>
              <p className="font-display italic text-3xl text-rose-500 pt-2">— Andaz</p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
