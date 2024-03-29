import React from 'react';
import PropTypes from 'prop-types';

const Label = ({content}) => {
  return (
    <label className="block
    font-bold
    md:text-right
    mb-1
    md:mb-0
    pr-4"
    >
      {content}
    </label>
  );
};

Label.propTypes = {
  content: PropTypes.string,
};

export default Label;
