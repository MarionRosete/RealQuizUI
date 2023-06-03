/* eslint-disable react/prop-types */
import React, {createContext, useEffect, useState} from 'react';
import {getAuthUser} from '../api/auth';
import {
  useGetTeacherQuiz,
  useDeleteTeacherQuiz,
  useEditTeacherQuiz} from '../queryhooks/quiz';
import {getQandAAPI} from '../api/qanda';
import {logoutAPI} from '../api/auth';
import ToastComponent from '../component/toast';
import {DeleteIcon, EditIcon} from '../component/icons';


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

const toastInitState = {
  isOpen: false,
  msg: null,
  icon: null,
};

export const TeacherStateProvider = (props) =>{
  const [modal, setModal] = useState(initCreateRoomState);
  const [userAuth, setUserAuth] = useState();
  const [quiz, setQuiz] = useState(null);
  const [QandA, setQandA] = useState(null);
  const {data: teacherQuiz}=useGetTeacherQuiz();
  const {mutate: deleteQuiz} = useDeleteTeacherQuiz();
  const {mutate: editQuiz} = useEditTeacherQuiz();
  const [toast, setToast] = useState(toastInitState);

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
  const handleDeleteQuiz = (quiz) => {
    deleteQuiz(quiz.id, {
      onSuccess: ()=>{
        setToast({...toast,
          isOpen: true,
          msg: 'hello',
          icon: <DeleteIcon/>,
        });
      },
    });
  };
  const handleEditQuiz = (quiz) => {
    editQuiz(quiz.id, {
      onSuccess: ()=>{
        setToast({...toast,
          isOpen: true,
          msg: 'hello',
          icon: <EditIcon/>,
        });
      },
    });
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
        handleDeleteQuiz,
        handleEditQuiz,
        setToast,
      }}
    >
      {props.children}
      {toast.isOpen&&
      <ToastComponent
        Msg={toast.msg}
        Icon={toast.icon}
      />
      }
    </TeacherStateContext.Provider>
  );
};
