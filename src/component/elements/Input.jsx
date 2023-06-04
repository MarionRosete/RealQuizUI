import React from 'react';
import PropTypes from 'prop-types';


const Input = ({
  type, onChange, placeholder,
  max, autoComplete, defaultValue}) => {
  return (
    <input className="block
    p-2.5
    w-full
    text-sm
    text-gray-900
    rounded-lg
    border
    border-gray-500
    focus:ring-blue-500
    focus:border-blue-500
    dark:bg-gray-700
    dark:border-gray-600
    dark:placeholder-gray-400
    dark:text-white
    dark:focus:ring-blue-500
    dark:focus:border-blue-500"
    type={type}
    placeholder={placeholder}
    onChange={onChange}
    autoComplete={autoComplete}
    maxLength={max}
    size={max}
    defaultValue={defaultValue}
    />
  );
};
Input.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  autoComplete: PropTypes.string,
  max: PropTypes.string,
  defaultValue: PropTypes.string,
};

export default Input;
