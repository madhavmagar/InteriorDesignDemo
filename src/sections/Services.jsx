const services = [
  {
    title: 'Residential Design',
    desc: 'Bespoke living environments crafted around your family, rituals, and aspirations. From apartments to villas.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" strokeWidth="1.5" className="service-icon w-10 h-10" stroke="currentColor">
        <path d="M6 22L24 6L42 22V42H30V30H18V42H6V22Z" />
        <rect x="20" y="30" width="8" height="12" />
      </svg>
    ),
  },
  {
    title: 'Commercial Spaces',
    desc: 'Office interiors, retail environments, and hospitality spaces designed to inspire and perform.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" strokeWidth="1.5" className="service-icon w-10 h-10" stroke="currentColor">
        <rect x="4" y="8" width="40" height="36" rx="2" />
        <path d="M4 18H44" />
        <path d="M16 8V44M32 8V44" />
        <rect x="8" y="22" width="6" height="6" rx="1" />
        <rect x="21" y="22" width="6" height="6" rx="1" />
        <rect x="34" y="22" width="6" height="6" rx="1" />
        <rect x="8" y="34" width="6" height="6" rx="1" />
        <rect x="34" y="34" width="6" height="6" rx="1" />
      </svg>
    ),
  },
  {
    title: 'Turnkey Projects',
    desc: 'End-to-end project management — from concept and drawings to procurement, execution, and handover.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" strokeWidth="1.5" className="service-icon w-10 h-10" stroke="currentColor">
        <circle cx="24" cy="24" r="18" />
        <path d="M24 14V24L30 30" />
        <path d="M34 12L38 8M14 12L10 8M24 6V2" />
        <circle cx="24" cy="24" r="3" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'Vastu-Based Design',
    desc: 'Harmonising spatial energy with Vastu Shastra principles for homes that feel peaceful and prosperous.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" strokeWidth="1.5" className="service-icon w-10 h-10" stroke="currentColor">
        <polygon points="24,4 44,40 4,40" />
        <line x1="24" y1="4" x2="24" y2="40" />
        <line x1="4" y1="40" x2="44" y2="40" />
        <line x1="14" y1="22" x2="34" y2="22" />
        <circle cx="24" cy="24" r="3" fill="currentColor" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-section md:py-section px-6 md:px-12 lg:px-20 xl:px-32"
      style={{ background: '#EDE7D9' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <div className="reveal flex items-center gap-4 mb-6">
            <div className="gold-accent-line" />
            <span className="section-label">What We Do</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2
              className="reveal font-display italic font-light text-charcoal"
              style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', lineHeight: '1.1', maxWidth: '520px' }}
            >
              Design Services{' '}
              <span className="text-sienna">Tailored</span>
              {' '}to You
            </h2>
            <p className="reveal font-body text-charcoal-soft max-w-xs" style={{ lineHeight: '1.8' }}>
              Every engagement begins with listening — we shape our approach to your world, not the other way around.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ title, desc, icon }, i) => (
            <div
              key={title}
              className={`service-card reveal reveal-delay-${i}`}
              role="article"
            >
              {/* Icon */}
              <div className="mb-6 text-sienna">{icon}</div>

              {/* Rule */}
              <div className="service-rule h-px w-8 bg-gold mb-6 transition-all duration-400" />

              {/* Title */}
              <h3 className="service-title font-display italic text-xl font-light text-charcoal mb-3 transition-colors duration-400">
                {title}
              </h3>

              {/* Desc */}
              <p className="service-desc font-body text-sm text-charcoal-soft transition-colors duration-400" style={{ lineHeight: '1.8' }}>
                {desc}
              </p>

              {/* Arrow */}
              <div className="mt-6 flex items-center gap-2 text-sienna text-sm font-medium transition-colors duration-400" style={{ letterSpacing: '0.05em' }}>
                <span>Learn more</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M2 8h12M10 4l4 4-4 4" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
