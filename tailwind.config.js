/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "black-primary-app": "#111727",
        "grey-primary-app": "#E0E0E0",
        "blue-primary-app": "#4D77FF",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
