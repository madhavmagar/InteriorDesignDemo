import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'The Koregaon Villa',
    type: 'Residential',
    cat: 'residential',
    span: 'tall',
    img: '/images/p-bedroom.png',
    imgAlt: 'Luxury bedroom interior – Koregaon Villa',
  },
  {
    id: 2,
    title: 'Prestige Skyline Penthouse',
    type: 'Residential',
    cat: 'residential',
    span: 'wide',
    img: '/images/p-dining.png',
    imgAlt: 'Penthouse dining room – Prestige Skyline',
  },
  {
    id: 3,
    title: 'Aura Co-Working Hub',
    type: 'Commercial',
    cat: 'commercial',
    span: 'normal',
    img: '/images/p-office.png',
    imgAlt: 'Premium co-working office space – Aura Hub',
  },
  {
    id: 4,
    title: 'The Loft Kitchen',
    type: 'Modular',
    cat: 'modular',
    span: 'tall',
    img: '/images/p-kitchen.png',
    imgAlt: 'Luxury modular kitchen – The Loft',
  },
  {
    id: 5,
    title: 'Saffron Boutique Hotel',
    type: 'Commercial',
    cat: 'commercial',
    span: 'wide',
    img: '/images/p-hotel.png',
    imgAlt: 'Boutique hotel lobby – Saffron Hotel',
  },
  {
    id: 6,
    title: 'Emerald Bay Apartment',
    type: 'Residential',
    cat: 'residential',
    span: 'normal',
    img: '/images/p-living.png',
    imgAlt: 'Modern living room – Emerald Bay',
  },
  {
    id: 7,
    title: 'Sleek Modular Study',
    type: 'Modular',
    cat: 'modular',
    span: 'normal',
    img: '/images/p-study.png',
    imgAlt: 'Luxury home study room – modular design',
  },
  {
    id: 8,
    title: 'The Goa Beach House',
    type: 'Residential',
    cat: 'residential',
    span: 'wide',
    img: '/images/p-beach.png',
    imgAlt: 'Goa beach house interior – open plan living',
  },
];

const filters = ['All', 'Residential', 'Commercial', 'Modular'];

const spanCols = {
  tall: 'col-span-1',
  normal: 'col-span-1',
  wide: 'col-span-2',
};

export default function Portfolio() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All'
    ? projects
    : projects.filter((p) => p.type === active);

  return (
    <section id="portfolio" className="py-section md:py-section px-6 md:px-12 lg:px-20 xl:px-32 bg-ivory">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="reveal flex items-center gap-4 mb-6">
            <div className="gold-accent-line" />
            <span className="section-label">Selected Work</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <h2
              className="reveal font-display italic font-light text-charcoal"
              style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', lineHeight: '1.1' }}
            >
              Stories We've{' '}
              <span className="text-sienna">Crafted</span>
            </h2>

            {/* Filter Tabs */}
            <div className="reveal flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  className={`filter-tab ${active === f ? 'active' : ''}`}
                  onClick={() => setActive(f)}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[280px]">
          {filtered.map((project, i) => (
            <div
              key={project.id}
              className={`portfolio-item reveal reveal-delay-${i % 4} ${spanCols[project.span]}`}
              style={{ gridRow: project.span === 'tall' ? 'span 2' : 'span 1' }}
            >
              {/* Real image */}
              <img
                src={project.img}
                alt={project.imgAlt}
                className="thumb w-full h-full object-cover"
                loading="lazy"
              />

              {/* Hover Overlay */}
              <div className="overlay">
                <div>
                  <p className="section-label text-gold/90 mb-2">{project.type}</p>
                  <h3 className="font-display italic text-ivory text-xl font-light">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-3">
                    <div className="h-px w-6 bg-gold/60" />
                    <span className="font-body text-ivory/60 text-xs tracking-wider uppercase">View Project</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal text-center mt-14">
          <button className="btn-outline">
            View Full Portfolio
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M2 8h12M10 4l4 4-4 4" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
