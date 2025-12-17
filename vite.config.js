// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Optional: match CRA's default build output directory
  build: {
    outDir: 'build',
  },
  server: {
    port: 3000, // Optional: match CRA's default port
  },
});