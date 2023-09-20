import React, {Fragment} from 'react';
import {Dialog, Transition} from '@headlessui/react';
import PropTypes from 'prop-types';
const VerificationCodeSent=({isOpen, closeModal})=>{
  return (
    <>
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
            <div className="flex
            min-h-full
            items-center
            justify-center
            p-4
            text-center">
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
                  dark:bg-zinc-800
                    max-w-md
                    transform
                    overflow-hidden
                    rounded-2xl
                    bg-white
                    p-6
                    text-left
                    align-middle
                    shadow-xl
                    transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-bold leading-6 text-blue-700"
                  >
                    Thanks for signing up
                  </Dialog.Title>
                  <div className="mt-8">
                    <p className="text-sm font-medium">
                        You are one step towards taking/making exams
                    </p>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm">
                        Please verify your email address.
                        We verify email addresses so that you
                        can use forgot password later on.
                    </p>
                  </div>

                  <div className="mt-6">
                    <button
                      type="button"
                      className="inline-flex
                        justify-center
                        rounded-md
                        border
                        border-transparent
                        bg-blue-100
                        px-4
                        py-2
                        text-sm
                        font-medium
                        text-blue-900
                        hover:bg-blue-200
                        focus:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-blue-500
                        focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

VerificationCodeSent.propTypes = {
  isOpen: PropTypes.bool,
  closeModal: PropTypes.func,
};

export default VerificationCodeSent;
