module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    "src/**/*.js",
    "src/**/*.jsx",
    "src/**/*.ts",
    "src/**/*.tsx",
    "public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        "main-color": "#260C31",
      },
      fontFamily: {
        "Dancing-Script": ["Dancing Script", "cursive"],
      },
      height: {
        70: "70rem",
      },
      fontSize: {
        "1sm": "10px",
        "7xl": "7rem",
        "8xl": "8rem",
        "9xl": "9rem",
        "10xl": "10rem",
        "11xl": "11rem",
        "12xl": "12rem",
      },
    },
  },
  variants: {},
  plugins: [],
};
