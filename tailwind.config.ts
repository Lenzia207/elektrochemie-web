import type { Config } from "tailwindcss";

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/config/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        black: "#000000",
        white: "#FFFFFF",
        egmBlueTransparency: "var(--egmBlueTransparency)",
        egmPurple: "var(--egmPurple)",
        egmAccentBlue: "var(--egmAccentBlue)", // Changed to use CSS variable
        egmBlack: "var(--egm-black)",
        egmGray: "var(--egm-gray)",
      },
    },
  },
  plugins: [],
} satisfies Config;
