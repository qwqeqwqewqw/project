import daisyui from 'daisyui';
import { colors } from './src/colors.js';

/** @type {import('tailwindcss').Config} */
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
      },
      colors: {
        // Import colors from colors.js and convert camelCase to kebab-case
        'seashell-white': colors.seashellWhite,
        'nautical-navy': colors.nauticalNavy,
        'sage-green': colors.sageGreen,
        'driftwood': colors.driftwood,
        'hint-of-silver': colors.hintOfSilver,
        'fresh-cream': colors.freshCream,
        'cloud-white': colors.cloudWhite,
        'sky-blue': colors.skyBlue,
        'forest-green': colors.forestGreen,
        'storm-cloud': colors.stormCloud,
        'midnight': colors.midnight
      }
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        hotel: {
          "primary": colors.nauticalNavy,
          "secondary": colors.forestGreen,
          "accent": colors.skyBlue,
          "neutral": colors.stormCloud,
          "base-100": colors.cloudWhite,
          "base-200": colors.freshCream,
          "base-300": colors.hintOfSilver,
          "info": colors.skyBlue,
          "success": colors.forestGreen,
          "warning": colors.driftwood,
          "error": colors.stormCloud,
        }
      }
    ],
    base: true,
    utils: true,
  },
};