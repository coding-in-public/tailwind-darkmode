/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: {
          1: "hsl(288 95.8% 90.6%)",
          2: "hsl(168 83.8% 78.2%)",
        },
        bkg: "hsl(210 40% 98%)",
        content: "hsl(217 32.6% 17.5%)",
      },
      animation: {
        "spin-slower": "spin 35s ease infinite",
        "spin-slow": "spin 25s ease-in-out infinite reverse",
      },
    },
  },
  plugins: [],
};
