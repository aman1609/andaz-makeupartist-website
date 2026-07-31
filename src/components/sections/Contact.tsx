'use client';

import { useState } from 'react';
import { ArrowUpRight, Send } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

const inputClass =
  'w-full bg-transparent border-b border-ink-200 focus:border-gold-600 py-3 outline-none transition-colors font-light text-ink-900 placeholder:text-ink-300';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Deliver the enquiry via WhatsApp — the site has no backend to store it
    const lines = [
      `Hi Andaz! I'd like to book a session.`,
      `Name: ${formData.name}`,
      `Phone: ${formData.phone}`,
      `Email: ${formData.email}`,
      `Occasion: ${formData.service}`,
      formData.date && `Preferred date: ${formData.date}`,
      formData.message && `Details: ${formData.message}`,
    ].filter(Boolean);
    window.open(
      `https://wa.me/918076989572?text=${encodeURIComponent(lines.join('\n'))}`,
      '_blank',
      'noopener,noreferrer'
    );
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const whatsappMessage = encodeURIComponent(
    'Hi Andaz! I would like to book a makeup session. Can we discuss the details?'
  );
  const whatsappLink = `https://wa.me/918076989572?text=${whatsappMessage}`;

  return (
    <section id="contact" className="bg-blush">
      <div className="container-edit pt-16 md:pt-24 pb-24 md:pb-32">
        <div className="grid lg:grid-cols-12 gap-14 lg:gap-20">
          {/* Left — big invitation */}
          <div className="lg:col-span-6 space-y-10">
            <Reveal>
              <p className="eyebrow !text-gold-600 mb-5">Contact</p>
              <h2 className="display-lg text-ink-950">
                Let&rsquo;s create something
                <br />
                <span className="italic text-rose-500">beautiful.</span>
              </h2>
            </Reveal>

            <Reveal delay={100}>
              <p className="text-ink-500 font-light leading-relaxed max-w-md">
                Tell me about your day — the occasion, the outfit, the mood. I&rsquo;ll take
                care of the rest. For the fastest response, message me on WhatsApp.
              </p>
            </Reveal>

            <Reveal delay={150}>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-ink">
                Chat on WhatsApp
                <ArrowUpRight size={16} />
              </a>
            </Reveal>

            <Reveal delay={200}>
              <dl className="space-y-6 pt-6 border-t border-ink-200 max-w-md">
                {[
                  ['Phone', '+91 8076989572', 'tel:+918076989572'],
                  ['Email', 'rajandaz574@gmail.com', 'mailto:rajandaz574@gmail.com'],
                  ['Studio', 'By appointment · Travel available', undefined],
                  ['Instagram', '@andazthemakeupartist', 'https://www.instagram.com/andazthemakeupartist'],
                ].map(([label, value, href]) => (
                  <div key={label} className="flex items-baseline gap-6">
                    <dt className="text-[10px] uppercase tracking-[0.25em] text-ink-400 w-20 shrink-0">
                      {label}
                    </dt>
                    <dd>
                      {href ? (
                        <a
                          href={href}
                          className="link-line font-display text-xl text-ink-950"
                          {...(href.startsWith('http')
                            ? { target: '_blank', rel: 'noopener noreferrer' }
                            : {})}
                        >
                          {value}
                        </a>
                      ) : (
                        <span className="font-display text-xl text-ink-950">{value}</span>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          {/* Right — minimal form */}
          <div className="lg:col-span-6">
            <Reveal delay={150}>
              {submitted ? (
                <div className="h-full flex flex-col justify-center items-start gap-4 bg-white/70 border border-gold-500/30 p-10 md:p-14">
                  <p className="font-display italic text-4xl text-ink-950">Thank you.</p>
                  <p className="text-ink-500 font-light">
                    Your enquiry has opened in WhatsApp — just hit send there, and
                    I&rsquo;ll get back to you within a day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8 bg-white/70 border border-gold-500/30 p-8 md:p-12">
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="name" className="eyebrow !text-ink-400 block mb-1">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="eyebrow !text-ink-400 block mb-1">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="eyebrow !text-ink-400 block mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="service" className="eyebrow !text-ink-400 block mb-1">
                        Occasion *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className={`${inputClass} cursor-pointer`}
                      >
                        <option value="">Select an occasion</option>
                        <option value="bridal">Bridal</option>
                        <option value="party">Party</option>
                        <option value="editorial">Editorial / Photoshoot</option>
                        <option value="engagement">Engagement</option>
                        <option value="hd">HD Makeup</option>
                        <option value="lessons">Makeup Lessons</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="date" className="eyebrow !text-ink-400 block mb-1">
                        Date
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="eyebrow !text-ink-400 block mb-1">
                      Your story
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      className={`${inputClass} resize-none`}
                      placeholder="Tell me about the occasion..."
                    />
                  </div>

                  <div className="space-y-3">
                    <button type="submit" className="btn-ink w-full sm:w-auto">
                      Send via WhatsApp
                      <Send size={15} />
                    </button>
                    <p className="text-xs text-ink-400 font-light">
                      Opens WhatsApp with your details pre-filled — nothing is stored on this site.
                    </p>
                  </div>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </div>
      <div className="bridge-bottom" aria-hidden="true"></div>
    </section>
  );
}
