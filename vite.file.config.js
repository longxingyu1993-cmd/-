import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const rootDir = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: '',
  build: {
    emptyOutDir: false,
    copyPublicDir: false,
    cssCodeSplit: false,
    rollupOptions: {
      input: resolve(rootDir, 'src/file-entry.jsx'),
      output: {
        format: 'iife',
        name: 'PortfolioFileEnhancements',
        entryFileNames: 'assets/file-enhancements.js',
        inlineDynamicImports: true,
        assetFileNames: 'assets/file-enhancements[extname]',
      },
    },
  },
});
