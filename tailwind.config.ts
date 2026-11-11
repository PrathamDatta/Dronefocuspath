import path from "node:path";
import type { Config } from "tailwindcss";
const config: Config = {
  content: [path.join(__dirname, "app/**/*.{ts,tsx}"), path.join(__dirname, "components/**/*.{ts,tsx}")],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#801E62", dark: "#5A1545", deep: "#2A0A21", soft: "#F7EEF4" },
        accent: { DEFAULT: "#38B6FF", light: "#9BD9FF", dark: "#0B7FC4" },
        ink: { DEFAULT: "#1D1421", muted: "#5E5365" },
        line: "#E8DFE5",
      },
      fontFamily: { sans: ["var(--font-sans)", "system-ui", "sans-serif"], mono: ["var(--font-mono)", "monospace"] },
      fontSize: { xs: "12px", sm: "14px", base: "16px", lg: "18px", xl: "24px", "2xl": "32px", "3xl": "48px", "4xl": "64px" },
      boxShadow: { card: "0 24px 48px -24px rgba(90,21,69,.28)" },
    },
  },
  plugins: [],
};
export default config;
