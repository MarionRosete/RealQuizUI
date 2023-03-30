import React from 'react';
import PropTypes from 'prop-types';


const Input = ({type, onChange, placeholder, max, autoComplete}) => {
  return (
    <input className="
        appearance-none
        border-2
        border-gray-200
        rounded
        w-full
        py-2
        px-4
        leading-tight
        focus:outline-none
        focus:border-purple-500"
    type={type}
    placeholder={placeholder}
    onChange={onChange}
    autoComplete={autoComplete}
    maxLength={max}
    size={max}
    />
  );
};
Input.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  autoComplete: PropTypes.string,
  max: PropTypes.string,
};

export default Input;
