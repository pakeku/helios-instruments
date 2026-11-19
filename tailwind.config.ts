import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: { 700: "#1b3560", 800: "#112544", 900: "#0b1b33", 950: "#07111f" },
        gold: { 300: "#fcd788", 400: "#f7bf4f", 500: "#f2a922", 600: "#c77f06" },
      },
      fontFamily: {
        sans: ["var(--font-plex)", "system-ui", "sans-serif"],
        display: ["var(--font-archivo)", "var(--font-plex)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
