import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { existsSync, readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { createGzip, createBrotliCompress, constants } from 'node:zlib';
import { pipeline } from 'node:stream';
import { promisify } from 'node:util';
import { fileURLToPath } from 'node:url';
import { dirname, resolve, join } from 'node:path';
import { createReadStream, createWriteStream } from 'node:fs';

const pipe = promisify(pipeline);
const rootDir = dirname(fileURLToPath(import.meta.url));

// ── Asset path normalizer ──
function normalizeAssetPaths() {
  return {
    name: 'normalize-asset-paths',
    closeBundle() {
      const htmlPath = resolve(rootDir, 'dist/index.html');
      if (existsSync(htmlPath)) {
        const html = readFileSync(htmlPath, 'utf8');
        writeFileSync(htmlPath, html.replaceAll('./assets/', 'assets/'));
      }
    },
  };
}

// ── Post-build Gzip + Brotli compression ──
function compressAssets() {
  return {
    name: 'compress-assets',
    async closeBundle() {
      const distDir = resolve(rootDir, 'dist');
      if (!existsSync(distDir)) return;
      const compressibleExts = ['.js', '.css', '.html', '.svg', '.json', '.woff2', '.ttf'];
      async function walk(dir) {
        const items = readdirSync(dir, { withFileTypes: true });
        for (const item of items) {
          const fullPath = join(dir, item.name);
          if (item.isDirectory()) { await walk(fullPath); }
          else if (item.isFile() && compressibleExts.some(ext => item.name.endsWith(ext))) {
            try {
              await pipe(createReadStream(fullPath), createGzip({ level: 9 }), createWriteStream(fullPath + '.gz'));
              await pipe(createReadStream(fullPath), createBrotliCompress({ params: { [constants.BROTLI_PARAM_QUALITY]: 11 } }), createWriteStream(fullPath + '.br'));
            } catch (_) { /* skip */ }
          }
        }
      }
      try { await walk(distDir); console.log('✓ Gzip + Brotli compression added to dist/'); } catch (_) {}
    },
  };
}

// ── Main config ──
export default defineConfig({
  base: '',
  plugins: [react(), normalizeAssetPaths(), compressAssets()],
  build: {
    target: 'es2020',
    minify: 'esbuild',
    rollupOptions: {
      input: {
        page: resolve(rootDir, 'index.html'),
        index: resolve(rootDir, 'src/file-entry.jsx'),
      },
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) return 'vendor-react';
            if (id.includes('three')) return 'vendor-three';
            if (id.includes('gsap') || id.includes('motion')) return 'vendor-animation';
            if (id.includes('lucide') || id.includes('antd') || id.includes('@ant-design')) return 'vendor-ui';
            return 'vendor';
          }
        },
        entryFileNames: (ci) => ci.name === 'index' ? 'assets/index-[hash:10].js' : 'assets/[name]-[hash:10].js',
        chunkFileNames: 'assets/[name]-[hash:10].js',
        assetFileNames: (ai) => ai.name === 'index.css' ? 'assets/index-[hash:10].css' : 'assets/[name]-[hash:10][extname]',
      },
    },
    chunkSizeWarningLimit: 500,
  },
});
