/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
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