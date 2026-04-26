import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
        proxy: {
          '/api': 'http://localhost:3001',
        },
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        rollupOptions: {
          output: {
            manualChunks(id) {
              if (id.includes('node_modules/react-dom') || id.includes('node_modules/react/')) {
                return 'react';
              }
              if (id.includes('node_modules/framer-motion')) {
                return 'framer-motion';
              }
              if (id.includes('node_modules/i18next') || id.includes('node_modules/react-i18next')) {
                return 'i18n';
              }
              if (id.includes('node_modules/react-router-dom') || id.includes('node_modules/@remix-run')) {
                return 'router';
              }
              if (id.includes('node_modules/lucide-react')) {
                return 'lucide';
              }
              if (id.includes('/locales/')) {
                return 'locales';
              }
            },
          },
        },
      },
    };
});
