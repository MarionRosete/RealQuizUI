import React from 'react';
import PropTypes from 'prop-types';

const Button = ({onClick, disabled}) => {
  return (
    <button
      type="button"
      className="inline-flex
        justify-center
        rounded-md
        border
        border-transparent
        bg-purple-400
        dark:bg-purple-700
        px-4
        py-2
        text-sm
        font-medium
        text-white
        hover:bg-purple-500
        dark:hover:bg-purple-800
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-blue-500
        focus-visible:ring-offset-2
        disabled:bg-gray-300"
      onClick={onClick}
      disabled={disabled}
    >
        Sign Up
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Button;
