/* eslint-disable max-len */
import React from 'react';
import {Toast} from 'flowbite-react';
import PropTypes from 'prop-types';
const ToastComponent = ({Icon, Msg}) => {
  return (

    <Toast
      className='fixed bottom-5 right-5'
      id={'toast'}
    >
      {Icon}
      <div className="ml-3 text-sm font-normal font-black text-black">
        {Msg}
      </div>
      <Toast.Toggle />
    </Toast>


  );
};
ToastComponent.propTypes = {
  Icon: PropTypes.any,
  Msg: PropTypes.string,
};
export default ToastComponent;
