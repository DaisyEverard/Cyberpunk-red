/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'main-dark-bg': '#971919',
        'main-light-text': '#fff',
        'inactive-grey': '#ccc',
        'heal-green': '#080',
        'damage-red': '#a11',
      },
    },
  },
  plugins: [],
};
