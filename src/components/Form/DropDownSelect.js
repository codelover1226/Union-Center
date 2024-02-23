import React from 'react';

const Select = ({ options }) => {
  return (
    <select className="bg-transparent border-b border-[#153644] rounded-none w-full h-10 focus:border-none" placeholder="Select an option">
      {options.map((option, index) => (
        <option key={index} value={option.value}>{option.label}</option>
      ))}
    </select>
  );
};

export default Select;