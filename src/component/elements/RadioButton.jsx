import React from 'react';
import PropTypes from 'prop-types';
const RadioButton = ({value, onChange, name, checked}) => {
  return (
    <input
      type="radio"
      checked={checked}
      value={value}
      onChange={onChange}
      name={name}
      className="
            w-4
            h-4
            text-blue-600
            bg-gray-100
            border-gray-300
            focus:ring-blue-500
            dark:focus:ring-blue-600
            dark:ring-offset-gray-800
            dark:bg-gray-700
            dark:border-gray-600"
    />
  );
};

RadioButton.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func,
  name: PropTypes.number,
  checked: PropTypes.bool,
};
export default RadioButton;
