/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#5D50C6',
        'secondary': '#F85E9F',
      }
    },
  },
  plugins: [],
}

