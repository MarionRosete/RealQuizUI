/* eslint-disable react/prop-types */
import React, {createContext, useEffect, useState} from 'react';
import {getAuthUser} from '../api/auth';
import {useGetTeacherQuiz} from '../queryhooks/quiz';


export const TeacherStateContext = createContext({});

export const TeacherStateProvider = (props) =>{
  const [userAuth, setUserAuth] = useState();
  const [quizData, setQuizData] = useState(null);
  const [QandA, setQandA] = useState([]);
  const {data: teacherQuiz}=useGetTeacherQuiz();

  const getAuth = async ()=>{
    const req= await getAuthUser();
    setUserAuth(req);
  };

  useEffect(()=>{
    getAuth();
  }, []);
  return (
    <TeacherStateContext.Provider
      value={{
        userAuth,
        teacherQuiz,
        setQuizData,
        quizData,
        setQandA,
        QandA,
      }}
    >
      {props.children}
    </TeacherStateContext.Provider>
  );
};
