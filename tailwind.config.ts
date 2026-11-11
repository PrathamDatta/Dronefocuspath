import path from "node:path";
import type { Config } from "tailwindcss";
const config: Config = {
  content: [path.join(__dirname, "app/**/*.{ts,tsx}"), path.join(__dirname, "components/**/*.{ts,tsx}")],
  theme: {
    extend: {
      colors: {
        paper: "#F6F7F4",
        panel: "#FFFFFF",
        graphite: { DEFAULT: "#12171A", deep: "#0C1012", soft: "#E8EBE6" },
        ink: { DEFAULT: "#12171A", muted: "#56635D" },
        line: "#D7DDD3",
        signal: { DEFAULT: "#1FAE6E", dim: "#17804F", soft: "#E3F3EA" },
        amber: { DEFAULT: "#D98B2B", soft: "#FBEEDC" },
      },
      fontFamily: { sans: ["var(--font-sans)", "system-ui", "sans-serif"], mono: ["var(--font-mono)", "monospace"] },
      fontSize: { xs: "12px", sm: "14px", base: "16px", lg: "18px", xl: "24px", "2xl": "32px", "3xl": "48px", "4xl": "64px" },
    },
  },
  plugins: [],
};
export default config;
