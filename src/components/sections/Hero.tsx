import { Sparkles, MessageCircle, ArrowRight } from 'lucide-react';

export default function Hero() {
  const whatsappMessage = encodeURIComponent(
    "Hi! I'd like to book a makeup session for my special occasion."
  );
  const whatsappLink = `https://wa.me/918076989577?text=${whatsappMessage}`;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80"
          alt="Bridal Makeup Artist Bengaluru"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark Overlay with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/75 via-neutral-900/60 to-neutral-900/70 backdrop-blur-[1px]"></div>
      </div>

      {/* Content Container */}
      <div className="container-custom relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fadeInUp">

          {/* Certified Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/15 backdrop-blur-md border border-white/25 rounded-full text-white text-sm font-medium tracking-wide animate-fadeInDown">
            <Sparkles size={16} className="text-primary-300" />
            <span className="uppercase text-xs sm:text-sm">Certified Professional Makeup Artist</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-tight text-white">
            Bridal & Occasion<br />
            <span className="text-primary-300 font-semibold italic">Makeup Artist</span><br />
            in Bengaluru
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl md:text-2xl font-light text-neutral-200 max-w-2xl mx-auto leading-relaxed">
            Enhancing your natural beauty for your most special moments
          </p>

          {/* CTA Button - WhatsApp */}
          <div className="pt-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-400 to-primary-500 hover:from-white hover:to-primary-100 text-neutral-900 font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border-2 border-transparent hover:border-white"
            >
              <MessageCircle size={20} className="transition-transform group-hover:rotate-12" />
              <span>Book on WhatsApp</span>
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Stats Section */}
          <div className="pt-12 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 md:gap-16">
            <div className="text-center">
              <div className="font-heading text-4xl sm:text-5xl font-bold text-primary-300 mb-2">500+</div>
              <div className="text-sm sm:text-base text-neutral-300 uppercase tracking-wider">Happy Brides</div>
            </div>

            <div className="hidden sm:block w-px h-12 bg-white/20"></div>

            <div className="text-center">
              <div className="font-heading text-4xl sm:text-5xl font-bold text-primary-300 mb-2">10+</div>
              <div className="text-sm sm:text-base text-neutral-300 uppercase tracking-wider">Years Experience</div>
            </div>

            <div className="hidden sm:block w-px h-12 bg-white/20"></div>

            <div className="text-center">
              <div className="font-heading text-4xl sm:text-5xl font-bold text-primary-300 mb-2">100%</div>
              <div className="text-sm sm:text-base text-neutral-300 uppercase tracking-wider">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary-300 rounded-full animate-scrollDown"></div>
        </div>
      </div>
    </section>
  );
}
