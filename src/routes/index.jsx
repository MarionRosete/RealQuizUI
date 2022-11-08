import React from 'react';
import Dashboard from '../page/dashboard';
import ChangePassword from '../page/auth/ChangePassword';
import Root from '../page/root';


export const PrivateRoute = [
  {
    path: '/dashboard',
    element: <Dashboard/>,
  },
];

export const PublicRoute = [
  {
    path: '/changepassword',
    element: <ChangePassword/>,
  },
  {
    path: '/',
    element: <Root/>,
  },
];

