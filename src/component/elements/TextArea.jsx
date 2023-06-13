import React from 'react';
import PropTypes from 'prop-types';

const TextArea = ({placeholder, rows, onChange, value, error, helper}) => {
  return (
    <div className='w-full'>
      <textarea
        id="textarea"
        rows={rows}
        defaultValue={value}
        className="block
        p-2.5
        text-sm
        text-gray-900
        rounded-lg
        w-full
        border
        border-gray-500
        focus:ring-blue-500
        focus:border-blue-500
        dark:bg-gray-700
        dark:border-gray-600
        dark:placeholder-gray-400
        dark:text-white
        dark:focus:ring-blue-500
        dark:focus:border-blue-500"
        placeholder={placeholder}
        onChange={onChange}
        style={error?
          {border: '2px', borderColor: 'red', borderStyle: 'solid'}:{}
        }
      />
      {helper?
        <div className='text-xs text-start font-bold text-red-500'>
          {helper}
        </div>:null
      }
    </div>


  );
};

TextArea.propTypes = {
  value: PropTypes.any,
  rows: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
  helper: PropTypes.string,
};

export default TextArea;
