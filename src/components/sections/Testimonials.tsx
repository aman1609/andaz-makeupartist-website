'use client';

import { useState, useEffect, useCallback } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

const testimonials = [
  {
    name: 'Aisha Patel',
    role: 'Bride',
    text: 'Andaz made me feel like a princess on my wedding day. The makeup lasted through a 12-hour ceremony — and every photo is stunning.',
  },
  {
    name: 'Sneha Reddy',
    role: 'Party client',
    text: 'She has an incredible eye for color and knows exactly what suits each person. My party look was flawless — I have already booked her again.',
  },
  {
    name: 'Kavya Sharma',
    role: 'Bride',
    text: 'Professional, punctual, incredibly talented. Andaz understood my vision perfectly — my wedding photos turned out beautiful because of her.',
  },
  {
    name: 'Meera Krishnan',
    role: 'Model',
    text: 'I have worked with many makeup artists. Andaz stands out for creativity and professionalism — she knows exactly what works on camera.',
  },
  {
    name: 'Riya Gupta',
    role: 'Bride',
    text: 'I was so nervous about my bridal makeup, but Andaz put me at ease immediately and created exactly the look I had dreamed of.',
  },
];

const ROTATE_MS = 6000;

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => setIndex((i) => (i + 1) % testimonials.length), []);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, ROTATE_MS);
    return () => clearInterval(timer);
  }, [index, next]);

  const current = testimonials[index];

  return (
    <section id="testimonials" className="bg-blush overflow-hidden">
      <div className="container-edit py-14 md:py-20">
        <Reveal>
          <div className="flex items-end justify-between mb-12 md:mb-16">
            <div>
              <p className="eyebrow mb-5">Kind words</p>
              <h2 className="display-lg text-ink-950">
                From the <span className="italic text-rose-500">chair</span>
              </h2>
            </div>

            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="w-12 h-12 border border-ink-900/20 text-ink-950 flex items-center justify-center hover:bg-ink-950 hover:text-cream transition-all duration-300"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="w-12 h-12 border border-ink-900/20 text-ink-950 flex items-center justify-center hover:bg-ink-950 hover:text-cream transition-all duration-300"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <figure
            key={index}
            className="max-w-4xl animate-rise bg-white/70 border border-gold-500/30 p-8 md:p-12"
          >
            <blockquote className="font-display text-3xl md:text-5xl leading-[1.15] text-ink-900">
              &ldquo;{current.text}&rdquo;
            </blockquote>
            <figcaption className="mt-10 flex items-center gap-4">
              <span className="w-10 h-px bg-gold-600" aria-hidden="true"></span>
              <span className="text-sm uppercase tracking-[0.2em] text-ink-950">{current.name}</span>
              <span className="text-sm text-ink-400 italic font-display">{current.role}</span>
            </figcaption>
          </figure>
        </Reveal>

        {/* Dots + mobile arrows */}
        <div className="mt-12 flex items-center gap-6">
          <div className="flex gap-2.5">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                onClick={() => setIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-1.5 transition-all duration-500 ${
                  i === index ? 'w-10 bg-gold-600' : 'w-4 bg-ink-900/15 hover:bg-ink-900/35'
                }`}
              />
            ))}
          </div>
          <div className="flex sm:hidden items-center gap-2 ml-auto">
            <button onClick={prev} aria-label="Previous" className="p-2 border border-ink-900/20 text-ink-950">
              <ArrowLeft size={16} />
            </button>
            <button onClick={next} aria-label="Next" className="p-2 border border-ink-900/20 text-ink-950">
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
