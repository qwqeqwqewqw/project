import daisyui from 'daisyui';

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