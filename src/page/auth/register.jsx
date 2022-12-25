import React, {Fragment, useState, useEffect} from 'react';
import {Dialog, Transition} from '@headlessui/react';
import Label from '../../component/elements/Label';
import Input from '../../component/elements/Input';
import Button from '../../component/elements/Button';
import PropTypes from 'prop-types';
import Select from '../../component/elements/Select';
import {
  XMarkIcon,
} from '@heroicons/react/24/outline';
import {registerAPI} from '../../api/auth';
import {validateEmail} from '../../helper/ValidateEmail';

const Account = [
  {value: 0, name: 'Select Account'},
  {value: 1, name: 'Student'},
  {value: 1, name: 'Teacher'},
];
const Register = ({isOpen, closeModal, verify}) => {
  const [data, setData] = useState({
    email: null,
    name: null,
    password: null,
    password_confirmation: null,
    role: Account[0],
    loading: false,
  });
  const [error, setError] = useState(null);
  const initState = {
    email: null,
    name: null,
    password: null,
    password_confirmation: null,
    role: Account[0],
    loading: false,
  };
  useEffect(()=>{
    //  CLEAR STATE
    if (!isOpen) {
      setData(initState); setError(null);
    };
  }, [isOpen]);

  const handleRegister = async ()=>{
    setData({...data, loading: true});
    const request = await registerAPI({...data,
      role: data.role.name.toLocaleLowerCase(),
    });

    if (request.status===200) {
      localStorage.setItem('token', request.data.token);
      closeModal();
      verify((oldState)=>({
        ...oldState, verify: true,
      }));
    } else {
      setError(request.response.data.message);
    }
    setData({...data, loading: false});
  };


  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="
          flex
          min-h-full
          items-center
          justify-center
          p-4
          text-center"
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full
              max-w-md
              transform
              overflow-hidden
              rounded-2xl
              bg-white
              dark:bg-zinc-800
              p-6
              text-center
              align-middle
              shadow-xl
              transition-all">
                <div className='flex justify-end'>
                  <div className='h-4 w-4 cursor-pointer' onClick={closeModal}>
                    <XMarkIcon />
                  </div>
                </div>
                <Dialog.Title className="text-3xl
                  font-medium
                  font-bold
                  leading-10
                  text-gray-900
                  text-purple-700"
                >
                  Sign Up
                </Dialog.Title>
                <div className="mt-10">
                  {error !==null&&
                    <div className='pb-4 text-red-700 text-sm'>
                      {error}
                    </div>
                  }
                  <form className="w-full max-w-sm"
                    onSubmit={(e)=>{
                      e.preventDefault();
                      handleRegister();
                    }
                    }
                  >
                    <div className="md:flex md:items-center mb-6">
                      <div className="hidden lg:block md:w-1/3">
                        <Label content={'Account'}/>
                      </div>
                      <div className="md:w-2/3 flex justify-center lg:block">
                        <Select
                          Lists={Account}
                          selected={data.role}
                          setSelected={(e)=>
                            setData({...data, role: e})
                          }
                        />
                      </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                      <div className="md:w-1/3">
                        <Label content={'Email'}/>
                      </div>
                      <div className="md:w-2/3">
                        <Input
                          type={'text'}
                          placeholder={'Email'}
                          onChange={(e)=>
                            setData({...data, email: e.target.value})
                          }
                        />
                      </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                      <div className="md:w-1/3">
                        <Label content={'Name'}/>
                      </div>
                      <div className="md:w-2/3">
                        <Input
                          max={'50'}
                          type={'text'}
                          placeholder={'Name'}
                          onChange={(e)=>
                            setData({...data, name: e.target.value})
                          }
                        />
                      </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                      <div className="md:w-1/3">
                        <Label content={'Password'}/>
                      </div>
                      <div className="md:w-2/3">
                        <Input
                          type={'password'}
                          placeholder={'*************'}
                          onChange={(e)=>
                            setData({...data, password: e.target.value})
                          }
                        />
                      </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                      <div className="md:w-1/3">
                        <Label content={'Confirm Password'}/>
                      </div>
                      <div className="md:w-2/3">
                        <Input
                          type={'password'}
                          placeholder={'*************'}
                          onChange={(e)=>
                            setData({...data, password_confirmation:
                              e.target.value})
                          }
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <Button
                        loading={data.loading}
                        content={'Sign Up'}
                        onClick={handleRegister}
                        disabled={
                          (data.email===null||!validateEmail(data.email))||
                          data.name===null||
                          (data.password===null ||
                            data.password.length<8 ||
                            data.password!==data.password_confirmation
                          )||
                          data.password_confirmation===null||
                          data.role.value===0
                        }
                      />
                    </div>
                  </form>
                </div>

              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
Register.propTypes = {
  isOpen: PropTypes.bool,
  closeModal: PropTypes.func,
  verify: PropTypes.func,
};
export default Register;
