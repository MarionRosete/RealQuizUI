import React from "react";
import { DarkMode } from "../../library/DarkMode";

const InputText = ({
  size,
  disable,
  helper,
  error,
  label,
  placeholder,
  required,
  onChange,
  value,
  errormsg,
}) => {
  return (
    <div>
      {label ? <label className={labelStyle}>{label}</label> : null}
      <input
        type="text"
        className={inputStyle}
        style={
          error
            ? {
                borderColor: "red",
                borderStyle: "solid",
              }
            : {}
        }
        placeholder={placeholder}
        disabled={disable}
        required={required}
        onChange={onChange}
        value={value}
      />
      {error ? (
        <div className="text-xs text-start font-bold text-red-500 mb-1">
          {errormsg}
        </div>
      ) : null}
      {helper ? (
        <div className="text-xs text-start font-bold text-red-500 mb-1">
          {helper}
        </div>
      ) : null}
    </div>
  );
};

const labelStyle = `block mb-2 text-sm font-medium text-gray-900 dark:text-white `;

const inputStyle = `
    bg-gray-50 border border-gray-300 text-gray-900 text-sm 
    rounded-lg focus:ring-blue-600 focus:border-blue-600 
    block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 
    dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
    dark:focus:border-blue-500
`;

const helperStyle = `
    mt-2 text-sm text-gray-500 dark:text-gray-400
`;

export default InputText;
