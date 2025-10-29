import React, { useId } from "react";

const Input = React.forwardRef(function Input( //this hook allows us to forward refs to the input element
  { label, type = "text", className = "", ...props }, //these are the props that can be passed to the Input component
  ref
) {
  const id = useId(); //used to generate a unique id for the input element
  return (
    <div className="w-full">
      {label && (
        <label className="inline-block mb-1 pl-1" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        type={type}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        ref={ref}
        {...props}
        id={id}
      />
    </div>
  );
});

export default Input;
