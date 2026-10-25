/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx,php}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      colors: {
        navy: {
          900: "#0b132b",
          950: "#0a1532",
          DEFAULT: "#0d1b3e",
        },
        gold: {
          DEFAULT: "#facc15",
          light: "#fde047",
          dark: "#eab308",
        },
      },
    },
  },
  plugins: [],
};
