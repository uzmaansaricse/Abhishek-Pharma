/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#E6F5FF',
          DEFAULT: '#B3E0FF',
          dark: '#80CCFF',
        },
        text: {
          light: '#666666',
          dark: '#333333',
        }
      },
    },
  },
  plugins: [],
}