/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: "Montserrat",
      },
      colors: {
        primary: "#03045E",
        // primary: "rgb(17, 24, 39)",
      }
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
