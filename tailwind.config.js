/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "roboto-black": ["Roboto Black"],
        "roboto-blackitalic": ["Roboto BalckItalic"],
        "roboto-bold": ["Roboto Bold"],
        "roboto-regular": ["Roboto Regular"],
      },
    },
  },
  plugins: [],
};
