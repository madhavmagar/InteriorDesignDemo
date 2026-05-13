import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Full-bleed background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.png"
          alt="Luxury interior designed by Lumina Interior"
          className="w-full h-full object-cover"
        />
        {/* Dark gradient overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/70" />
        {/* Warm tint layer */}
        <div className="absolute inset-0" style={{ background: 'rgba(196,98,45,0.08)' }} />
      </div>

      {/* Decorative gold vertical lines */}
      <div className="absolute left-8 lg:left-16 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-gold/50 to-transparent z-10" />
      <div className="absolute right-8 lg:right-16 top-1/3 bottom-1/3 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent z-10" />

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Section label */}
        <div className="hero-animate-1 flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-12 bg-gold/70" />
          <span className="section-label text-gold/90">Est. 2015 — Pune, India</span>
          <div className="h-px w-12 bg-gold/70" />
        </div>

        {/* Hero Headline */}
        <h1
          className="hero-animate-2 font-display italic font-light text-ivory leading-tight mb-0"
          style={{ fontSize: 'clamp(3.2rem, 9vw, 6rem)', lineHeight: '1.03', letterSpacing: '-0.01em' }}
        >
          Spaces That
        </h1>
        <h1
          className="hero-animate-3 font-display italic font-light leading-tight"
          style={{ fontSize: 'clamp(3.2rem, 9vw, 6rem)', lineHeight: '1.03', letterSpacing: '-0.01em', color: '#D4A853' }}
        >
          Tell Your Story.
        </h1>

        {/* Subheading */}
        <p
          className="hero-animate-4 text-ivory/80 mt-8 mb-10 max-w-xl mx-auto font-body"
          style={{ fontSize: '1.05rem', lineHeight: '1.8' }}
        >
          We sculpt living environments that fuse Indian craftsmanship with
          international sensibility — where every corner holds intention.
        </p>

        {/* CTAs */}
        <div className="hero-animate-5 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            View Our Work
          </button>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'transparent', color: '#F5F0E8',
              border: '1px solid rgba(245,240,232,0.5)', padding: '14px 32px',
              fontFamily: "'DM Sans', sans-serif", fontSize: '0.85rem',
              fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase',
              borderRadius: '2px', transition: 'all 0.3s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(245,240,232,0.15)'; e.currentTarget.style.borderColor = '#F5F0E8'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(245,240,232,0.5)'; }}
          >
            Start a Project
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-ivory/50 hover:text-gold transition-colors duration-300 scroll-indicator"
        aria-label="Scroll down"
      >
        <span className="section-label text-[0.65rem] text-ivory/50" style={{ letterSpacing: '0.25em' }}>Scroll</span>
        <ChevronDown size={18} strokeWidth={1.5} />
      </button>

      {/* Bottom stats bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-ivory/10 bg-charcoal/60 backdrop-blur-sm hidden md:flex">
        {[
          { value: '200+', label: 'Projects Delivered' },
          { value: '10+', label: 'Years of Excellence' },
          { value: '98%', label: 'Client Satisfaction' },
          { value: '12', label: 'Design Awards' },
        ].map(({ value, label }, i) => (
          <div key={i} className="flex-1 py-5 text-center border-r border-ivory/10 last:border-r-0">
            <div className="font-display text-2xl font-light text-gold italic">{value}</div>
            <div className="section-label text-[0.65rem] mt-1 text-ivory/60">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
