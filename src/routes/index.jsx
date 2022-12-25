import React from 'react';
import Dashboard from '../page/dashboard';
import ChangePassword from '../page/auth/ChangePassword';
import Root from '../page/root';
import PageNotFound from '../page/404';
import UnVerifiedEmail from '../page/Unverified';
import {GlobalStateProvider} from '../globalstate';


export const PrivateRoute = [
  {
    path: '/dashboard',
    element: <GlobalStateProvider><Dashboard/></GlobalStateProvider>,
  },
  {
    path: 'unverified-email',
    element: <UnVerifiedEmail/>,
  },
];

export const PublicRoute = [
  {
    path: '/changepassword/:token',
    element: <ChangePassword/>,
    children: [
      {
        path: ':token',
      },
    ],
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

