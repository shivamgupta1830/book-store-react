/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["IBM Plex Serif", "serif"],
      },
      boxShadow: {
        "3xl": "0px 0px 10px 0px rgba(255, 191, 0, 0.1)",
      },
      screens: {
        sm: "350px",
        // => @media (min-width: 640px) { ... }

        md: "720px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};
