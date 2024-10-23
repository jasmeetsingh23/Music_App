/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        spotify: ["Montserrat", "Poppins", "sans-serif"], // Add both as options, fallback to sans-serif
      },
    },
  },
  plugins: [],
};
