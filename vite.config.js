import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
 build: {
    lib: {
      entry: resolve(__dirname, 'src/index.jsx'),
      name: 'SearchModal',
      fileName: (format) => `search-modal.${format}.js`,
      formats: ['iife']
    },
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        },
        inlineDynamicImports: true
      }
    }
  },
  css: {
    modules: false
  },
  define: {
     'process.env': {}
  },
});
