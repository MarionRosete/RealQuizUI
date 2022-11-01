import React from 'react'

const Input = ({type,onChange,placeholder}) => {
  return (
    <input class="bg-gray-200 
        appearance-none 
        border-2 
        border-gray-200 
        rounded 
        w-full
        py-2 
        px-4 
        text-gray-700 
        leading-tight 
        focus:outline-none 
        focus:bg-white 
        focus:border-purple-500" 
        id="inline-password" 
        type={type} 
        placeholder={placeholder}
        onChange={(e)=>onChange(e.target.value)}
    />
  )
}

export default Input