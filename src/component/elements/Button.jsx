import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../loader/Spinner';

const Button = ({onClick, disabled, loading, content}) => {
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
        disabled:bg-inherit
        disabled:hover:bg-gray-500
        disabled:text-gray-400"
      onClick={onClick}
      disabled={disabled||loading}
    >{true?
      <><Spinner /><span>Loading...</span></>:
      content
      }
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  content: PropTypes.string,
};

export default Button;
