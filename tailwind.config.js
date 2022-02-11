const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/pages/**/*.js", "./src/components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
    },
    extend: {},
  },
  variants: {
    extend: {
      textColor: ["active"],
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const extendUnderline = {
        ".underline": {
          textDecoration: "underline #4C1D95 solid",
          textUnderlinePosition: "under",
        },
      };
      addUtilities(extendUnderline);
    }),
  ],
};
