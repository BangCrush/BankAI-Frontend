const px0_100 = { ...Array.from(Array(101)).map((_, i) => `${i}px`) };
const px0_1000 = { ...Array.from(Array(1001)).map((_, i) => `${i}px`) };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "main-color": "#8785F6",
        "sub-color": "#C9C8FF",
        "black-900": "#333333",
        "gray-900": "#4D4D4D",
        "gray-800": "#E1E1E1",
        "gray-700": "#BFBFBF",
        "white-100": "#E1E9E5",
      },
    },
  },
  plugins: [],
};
