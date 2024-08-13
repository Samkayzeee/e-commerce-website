/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      lineHeight: {
        60:"70px"
      },
      width:{
        "30percent": "30%"
      },
      height:{
        100:"400px"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

