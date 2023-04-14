
import {Popover, Transition} from '@headlessui/react';
import React, {Fragment} from 'react';
import PropTypes from 'prop-types';


const PopoverComponent=({ButtonToClick, Content, data})=> {
  console.log(data);
  return (

    <Popover className="relative">
      {({open}) => (
        <>
          <Popover.Button>
            {ButtonToClick}
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel
              className="absolute
                left-1/2
                z-10
                mt-3
                w-screen
                max-w-sm
                -translate-x-1/2
                transform
                px-4
                sm:px-0
               ">
              <div className="overflow-y-auto
                rounded-lg
                shadow-lg
                ring-1
                ring-black
                ring-opacity-5"

              id='popoverElement'
              >
                <div className="relative
                  grid
                  gap-8
                  p-7
                 "
                >
                  {Content.map((item) => (
                    <a
                      key={item.name}
                      onClick={()=>item.onClick(data)}
                      className="-m-3
                      flex
                      items-center
                      rounded-lg
                      p-2
                      transition
                      cursor-pointer
                      duration-150
                      ease-in-out
                      hover:bg-gray-5
                      focus:outline-none
                      focus-visible:ring
                      focus-visible:ring-orange-50
                      focus-visible:ring-opacity-50"
                    >
                      <div className="flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        sm:h-12
                        sm:w-12"
                      >
                        <item.icon aria-hidden="true" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm
                          font-medium"
                        >
                          {item.name}
                        </p>
                        <p className="text-sm
                          text-gray-500"
                        >
                          {item.description}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>

  );
};


PopoverComponent.propTypes = {
  ButtonToClick: PropTypes.any,
  Content: PropTypes.any,
  data: PropTypes.any,
};
export default PopoverComponent;
