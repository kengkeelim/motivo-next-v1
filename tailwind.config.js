const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
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
