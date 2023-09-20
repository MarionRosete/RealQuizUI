import React, {useContext} from 'react';
import Button from '../../component/elements/Button.jsx';
import Modal from '../../component/modal/index.jsx';
import {TeacherStateContext} from '../../globalstate/TeacherContext';
import QandAContents from './QandAContents.jsx';
import CreateQuiz from './CreateQuiz.jsx';
import QuizCard from '../../component/TeacherDashboard/QuizCard.jsx';
import ReactEditor from '../../component/texteditor/Editor.jsx';
import { useNavigate } from '@tanstack/react-location';
// import Sidebar from '../sidebar/index.jsx';


const Dashboard = () => {
  const {
    userAuth,
    teacherQuiz,
    handleLogout,
    modal,
    handleOpenCreateRoom,
    handleCloseCreateRoom,
    handleCloseCreateQandA,
  }=useContext(TeacherStateContext);
  const  navigate = useNavigate(); 

  return (
    <div className='min-h-screen'>
      <div className='flex justify-between m-6'>
        <div>Hello,  <span className='font-bold'>{userAuth?.name}</span></div>
        <Button
          content={'Logout'}
          onClick={handleLogout}
          size={'small'}
        />
      </div>
      <div className='flex justify-end m-6'>
        <Button
          content={'Create Quiz'}
          onClick={()=> navigate({ to: '/create-quiz'})}
          size={'small'}
        
        />
      </div>
      {teacherQuiz?.length ===0?
      <div className='flex justify-center items-center gap-x-2'>
        You have no Quiz yet.
        <button
          className='p-1'
          onClick={handleOpenCreateRoom}
        >
          Create now
        </button>
      </div> :
      <div className='grid md:grid-cols-2 md:gap-16 gap-8 m-10'>
        {
          teacherQuiz?.map((quiz, key)=>
            <QuizCard
              key={key}
              quiz={quiz}
            />,
          )
        }
      </div>
     
      }
       <ReactEditor/>
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
        maxWidth={`md:max-w-[80%]`}
      />
    </div>
  );
};

export default Dashboard;


