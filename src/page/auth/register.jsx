import React, {Fragment, useState} from 'react';
import {Dialog, Transition} from '@headlessui/react';
import Label from '../../component/elements/label';
import Input from '../../component/elements/input';
import Button from '../../component/elements/button';
import PropTypes from 'prop-types';
import Select from '../../component/elements/Select';

const Account = [
  {value: 0, name: 'Select Account'},
  {value: 1, name: 'Student'},
  {value: 1, name: 'Teacher'},
];
const Register = ({isOpen, closeModal}) => {
  const [data, setData] = useState({
    email: null,
    password: null,
    confirm_password: null,
    account: Account[0],
  });
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
              p-6
              text-center
              align-middle
              shadow-xl
              transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg
                font-medium
                leading-6
                text-gray-900"
                >
                Sign Up
                </Dialog.Title>
                <div className="mt-7">
                  <form className="w-full max-w-sm">
                    <div className="md:flex md:items-center mb-6">
                      <div className="md:w-1/3">
                        <Label content={'Account'}/>
                      </div>
                      <div className="md:w-2/3">
                        <Select
                          width={52}
                          Lists={Account}
                          selected={data.account}
                          setSelected={(e)=>
                            setData({...data, account: e})
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
                      <Button onClick={closeModal}/>
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
