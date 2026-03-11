import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Bu satırın olduğundan emin ol

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Bu pluginin eklendiğinden emin ol
  ],
})
