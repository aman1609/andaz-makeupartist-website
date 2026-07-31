'use client';

import { useState } from 'react';
import { Plus, ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

const services = [
  {
    title: 'Bridal Makeup',
    description:
      'Your wedding morning, handled with calm and craft. HD makeup that photographs beautifully and lasts from muhurtham to midnight.',
    features: ['Pre-bridal consultation', 'Trial session', 'HD makeup', 'Hairstyling included'],
    price: 'from ₹15,000',
  },
  {
    title: 'Party Makeup',
    description:
      'Glamour tuned to the occasion — a look that stands out in the room and in every photograph.',
    features: ['Customized look', 'Long-lasting wear', 'Touch-up kit', 'Hairstyling available'],
    price: 'from ₹5,000',
  },
  {
    title: 'Editorial & Photoshoot',
    description:
      'Camera-first artistry for fashion shoots, portfolios, and creative collaborations.',
    features: ['Camera-ready finish', 'Multiple looks', 'On-set collaboration', 'Portfolio building'],
    price: 'from ₹7,000',
  },
  {
    title: 'Engagement Makeup',
    description:
      'Radiant, romantic, and coordinated with your outfit — for the evening the story begins.',
    features: ['Natural glow', 'Outfit coordination', 'Hairstyling', 'Touch-ups'],
    price: 'from ₹9,000',
  },
  {
    title: 'HD Makeup',
    description:
      'An airbrushed, waterproof finish that looks flawless in person and in high definition.',
    features: ['Airbrushed finish', 'Waterproof', 'Picture perfect', 'All occasions'],
    price: 'from ₹6,000',
  },
  {
    title: 'Makeup Lessons',
    description:
      'One-on-one sessions to master your own face — techniques, products, and practice.',
    features: ['Personalized training', 'Product recommendations', 'Technique practice', 'Video tutorials'],
    price: 'from ₹3,000',
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="services" className="py-14 md:py-16 bg-blush">
      <div className="container-edit">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left — sticky header */}
          <div className="lg:col-span-4">
            <Reveal>
              <div className="lg:sticky lg:top-32 space-y-6">
                <p className="eyebrow">Services</p>
                <h2 className="display-lg text-ink-950">
                  The <span className="italic text-rose-500">craft</span>,<br />
                  by occasion
                </h2>
                <p className="text-ink-500 font-light leading-relaxed max-w-sm">
                  Every service begins with a conversation about you — your features, your
                  outfit, your day. Not sure where to start? Book a free consultation.
                </p>
                <a href="#contact" className="btn-outline">
                  Free consultation
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right — numbered accordion */}
          <div className="lg:col-span-8">
            {services.map((service, index) => {
              const isOpen = openIndex === index;
              return (
                <Reveal key={service.title} delay={index * 60}>
                  <div className="border-t border-ink-900/10 last:border-b">
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full flex items-center gap-6 py-7 md:py-8 text-left group"
                      aria-expanded={isOpen}
                    >
                      <span className="font-display italic text-lg text-ink-300 w-10 shrink-0">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="font-display text-2xl md:text-4xl text-ink-950 flex-1 group-hover:italic group-hover:text-rose-500 transition-colors duration-300">
                        {service.title}
                      </span>
                      <span className="hidden sm:block text-xs uppercase tracking-[0.2em] text-ink-500">
                        {service.price}
                      </span>
                      <Plus
                        size={20}
                        className={`shrink-0 text-ink-400 transition-transform duration-500 ${
                          isOpen ? 'rotate-45' : ''
                        }`}
                      />
                    </button>

                    <div
                      className={`grid transition-all duration-500 ease-out ${
                        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="pb-8 pl-16 pr-4 space-y-5">
                          <p className="text-ink-500 font-light leading-relaxed max-w-xl">
                            {service.description}
                          </p>
                          <ul className="flex flex-wrap gap-x-8 gap-y-2">
                            {service.features.map((feature) => (
                              <li
                                key={feature}
                                className="text-xs uppercase tracking-[0.15em] text-ink-700 flex items-center gap-2"
                              >
                                <span className="w-1 h-1 bg-gold-600 rounded-full" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                          <div className="flex items-center gap-6 pt-1">
                            <span className="sm:hidden text-xs uppercase tracking-[0.2em] text-ink-500">
                              {service.price}
                            </span>
                            <a
                              href="#contact"
                              className="link-line text-xs uppercase tracking-[0.25em] text-gold-600"
                            >
                              Book this service &rarr;
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
