/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        night: '#0f172a',
        carbon: '#111827',
        steel: '#1f2937',
        neon: '#22d3ee',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-66%)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 0px #22d3ee' },
          '50%': { boxShadow: '0 0 24px #22d3ee' },
        },
      },
      animation: {
        slide: 'slide 4s ease-in-out',
        glow: 'glow 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
