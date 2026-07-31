'use client';

import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

const categories = ['All', 'Bridal', 'Party', 'Editorial', 'Traditional'];

const portfolioItems = [
  {
    id: 1,
    title: 'Classic Bridal',
    category: 'Bridal',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80',
  },
  {
    id: 2,
    title: 'Party Glam',
    category: 'Party',
    image: 'https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?w=800&q=80',
  },
  {
    id: 3,
    title: 'Editorial Fashion',
    category: 'Editorial',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80',
  },
  {
    id: 4,
    title: 'South Indian Tradition',
    category: 'Traditional',
    image: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=800&q=80',
  },
  {
    id: 5,
    title: 'Soft Bridal',
    category: 'Bridal',
    image: 'https://images.unsplash.com/photo-1532170579297-281918c8ae72?w=800&q=80',
  },
  {
    id: 6,
    title: 'Evening Look',
    category: 'Party',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80',
  },
  {
    id: 7,
    title: 'Magazine Shoot',
    category: 'Editorial',
    image: 'https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?w=800&q=80',
  },
  {
    id: 8,
    title: 'Festive Glam',
    category: 'Traditional',
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80',
  },
  {
    id: 9,
    title: 'Royal Bridal',
    category: 'Bridal',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&q=80',
  },
];

/* "All" shows a calm, equal grid; picking a category features its first look */
const tileClass = (index: number, category: string) =>
  category !== 'All' && index === 0
    ? 'sm:col-span-2 lg:col-span-4 lg:row-span-2'
    : 'lg:col-span-2';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems =
    activeCategory === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  const openCategory = (category: string) => {
    setActiveCategory(category);
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="work" className="bg-blush">
      <div className="container-edit pb-14 md:pb-16 pt-8 md:pt-12">
        {/* Header */}
        <Reveal>
          <div className="mb-10 md:mb-12">
            <p className="eyebrow mb-5">Portfolio</p>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <h2 className="display-lg text-ink-950">
                Selected <span className="italic text-rose-500">work</span>
              </h2>
              <p className="text-ink-500 font-light max-w-sm lg:text-right lg:pb-2">
                A glimpse of the faces, moods, and moments I love to create.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Filter tabs — square headers with an animated underline */}
        <Reveal delay={100}>
          <div className="flex flex-wrap gap-x-9 gap-y-3 border-b border-ink-900/10 mb-10 md:mb-14">
            {categories.map((category) => {
              const active = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`relative pb-3.5 text-xs uppercase tracking-[0.25em] font-medium transition-colors duration-300 ${
                    active ? 'text-ink-950' : 'text-ink-400 hover:text-ink-950'
                  }`}
                >
                  {category}
                  <span
                    className={`absolute left-0 -bottom-px h-[2px] bg-ink-950 transition-all duration-500 ${
                      active ? 'w-full' : 'w-0'
                    }`}
                    aria-hidden="true"
                  ></span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Mosaic grid — re-keyed so tiles animate in on every filter change */}
        <div
          key={activeCategory}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 auto-rows-[420px] sm:auto-rows-[300px] lg:auto-rows-[290px] gap-4 md:gap-5"
        >
          {filteredItems.map((item, index) => (
            <figure
              key={item.id}
              className={`group relative overflow-hidden bg-rose-100 animate-rise ${tileClass(index, activeCategory)}`}
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <img
                src={item.image}
                alt={`${item.title} — makeup by Andaz`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                loading="lazy"
              />

              {/* Category chip */}
              <span className="absolute top-4 left-4 z-20 border border-gold-400/80 bg-ink-950/45 backdrop-blur-sm px-3.5 py-1.5 text-[9px] uppercase tracking-[0.25em] text-gold-300 font-medium pointer-events-none">
                {item.category}
              </span>

              {/* Bottom gradient + caption — always on touch, hover on desktop */}
              <div
                className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink-950/85 via-ink-950/30 to-transparent
                  opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500"
                aria-hidden="true"
              ></div>

              {/* Clicking the tile opens its category */}
              <button
                type="button"
                onClick={() => openCategory(item.category)}
                aria-label={`View ${item.category} work`}
                className="absolute inset-0 z-10 cursor-pointer"
              ></button>

              <figcaption
                className="absolute inset-x-0 bottom-0 z-20 p-5 flex items-end justify-between gap-4 pointer-events-none
                  translate-y-0 lg:translate-y-5 lg:group-hover:translate-y-0
                  opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-500"
              >
                <div>
                  <p
                    className={`font-display text-cream leading-tight ${
                      activeCategory !== 'All' && index === 0 ? 'text-2xl lg:text-4xl' : 'text-2xl'
                    }`}
                  >
                    {item.title}
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-gold-300 mt-1.5">
                    {item.category}
                  </p>
                </div>
                <a
                  href="#contact"
                  aria-label={`Book a ${item.title} session`}
                  title="Book this look"
                  className="w-10 h-10 shrink-0 rounded-full border border-cream/40 flex items-center justify-center text-cream transition-all duration-300 hover:bg-cream hover:text-ink-950 pointer-events-auto lg:pointer-events-none lg:group-hover:pointer-events-auto"
                >
                  <ArrowUpRight size={16} />
                </a>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Instagram link */}
        <Reveal>
          <div className="mt-14 md:mt-16 text-center">
            <a
              href="https://www.instagram.com/andazthemakeupartist"
              target="_blank"
              rel="noopener noreferrer"
              className="link-line font-display italic text-2xl text-ink-950 inline-flex items-center gap-2"
            >
              See more on Instagram
              <ArrowUpRight size={20} className="text-gold-600" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
