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
    extend: {
      backgroundImage: {
        menu: "url('/images/header/icon_menu.svg')",
      },
    },
  },
  plugins: [],
};
