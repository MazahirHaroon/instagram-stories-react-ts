import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      src: '/src',
      '@public': '/public',
      '@pages': '/src/pages/index',
      '@components': '/src/components/index',
      '@constants': '/src/constants',
      '@utils': '/src/utils',
    },
  },
});
