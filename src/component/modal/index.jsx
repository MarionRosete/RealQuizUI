import React, {Fragment} from 'react';
import {Dialog, Transition} from '@headlessui/react';
import {
  XMarkIcon,
} from '@heroicons/react/24/outline';
import PropTypes from 'prop-types';


const Modal = ({Contents, isOpen, closeModal, title}) => {
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
            dark:bg-zinc-800
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
                  {title}
                </Dialog.Title>
                <Contents/>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
  closeModal: PropTypes.func,
  Contents: PropTypes.func,
  title: PropTypes.string,
};

export default Modal;
