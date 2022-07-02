import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/typescript-products-app/",
  server: {
    proxy: {
      '/products': {
        target: 'https://products-server-1.herokuapp.com/',
        ws: true,
        changeOrigin: true,

      }
    }
  }
})

