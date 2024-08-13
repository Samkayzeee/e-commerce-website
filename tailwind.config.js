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
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

