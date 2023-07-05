/** @type {import('tailwindcss').Config} */
export const content = ["./*.{html,js}"];
export const darkMode = "class";
export const theme = {
  extend: {
    colors: {
      mainC: "hsl(215, 51%, 70%)",
      secC: "hsl(178, 100%, 50%)",
      mainBg: "hsl(217, 54%, 11%)",
      cardBg: "hsl(216, 50%, 16%)",
      line: "hsl(215, 32%, 27%)",
    },
  },
};
export const plugins = [];
