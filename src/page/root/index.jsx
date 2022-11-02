import React, {useState} from 'react';
import Header from '../../component/header';
import Login from '../auth/Login';
import Register from '../auth/Register';


const Root = () => {
  const [isOpen, setIsOpen] = useState({
    login: false,
    register: false,
  });

  const closeRegister=()=>{
    setIsOpen({...isOpen, register: false});
  };

  const closeLogin=()=>{
    setIsOpen({...isOpen, login: false});
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

          <div className='text-4xl'>
            An Online quiz platform with Transparency
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
      <Register isOpen={isOpen.register} closeModal={closeRegister}/>
      <Login isOpen={isOpen.login} closeModal={closeLogin}/>
    </div>
  );
};

export default Root;
