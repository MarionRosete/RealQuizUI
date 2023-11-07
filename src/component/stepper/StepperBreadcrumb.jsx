import React from "react";
import { DarkMode } from "../../library/DarkMode";

const StepperBreadcrumb = ({ steps, active }) => {
  return (
    <ol className={container}>
      {steps.map((step, ind) => (
        <li key={ind} className={activeInactiveStep(ind + 1, active).text}>
          <span className={activeInactiveStep(ind + 1, active).step}>
            {ind + 1}
          </span>
          {step.label}
          {steps.length === ind + 1 ? null : BreadCrumbIcon()}
        </li>
      ))}
    </ol>
  );
};

export default StepperBreadcrumb;

//STYLES

const container = `
    flex
    items-center 
    w-full 
    p-3 
    space-x-2 
    text-sm 
    font-medium 
    text-center 
    text-gray-500 
    bg-white  
    dark:bg-gray-700
    rounded-lg 
    sm:text-base 
    sm:p-4 
    sm:space-x-4
    `;
const activeInactiveStep = (ind, active) => {
  return {
    text: `
            flex 
            items-center  
            ${
              ind <= active
                ? DarkMode
                  ? "text-blue-500"
                  : "text-blue-600"
                : ""
            }
        `,
    step: `
            flex 
            items-center 
            justify-center 
            w-6 h-6 
            mr-2 text-xs 
            border border-1
            ${
              ind <= active
                ? "dark:border-blue-500 border-blue-600"
                : "dark:border-gray-500 border-gray-600"
            }
            rounded-full 
            shrink-0 
            
            
        `,
  };
};

const BreadCrumbIcon = () => {
  return (
    <svg
      className="w-3 h-3 ml-2 sm:ml-4"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 12 10"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m7 9 4-4-4-4M1 9l4-4-4-4"
      />
    </svg>
  );
};
