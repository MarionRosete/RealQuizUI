import React, {Fragment} from 'react';
import {Popover, Transition} from '@headlessui/react';
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import {solutions, resources} from './DummyContent';
import logo from '../../assets/logo.png';
import PropTypes from 'prop-types';

const Header=({openModal}) =>{
  return (
    <Popover className="
      bg-white
      dark:bg-zinc-800"
    >
      <div className="
        px-6
        text-center"
      >
        <div className="
          flex
          items-center
          justify-between
          border-b-2
          border-gray-100
          py-6
          md:justify-start
          md:space-x-10"
        >
          <div className="
            flex
            justify-start
            space-x-2
            items-center
            lg:w-0
            lg:flex-1
            text-center "
          >
            <a href="#"
              className='
              flex
              text-center'
            >
              <img
                className="
                  h-14
                  w-auto
                  sm:h-10
                  rounded-lg
                "
                src={logo}
                alt=""
              />
            </a>
            <div className='
              text-purple-700
              font-bold'
            >
            RealQuiz
            </div>
          </div>
          <div className="
            -my-2
            -mr-2
            md:hidden"
          >
            <Popover.Button className="
              inline-flex
              items-center
              justify-center
              rounded-md
              bg-white
              dark:bg-zinc-800
              p-2
              text-gray-400
              hover:text-gray-500
              focus:outline-none
              focus:ring-2
              focus:ring-inset
              focus:ring-indigo-500">

              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>

          <div className="
            hidden
            items-center
            justify-end
            md:flex
            md:flex-1
            lg:w-0">
            <a href='#'
              className="
                whitespace-nowrap
                text-base
                font-medium
                text-gray-500
                dark:text-white
                hover:text-gray-900"
              onClick={()=>
                openModal((old)=>({...old, login: true}))
              }
            >
              Sign in
            </a>
            <a
              href="#"
              className="ml-8
                inline-flex
                items-center
                justify-center
                whitespace-nowrap
                rounded-md
                border
                border-transparent
                bg-indigo-600
                px-4
                py-2
                text-base
                font-medium
                text-white
                shadow-sm
                hover:bg-indigo-700"
              onClick={()=>
                openModal((old)=>({...old, register: true}))
              }
            >
              Sign up
            </a>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus
          className="
            absolute
            z-15
            fixed
            inset-x-0
            top-0
            origin-top-right
            transform
            p-2
            transition md:hidden"
        >
          <div className="divide-y-2
          divide-gray-50
          rounded-lg
          bg-white
          shadow-lg
          ring-1
          ring-black
          ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="
                    inline-flex
                    items-center
                    justify-center
                    rounded-md
                    bg-white
                    p-2
                    text-gray-400
                    hover:bg-gray-100
                    hover:text-gray-500
                    focus:outline-none
                    focus:ring-2
                    focus:ring-inset
                    focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="
                        -m-3 flex
                        items-center
                        rounded-md
                        p-3 hover:bg-gray-50"
                    >
                      <item.icon
                        className="h-6 w-6
                          flex-shrink-0
                          text-indigo-600"
                        aria-hidden="true"
                      />
                      <span className="ml-3
                        text-base
                        font-medium
                        text-gray-900">
                        {item.name}
                      </span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <a href="#" className="text-base
                  font-medium
                  text-gray-900
                  hover:text-gray-700">
                  Pricing
                </a>

                <a href="#" className="text-base
                 font-medium
                 text-gray-900
                 hover:text-gray-700"
                >
                  Docs
                </a>
                {resources.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-base
                     font-medium
                     text-gray-900
                     hover:text-gray-700"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div>
                <p className="mt-6
                  text-center
                  text-base
                  font-medium
                  text-gray-500">
                  Existing customer?{' '}
                  <a href='/login'
                    className="text-indigo-600
                    hover:text-indigo-500"
                  >
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>

  );
};

Header.propTypes={
  openModal: PropTypes.func,
};

export default Header;
