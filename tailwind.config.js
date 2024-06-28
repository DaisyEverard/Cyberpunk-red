/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      "main-dark-bg": '#971919',

      "main-light-text": '#fff',
      "warning-text-red": '#ff0',
      "inactive-grey": '#ccc',
    }
  },
  plugins: [],
};
