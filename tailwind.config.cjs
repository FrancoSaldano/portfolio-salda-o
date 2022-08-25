/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        'title-hammer':['Hammersmith One', 'sans-serif'],
        'text-montserrat':['Montserrat', 'sans-serif'],
        'detail-roboto':['Roboto','sans-serif']
      }
    },
  },
  plugins: [],
}
