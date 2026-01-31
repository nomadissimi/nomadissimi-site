/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
 theme: {
  extend: {
    typography: {
      DEFAULT: {
        css: {
          h2: {
            color: "#4B5D44",        // dark olive
            fontWeight: "600",
            marginTop: "2.2em",      // tighter than default
            marginBottom: "0.6em",
          },
          h3: {
            color: "#5C6F55",        // softer olive
            fontWeight: "600",
            marginTop: "1.8em",
            marginBottom: "0.5em",
          },
          p: {
            marginTop: "0.75em",
          },
        },
      },
    },
  },
},
  plugins: [require("@tailwindcss/typography")],
};

