import react from '@vitejs/plugin-react';
import { join } from 'path';

export default {
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: join(__dirname, 'dist/public'),
  },
};
