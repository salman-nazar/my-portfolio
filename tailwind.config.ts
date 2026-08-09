import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B1220",
        paper: "#F5F3EE",
        amber: "#FFB454",
        teal: "#5EEAD4",
        slate: {
          border: "#1E293B",
          muted: "#8B96A8",
        },
      },
      fontFamily: {
        display: ["Georgia", "serif"],
        body: ["system-ui", "sans-serif"],
        mono: ["ui-monospace", "monospace"],
      },
      backgroundImage: {
        grid: "linear-gradient(#1E293B 1px, transparent 1px), linear-gradient(90deg, #1E293B 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
    },
  },
  plugins: [],
};

export default config;