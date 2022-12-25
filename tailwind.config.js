/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'predio': "url('https://csbc.sbc.org.br/2022/wp-content/uploads/2021/06/maxresdefault.jpg')",
      }
    },
  },
  plugins: [],
}
