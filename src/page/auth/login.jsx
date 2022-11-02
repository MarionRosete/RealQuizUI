import React, {useState, Fragment} from 'react';
import {Dialog, Transition} from '@headlessui/react';
import Button from '../../component/elements/button';
import Input from '../../component/elements/input';
import Label from '../../component/elements/label';
import PropTypes from 'prop-types';


const Login = ({isOpen, closeModal}) => {
  const [data, setData] = useState({
    username: null,
    password: null,
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
                        <Label content={'Username'}/>
                      </div>
                      <div className="md:w-2/3">
                        <Input
                          type={'text'}
                          placeholder={'Username'}
                          onChange={(e)=>
                            setData(
                                {...data,
                                  username: e.target.value},
                            )
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
                            setData(
                                {...data,
                                  password: e.target.value},
                            )
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
Login.propTypes = {
  isOpen: PropTypes.bool,
  closeModal: PropTypes.func,
};
export default Login;
