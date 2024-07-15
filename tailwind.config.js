/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // adjust according to your project structure
  ],
  theme: {
    extend: {
      colors: {
        'opsh-primary': '#1C4980',
        'opsh-secondary': '#3854A5',
        'opsh-background': '#EBEBEB',
        'opsh-muted': '#585858',
        'opsh-grey': '#999999',
        'opsh-darkgrey': '6A6A6A',
        'opsh-text': '#8E8E8E',
        'opsh-success': '#4FAE51',
        'opsh-warning': '#F7C600',
        'opsh-danger': '#F23547',

      },
    },
  },
  plugins: [],
}
