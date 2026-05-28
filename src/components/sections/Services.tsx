'use client';

import { useState } from 'react';
import { Heart, Sparkles, Camera, Star, Crown, Palette } from 'lucide-react';

const services = [
  {
    icon: Crown,
    title: 'Bridal Makeup',
    description: 'Make your special day unforgettable with flawless bridal makeup that lasts all day.',
    features: ['Pre-bridal consultation', 'Trial session', 'HD makeup', 'Hairstyling included'],
    price: 'Starting from ₹25,000',
    popular: true,
  },
  {
    icon: Sparkles,
    title: 'Party Makeup',
    description: 'Stand out at any event with glamorous makeup perfect for parties and celebrations.',
    features: ['Customized look', 'Long-lasting', 'Touch-up kit', 'Hairstyling available'],
    price: 'Starting from ₹8,000',
    popular: false,
  },
  {
    icon: Camera,
    title: 'Editorial & Photoshoot',
    description: 'Professional makeup for fashion shoots, portfolios, and creative projects.',
    features: ['Camera-ready finish', 'Multiple looks', 'Collaboration with photographers', 'Portfolio building'],
    price: 'Starting from ₹12,000',
    popular: false,
  },
  {
    icon: Star,
    title: 'HD Makeup',
    description: 'High-definition makeup that looks perfect both in person and on camera.',
    features: ['Airbrushed finish', 'Waterproof', 'Picture perfect', 'All occasions'],
    price: 'Starting from ₹10,000',
    popular: false,
  },
  {
    icon: Heart,
    title: 'Engagement Makeup',
    description: 'Look radiant for your engagement ceremony with elegant and romantic makeup.',
    features: ['Natural glow', 'Coordinated with outfit', 'Hairstyling', 'Touch-ups'],
    price: 'Starting from ₹15,000',
    popular: false,
  },
  {
    icon: Palette,
    title: 'Makeup Lessons',
    description: 'Learn professional makeup techniques with personalized one-on-one sessions.',
    features: ['Personalized training', 'Product recommendations', 'Technique practice', 'Video tutorials'],
    price: 'Starting from ₹5,000',
    popular: false,
  },
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="section-padding bg-neutral-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-4">
            Services
          </h2>
          <h3 className="heading-lg mb-6">
            Transformative Beauty Services
          </h3>
          <p className="text-lg text-neutral-600">
            From bridal perfection to everyday glam, I offer a range of professional 
            makeup services tailored to your unique needs and style.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`card p-8 relative cursor-pointer transform transition-all duration-300 ${
                hoveredIndex === index ? 'scale-105 shadow-2xl' : ''
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {service.popular && (
                <div className="absolute -top-4 right-8 bg-primary-600 text-white px-4 py-1 rounded-full text-xs font-semibold shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-100 text-primary-600 mb-6">
                <service.icon size={32} />
              </div>

              <h4 className="text-xl font-bold text-neutral-900 mb-3">
                {service.title}
              </h4>

              <p className="text-neutral-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="text-primary-600 mt-1">✓</span>
                    <span className="text-sm text-neutral-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-neutral-200">
                <div className="text-2xl font-bold text-primary-600 mb-4">
                  {service.price}
                </div>
                <a
                  href="#contact"
                  className="inline-block w-full text-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-medium transition-colors"
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">
            Not Sure Which Service is Right for You?
          </h3>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Book a free consultation and let's discuss your beauty goals. 
            I'll help you choose the perfect service for your needs.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-white text-primary-600 hover:bg-neutral-50 rounded-full font-semibold transition-colors shadow-xl"
          >
            Schedule Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
