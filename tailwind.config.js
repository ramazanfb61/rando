/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        "header" : "#1D2D50",
        "main" : "#F8F4EA",
        "button" : "#1E5F74",
        
      },
      textColor:{
        "font" : "#E7F6F2",
      }
    },
  },
  plugins: [],
}
