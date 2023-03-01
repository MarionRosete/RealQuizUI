/* eslint-disable react/prop-types */
import React, {createContext, useEffect, useState} from 'react';
import {getAuthUser} from '../api/auth';
import {useGetTeacherQuiz} from '../queryhooks/quiz';
import {getQandAAPI} from '../api/qanda';
import {logoutAPI} from '../api/auth';


export const TeacherStateContext = createContext({});
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

export const TeacherStateProvider = (props) =>{
  const [modal, setModal] = useState(initCreateRoomState);
  const [userAuth, setUserAuth] = useState();
  const [quiz, setQuiz] = useState(null);
  const [QandA, setQandA] = useState(null);
  const {data: teacherQuiz}=useGetTeacherQuiz();

  const getAuth = async ()=>{
    const req= await getAuthUser();
    setUserAuth(req);
  };

  useEffect(()=>{
    getAuth();
  }, []);


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
    setQuiz(quiz);
    const qanda = await getQandAAPI(quiz.id);
    setQandA(qanda.data.length>0?qanda.data:[emptyQandA]);
    setModal({...modal, QandA: true});
  };
  const handleCloseCreateQandA = () => {
    setModal({...modal, QandA: false});
  };
  return (
    <TeacherStateContext.Provider
      value={{
        userAuth,
        teacherQuiz,
        setQuiz,
        quiz,
        setQandA,
        QandA,
        handleLogout,
        modal,
        handleOpenCreateRoom,
        handleCloseCreateRoom,
        handleOpenCreateQandA,
        handleCloseCreateQandA,
      }}
    >
      {props.children}
    </TeacherStateContext.Provider>
  );
};
