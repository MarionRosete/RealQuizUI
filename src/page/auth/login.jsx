import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Button from "../../component/elements/Button";
import Input from "../../component/elements/Input";
import Label from "../../component/elements/Label";
import PropTypes from "prop-types";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { loginAPI } from "../../api/auth";
import { useEffect } from "react";
import { validateEmail } from "../../library/ValidateEmail";

const Login = ({ isOpen, closeModal, forgotPassword }) => {
  const [data, setData] = useState({
    email: null,
    password: null,
    loading: false,
  });
  const [error, setError] = useState(null);

  const initState = {
    email: null,
    password: null,
    loading: false,
  };
  useEffect(() => {
    if (!isOpen) {
      setData(initState);
      setError(null);
    }
  }, [isOpen]);
  const handleLogin = async () => {
    setData({ ...data, loading: true });
    const payload = { email: data.email, password: data.password };
    const request = await loginAPI(payload);
    if (request.status === 200) {
      localStorage.setItem("token", request.data.token);
      window.location.href = "/dashboard";
    } else {
      setError(request.response.data.message);
    }
    setData({ ...data, loading: false });
  };
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={closeModal}
        id="modal"
      >
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
              max-w-md
              transform
              overflow-hidden
              rounded-2xl
              p-6
              text-center
              align-middle
              shadow-xl
              transition-all"
                id="modal"
              >
                <div className="flex justify-end" id="modal">
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
                  Sign In
                </Dialog.Title>
                <div className="mt-10">
                  {error !== null && (
                    <div className="pb-4 text-red-700 text-sm">{error}</div>
                  )}
                  <form className="w-full max-w-sm">
                    <div className="md:flex md:items-center mb-6">
                      <div className="md:w-1/3">
                        <Label content={"Email"} />
                      </div>
                      <div className="md:w-2/3">
                        <Input
                          type={"text"}
                          autoComplete={"email"}
                          placeholder={"Email"}
                          onChange={(e) =>
                            setData({ ...data, email: e.target.value })
                          }
                        />
                      </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                      <div className="md:w-1/3">
                        <Label content={"Password"} />
                      </div>
                      <div className="md:w-2/3">
                        <Input
                          type={"password"}
                          autoComplete={"new-password"}
                          placeholder={"*************"}
                          onChange={(e) =>
                            setData({ ...data, password: e.target.value })
                          }
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <Button
                        onClick={handleLogin}
                        disabled={
                          data.email === null ||
                          !validateEmail(data.email) ||
                          data.password === null ||
                          data.password === ""
                        }
                        size={"small"}
                        content={"Sign In"}
                        loading={data.loading}
                      />
                    </div>
                    <div
                      className="flex
                      justify-start
                      text-sm
                      text-blue-400
                      cursor-pointer"
                      onClick={() =>
                        forgotPassword((oldState) => ({
                          ...oldState,
                          forgotPassword: true,
                        }))
                      }
                    >
                      Forgot password?
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
  forgotPassword: PropTypes.func,
};
export default Login;
