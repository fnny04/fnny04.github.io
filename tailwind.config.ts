import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: {
          blue: {
            100: "#120f1f",
            200: "#131022",
          },
          gray: {
            100: "#1F1C2D",
            200: "#718096",
          },
        },
      },
    },
  },

  plugins: [],
};
export default config;
