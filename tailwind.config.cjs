/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: "class",
  theme: {
    colors:{
     "darkBlue":'#121721',
      "cardsBg":'#19202D',
      "lightCyan":"#6670E2",
      "textColor":"#6E807C",
      "white":'#fff',
      "darkWhite":"#F4F6F8"
      
      },
      maxWidth: {
        '8xl': '120rem',
      }
  },
  plugins: [],
}
