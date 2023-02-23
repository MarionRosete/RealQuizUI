import React, {useState, useContext} from 'react';
import {logoutAPI} from '../../api/auth/index.js';
import {getQandAAPI} from '../../api/qanda/index.js';
import Button from '../../component/elements/Button.jsx';
import Modal from '../../component/modal/index.jsx';
import {GlobalStateContext} from '../../globalstate/index.jsx';
import QandAContents from './QandAContents.jsx';
import CreateQuiz from './CreateQuiz.jsx';
// import Sidebar from '../sidebar/index.jsx';

const initCreateRoomState = {
  quiz: false,
  QandA: false,
};

const emptyQandA= {
  id: null,
  question: '',
  choice1: null,
  choice2: null,
  choice3: null,
  choice4: null,
  answer: null,
};

const Dashboard = () => {
  const {
    userAuth,
    teacherQuiz,
    setQuizData,
    setQandA}=useContext(GlobalStateContext);
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
  const handleOpenCreateQandA= async (quiz) => {
    setQuizData(quiz);
    const qanda = await getQandAAPI(quiz.id);
    setQandA(qanda.data.length>0?qanda.data:[emptyQandA]);
    setModal({...modal, QandA: true});
  };
  const handleCloseCreateQandA = () => {
    setModal({...modal, QandA: false});
  };
  return (
    <div className='min-h-screen'>

      <div className='flex justify-between m-6'>
        <div>Hello, <span className='font-bold'>{userAuth?.name}</span></div>
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
              onClick={()=>handleOpenCreateQandA(quiz)}>
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
        Contents={CreateQuiz}
        title={'Create room'}
      />
      <Modal
        isOpen={modal.QandA}
        closeModal={handleCloseCreateQandA}
        Contents={QandAContents}
        title={'Q and A '}
      />
    </div>
  );
};

export default Dashboard;


