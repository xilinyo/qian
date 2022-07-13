import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
import { join, resolve } from 'path';
import * as fs from 'fs';

const alias = {};
fs.readdirSync('src/modules').forEach(
  (dir) => (alias[dir] = resolve(`src/modules/${dir}`))
);

export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  server: {
    port: 3666,
    open: true,
  },
  // 设置路径别名
  resolve: {
    alias: {
      ...alias,
      '#': join(__dirname, 'src/components'),
      src: join(__dirname, 'src'),
      assets: join(__dirname, 'src/assets'),
    },
  },
  css: {
    //css预处理
    preprocessorOptions: {
      scss: {
        additionalData: '@import "src/assets/scss/global.scss";',
      },
    },
  },
});
