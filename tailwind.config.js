/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["IBM Plex Serif", "serif"],
      },
      boxShadow: {
        "3xl": "0px 0px 10px 1px rgba(255, 191, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
