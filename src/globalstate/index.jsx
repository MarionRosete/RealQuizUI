/* eslint-disable react/prop-types */
import React, {createContext, useEffect, useState} from 'react';
import {getAuthUser} from '../api/auth';
import {useGetTeacherQuiz} from '../queryhooks/quiz';


export const GlobalStateContext = createContext({});

export const GlobalStateProvider = (props) =>{
  const [userAuth, setUserAuth] = useState();
  const [quizData, setQuizData] = useState(null);
  const {data: teacherQuiz}=useGetTeacherQuiz();

  const getAuth = async ()=>{
    const req= await getAuthUser();
    setUserAuth(req);
  };

  useEffect(()=>{
    getAuth();
  }, []);
  return (
    <GlobalStateContext.Provider
      value={{
        userAuth,
        teacherQuiz,
        setQuizData,
        quizData,
      }}
    >
      {props.children}
    </GlobalStateContext.Provider>
  );
};
