/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'predio': "url('/src/images/uff-praia-vermelha.png')",
      }
    },
  },
  plugins: [],
}
