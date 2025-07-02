import { theme } from './src/colors.js';
import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      }
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        hotel: theme
      }
    ],
    base: true,
    utils: true,
  },
} satisfies Config;