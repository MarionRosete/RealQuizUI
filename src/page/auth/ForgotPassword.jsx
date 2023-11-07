import React, { useState, Fragment, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Button from "../../component/elements/Button";
import Input from "../../component/elements/Input";
import Label from "../../component/elements/Label";
import PropTypes from "prop-types";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { forgotPasswordAPI } from "../../api/auth";
import { validateEmail } from "../../library/ValidateEmail";

const initState = {
  email: null,
  errorMsg: null,
  foundEmailMsg: null,
  loading: false,
};

const ForgotPassword = ({ isOpen, closeModal }) => {
  const [data, setData] = useState(initState);
  useEffect(() => {
    if (!isOpen) {
      setData(initState);
    }
  }, [isOpen]);

  const handleRequest = async (e) => {
    e.preventDefault();
    setData({ ...data, loading: true });
    const request = await forgotPasswordAPI(data);
    if (request.status === 200) {
      setData({
        ...data,
        errorMsg: null,
        foundEmailMsg: request.data.msg,
        loading: false,
        email: null,
      });
    } else {
      setData({
        ...data,
        errorMsg: request.response.data.message,
        loading: false,
      });
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
          <div
            className="
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
              <Dialog.Panel
                className="w-full
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
              transition-all"
              >
                <div className="flex justify-end">
                  <div className="h-4 w-4 cursor-pointer" onClick={closeModal}>
                    <XMarkIcon />
                  </div>
                </div>
                <Dialog.Title
                  className="text-3xl
                  font-medium
                  font-bold
                  leading-10
                  text-gray-900
                  text-blue-700"
                >
                  Forgot password
                </Dialog.Title>
                <div className="mt-10">
                  {data.errorMsg !== null && (
                    <div className="pb-4 text-red-700 text-sm">
                      {data.errorMsg}
                    </div>
                  )}
                  <form className="w-full max-w-sm" onSubmit={handleRequest}>
                    {data.foundEmailMsg === null ? (
                      <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                          <Label content={"Email"} />
                        </div>
                        <div className="md:w-2/3">
                          <Input
                            type={"text"}
                            placeholder={"Email"}
                            onChange={(e) =>
                              setData({ ...data, email: e.target.value })
                            }
                          />
                        </div>
                      </div>
                    ) : (
                      data.foundEmailMsg
                    )}
                    <div className="mt-4">
                      <Button
                        onClick={handleRequest}
                        disabled={
                          data.email === null || !validateEmail(data.email)
                        }
                        content={"Search"}
                        loading={data.loading}
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

ForgotPassword.propTypes = {
  closeModal: PropTypes.func,
  isOpen: PropTypes.bool,
};

export default ForgotPassword;
