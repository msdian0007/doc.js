const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: '#2563eb',
      secondary: '#93c5fd',
      light: '#dbeafe',
      dark: '#eab308',
      singlePage: "var(--pageBg)",
      headerColor: "#FFAE6D",
    }
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class",
});

