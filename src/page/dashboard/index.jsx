import React, {useContext} from 'react';
import {logoutAPI} from '../../api/auth/index.js';
import Button from '../../component/elements/Button.jsx';
// import {getQandA} from '../../queryhooks';
import {GlobalStateContext} from '../../globalstate/index.jsx';


const Dashboard = () => {
  const {userAuth}=useContext(GlobalStateContext);
  console.log(userAuth);

  const handleLogout = async () => {
    const request = await logoutAPI();
    if (request.status===200) {
      window.location.href = '/';
    }
  };
  return (
    <div>
      <Button
        content={'Logout'}
        onClick={handleLogout}
      />
      DASHBOARD
    </div>
  );
};

export default Dashboard;
