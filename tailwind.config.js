/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        karantina: ['Karantina', 'cursive'],
      },
      colors: {
        cinza: '#1A1A1A',
        marrom: '#CD8225',
      },
    },
  },
  plugins: [],
}