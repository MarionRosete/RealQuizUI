import { Outlet, Router, ReactLocation,createHashHistory } from '@tanstack/react-location'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Root from './page/root'
import { routes } from './routes'

const App=()=> {
  const location = new ReactLocation()
  const isAuth = false
  return (
   <Router
    location={location}
    routes={routes}
   >
    {isAuth?
        <Outlet/>:
        <Root/>
    }
  
   </Router>
    
  )
}

export default App
