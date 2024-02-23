import React from 'react';
import './index.css'
const Input = ({ placeholder }) => {
  return (
    <input
      className="bg-transparent border-b border-[#153644] rounded-none w-full h-10 focus:border-none"
      type="text"
      placeholder={placeholder}
    />
  );
};

export default Input;