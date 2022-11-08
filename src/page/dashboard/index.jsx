import React from 'react';
import {getQandA} from '../../queryhooks';

const Dashboard = () => {
  const {data}=getQandA();
  console.log(data);
  return (
    <div>index</div>
  );
};

export default Dashboard;
