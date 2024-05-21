/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  test: {
    environment: 'jsdom',
    setupFiles: '/test/setup.ts',
  },
  build: {
    outDir: 'dist',
  },
  preview: {
    port: 3000,
  },
});
