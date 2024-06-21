/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        playfair:['Playfair Display','serif'],
        sora: ['Sora', 'sans-serif'],
      },
    },
  },
  plugins: [],
}