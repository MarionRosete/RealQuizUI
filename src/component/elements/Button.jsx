import React from 'react';
import PropTypes from 'prop-types';

const Button = ({onClick}) => {
  return (
    <button
      type="button"
      className="inline-flex
        justify-center
        rounded-md
        border
        border-transparent
        bg-purple-400
        px-4
        py-2
        text-sm
        font-medium
        text-white
        hover:bg-purple-500
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-blue-500
        focus-visible:ring-offset-2"
      onClick={onClick}
    >
        Sign Up
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
