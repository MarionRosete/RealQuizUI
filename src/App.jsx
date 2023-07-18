import React from 'react';
import {Outlet, Router, ReactLocation} from '@tanstack/react-location';
import {PrivateRoute, PublicRoute} from './routes';
const App=()=> {
  const location = new ReactLocation();
  const token = localStorage.getItem('token');
  if (window.location.pathname=== '/'&& token!==null ) {
    window.location.href = '/dashboard';
  }
  return (
    <Router
      basepath='/RealQuizUI/'
      location={location}
      routes={token!==null?PrivateRoute:PublicRoute}
    >
      <Outlet/>
    </Router>

  );
};

export default App;
