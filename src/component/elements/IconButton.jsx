import React from 'react';
import PropTypes from 'prop-types';


const IconButton = ({Icon, onClick, toolTip, color}) => {
 
  return (
    <div className="group flex justify-center">
      <div className={`${color} cursor-pointer`} onClick={onClick}>
        {Icon}
      </div>
      <span className="absolute top-10 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
        {toolTip}
      </span>
    </div>
  );
};
IconButton.propTypes = {
  onClick: PropTypes.func,
  Icon: PropTypes.any,
  toolTip: PropTypes.string,
};
export default IconButton;
