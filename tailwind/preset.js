const {stGreen} = require('./colors');
const {gray} = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        default: gray[800],
        green: stGreen,
        brand: stGreen,
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}