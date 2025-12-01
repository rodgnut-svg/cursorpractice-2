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
        'loft-green': '#1D4E2B',
        'loft-off-white': '#F0EAD8',
        'loft-olive-green': '#546B3B',
        'loft-black': '#1A1A1A',
        'loft-tan': '#B08D57',
      },
      fontFamily: {
        gilda: ['var(--font-gilda)'],
        optima: ['var(--font-optima)'],
      },
    },
  },
  plugins: [],
};
export default config;

