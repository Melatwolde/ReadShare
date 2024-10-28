import { Config } from "tailwindcss";

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 4px 4px rgba(0, 0, 0, 0.25)',
        'custom2': '-12px 12px 10.7px rgba(0, 0, 0, 0.25)',
      },
      
    },
  },
  plugins: [],
};

export default config;