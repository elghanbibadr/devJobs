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
      "textColor":"#6e8098",
      "white":'#fff',
      "darkWhite":"#F4F6F8",
      "paleBlue":"#353641",
       "lighterCyan" :"eeeffc"
      
      },
      maxWidth: {
        '8xl': '110rem',
      }
  },
  plugins: [],
}
