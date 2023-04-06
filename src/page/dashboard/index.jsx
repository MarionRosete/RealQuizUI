import React, {useContext} from 'react';
import Button from '../../component/elements/Button.jsx';
import Modal from '../../component/modal/index.jsx';
import {TeacherStateContext} from '../../globalstate/TeacherContext';
import QandAContents from './QandAContents.jsx';
import CreateQuiz from './CreateQuiz.jsx';
import {DarkMode} from '../../helper/DarkMode.js';
// import Sidebar from '../sidebar/index.jsx';


const Dashboard = () => {
  const {
    userAuth,
    teacherQuiz,
    handleLogout,
    modal,
    handleOpenCreateRoom,
    handleCloseCreateRoom,
    handleOpenCreateQandA,
    handleCloseCreateQandA,
  }=useContext(TeacherStateContext);
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
              <div className={`
                shadow-lg 
                ${DarkMode?'shadow-blue-500/50':'shadow-gray-500/50'}
                p-6 
                rounded-md`}>
                <div className='text-xl font-bold'>
                  {quiz.name}
                </div>
                <div className='pl-5 '>
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
        maxHeight={`max-w-[40%]`}
      />
    </div>
  );
};

export default Dashboard;


