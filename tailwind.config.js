/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["YourSansFont", "sans-serif"],
        serif: ["YourSerifFont", "serif"],
        mono: ["YourMonoFont", "monospace"],
        pacifico: ["Pacifico", "cursive"],
      },
    },
  },
  plugins: [],
};
