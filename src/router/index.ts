import type { RouteRecordRaw } from 'vue-router';
import { createWebHashHistory, createRouter } from 'vue-router';
const files = import.meta.globEager('../modules/*/routes.ts');

let routes: Array<RouteRecordRaw> = [];
for (const key in files) {
  routes = routes.concat(files[key].default);
}

const basicRoutes = [
  {
    path: '/',
    redirect: () => {
      return { path: '/home' };
    },
  },
];
routes = routes.concat(basicRoutes);

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
});

export { router };
