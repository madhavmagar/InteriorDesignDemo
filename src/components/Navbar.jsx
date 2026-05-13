import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <>
      {/* ── Desktop / Tablet Nav ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 hidden md:flex items-center justify-between px-8 lg:px-16 py-5 transition-all duration-500 ${
          scrolled ? 'nav-scrolled' : 'bg-transparent'
        }`}
      >
        {/* Logo */}
        <button
          onClick={() => scrollTo('#hero')}
          className="font-display text-xl font-light tracking-widest text-charcoal uppercase hover:text-sienna transition-colors duration-300"
          style={{ letterSpacing: '0.18em' }}
          Lumina Interior

        {/* Links */}
        <div className="flex items-center gap-8">
          {navItems.map(({ label, href }) => (
            <button
              key={label}
              onClick={() => scrollTo(href)}
              className={`nav-link font-body text-sm font-medium tracking-widest uppercase transition-colors duration-200 ${
                activeSection === href.slice(1)
                  ? 'text-sienna'
                  : scrolled
                  ? 'text-charcoal'
                  : 'text-charcoal'
              }`}
              style={{ letterSpacing: '0.12em' }}
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('#contact')}
            className="btn-primary text-xs py-3 px-6"
          >
            Get Consultation
          </button>
        </div>
      </nav>

      {/* ── Mobile Top Bar ── */}
      <div className="fixed top-0 left-0 right-0 z-50 flex md:hidden items-center justify-between px-5 py-4 bg-ivory/90 backdrop-blur-sm border-b border-gold/20">
        <button
          onClick={() => scrollTo('#hero')}
          className="font-display text-base font-light tracking-widest text-charcoal uppercase"
          style={{ letterSpacing: '0.14em' }}
          Lumina Interior
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-charcoal p-1"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ── Mobile Dropdown Menu ── */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-ivory flex flex-col items-center justify-center gap-8 md:hidden">
          <button
            className="absolute top-5 right-5 text-charcoal"
            onClick={() => setMobileOpen(false)}
          >
            <X size={24} />
          </button>
          {navItems.map(({ label, href }) => (
            <button
              key={label}
              onClick={() => scrollTo(href)}
              className="font-display text-4xl italic font-light text-charcoal hover:text-sienna transition-colors duration-300"
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => { scrollTo('#contact'); setMobileOpen(false); }}
            className="btn-primary mt-4"
          >
            Get Consultation
          </button>
        </div>
      )}


    </>
  );
}
