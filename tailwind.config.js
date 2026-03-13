/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        vibes:     ['"Great Vibes"', 'cursive'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        josefin:   ['"Josefin Sans"', 'sans-serif'],
      },
      colors: {
        rose:  '#e8405a',
        blush: '#f9c4d0',
        cream: '#fff8f5',
        gold:  '#c9a96e',
        deep:  '#1a0a10',
        soft:  '#6d3245',
      },
      keyframes: {
        pulse2:     { '0%,100%': { opacity: '0.7' }, '50%': { opacity: '1' } },
        loaderFill: { from: { width: '0%' },          to:   { width: '100%' } },
        fadeUp:     { from: { opacity: '0', transform: 'translateY(30px)' }, to: { opacity: '1', transform: 'none' } },
        fadeDown:   { from: { opacity: '0', transform: 'translateY(-20px)' }, to: { opacity: '1', transform: 'none' } },
        heartbeat:  { '0%,100%': { transform: 'scale(1)' }, '50%': { transform: 'scale(1.2)' } },
        floatUp: {
          '0%':   { transform: 'translateY(0) rotate(0deg)',      opacity: '0'   },
          '10%':  { opacity: '0.6' },
          '90%':  { opacity: '0.3' },
          '100%': { transform: 'translateY(-110vh) rotate(360deg)', opacity: '0' },
        },
        musicPulse: {
          '0%,100%': { boxShadow: '0 0 0 0 rgba(232,64,90,0.4)' },
          '50%':     { boxShadow: '0 0 0 15px rgba(232,64,90,0)' },
        },
      },
      animation: {
        pulse2:      'pulse2 1.5s ease-in-out infinite',
        loaderFill:  'loaderFill 2.5s ease forwards',
        fadeUp:      'fadeUp 1.2s ease both',
        fadeDown:    'fadeDown 1s ease both',
        heartbeat:   'heartbeat 1.5s ease-in-out infinite',
        floatUp:     'floatUp linear infinite',
        musicPulse:  'musicPulse 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
