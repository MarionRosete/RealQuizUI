import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../loader/Spinner';

const Button = ({onClick, disabled, loading, content, Icon}) => {
  return (
    <button
      type="button"
      className="inline-flex
        justify-center
        rounded-md
        border
        border-transparent
        bg-[#646cff]
        px-4
        py-2
        text-sm
        font-medium
        text-white
        hover:bg-[#535bf2]
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
    >{loading?
      <><Spinner /><span>Loading...</span></>:
      <>{Icon}{content}</>

      }
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  content: PropTypes.string,
  Icon: PropTypes.any,
};

export default Button;
