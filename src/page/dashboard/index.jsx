import React, {useContext} from 'react';
import { useEffect } from 'react';
// import {getQandA} from '../../queryhooks';
import {GlobalStateContext} from '../../globalstate/index.jsx';


const Dashboard = () => {
  const {userAuth}=useContext(GlobalStateContext);
  console.log(userAuth);
  return (
    <div>DASHBOARD </div>
  );
};

export default Dashboard;
