import React from 'react';
import {useState} from 'react';
import {changePassword} from '../../api/auth';
import Button from '../../component/elements/Button';
import Input from '../../component/elements/Input';
const initState = {status: null, msg: '', loading: false};
const ChangePassword = () => {
  const [response, setResponse] = useState(initState);
  const handleRequest=async ()=>{
    setResponse({...response, loading: true});
    const res = await changePassword();
    if (res.response.status===404) {
      setResponse({...response,
        msg: res.response.data.msg,
        status: res.response.status,
      });
    }
  };
  console.log(response);
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className='
        w-1/4
        h-auto
        rounded-xl
        dark:bg-zinc-800
        border-4'
      >
        <div className='dark:text-white text-center pt-10 text-xl font-bold'>
          Change password
        </div>
        <div className={response.status===200?
            'text-center mt-16 mb-2 text-sm':
            ' text-center mt-16 mb-2 text-red-700 text-sm'
        }>
            sda
        </div>
        <div className='flex justify-center  '>
          <div className=' md:w-2/3 space-y-5'>
            <Input placeholder={'Email'}/>
            <Input placeholder={'Password'}/>
            <Input placeholder={'Confirm password'}/>
          </div>

        </div>
        <div className='flex justify-center mt-6 mb-10'>
          <Button
            content={'Reset password'}
            onClick={handleRequest}
            loading={response.loading}/>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
