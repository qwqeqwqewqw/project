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
        // Use camelCase naming for color utilities
        seashellWhite: colors.seashellWhite,
        nauticalNavy: colors.nauticalNavy,
        sageGreen: colors.sageGreen,
        driftwood: colors.driftwood,
        hintOfSilver: colors.hintOfSilver,
        freshCream: colors.freshCream,
        cloudWhite: colors.cloudWhite,
        skyBlue: colors.skyBlue,
        forestGreen: colors.forestGreen,
        stormCloud: colors.stormCloud,
        midnight: colors.midnight
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