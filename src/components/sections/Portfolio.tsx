'use client';

import { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const categories = ['All', 'Bridal', 'Party', 'Editorial', 'Traditional'];

const portfolioItems = [
  {
    id: 1,
    title: 'Classic Bridal Look',
    category: 'Bridal',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80',
  },
  {
    id: 2,
    title: 'Party Glam',
    category: 'Party',
    image: 'https://images.unsplash.com/photo-1583241800698-c318374c03d8?w=600&q=80',
  },
  {
    id: 3,
    title: 'Editorial Fashion',
    category: 'Editorial',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80',
  },
  {
    id: 4,
    title: 'Traditional South Indian',
    category: 'Traditional',
    image: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=600&q=80',
  },
  {
    id: 5,
    title: 'Soft Bridal',
    category: 'Bridal',
    image: 'https://images.unsplash.com/photo-1532170579297-281918c8ae72?w=600&q=80',
  },
  {
    id: 6,
    title: 'Evening Party Look',
    category: 'Party',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&q=80',
  },
  {
    id: 7,
    title: 'Magazine Shoot',
    category: 'Editorial',
    image: 'https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?w=600&q=80',
  },
  {
    id: 8,
    title: 'Festive Glam',
    category: 'Traditional',
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80',
  },
  {
    id: 9,
    title: 'Royal Bridal',
    category: 'Bridal',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=80',
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems =
    activeCategory === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-4">
            Portfolio
          </h2>
          <h3 className="heading-lg mb-6">My Recent Work</h3>
          <p className="text-lg text-neutral-600">
            Browse through my portfolio to see the artistry and attention to detail 
            that goes into every makeup session.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeCategory === category
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 w-full">
                  <h4 className="text-xl font-bold text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-primary-300 text-sm mb-4">{item.category}</p>
                  <button className="inline-flex items-center space-x-2 text-white hover:text-primary-300 transition-colors">
                    <span>View Details</span>
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-primary-600">
                {item.category}
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="btn-secondary">View More on Instagram</button>
        </div>
      </div>
    </section>
  );
}
