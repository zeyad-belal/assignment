/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        mainbg:'#F6F6F6',
        myYellow:'#FEEE00'
      },
      colors: {
        primary: '#2E2E2E',
        secondary: '#CFCFCF',
        E9E9E9: '#E9E9E9',
      }
    },
  },
  plugins: [],
}

