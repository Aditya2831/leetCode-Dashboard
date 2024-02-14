/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
          orbitron: ["Orbitron", "sans-serif"],
          chakraPetch:["Chakra Petch","sans-serif"],
      }
    },
  },
  plugins: [],
}

