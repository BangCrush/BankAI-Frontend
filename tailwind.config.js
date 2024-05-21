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
      width: px0_1000,
      height: px0_1000,
      borderRadius: px0_1000,
      fontSize: px0_100,
      lineHeight: px0_100,
      padding: px0_1000,
      margin: px0_1000,
      colors: {
        "main-color": "#8785F6",
        "sub-color": "#C9C8FF",
        "black-900": "#333333",
        "gray-900": "#4D4D4D",
        "gray-800": "#E1E1E1",
        "gray-700": "#BFBFBF",
        "gray-input": "#F8F8FA",
        "gray-placeholder": "#CCCCCC",
        "white-100": "#E1E9E5",
      },
    },
  },
  plugins: [],
};
