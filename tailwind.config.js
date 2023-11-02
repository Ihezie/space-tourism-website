/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bellefair: ["Bellefair", "serif"],
        barlow: ['Barlow', 'sans-serif'],
        barlowCondensed: ['Barlow Condensed', 'sans-serif']
      },
      colors: {
        fmBlue: "#0B0D17",
        fmPaleBlue: "#D0D6F9",
      },
    },
  },
  plugins: [],
};
/* font-family: 'Barlow',
sans-serif;
font-family: 'Barlow Condensed',
sans-serif;
font-family: 'Bellefair',
serif; */