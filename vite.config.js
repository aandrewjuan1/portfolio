import { defineConfig } from 'vite';

export default defineConfig({
  base: process.env.GITHUB_PAGES === 'true' ? '/portfolio/' : '/',
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: './index.html',
        about: './about.html',
        contact: './contact.html',
        projects: './projects.html'
      }
    }
  },
  server: {
    port: 3000,
    open: false
  },
  esbuild: {
    target: 'esnext'
  },
  optimizeDeps: {
    entries: ['index.html']
  }
});
