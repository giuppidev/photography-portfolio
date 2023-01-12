/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      mymd: "962px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },

    extend: {
      fontFamily: {
        bebas: ["Bebas Neue", "cursive"],
        ptsans: ['"PT sans"', "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
