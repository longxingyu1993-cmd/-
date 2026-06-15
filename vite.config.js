import { defineConfig } from 'vite';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const rootDir = dirname(fileURLToPath(import.meta.url));

const normalizeAssetPaths = () => ({
  name: 'normalize-asset-paths',
  closeBundle() {
    const htmlPath = resolve(rootDir, 'dist/index.html');
    if (existsSync(htmlPath)) {
      const html = readFileSync(htmlPath, 'utf8');
      writeFileSync(htmlPath, html.replaceAll('./assets/', 'assets/'));
    }
  },
});

export default defineConfig({
  base: '',
  plugins: [normalizeAssetPaths()],
  build: {
    rollupOptions: {
      input: {
        page: resolve(rootDir, 'index.html'),
        index: resolve(rootDir, 'src/file-entry.jsx'),
      },
      output: {
        entryFileNames: (chunkInfo) => {
          if (chunkInfo.name === 'index') {
            return 'assets/index.js';
          }
          return 'assets/[name]-[hash].js';
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'index.css') {
            return 'assets/index.css';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
});
