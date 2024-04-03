/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
<<<<<<< HEAD
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/container-queries")],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#1C1E23",
      white: "#ffffff",
      orange: "#FF7555",
    },
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
    },
  },

  plugins: [],
=======
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
  ],
  theme: {
    extend: {
      colors: {
        high: "#FF7555",
      },
      fontFamily: {
        Rubik: ["Rubik"],
      },
    },
  },
>>>>>>> d428919fab58a8cf0f0d044a6dda910af4ea3eb2
};
