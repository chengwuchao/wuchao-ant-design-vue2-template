import DefaultLayout from '@/layout/index';
import { loadRoutePage } from '@/utils/loadRoutePage';
import Login from '@/views/login/index';

export default [
  {
    path: '/',
    redirect: '/login',
  },

  {
    path: '/login',
    component: Login,
  },

  {
    path: '/dashboard',
    component: DefaultLayout,
    children: [
      {
        path: '',
        component: () => loadRoutePage('dashboard/index'),
      },
    ],
  },
  {
    path: '/supplier',
    component: DefaultLayout,
    children: [
      {
        path: '',
        component: () => loadRoutePage('suppiler/index'),
      },
    ],
  },
];
