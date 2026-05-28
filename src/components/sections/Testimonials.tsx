'use client';

import { Star } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Aisha Patel',
    role: 'Bride',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
    rating: 5,
    text: 'Priya made me feel like a princess on my wedding day! Her attention to detail and understanding of what I wanted was incredible. The makeup lasted throughout my 12-hour wedding ceremony. Highly recommended!',
  },
  {
    id: 2,
    name: 'Sneha Reddy',
    role: 'Party Client',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80',
    rating: 5,
    text: 'I\'ve been going to Priya for all my special occasions for the past 2 years. She has an amazing eye for colors and knows exactly what suits each person. Her work is always flawless!',
  },
  {
    id: 3,
    name: 'Kavya Sharma',
    role: 'Bride',
    image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=100&q=80',
    rating: 5,
    text: 'Professional, punctual, and incredibly talented! Priya understood my vision perfectly and executed it beautifully. All my wedding photos turned out stunning thanks to her expertise.',
  },
  {
    id: 4,
    name: 'Meera Krishnan',
    role: 'Model',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
    rating: 5,
    text: 'As a professional model, I\'ve worked with many makeup artists. Priya stands out for her creativity and professionalism. She knows exactly what works for camera and has enhanced my portfolio significantly.',
  },
  {
    id: 5,
    name: 'Anjali Menon',
    role: 'Engagement Client',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80',
    rating: 5,
    text: 'Priya\'s makeup for my engagement was absolutely perfect! She made me look naturally beautiful and the photos came out amazing. Her warm personality made the whole experience enjoyable.',
  },
  {
    id: 6,
    name: 'Riya Gupta',
    role: 'Bride',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&q=80',
    rating: 5,
    text: 'I was so nervous about my bridal makeup, but Priya put me at ease immediately. She listened to all my concerns and created a look that was exactly what I dreamed of. Thank you for making my day special!',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-br from-primary-50 to-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-4">
            Testimonials
          </h2>
          <h3 className="heading-lg mb-6">What My Clients Say</h3>
          <p className="text-lg text-neutral-600">
            Don't just take my word for it. Here's what my happy clients have to say 
            about their experience working with me.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Stars */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-primary-500 text-primary-500"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-neutral-700 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-primary-100"
                />
                <div>
                  <div className="font-semibold text-neutral-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-neutral-600">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-4xl font-bold text-primary-600">500+</div>
            <div className="text-sm text-neutral-600">Happy Clients</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-primary-600">100%</div>
            <div className="text-sm text-neutral-600">Satisfaction Rate</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-primary-600">300+</div>
            <div className="text-sm text-neutral-600">Bridal Makeups</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-primary-600">8+</div>
            <div className="text-sm text-neutral-600">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}
