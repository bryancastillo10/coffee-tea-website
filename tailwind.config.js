/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        cursive: ["Courgette", "cursive"],
        cursiveTwo: ["Cookie", "cursiveTwo"],
      },
      colors: {
        primary: "#854d3d",
        secondary: "#4a1e1b",
        tertiary: "#D87C1A",
        brandDark: "#270c03",
      },
      container: {
        center: true,
        padding: { DEFAULT: "1rem", sm: "2rem" },
      },
    },
  },
  plugins: [],
};
