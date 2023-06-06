import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../loader/Spinner';

const Button = ({onClick, disabled, loading, content, Icon, size, type}) => {
  const handleSize = () => {
    switch (size) {
      case 'xsmall':
        return 'text-xs px-3 py-2';
        break;
      case 'small':
        return 'text-sm px-3 py-2';
        break;
      case 'medium':
        return 'text-sm';
        break;
      case 'Large':
        return 'px-5 py-3 text-base';
      default:
        break;
    }
  };
  const handleType = () => {
    const defOutlined = `
      border
      border-[#535bf2]
      text-white
      hover:text-white
      hover:bg-[#646cff]
    `;
    const defContained= `
    bg-purple-600
    text-white
    hover:text-white
    hover:bg-purple-500
    `;
    const dangerOutlined = `
      border
      border-red-700
      hover:bg-red-800
      hover:text-white
      text-red-800`;
    switch (type) {
      case 'danger-outlined':
        return dangerOutlined;
        break;
      case 'def-outlined':
        return defOutlined;
        break;
      default:
        return defContained;
        break;
    }
  };
  return (
    <button
      type="button"
      className={`inline-flex
        justify-center
        rounded-md
        ${handleType()}
        ${handleSize()}
        font-medium
        disabled:cursor-not-allowed
        disabled:bg-inherit
        disabled:hover:bg-gray-500
        disabled:text-gray-400`}
      onClick={onClick}
      disabled={disabled||loading}
    >{loading?
      <><Spinner /><span>Loading...</span></>:
      <div className='flex gap-x-2 items-center'>{Icon}{content}</div>

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
  size: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
