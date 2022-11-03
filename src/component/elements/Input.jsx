import React from 'react';
import PropTypes from 'prop-types';


const Input = ({type, onChange, placeholder}) => {
  return (
    <input className="bg-gray-200
        dark:bg-slate-700
        appearance-none
        border-2
        border-gray-200
        rounded
        w-full
        py-2
        px-4
        text-gray-700
        dark:text-white
        leading-tight
        focus:outline-none
        focus:bg-white
        dark:focus:bg-slate-700
        focus:border-purple-500"
    type={type}
    placeholder={placeholder}
    onChange={onChange}
    />
  );
};
Input.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

export default Input;
