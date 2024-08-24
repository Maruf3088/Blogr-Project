/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    container: {
      padding: "1rem",
    },
    fontFamily: {
      overpass: ["Overpass", "sans-serif"],
      ubonton: ["Ubuntu", "sans-serif"],
    },

    extend: {},
  },
  plugins: [require("daisyui")],
};
