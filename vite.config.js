import { sveltekit } from "@sveltejs/kit/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [sveltekit(), tailwindcss()],
  ssr: {
    noExternal: ['@tabler/icons-svelte']
  },
  optimizeDeps: {
    include: ['@tabler/icons-svelte']
  },
  server: {
    fs: {
      allow: ['..']
    }
  },
  build: {
    timeout: 120000 // Increase timeout to 2 minutes
  }
});