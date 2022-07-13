export default [
  {
    path: '/home',
    children: [
      { path: '', component: () => import('./view/index.vue') },
      {
        path: 'configure',
        component: () => import('./view/configure/index.vue'),
      },
    ],
  },
];
