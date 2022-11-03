import React, {Fragment, useState} from 'react';
import {Dialog, Transition} from '@headlessui/react';
import Label from '../../component/elements/label';
import Input from '../../component/elements/input';
import Button from '../../component/elements/button';
import PropTypes from 'prop-types';
import Select from '../../component/elements/Select';
import {
  XMarkIcon,
} from '@heroicons/react/24/outline';
import {registerAPI} from '../../api/auth';

const Account = [
  {value: 0, name: 'Select Account'},
  {value: 1, name: 'Student'},
  {value: 1, name: 'Teacher'},
];
const Register = ({isOpen, closeModal}) => {
  const [data, setData] = useState({
    email: null,
    name: null,
    password: null,
    confirm_password: null,
    role: Account[0],
  });
  const handleRegister = async ()=>{
    const request = await registerAPI({...data,
      role: data.role.name.toLocaleLowerCase(),
    });
    if (request.status===200) {
      localStorage.setItem('token', request.token);
    }
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
                <div className="mt-10">
                  <form className="w-full max-w-sm"
                    onSubmit={(e)=>{
                      e.preventDefault();
                      handleRegister();
                    }
                    }
                  >
                    <div className="md:flex md:items-center mb-6">
                      <div className="md:w-1/3">
                        <Label content={'Account'}/>
                      </div>
                      <div className="md:w-2/3">
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
                        <Label content={'Full name'}/>
                      </div>
                      <div className="md:w-2/3">
                        <Input
                          type={'text'}
                          placeholder={'Full name'}
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
                            setData({...data, confirm_password: e.target.value})
                          }
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <Button onClick={()=>handleRegister()}/>
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
};
export default Register;
