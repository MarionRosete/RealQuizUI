/* eslint-disable max-len */
import React from 'react';
import {Toast} from 'flowbite-react';
import PropTypes from 'prop-types';
import {Dismiss} from 'flowbite';
import {TeacherStateContext} from '../../globalstate/TeacherContext';
import {useContext} from 'react';

const ToastComponent = ({Icon, Msg}) => {
  const {setToast}= useContext(TeacherStateContext);
  // target element that will be dismissed
  const $targetEl = document.getElementById('openToggle');

  // optional trigger element
  const $triggerEl = document.getElementById('closeToggle');

  // options object
  const options = {
    transition: 'transition-opacity',
    duration: 500,
    timing: 'ease-out',
    // callback functions
    onHide: (context, targetEl) => {
      setTimeout(()=>setToast({
        isOpen: false,
        msg: null,
        icon: null,
      }), 500);
    },
  };
  const dismiss = new Dismiss($targetEl, $triggerEl, options);
  return (

    <Toast
      className='fixed bottom-5 right-5'
      id={'openToggle'}
      duration={75}
    >
      {Icon}
      <div id={'triggerElement'} className="ml-3 text-sm font-normal font-black text-black">
        {Msg}
      </div>
      <Toast.Toggle onClick={()=>dismiss.hide()} id='closeToggle'/>
    </Toast>


  );
};
ToastComponent.propTypes = {
  Icon: PropTypes.any,
  Msg: PropTypes.string,
};
export default ToastComponent;
