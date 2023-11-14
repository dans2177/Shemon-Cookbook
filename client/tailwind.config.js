module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Process CSS in React components
    "./public/index.html", // Process CSS in your HTML file
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas: ["Bebas Neue", "cursive"],
        montserrat: ["Montserrat", "sans-serif"],
        architectsDaughter: ["Architects Daughter", "cursive"],
      },
      colors: {
        customBrown: "#88815F",
        customTan: "#F2E7E5",
      },
    },
  },
  plugins: [],
};
