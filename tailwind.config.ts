import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-red": "#f5001e",
        "brand-purple": "#5324fd",
        "brand-yellow": "#fcc636",
        "brand-black": "#1f1f1f",
        "brand-light-black": "2b2b2b",
      },
    },
  },
  plugins: [],
};
export default config;
