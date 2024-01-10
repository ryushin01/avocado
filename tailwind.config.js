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
    },
    extend: {
      animation: {
        cover: 'cover 0.3s linear 0.1s backwards',
      },
      keyframes: {
        cover: {
          '0%': { top: '-100%' },
          '100%': { top: '0' },
        },
      },
    },
  },
  plugins: [],
};
