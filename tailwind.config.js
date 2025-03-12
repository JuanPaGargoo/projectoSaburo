/** @type {import('tailwindcss').Config} */
const { heroui } = require("@heroui/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "system-ui"],
        bebas: ["Bebas Neue", "system-ui"],
        oleo: ["Oleo Script", "system-ui"],
        poppins: ["Poppins", "system-ui"],
      },
      colors: {
        vino: "#7e013e",
        arcilla: "#d4665a",
        "cafe-avellana": "#977862",
        "cafe-cacao": "#693e26",
        "beige-arena": "#e7dcc9",
        "blanco-niebla": "#f3f3f3",
        "beige-rosado": "#ecb7b7",
        "mostaza-suave": "#efb641",
        "rosa-terracota": "#d28279",
        "verde-pastel": "#c4daba",
        "verde-bosque": "#134a2f",
        "verde-olivo": "#788a70",
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};


