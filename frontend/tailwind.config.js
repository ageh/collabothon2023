const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      light: {
        colors: {
          primary: {
            foreground: "#002E3C",
            DEFAULT: "#FFD700",
          },
          secondary: {
            foreground: "#ffffff",
            DEFAULT: "#002E3C",
          },
        },
      },
    },
  })],
}