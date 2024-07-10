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
      },
    },
  },
  plugins: [],
}
