import { sentryVitePlugin } from '@sentry/vite-plugin';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';

export default defineConfig({
  plugins: [
    react(),
    checker({
      typescript: true,
      overlay: {
        initialIsOpen: false,
      },
    }),
    sentryVitePlugin({
      org: process.env.VITE_SENTRY_ORG,
      project: process.env.VITE_SENTRY_PROJECT,
    }),
  ],
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
        find: '@fs/utils',
        replacement: path.resolve(__dirname, './packages/utils'),
      },
    ],
  },
  build: {
    target: 'es2022',
    minify: true,
    sourcemap: true,
  },
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: process.env.VITE_PROXY,
        changeOrigin: true,
      },
    },
  },
});
