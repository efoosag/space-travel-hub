// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  plugins: [react(), tailwindcss(),],
  // Optional: match CRA's default build output directory
  build: {
    outDir: 'build',
  },
  server: {
    port: 3000, // Optional: match CRA's default port
  },
});