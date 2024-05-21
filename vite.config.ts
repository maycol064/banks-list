/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    cors: false,
    proxy: {
      '/api-banks': {
        target: 'https://dev.obtenmas.com',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api-banks/, ''),
      },
    },
  },
  preview: {
    cors: false,
    proxy: {
      '/api-banks': {
        target: 'https://dev.obtenmas.com',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api-banks/, ''),
      },
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: '/test/setup.ts',
  },
  build: {
    outDir: 'dist',
  },
});
