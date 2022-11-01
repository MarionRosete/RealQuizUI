import React from 'react'

const Label = ({content}) => {
  return (
    <label class="block 
    text-gray-500 
    font-bold 
    md:text-right 
    mb-1 
    md:mb-0 
    pr-4" 
    for="inline-password"
  >
    {content}
  </label>
  )
}

export default Label