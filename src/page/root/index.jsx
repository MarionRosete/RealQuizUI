import React, {useState} from 'react';
import Header from '../../component/header';
import ForgotPassword from '../auth/ForgotPassword';
import Login from '../auth/login';
import Register from '../auth/Register';
import VerificationCodeSent from '../auth/VerificationCodeSent';


const Root = () => {
  const [isOpen, setIsOpen] = useState({
    login: false,
    register: false,
    verify: false,
    forgotPassword: false,
  });

  const closeRegister=()=>{
    setIsOpen({...isOpen, register: false});
  };

  const closeLogin=()=>{
    setIsOpen({...isOpen, login: false});
  };

  const closeVerify=()=>{
    setIsOpen({...isOpen, verify: false});
  };

  const closeForgotPassword=()=>{
    setIsOpen({...isOpen, forgotPassword: false});
  };

  return (
    <div className='w-full' >
      <Header openModal={setIsOpen}/>
      <div className='
        flex
        justify-center
        items-center
        text-center
        h-screen
        w-screen

        '
      >
        <div className='content'>
          <div className='text-7xl text-purple-700'>
            RealQuiz
          </div>

          <div className='text-2xl mt-10'>
            An Online quiz platform built with Transparency
          </div>
          <div className='mt-3'>
            We simply believe in fair and transparent quiz. That&apos;s All!
          </div >
          <div className='mt-8'>
            Be one of the quiz maker or be the quiz taker. you decide.
          </div>
          <div className='p-2'>
            <button className='p-2'
              onClick={()=>setIsOpen({...isOpen, register: true})}
            >

              Join us now

            </button>
          </div>
        </div>
      </div>
      <Register
        isOpen={isOpen.register}
        closeModal={closeRegister}
        verify={setIsOpen}/>
      <Login
        isOpen={isOpen.login}
        closeModal={closeLogin}
        forgotPassword={setIsOpen}
      />
      <VerificationCodeSent
        isOpen={isOpen.verify}
        closeModal={closeVerify}
      />
      <ForgotPassword
        isOpen={isOpen.forgotPassword}
        closeModal={closeForgotPassword}
      />
    </div>
  );
};

export default Root;
