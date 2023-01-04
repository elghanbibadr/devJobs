/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    colors:{
     "darkBlue":'#121721',
      "cardsBg":'#19202D',
      "lightCyan":"#6670E2",
      "textColor":"#6E807C",
      "white":'#fff'
      },
      maxWidth: {
        '8xl': '110rem',
      }
  },
  plugins: [],
}
