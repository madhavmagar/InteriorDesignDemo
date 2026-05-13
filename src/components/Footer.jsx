import { Heart } from 'lucide-react';

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const quickLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

const PinterestIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.04-2.82.18-.75 1.22-5.17 1.22-5.17s-.31-.62-.31-1.55c0-1.45.84-2.53 1.88-2.53.89 0 1.32.67 1.32 1.47 0 .89-.57 2.23-.86 3.47-.24 1.03.51 1.88 1.52 1.88 1.82 0 3.04-2.34 3.04-5.12 0-2.1-1.42-3.67-3.98-3.67-2.9 0-4.72 2.17-4.72 4.6 0 .84.24 1.43.62 1.89.17.2.19.28.13.51-.04.17-.15.57-.18.73-.06.24-.24.33-.44.24-1.24-.51-1.82-1.88-1.82-3.42 0-2.55 2.16-5.64 6.44-5.64 3.45 0 5.73 2.51 5.73 5.2 0 3.56-1.97 6.21-4.88 6.21-1 0-1.88-.54-2.19-1.15l-.63 2.42c-.23.88-.84 1.98-1.25 2.65.94.29 1.94.45 2.97.45 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
  </svg>
);

export default function Footer() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      className="pt-16 pb-8 md:pb-10 px-6 md:px-12 lg:px-20 xl:px-32"
      style={{ background: '#1C1C1C', paddingBottom: 'calc(2rem + env(safe-area-inset-bottom))' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Top grid */}
        <div className="grid md:grid-cols-3 gap-12 pb-12 border-b border-gold/15">
          {/* Brand */}
          <div>
            <h2 className="font-display text-2xl font-light italic text-ivory tracking-widest mb-4" style={{ letterSpacing: '0.1em' }}>
              Shridha Interior
            </h2>
            <div className="h-px w-12 bg-gold mb-5" />
            <p className="font-body text-ivory/50 text-sm leading-relaxed mb-6">
              Crafting Interiors, Building Legacies.
            </p>
            <p className="font-body text-ivory/40 text-xs leading-relaxed">
              A luxury interior design studio with studios in Pune, serving clients across India and beyond.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="section-label text-gold/70 mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <button onClick={() => scrollTo(href)} className="footer-link font-body text-sm group flex items-center gap-2">
                    <span className="h-px w-0 bg-gold/40 transition-all duration-300 group-hover:w-4" />
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social + Contact */}
          <div>
            <h3 className="section-label text-gold/70 mb-6">Follow Our Work</h3>
            <div className="flex gap-3 mb-8">
              {[
                { icon: <InstagramIcon />, href: '#', label: 'Instagram' },
                { icon: <PinterestIcon />, href: '#', label: 'Pinterest' },
                { icon: <WhatsAppIcon />, href: '#', label: 'WhatsApp' },
              ].map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 border border-gold/20 flex items-center justify-center text-ivory/50 hover:border-gold hover:text-gold transition-all duration-300"
                  style={{ borderRadius: '2px' }}
                >
                  {icon}
                </a>
              ))}
            </div>
            <p className="font-body text-ivory/40 text-xs leading-relaxed">
              Follow us on Instagram and Pinterest for daily design inspiration, behind-the-scenes, and project reveals.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6">
          <p className="font-body text-ivory/30 text-xs">
            © 2025 Shridha Interior. All Rights Reserved.
          </p>
          <p className="font-body text-ivory/20 text-xs flex items-center gap-1">
            Made with <Heart size={10} fill="#D4A853" stroke="none" className="text-gold" /> in Pune, India
          </p>
        </div>
      </div>
    </footer>
  );
}
