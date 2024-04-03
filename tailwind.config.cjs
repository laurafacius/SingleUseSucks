/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
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
};
