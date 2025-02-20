import { Navigate, type RouteObject } from 'react-router-dom';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/home" replace></Navigate>,
  },
  {
    lazy: () => import('../pages/Layout/Layout'),
    children: [
      {
        path: '/home',
        lazy: () => import('../pages/HomePage/HomePage'),
        handle: {
          title: '主页',
        },
      },
    ],
  },
  {
    path: '*',
    lazy: () => import('../pages/BoundaryPage/BoundaryPage'),
    handle: {
      title: '页面不存在',
    },
  },
];
