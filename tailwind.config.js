/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    backgroundSize: {
      4: '1rem',
      6: '1.5rem',
      8: '2rem',
    },
    backgroundPosition: {
      'right-center': 'right center',
      center: 'center center',
    },
    colors: {
      primary: '#FF5100',
      secondary: '#76CC1C',
      grayscaleA: '#000',
      grayscaleB: '#111',
      grayscaleC: '#666',
      grayscaleD: '#999',
      grayscaleE: '#777',
      grayscaleF: '#eee',
      grayscaleG: '#fff',
      bggHeavy: '#df4751',
      bggMedium: '#ff6b26',
      bggLight: '#5bda98',
      bggHigh: '#1d804c',
      bggLow: '#1978b3',
    },
    extend: {
      animation: {
        waterfall: 'waterfall 0.3s linear 0.01s backwards',
        spread: 'spread 0.15s linear 0.01s backwards',
      },
      keyframes: {
        waterfall: {
          '0%': { top: '-100%' },
          '100%': { top: '0' },
        },
        spread: {
          '0%': { width: 0, height: 0 },
          '100%': { width: '100%', height: '100%' },
        },
      },
    },
  },
  plugins: [],
};
