import React from 'react';
import {useState} from 'react';
import {changePassword} from '../../api/auth';
import Button from '../../component/elements/Button';
import Input from '../../component/elements/Input';
import PropTypes from 'prop-types';
import {checkEmailToken} from '../../queryhooks';
const initResponse = {status: null, msg: null, loading: false};
const initPasswords = {password: '', password_confirmation: null};

const urlParams = new URLSearchParams(window.location.search);
const email = urlParams.get('email');

const ChangePassword = () => {
  const [response, setResponse] = useState(initResponse);
  const [password, setPassword] = useState(initPasswords);


  const {data, isFetching} = checkEmailToken();

  if (!isFetching) {
    if (data.response?.status===404) {
      window.location.href = '/*';
    }
  }

  const handleRequest=async ()=>{
    setResponse({...response, loading: true});
    const payload={...password, email};
    const res = await changePassword(payload);
    if (res.response.status===404) {
      setResponse({...response,
        msg: res.response.data.msg,
        status: res.response.status,
      });
    }
  };
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className='
        md:w-1/4
        m-8
        p-8
        h-auto
        rounded-xl
        dark:bg-zinc-800
        border-4'
      >
        <div className='dark:text-white text-center pt-10 text-xl font-bold'>
          Reset Password
        </div>
        <div className='mt-16'></div>
        {response.msg!==null&&
        <div className={response.status===200?
            'text-center mb-5 text-sm':
            ' text-center mb-5 text-red-700 text-sm'
        }>
          {response.msg}
        </div>
        }
        <div className='flex justify-center  '>
          <div className=' md:w-2/3 space-y-5'>
            <Input
              placeholder={'Password'}
              onChange={(e)=>setPassword((oldState)=>
                ({...oldState, password: e.target.value}),
              )}
            />
            {password.password.length < 8 &&
                <div className='text-xs'>
                  Password must be 8 character length
                </div>
            }
            <Input
              placeholder={'Confirm password'}
              onChange={(e)=>setPassword((oldState)=>
                ({...oldState, password_confirmation: e.target.value}),
              )}
            />
          </div>

        </div>
        <div className='flex justify-center mt-6 mb-10'>
          <Button
            content={'Reset password'}
            onClick={handleRequest}
            loading={response.loading}
            disabled={
              password.password.length < 8 ||
              password.password !== password.password_confirmation
            }
          />
        </div>
      </div>
    </div>
  );
};

ChangePassword.propTypes={
  email: PropTypes.string,
};

export default ChangePassword;
