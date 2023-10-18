/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      darkMode: "class",
      colors: {
        primary: "#105d50",
        lmsgreen: "#105d50",
        secondary: "#F5A70D",
      },
      fontFamily: {
        roboto: ["Roboto", "sans"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".bg-custom-gradient": {
          background: "linear-gradient(to right, #ffffff 3%, #FF9800 3%)",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};