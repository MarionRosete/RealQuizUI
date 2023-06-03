import React from 'react';
import PropTypes from 'prop-types';
import {Tooltip} from 'flowbite';


const IconButton = ({Icon, onClick, toolTip}) => {
  // set the tooltip content element
  const $targetEl = document.getElementById('tooltipContent');

  // set the element that trigger the tooltip using hover or click
  const $triggerEl = document.getElementById('tooltipButton');
  // options with default values
  const options = {
    placement: 'top',
    triggerType: 'hover',
    // onHide: () => {
    //     console.log('tooltip is shown');
    // },
    // onShow: () => {
    //     console.log('tooltip is hidden');
    // },
    // onToggle: () => {
    //     console.log('tooltip is toggled');
    // }
  };
  const tooltip = new Tooltip($targetEl, $triggerEl, options);
  return (
    <>
      <div id="tooltipButton" onClick={onClick}
        className='
          w-5
          h-5
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
        '
      >
        {/*  JSX icon */}
        {Icon}
      </div>
      <div id="tooltipContent"
        role="tooltip"
        onMouseEnter={tooltip.show}
        onMouseOut={tooltip.hide}
        className="
          absolute
          z-10
          invisible
          inline-block
          px-3
          py-2
          text-sm
          font-medium
          text-white
          transition-opacity
          duration-300
          bg-gray-900
          rounded-lg
          shadow-sm
          opacity-0
          tooltip
          dark:bg-gray-700">
        {toolTip}
        <div className="tooltip-arrow" data-popper-arrow></div>
      </div>
    </>
  );
};
IconButton.propTypes = {
  onClick: PropTypes.func,
  Icon: PropTypes.any,
  toolTip: PropTypes.string,
};
export default IconButton;
