/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        padding: "2rem",
        center: true,
      },
      colors: {
        primary: "#292C62",
        hover: "#75ba75",
        active: "#75ba75",
        navbar: "#F8F9FA",
        hero: "#F0F1F5",
        secColor: "#fec76f",
        test: "#71a3c1",

      },
      screens: {
        xs: "360px",
      },
    },
  },

  plugins: [],
};
