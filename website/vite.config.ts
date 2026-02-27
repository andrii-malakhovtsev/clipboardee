// vite.config.ts
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import tailwindcss from '@tailwindcss/vite' // <-- MUST HAVE THIS

export default defineConfig({
  // Empty base because the site is served from the root of clipboardee.org
  base: '',
  plugins: [
    tailwindcss(), // <-- AND THIS
    svelte(),
  ],
})