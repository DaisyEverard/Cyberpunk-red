/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // backgrounds
        'main-dark-bg': '#971919',
        'gradient-dark-bg': '#530b0b',
        'gradient-light-bg': '#ff0000',
        'skill-option-bg-1': '#b1b1b1',
        'skill-option-bg-2': '#797979',
        'active-bg-grey': '#d5d5d5',

        'table-header-bg': '#e3e3e3',

        // text
        'main-light-text': '#fff',
        'table-header-text': '000',

        // generic
        'inactive-grey': '#ccc',
        'heal-green': '#080',
        'damage-red': '#a11',

        'light-red-1': '#fcd8d8',
        'light-red-2': '#ffb9b9',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
