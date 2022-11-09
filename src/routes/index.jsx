import React from 'react';
import Dashboard from '../page/dashboard';
import ChangePassword from '../page/auth/ChangePassword';
import Root from '../page/root';
import PageNotFound from '../page/404';
import UnVerifiedEmail from '../page/Unverified';


export const PrivateRoute = [
  {
    path: '/dashboard',
    element: <Dashboard/>,
  },
  {
    path: 'unverified-email',
    element: <UnVerifiedEmail/>,
  }
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
  {
    path: '/*',
    element: <PageNotFound/>,
  },
];

