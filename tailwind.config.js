/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // adjust according to your project structure
  ],
  theme: {
    extend: {
      fontSize: {
        'xxs': ['0.70rem', '1rem'], // font-size of 0.70rem and line-height of 1rem
      },
      colors: {
        'opsh-primary': '#1C4980',
        'opsh-secondary': '#3854A5',
        'opsh-third': '#233142',
        'opsh-fourth': '#0084ff',
        'opsh-background': '#F4F5F7',
        'opsh-muted': '#6C757D',
        'opsh-grey': '#B0B3B8',
        'opsh-darkgrey': '#4B4B4B',
        'opsh-text': '#5C5C5C',
        'opsh-success': '#28A745',
        'opsh-warning': '#FFC107',
        'opsh-danger': '#DC3545',
        'opsh-black': '#212529'

      },
    },
  },
  plugins: [],
}
