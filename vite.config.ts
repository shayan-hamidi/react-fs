import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import checker from 'vite-plugin-checker';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), checker({ typescript: true })],
  resolve: {
    alias: [
      { find: 'src', replacement: path.resolve(__dirname, './src/') },
      {
        find: '@fs/core',
        replacement: path.resolve(__dirname, './packages/core'),
      },
      {
        find: '@fs/form',
        replacement: path.resolve(__dirname, './packages/form'),
      },
      {
        find: '@fs/table',
        replacement: path.resolve(__dirname, './packages/table'),
      },
      {
        find: '@fs/http',
        replacement: path.resolve(__dirname, './packages/http'),
      },
      {
        find: '@fs/utils',
        replacement: path.resolve(__dirname, './packages/utils'),
      },
      {
        find: '@fs/http',
        replacement: path.resolve(__dirname, './packages/http'),
      },
    ],
  },
  build: {
    target: 'es2022',
    minify: true, //HINT: should be true for production, false for debugging
    sourcemap: true,
  },
  server: {
    port: 3000,
  },
});
