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
        cream: '#faf7f5',
        blush: '#f6edf0',
        ink: {
          950: '#211820',
          900: '#2c202a',
          700: '#4f3f4b',
          500: '#7f6c79',
          400: '#9e8b97',
          300: '#c3b2bc',
          200: '#e0d3da',
        },
        rose: {
          50: '#faf3f4',
          100: '#f5e6e9',
          200: '#ecd2d9',
          300: '#dcb0bd',
          400: '#c98da0',
          500: '#b26e85',
          600: '#96556c',
          700: '#7a4257',
        },
        gold: {
          300: '#dcc09a',
          400: '#c9a97c',
          500: '#b3905f',
          600: '#96754a',
        },
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'serif'],
        body: ['var(--font-jost)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
