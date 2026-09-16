import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import {fileURLToPath, URL} from 'node:url';
export default defineConfig({
  plugins:[react()],
  base: (process.env.NEXT_PUBLIC_BASE_PATH || '') + '/',
  resolve:{alias:{'@':fileURLToPath(new URL('.',import.meta.url))}},
  define:{
    'process.env.NEXT_PUBLIC_BASE_PATH':JSON.stringify(process.env.NEXT_PUBLIC_BASE_PATH || ''),
    'process.env.NEXT_PUBLIC_ORDER_ENDPOINT':JSON.stringify(process.env.NEXT_PUBLIC_ORDER_ENDPOINT || ''),
  },
  build:{outDir:'dist/github-pages'},
});
