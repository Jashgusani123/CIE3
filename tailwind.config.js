/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      animation: {
        bounce: "bounce 4s infinite",
        pulse: "pulse 3s infinite",
      },
      keyframes: {
        bounce: {
          "0%, 100%": { transform: "translateY(-70%)", opacity: "0.9" },
          "50%": { transform: "translateY(0)", opacity: "1" },
        },
        pulse: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.9" },
          "50%": { transform: "scale(1.7)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
