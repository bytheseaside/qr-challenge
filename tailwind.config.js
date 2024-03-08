/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grey: {
          DEFAULT: '#7D889E'
        },
        blue: {
          DEFAULT: '#3685FF',
          dark: '#2C7DFA',
          darkNavy: '#1F314F',
        },
      }
    },
  },
  plugins: [],
}

