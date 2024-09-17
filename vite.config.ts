import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src', // Ensure alias points correctly to the src folder
    },
  },
  server: {
    port: 3000,
  },
})

