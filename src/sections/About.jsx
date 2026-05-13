export default function About() {
  return (
    <section id="about" className="relative py-section md:py-section px-6 md:px-12 lg:px-20 xl:px-32 bg-ivory overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute -right-24 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #D4A853, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT — Photo + Quote */}
          <div className="reveal relative">
            <div
              className="relative overflow-hidden"
              style={{ borderRadius: '4px', height: 'clamp(380px, 55vh, 640px)' }}
            >
              {/* Real founder/studio image */}
              <img
                src="/images/about.png"
                alt="Related Interior Names — founder Aria Sharma"
                className="w-full h-full object-cover"
              />
              {/* Warm dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-charcoal/20 to-transparent" />

              {/* Quote on image */}
              <div className="absolute bottom-8 left-8 right-8 z-10">
                <p className="font-display italic text-ivory text-xl lg:text-2xl font-light leading-snug mb-4">
                  "Design is not decoration — it is the silent language of how we live."
                </p>
                <div className="h-px w-12 bg-gold mb-3" />
                <p className="font-body text-ivory/70 text-sm tracking-widest uppercase" style={{ letterSpacing: '0.12em' }}>
                  Aria Sharma, Founder
                </p>
              </div>

              {/* Corner accents */}
              <div className="absolute top-6 left-6 w-10 h-10 border-l-2 border-t-2 border-gold/60" />
              <div className="absolute bottom-6 right-6 w-10 h-10 border-r-2 border-b-2 border-gold/60" />
            </div>

            {/* Floating badge */}
            <div
              className="absolute -bottom-6 -right-4 md:-right-8 bg-charcoal text-ivory py-5 px-6 z-10"
              style={{ borderRadius: '4px', minWidth: '160px' }}
            >
              <div className="font-display italic text-3xl text-gold font-light">10+</div>
              <div className="font-body text-xs text-ivory/70 uppercase tracking-widest mt-1">Years in Design</div>
            </div>
          </div>

          {/* RIGHT — About Text */}
          <div className="md:pl-6 mt-8 md:mt-0">
            <div className="reveal flex items-center gap-4 mb-6">
              <div className="gold-accent-line" />
              <span className="section-label">Our Story</span>
            </div>

            <h2
              className="reveal font-display italic font-light text-charcoal mb-6"
              style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', lineHeight: '1.1' }}
            >
              Where Vision Meets{' '}
              <span className="text-sienna">Craft</span>
            </h2>

            <hr className="gold-rule my-6 reveal" />

            <div className="space-y-5 reveal reveal-delay-1">
              <p className="font-body text-charcoal-soft leading-relaxed" style={{ lineHeight: '1.85' }}>
                Founded by <strong className="font-medium text-charcoal">Aria Sharma</strong> in 2015,
                Related Interior Names was born from a singular belief: that thoughtful design has the power
                to transform not just a space, but the lives within it.
              </p>
              <p className="font-body text-charcoal-soft leading-relaxed" style={{ lineHeight: '1.85' }}>
                Operating from Pune with projects spanning Mumbai, Bangalore, and Goa, we bring
                together <span className="text-charcoal font-medium">Vastu sensibility</span>,
                contemporary minimalism, and artisanal materiality into homes and commercial
                environments that feel genuinely personal.
              </p>
              <p className="font-body text-charcoal-soft leading-relaxed" style={{ lineHeight: '1.85' }}>
                Every project is an intimate dialogue — between client and studio, between
                tradition and modernity, between the structural and the soul.
              </p>
            </div>

            {/* Stats row */}
            <div className="reveal reveal-delay-2 grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-gold/20">
              {[
                { num: '200+', desc: 'Projects' },
                { num: '50+', desc: 'Luxury Homes' },
                { num: '12', desc: 'Awards' },
              ].map(({ num, desc }) => (
                <div key={desc} className="text-center">
                  <div className="font-display italic text-3xl text-sienna font-light">{num}</div>
                  <div className="section-label text-[0.65rem] mt-1">{desc}</div>
                </div>
              ))}
            </div>

            <div className="reveal reveal-delay-3 mt-8">
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                Work With Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
