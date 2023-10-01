import React from 'react'
import { DarkMode } from '../../helper/DarkMode'

const textActive  = DarkMode?"text-blue-500": "text-blue-600"
const textInactive = DarkMode?"text-gray-400":"text-gray-500"
const borderActive = DarkMode?"border-blue-500": "border-blue-600"
const borderInActive = DarkMode?"border-blue-300":"border-blue-200"
const success =   DarkMode?"bg-blue-500 text-white": "bg-blue-600 text-white"
const stepper  = (index,active) => {
  if(index+1 < active){
    return `flex w-full  items-center  ${DarkMode?'text-blue-500':'text-blue-600'} after:content-[''] after:w-full after:h-1 after:border-b after:border-4 after:inline-block ${DarkMode? "after:border-blue-800":"after:border-blue-400"}`
  }
  return `flex w-full  items-center  ${DarkMode?'text-blue-500':'text-blue-600'} after:content-[''] after:w-full after:h-1 after:border-b after:border-4 after:inline-block ${DarkMode? "after:border-blue-800":"after:border-blue-100"}`
}
const successIcon =()=>{
  return (
<svg className="w-3 h-3 text-white lg:w-3 lg:h-3 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
</svg>
  )
} 

const StepperInfo = ({steps, active}) => {
  return (
    <div className="flex">
        {steps.map((step,index)=>
        <div  className={index+1 !== steps.length?"w-full":""}>
          <div 
            className={`
            ${index+1 !== steps.length?stepper(index,active):"text-blue-600 dark:text-blue-500"}
            ${active!==index+1?textInactive:textActive}`}
          >
            <span
              className={`flex justify-center items-center  w-8 h-8 border rounded-full border-2 
              ${index+1 < active && success}
              ${active!==index+1?borderInActive:borderActive}`
            }>
              {index+1 < active?successIcon():index+1}
            </span>
          </div>
          
            <span >
              <h3 className="font-medium leading-tight">
                {step.label}
              </h3>
              <p className="text-sm">
                {step.description}
              </p>
              </span>
          
        </div>
        )}
    </div>
  )
}

export default StepperInfo