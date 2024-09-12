import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#202025",
          light: "#404045",
          dark: "#161621",
        },
        primary: {
          DEFAULT: "#7570FF",
          light: "#8580FF",
          dark: "#6560ee",
        },
      },
    },
  },
  plugins: [],
};
export default config;
