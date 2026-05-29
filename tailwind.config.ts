import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        navy: '#061633',
        ink: '#0b1220',
        electric: '#1478ff',
        emerald: '#16c784',
        aqua: '#19c2c9',
      },
      boxShadow: {
        premium: '0 30px 80px rgba(6, 22, 51, 0.14)',
        glow: '0 20px 60px rgba(20, 120, 255, 0.25)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};

export default config;
