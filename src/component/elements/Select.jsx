import React, { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import PropTypes from "prop-types";

const Select = ({ Lists, setSelected, selected, disabled, placeholder,error }) => {
  return (
    <div>
      <Listbox value={selected} onChange={setSelected} disabled={disabled}>
        <div className="relative mt-1">
          <Listbox.Button
            className={`
              relative
                w-full
                cursor-default
                rounded-lg
                bg-white
                dark:bg-slate-700
                py-2
                pl-3
                pr-10
                text-left
                shadow-md
                ${error ? "dark:border-red-600 border-red-600" : null}
                ${error ? " text-red-600" : null}
                focus:outline-none
                focus-visible:border-indigo-500
                focus-visible:ring-2 focus-visible:ring-white
                focus-visible:ring-opacity-75
                focus-visible:ring-offset-2
                focus-visible:ring-offset-orange-300
                sm:text-sm
            `}
          >
            <span className="block truncate">
              {selected?.name || placeholder}
            </span>
            <span
              className="pointer-events-none
                absolute inset-y-0
                right-0
                flex
                items-center
                pr-2"
            >
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options
              className="
                absolute
                mt-1
                max-h-60
                w-full
                overflow-auto
                rounded-md
                bg-white
                py-1
                text-base
                shadow-lg
                ring-1
                ring-black
                ring-opacity-5
                focus:outline-none
                sm:text-sm
                z-50"
            >
              {Lists.map((data, index) => (
                <Listbox.Option
                  key={index}
                  className={`relative cursor-default select-none py-2 pl-8 pr-4 `}
                  value={data}
                >
                  {({ active }) => (
                    <>
                      <span
                        className={`block truncate text-sm ${
                          active ? "font-medium" : "font-normal"
                        }`}
                      >
                        {data.name}
                      </span>
                      {data.name === selected?.name ? (
                        <span
                          className="absolute
                            inset-y-0
                            left-0
                            flex
                            items-center
                            pl-1
                            text-blue-600"
                        >
                          <CheckIcon className="h-4 w-4" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

Select.propTypes = {
  Lists: PropTypes.array,
  setSelected: PropTypes.func,
  selected: PropTypes.object,
};
export default Select;
