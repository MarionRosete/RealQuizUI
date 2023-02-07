import React, {useState, useContext} from 'react';
import {logoutAPI} from '../../api/auth/index.js';
import Button from '../../component/elements/Button.jsx';
import Modal from '../../component/modal/index.jsx';
// import {getQandA} from '../../queryhooks';
import {GlobalStateContext} from '../../globalstate/index.jsx';
import CreateRoom from './CreateRoom.jsx';
// import Sidebar from '../sidebar/index.jsx';

const initCreateRoomState = {
  modal: false,
};
const Dashboard = () => {
  const {userAuth, teacherQuiz}=useContext(GlobalStateContext);
  const [createRoom, setCreateRoom] = useState(initCreateRoomState);

  const handleLogout = async () => {
    const request = await logoutAPI();
    if (request.status===200) {
      window.location.href = '/';
    }
  };
  const handleOpenCreateRoom = () => {
    setCreateRoom({...createRoom, modal: true});
  };
  const handleCloseCreateRoom = () => {
    setCreateRoom({...createRoom, modal: false});
  };
  console.log(teacherQuiz);
  return (
    <div className='min-h-screen'>

      <div className='flex justify-between m-6'>
      Hello {userAuth?.name}
        <Button
          content={'Logout'}
          onClick={handleLogout}
        />
      </div>
      <div className='flex justify-center items-center gap-x-2'>
        You have no classes yet.
        <button
          className='p-1'
          onClick={handleOpenCreateRoom}
        >
          Create now
        </button>
      </div>
      <Modal
        isOpen={createRoom.modal}
        closeModal={handleCloseCreateRoom}
        Contents={CreateRoom}
        title={'Create room'}
      />
    </div>
  );
};

export default Dashboard;


