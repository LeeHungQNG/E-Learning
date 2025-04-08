import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3572EF',
        grayDarkest: '#09090b',
        grayDarker: '#18181a',
        grayDark: '#a1a1aa',
      },
      fontFamily: {
        primary: ['var(--font-manrope)'],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
