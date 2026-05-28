import { Award, Heart, Users, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Certified Professional',
    description: 'Trained from top makeup academies with international certifications',
  },
  {
    icon: Heart,
    title: 'Personalized Approach',
    description: 'Every face is unique, and so is my approach to enhancing your natural beauty',
  },
  {
    icon: Users,
    title: '500+ Happy Clients',
    description: 'Trusted by brides and celebrities across Bengaluru',
  },
  {
    icon: Sparkles,
    title: 'Premium Products',
    description: 'Using only high-end, skin-friendly, and long-lasting makeup products',
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-64 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=80"
                    alt="Makeup Artist at Work"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-48 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&q=80"
                    alt="Beauty Products"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="h-48 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400&q=80"
                    alt="Bridal Makeup"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-64 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=400&q=80"
                    alt="Makeup Session"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary-100 rounded-3xl -z-10"></div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-sm font-semibold text-primary-600 uppercase tracking-wider">
                About Me
              </h2>
              <h3 className="heading-lg">
                Creating Magic, One Face at a Time
              </h3>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Hi, I'm Andaz Raj, a passionate makeup artist based in Bengaluru.
                With over 10 years of experience in the beauty industry, I specialize in
                bringing out the natural beauty in every person I work with.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                My journey began with a deep love for art and beauty. Today, I've had the 
                privilege of working with hundreds of brides on their special day, celebrities 
                for photoshoots, and everyday people looking to feel their best. Each face is 
                a canvas, and each makeup session is a unique story.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-xl hover:bg-primary-50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary-100 group-hover:bg-primary-200 flex items-center justify-center flex-shrink-0 transition-colors">
                    <feature.icon className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-neutral-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a href="#contact" className="btn-primary">
                Let's Work Together
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
