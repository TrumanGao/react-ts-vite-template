import { Navigate, type RouteObject } from 'react-router-dom';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/home" replace></Navigate>,
  },
  {
    lazy: () => import('../pages/HomePage/Layout'),
    children: [
      {
        path: '/home',
        lazy: () => import('../pages/HomePage/HomePage/HomePage'),
        handle: {
          title: 'home',
        },
      },
    ],
  },
  {
    path: '*',
    lazy: () => import('../pages/BoundaryPage/BoundaryPage'),
    handle: {
      title: '404',
    },
  },
];
