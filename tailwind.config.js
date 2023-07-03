/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      listStyleType: {
        roman: 'upper-roman',
      },
      colors: {
        'primary': {
          light: '#7dd3fc',
          DEFAULT: '#7dd3fc',
          dark: '#047857',
        },
        'secondary': {
          light: '#042f2e',
          DEFAULT: '#042f2e',
          dark: '#f0fdf4',
        },
        'link': {
          light: '#14532d',
          DEFAULT: '#14532d',
          dark: '#99f6e4',
        },
        'shadow': {
          light: '#66c1ed',
          DEFAULT: '#66c1ed',
          dark: '#065f46',
        },
        'transparent-dark': '#00000026',
        'transparent-false': '#ff6ba945',
        'transparent-true': '#89ff6b45',
      }
    },
  },
  plugins: [],
}
