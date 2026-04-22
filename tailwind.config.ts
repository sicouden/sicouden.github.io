import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0a0a0a",
        coal: "#151515",
        paper: "#fffaf0",
        chalk: "#f7f2e7",
        line: "#d8d1c3",
        muted: "#6d675f",
        ugent: "#1f64c8",
        signal: "#ffe600"
      },
      fontFamily: {
        sans: [
          "Arial",
          "Helvetica Neue",
          "Helvetica",
          "system-ui",
          "sans-serif"
        ],
        display: [
          "Arial Black",
          "Arial",
          "Helvetica Neue",
          "system-ui",
          "sans-serif"
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Consolas",
          "Liberation Mono",
          "monospace"
        ]
      },
      boxShadow: {
        editorial: "0 24px 80px rgba(0, 0, 0, 0.18)"
      }
    }
  },
  plugins: []
};

export default config;
