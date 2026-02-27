// vite.config.ts
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import tailwindcss from '@tailwindcss/vite' // <-- MUST HAVE THIS

export default defineConfig({
  plugins: [
    tailwindcss(), // <-- AND THIS
    svelte(),
  ],
})