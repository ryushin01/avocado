/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    backgroundSize: {
      6: '1.5rem',
    },
    backgroundPosition: {
      'right-center': 'right center',
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
    },
    extend: {
      backgroundImage: {
        menu: "url('/images/header/icon_menu.svg')",
      },
    },
  },
  plugins: [],
};
