const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    container: {
      center: true,
      padding: "3px"
    },
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        white: "#fff",
        textPrimayWhite: "#000",
        textSecondaryWhite: "#999",
        textPrimaryDark: "#fff",
        textSecondaryDark: "#999",
        primary: "#245ce9",
        primaryLight: "#2433e9",
        darkBg: '#131314',


      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}