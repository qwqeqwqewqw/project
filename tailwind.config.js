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
    themes: false, // Disable DaisyUI themes completely
    base: true,    // Keep base styles
    utils: true,   // Keep utility classes like btn, card, etc.
    styled: true,  // Keep styled components
  },
};