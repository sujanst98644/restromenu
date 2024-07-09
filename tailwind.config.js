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
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.no-scrollbar': {
          /* For WebKit-based browsers (Chrome, Safari) */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          /* For Firefox */
          '-ms-overflow-style': 'none',  /* IE and Edge */
          'scrollbar-width': 'none',  /* Firefox */
        },
      };
      addUtilities(newUtilities);
    },
  ],
}