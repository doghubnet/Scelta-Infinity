import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0A2540",
        gold: "#D4AF37",
        cream: "#F9F6EF"
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          "sans-serif"
        ],
        serif: ["var(--font-playfair)", "Playfair Display", "serif"]
      },
      boxShadow: {
        luxury: "0 20px 40px -20px rgba(10, 37, 64, 0.35)"
      }
    }
  },
  plugins: []
};

export default config;
