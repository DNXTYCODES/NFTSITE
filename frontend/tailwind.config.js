/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "golden-brown": "linear-gradient(90deg, #996515, white)", // Adjust colors as needed
      },
      animation: {
        pulse: "pulse 1.5s ease-in-out infinite",
      },

      transitionProperty: {
        "transform-shadow": "transform, box-shadow",
      },
    },
  },
  plugins: [
    // require('@tailwindcss/aspect-ratio')
  ],
};
