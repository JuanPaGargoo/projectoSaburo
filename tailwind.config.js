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
        cafeAvellana: "#977862",
        cafeCacao: "#693e26",
        beigeArena: "#e7dcc9",
        blancoNiebla: "#f3f3f3",
        beigeRosado: "#ecb7b7",
        mostazaSuave: "#efb641",
        rosaTerracota: "#d28279",
        verdePastel: "#c4daba",
        verdeBosque: "#134a2f",
        verdeOlivo: "#788a70",
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            primary: "#693e26", 
            secondary: "#e7dcc9",
            
           
          },
        },
        dark: {
          colors: {
            primary: "#693e26",
            secondary: "#e7dcc9",
           
          },
        },
      },
    }),
  ],
};