import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        "seashell-white": "#eeeee2",
        "nautical-navy": "#2f3e46",
        "sage-green": "#97a78c",
        driftwood: "#a6a593",
        "hint-of-silver": "#c0c0c0",
        "fresh-cream": "#f4efe6",
        "cloud-white": "#fffcf6",
        "sky-blue": "#d6e0e2",
        "forest-green": "#5e6c5b",
        "storm-cloud": "#686867",
        midnight: "#162a2c",
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"],
        serif2: ["New Icon Serif", "Playfair Display", "serif"],
        cursive1: ["Dancing Script", "cursive"],
        cursive2: ["New Icon Script", "Dancing Script", "cursive"],
        wasted: ["Wasted Vindey", "serif"], // use font-wasted
        cursive3: ["Bergell", "cursive"],
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: false, // Disable DaisyUI themes completely
    base: true, // Keep base styles
    utils: true, // Keep utility classes like btn, card, etc.
    styled: true, // Keep styled components
  },
};
