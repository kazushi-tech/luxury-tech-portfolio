/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#090A0F",
        graphite: "#11131A",
        milk: "#F7F4EE",
        muted: "#B8B2C4",
        cyan: "#72E2FF",
        violet: "#A892FF",
        rose: "#FF8ED8",
        gold: "#D8B86A",
      },
      fontFamily: {
        sans: ["Inter", "Noto Sans JP", "Zen Kaku Gothic New", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 28px 90px rgba(114, 226, 255, 0.16)",
        rose: "0 26px 80px rgba(255, 142, 216, 0.18)",
      },
    },
  },
  plugins: [],
};
