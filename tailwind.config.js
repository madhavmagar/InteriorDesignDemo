/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#F5F0E8',
        charcoal: '#1C1C1C',
        'charcoal-soft': '#3A3A3A',
        sienna: '#C4622D',
        gold: '#D4A853',
        'ivory-dark': '#EDE7D9',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(3.5rem, 9vw, 6rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display': ['clamp(2.5rem, 5vw, 4.5rem)', { lineHeight: '1.1' }],
        'section': ['clamp(2rem, 3.5vw, 3.5rem)', { lineHeight: '1.15' }],
      },
      spacing: {
        'section': '120px',
        'section-sm': '80px',
      },
      letterSpacing: {
        'label': '0.2em',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease forwards',
        'fade-in': 'fadeIn 0.8s ease forwards',
        'slide-in': 'slideIn 0.3s ease forwards',
        'cursor-grow': 'cursorGrow 0.2s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'scaleX(0)', transformOrigin: 'left' },
          '100%': { transform: 'scaleX(1)', transformOrigin: 'left' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      borderRadius: {
        DEFAULT: '4px',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
