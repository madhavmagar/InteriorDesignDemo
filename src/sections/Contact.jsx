import { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-section md:py-section px-6 md:px-12 lg:px-20 xl:px-32 bg-ivory">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="reveal flex items-center gap-4 mb-6">
            <div className="gold-accent-line" />
            <span className="section-label">Let's Connect</span>
          </div>
          <h2 className="reveal font-display italic font-light text-charcoal" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', lineHeight: '1.1', maxWidth: '600px' }}>
            Begin Your Design <span className="text-sienna">Journey</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <p className="reveal font-body text-charcoal-soft mb-10" style={{ lineHeight: '1.85' }}>
              Whether you're building your dream home, reimagining your workspace, or simply curious — we'd love to hear from you. Every great space starts with a conversation.
            </p>
            <div className="space-y-7 reveal reveal-delay-1">
              {[
                { icon: <Phone size={18} strokeWidth={1.5} />, label: 'Phone', value: '+91 98765 43210', href: 'tel:+919876543210' },
                { icon: <Mail size={18} strokeWidth={1.5} />, label: 'Email', value: 'hello@shridhainterior.com', href: 'mailto:hello@shridhainterior.com' },
                { icon: <MapPin size={18} strokeWidth={1.5} />, label: 'Studio', value: '14/2, Kalyani Nagar, Pune — 411006\nMaharashtra, India' },
              ].map(({ icon, label, value, href }) => (
                <div key={label} className="flex gap-5 items-start">
                  <div className="w-10 h-10 border border-gold/40 flex items-center justify-center text-sienna flex-shrink-0 mt-0.5">{icon}</div>
                  <div>
                    <p className="section-label text-[0.65rem] mb-1">{label}</p>
                    {href ? (
                      <a href={href} className="font-body text-charcoal hover:text-sienna transition-colors duration-200">{value}</a>
                    ) : (
                      <p className="font-body text-charcoal whitespace-pre-line">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="reveal reveal-delay-2 mt-10 map-placeholder relative overflow-hidden" style={{ height: '200px' }}>
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-charcoal-soft/50">
                <MapPin size={28} strokeWidth={1} />
                <span className="font-body text-xs tracking-widest uppercase">Kalyani Nagar, Pune</span>
              </div>
              <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
                <defs><pattern id="mapgrid" width="24" height="24" patternUnits="userSpaceOnUse"><path d="M 24 0 L 0 0 0 24" fill="none" stroke="#D4A853" strokeWidth="0.5" /></pattern></defs>
                <rect width="100%" height="100%" fill="url(#mapgrid)" />
              </svg>
            </div>
          </div>
          <div className="reveal reveal-delay-1">
            <form onSubmit={handleSubmit} noValidate>
              {[
                { id: 'contact-name', name: 'name', type: 'text', label: 'Your Name', auto: 'name' },
                { id: 'contact-phone', name: 'phone', type: 'tel', label: 'Phone Number', auto: 'tel' },
                { id: 'contact-email', name: 'email', type: 'email', label: 'Email Address', auto: 'email' },
              ].map(({ id, name, type, label, auto }) => (
                <div className="form-group" key={id}>
                  <input id={id} type={type} name={name} placeholder=" " value={form[name]} onChange={handleChange} className="form-input" autoComplete={auto} />
                  <label htmlFor={id} className="form-label">{label}</label>
                </div>
              ))}
              <div className="form-group">
                <textarea id="contact-message" name="message" placeholder=" " value={form.message} onChange={handleChange} rows={4} className="form-input resize-none" />
                <label htmlFor="contact-message" className="form-label">Tell us about your project</label>
              </div>
              <button type="submit" className="btn-primary w-full justify-center mt-4" id="contact-submit">
                {submitted ? <><span>Message Sent ✓</span></> : <><span>Send Message</span><Send size={15} /></>}
              </button>
              {submitted && <p className="text-center font-body text-sm text-sienna mt-4">Thank you! We'll be in touch within 24 hours.</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
