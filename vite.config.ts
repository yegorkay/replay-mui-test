import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
    minify: true,
    rollupOptions: {
      output: {
        manualChunks: (path) =>
          path.split('/').reverse()[
            path.split('/').reverse().indexOf('node_modules') - 1
          ],
      },
    },
  },
});
