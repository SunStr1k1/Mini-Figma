import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  // Базовый путь для GitHub Pages: сайт публикуется по адресу
  // https://sunstr1k1.github.io/Mini-Figma/
  base: '/Mini-Figma/',
  plugins: [react(), tailwindcss()],
});
