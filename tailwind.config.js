/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00ADB5",
        secondary: "#393E46",
        neutral: "#222831",
        accent: "#EEEEEE",
      },
      animation: {
        typing: "typing 2.4s steps(27), blink 1.06s infinite",
      },
      keyframes: {
        typing: {
          from: { width: "0" },
          to: { width: "27ch" },
        },
        blink: {
          "0%": {
            "border-right-color": "transparent",
          },
          "50%": {
            "border-right-color": "#EEEEEE",
          },
          "100%": {
            "border-right-color": "transparent",
          },
        },
      },
    },
  },
  plugins: [],
};
