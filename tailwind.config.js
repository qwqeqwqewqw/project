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
      },
      colors: {
        // Custom color palette with direct hex values
        'seashell-white': '#F8F6F0',
        'nautical-navy': '#1E3A8A',
        'sage-green': '#9CA3AF',
        'driftwood': '#A3A3A3',
        'hint-of-silver': '#E5E7EB',
        'fresh-cream': '#FFFBEB',
        'cloud-white': '#FFFFFF',
        'sky-blue': '#3B82F6',
        'forest-green': '#059669',
        'storm-cloud': '#6B7280',
        'midnight': '#111827'
      }
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        hotel: {
          "primary": "#1E3A8A",
          "secondary": "#059669",
          "accent": "#3B82F6",
          "neutral": "#6B7280",
          "base-100": "#FFFFFF",
          "base-200": "#F8F6F0",
          "base-300": "#E5E7EB",
          "info": "#3B82F6",
          "success": "#059669",
          "warning": "#F59E0B",
          "error": "#EF4444",
        }
      }
    ],
    base: true,
    utils: true,
  },
};