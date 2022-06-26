import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    //設定別名
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
      '/images': 'src/assets/images',
    },
  },
});
