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
        'skill-option-bg-1': '#b1b1b1',
        'skill-option-bg-2': '#797979',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
