import React, {useContext} from 'react';
import Button from '../../component/elements/Button.jsx';
import {TeacherStateContext} from '../../globalstate/TeacherContext';
import QuizCard from '../../component/TeacherDashboard/QuizCard.jsx';
import { useNavigate } from '@tanstack/react-location';


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
    </div>
  );
};

export default Dashboard;


