import React from 'react'
import { DarkMode } from '../../helper/DarkMode'

const InputText = ({
    size, disable, helper, error, label,placeholder}) => {
  return (
    <div>
        {label?
        <label  className={labelStyle}>
            {label}
        </label>
        :
        null
        }
        <input 
            type="text"  
            lassName={inputStyle} 
            placeholder={placeholder} 
            disabled={disable}
        />
        <p class={helperStyle}>
            {helper}
        </p>
    </div>
  )
}

const labelStyle = `
    block mb-2 text-sm font-medium 
    ${error?DarkMode?"text-red-600":"text-red-600":DarkMode?"dark:text-white":"text-gray-900"} 
`

const inputStyle = `
    bg-gray-50 border border-gray-300 text-gray-900 text-sm 
    rounded-lg focus:ring-blue-600 focus:border-blue-600 
    block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 
    dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
    dark:focus:border-blue-500
`

const helperStyle = `
    mt-2 text-sm text-gray-500 dark:text-gray-400
`

export default InputText