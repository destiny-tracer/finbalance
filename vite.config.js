import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/finbalance/', // if deploying to GitHub Pages
  plugins: [react()],
  });
