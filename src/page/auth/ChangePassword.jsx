import React from 'react';
import Button from '../../component/elements/Button';
import Input from '../../component/elements/Input';

const ChangePassword = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className='
        w-1/4
        h-1/2
        rounded-xl
        dark:bg-zinc-800'
      >
        <div className='dark:text-white text-center pt-10 text-xl font-bold'>
          Change password
        </div>
        <div className='flex justify-center mt-6 '>
          <div className='md:w-2/3 space-y-5'>
            <Input placeholder={'Email'}/>
            <Input placeholder={'Password'}/>
            <Input placeholder={'Confirm password'}/>
          </div>
        </div>
        <div className='flex justify-center mt-6 '>
          <Button content={'Reset password'}/>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
