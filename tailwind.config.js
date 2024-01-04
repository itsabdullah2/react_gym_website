/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "main-bg": "#21d93f",
        "half-transparent": "rgba(0, 0, 0, 0.8)"
      },
      backgroundImage: {
        "home-section": "url('/src/data/landing.jpg')",
        "about-section": "url('/src/data/about-hero.jpg')",
        "services-section": "url('/src/data/services-section.jpg')"
      },
      borderWidth: {
        1: "1px"
      },
      gridTemplateColumns: {
        "auto-fill-450": "repeat(auto-fill, minmax(450px, 1fr))",
        "auto-fill-400": "repeat(auto-fill, minmax(400px, 1fr))",
        "auto-fill-350": "repeat(auto-fill, minmax(350px, 1fr))",
        "3fr": "3fr 3fr"
      },
      boxShadow: {
        "shadow-xl": "0 0 5px 0px rgba(0,0,0, 0.5)"
      },
      screens: {
        sm: { max: "767px" },
        // => @media (min-width: 640px and max-width: 767px) { ... }

        md: { min: "768px", max: "1279px" },
        // => @media (min-width: 768px and max-width: 1023px) { ... }

        lg: { min: "1024px", max: "1279px" },
        // => @media (min-width: 1024px and max-width: 1279px) { ... }

        xl: { min: "1280px", max: "1535px" },
        // => @media (min-width: 1280px and max-width: 1535px) { ... }

        "2xl": { min: "1536px" }
        // => @media (min-width: 1536px) { ... }
      },
      width: {
        400: "400px",
        760: "760px",
        780: "780px",
        800: "800px",
        1000: "1000px",
        1200: "1200px",
        1400: "1400px"
      }
    }
  },
  plugins: []
};
