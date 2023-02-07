/* eslint-disable react/prop-types */
import React, {createContext, useEffect, useState} from 'react';
import {getAuthUser} from '../api/auth';
import {useGetTeacherQuiz} from '../queryhooks/quiz';


export const GlobalStateContext = createContext({});

export const GlobalStateProvider = (props) =>{
  const [userAuth, setUserAuth] = useState();
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
      }}
    >
      {props.children}
    </GlobalStateContext.Provider>
  );
};
