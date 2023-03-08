import React from 'react';
import PropTypes from 'prop-types';


const IconButton = ({Icon, onClick}) => {
  return (
    <div onClick={onClick} className='
    w-7
    h-7
    border-solid
    border-2
    border-zinc-600
    rounded-full
    flex
    justify-center
    items-center
    cursor-pointer
    hover:bg-zinc-600
    hover:border-zinc-600
  '>
      {Icon}
    </div>
  );
};
IconButton.propTypes = {
  onClick: PropTypes.func,
  Icon: PropTypes.any,
};
export default IconButton;
