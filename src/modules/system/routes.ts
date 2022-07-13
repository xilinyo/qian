export default [
  {
    path: '/system',
    children: [{ path: '', component: () => import('./view/index.vue') }],
  },
];
