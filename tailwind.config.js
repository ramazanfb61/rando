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
        "header" : "#2C394B",
        "main" : "#EEEEEE",
        "button" : "#1E5F74",
        "dark" : "#2C3639"
      },
      textColor:{
        "font" : "#E7F6F2",
        "button" : "#1E5F74",
      },
      borderColor:{
        "button" : "#1E5F74",
      }
    },
  },
  plugins: [],
}
