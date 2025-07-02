import { colors, theme } from './src/colors.js';
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
      },
      colors: {
        // Your custom color palette
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
        hotel: theme
      }
    ],
    base: true,
    utils: true,
  },
} satisfies Config;