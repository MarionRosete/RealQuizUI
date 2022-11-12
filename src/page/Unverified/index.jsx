import React from 'react';
import {useState} from 'react';
import {resendEmailVerification} from '../../api/auth';
import Button from '../../component/elements/Button';
import {
  CheckCircleIcon,
} from '@heroicons/react/24/outline';

const UnVerifiedEmail = () => {
  const [response, setResponse]=useState({status: null, msg: null});
  const [loading, setLoading] = useState(false);
  const handleResendEmail = async ()=>{
    setLoading(true);
    const request = await resendEmailVerification();
    console.log(request);
    setResponse({...response,
      status: request.status,
      msg: request.data.message,
    });
    setLoading(false);
  };
  return (
    <div className=' w-screen h-screen
      flex justify-center items-center'
    >
      <div>
        <div className='text-center font-bold text-5xl dark:text-white'>
        You haven&apos;t verify your email address yet
        </div>
        <div className='mt-10 '>
          {response.status===200?
          <div className='flex gap-x-5 items-center'>
            <div className='text-lime-600 font-bold'>
              {response.msg}
            </div>
            <div className='w-10 h-10 text-lime-600'>
              <CheckCircleIcon />
            </div>
          </div>:
          <div className='flex gap-x-5 items-center'>
          Did not receive email verification?
            <Button
              content={'Resend'}
              onClick={handleResendEmail}
              loading={loading}
            />
          </div>
          }
        </div>
      </div>
    </div>
  );
};

export default UnVerifiedEmail;
