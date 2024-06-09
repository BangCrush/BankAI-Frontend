const px0_100 = { ...Array.from(Array(101)).map((_, i) => `${i}px`) };
const px0_1000 = { ...Array.from(Array(1001)).map((_, i) => `${i}px`) };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      minWidth: px0_1000,
      minHeight: px0_1000,
      maxWidth: px0_1000,
      maxHeight: px0_1000,
      inset: px0_1000,
      gap: px0_100,
      width: px0_1000,
      height: px0_1000,
      borderRadius: px0_1000,
      fontSize: px0_100,
      lineHeight: px0_100,
      padding: px0_1000,
      margin: px0_1000,
      boxShadow: {
        custom:
          "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;",
      },
      borderWidth: px0_1000,
      colors: {
        "main-color": "#8785F6",
        "sub-color": "#C9C8FF",
        "err-color": "#D10000",
        "main-bg": "#F5F5F5",
        "black-900": "#333333",
        "gray-900": "#4D4D4D",
        "gray-semi": "#6A6A6A",
        "gray-800": "#E1E1E1",
        "gray-700": "#BFBFBF",
        "gray-border": "#E9E9E9",
        "gray-input": "#F8F8FA",
        "gray-placeholder": "#CCCCCC",
        "gray-menu": "#EBEBEB",
        "white-100": "#E1E9E5",
      },
    },
  },
  plugins: [],
};
