import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // This will proxy any request starting with /api
      '/api': {
        target: 'https://humorstech.com', // The actual API server
        changeOrigin: true, // Needed for the API server to accept the request
        rewrite: (path) => path.replace(/^\/api/, ''), // Removes /api from the start of the path
      },
    },
  },
});