import React, {useState, useContext} from 'react';
import {logoutAPI} from '../../api/auth/index.js';
import Button from '../../component/elements/Button.jsx';
import Modal from '../../component/modal/index.jsx';
// import {getQandA} from '../../queryhooks';
import {GlobalStateContext} from '../../globalstate/index.jsx';
import CreateQandA from './CreateQandA.jsx';
import CreateRoom from './CreateRoom.jsx';
// import Sidebar from '../sidebar/index.jsx';

const initCreateRoomState = {
  quiz: false,
  qanda: false,
};
const Dashboard = () => {
  const {userAuth, teacherQuiz}=useContext(GlobalStateContext);
  const [modal, setModal] = useState(initCreateRoomState);

  const handleLogout = async () => {
    const request = await logoutAPI();
    if (request.status===200) {
      window.location.href = '/';
    }
  };
  const handleOpenCreateRoom = () => {
    setModal({...modal, quiz: true});
  };
  const handleCloseCreateRoom = () => {
    setModal({...modal, quiz: false});
  };
  const handleOpenCreateQandA= () => {
    setModal({...modal, qanda: true});
  };
  const handleCloseCreateQandA = () => {
    setModal({...modal, qanda: false});
  };
  return (
    <div className='min-h-screen'>

      <div className='flex justify-between m-6'>
      Hello {userAuth?.name}
        <Button
          content={'Logout'}
          onClick={handleLogout}
        />
      </div>
      <div className='flex justify-end m-6'>
        <Button
          content={'Create Quiz'}
          onClick={handleOpenCreateRoom}
        />
      </div>
      {teacherQuiz?.length ===0?
      <div className='flex justify-center items-center gap-x-2'>
        You have no classes yet.
        <button
          className='p-1'
          onClick={handleOpenCreateRoom}
        >
          Create now
        </button>
      </div> :
      <div className='flex m-10 justify-center gap-x-5'>
        {
          teacherQuiz?.map((quiz, key)=>
            <div key={key}
              className='flex cursor-pointer'
              onClick={handleOpenCreateQandA}>
              <div className='bg-purple-700 p-6 rounded-md'>
                <div className='text-xl font-bold'>
                  {quiz.name}
                </div>
                <div className='pl-5'>
                  {quiz.description}
                </div>
              </div>
            </div>,
          )
        }
      </div>
      }
      <Modal
        isOpen={modal.quiz}
        closeModal={handleCloseCreateRoom}
        Contents={CreateRoom}
        title={'Create room'}
      />
      <Modal
        isOpen={modal.qanda}
        closeModal={handleCloseCreateQandA}
        Contents={CreateQandA}
        title={'Create Q and A'}
      />
    </div>
  );
};

export default Dashboard;


