import { useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote:
      "Working with Lumina Interior was unlike any experience we've had before. They didn't just design our home — they understood our way of life and expressed it beautifully through every space.",
    name: 'Priya & Rohan Kulkarni',
    city: 'Pune, Maharashtra',
    project: 'Koregaon Villa',
    avatar: '/images/avatar-f.png',
    initials: 'PK',
  },
  {
    quote:
      "The attention to detail is extraordinary. Every material, every fixture, every light placement was considered with such intentionality. Our office now feels like a destination, not just a workspace.",
    name: 'Arjun Nambiar',
    city: 'Bangalore, Karnataka',
    project: 'Aura Co-Working Hub',
    avatar: '/images/avatar-m.png',
    initials: 'AN',
  },
  {
    quote:
      "Lumina Interior's Vastu expertise transformed our home from a house into a sanctuary. We feel the difference every single day — it's peaceful, productive, and utterly beautiful.",
    name: 'Meera Sundaram',
    city: 'Chennai, Tamil Nadu',
    project: 'Emerald Bay Apartment',
    avatar: '/images/avatar-f.png',
    initials: 'MS',
  },
  {
    quote:
      "The turnkey experience was seamless. They managed everything — procurement, vendors, site visits — with absolute professionalism. We just walked in and it was perfect.",
    name: 'Vivek & Ananya Shah',
    city: 'Mumbai, Maharashtra',
    project: 'Prestige Skyline Penthouse',
    avatar: '/images/avatar-m.png',
    initials: 'VS',
  },
];

function StarRating() {
  return (
    <div className="flex gap-1 text-gold mb-6">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={14} fill="#D4A853" strokeWidth={0} />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const trackRef = useRef(null);

  const scroll = (dir) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector('.testimonial-card');
    const cardWidth = card ? card.offsetWidth + 32 : 460;
    track.scrollBy({ left: dir * cardWidth, behavior: 'smooth' });
  };

  return (
    <section
      id="testimonials"
      className="py-section md:py-section overflow-hidden"
      style={{ background: '#1C1C1C' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
          <div>
            <div className="reveal flex items-center gap-4 mb-6">
              <div className="h-[2px] w-6 bg-gold" />
              <span className="section-label text-gold/80">Client Stories</span>
            </div>
            <h2
              className="reveal font-display italic font-light text-ivory"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: '1.1' }}
            >
              Words That{' '}
              <span className="text-gold">Mean Everything</span>
            </h2>
          </div>

          {/* Nav Arrows */}
          <div className="reveal flex gap-3">
            <button
              onClick={() => scroll(-1)}
              className="w-12 h-12 border border-gold/30 rounded-sm flex items-center justify-center text-ivory/60 hover:border-gold hover:text-gold transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll(1)}
              className="w-12 h-12 border border-gold/30 rounded-sm flex items-center justify-center text-ivory/60 hover:border-gold hover:text-gold transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Carousel Track */}
        <div ref={trackRef} className="testimonials-track reveal">
          {testimonials.map(({ quote, name, city, project, avatar, initials }) => (
            <div key={name} className="testimonial-card">
              <StarRating />

              {/* Large decorative quote mark */}
              <div
                className="font-display italic text-gold/20 leading-none mb-2"
                style={{ fontSize: '5rem', lineHeight: '0.8' }}
                aria-hidden
              >
                "
              </div>

              <blockquote
                className="font-display italic font-light text-ivory leading-relaxed mb-8"
                style={{ fontSize: '1.1rem', lineHeight: '1.75' }}
              >
                {quote}
              </blockquote>

              <div className="border-t border-gold/20 pt-5 flex items-center gap-4">
                {/* Avatar */}
                <div className="w-11 h-11 rounded-full overflow-hidden border border-gold/30 flex-shrink-0 bg-charcoal-soft">
                  <img
                    src={avatar}
                    alt={name}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
                <div>
                  <p className="font-body font-medium text-ivory text-sm">{name}</p>
                  <p className="font-body text-ivory/50 text-xs mt-0.5 tracking-wider uppercase" style={{ letterSpacing: '0.1em' }}>
                    {city}
                  </p>
                  <p className="font-body text-gold/60 text-xs mt-0.5">{project}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
