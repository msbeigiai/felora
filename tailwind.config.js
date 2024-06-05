/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "app-background": "url('./assets/background-image.jpg')",
      },
      fontFamily: {
        afsaneh: ["afsaneh", "sans-serif"],
        brittany: ["brittany", "sans-serif"],
      },
    },
  },
  plugins: [],
};
