const { hover } = require("@testing-library/user-event/dist/hover");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        main: ["Outfit"],
        body: ["Inter"],
        sub: ["Avenir"],
      },
      colors: {
        primary: {
          100: "#012811",
          200: "#00210D",
          300: "#090C08",
        },
        secondary: {
          100: "#F3A218",
          200: "#64AB80",
          300: "#EEF4F0",
        },

        white: {
          100: "#fff",
          200: "#F8FCF9",
          300: "#F9FAFB",
        },
      },
      borderImageSource: {
        gradient: "linear-gradient(90deg, #F3A218 0%, #64AB80 100%)",
      },
      borderImageSlice: {
        gradient: "1",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
