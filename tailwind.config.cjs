/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      gupter: "Gupter, serif",
      ptSans: "PT Sans, sans-serif",
    },
    // screens: {
    //   sm: { max: "767px", min: "320px" },
    //   md: { max: "1023px", min: "768px" },
    //   lg: { max: "1719px", min: "1024px" },
    //   xl: "1720px",
    // },
    // screens: {
    //   sm: "767px",
    //   md: "1023px",
    //   lg: "1719px",
    //   xl: "1720px",
    // },
    // screens: {
    //   sm: { max: "767px" },
    //   md: { max: "1023px" },
    //   lg: { max: "1719px" },
    //   xl: { max: "3600px" },
    // },
    screens: {
      sm: "300px",
      md: "768px",
      lg: "1128px",
    },
    extend: {
      boxShadow: {
        custom: "0px 1px 4px rgba(0, 0, 0, 0.1)",
      },
    },
    colors: {
      bgDark: "#000D1D",
      bgWhite: "#FFFFFF",
      primary: "#F75B31",
      subtleGrey: "#8F90A6",
      lighterGrey: "#555770",
    },
  },
  plugins: [],
  darkMode: "class",
};
