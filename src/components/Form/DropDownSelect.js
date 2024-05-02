import React from 'react';

const Select = ({ options, onChange, id }) => {
  return (
    <select className="bg-transparent border-b border-[#153644] rounded-none w-full h-10 focus:border-none" placeholder="Select an option" onChange={onChange} id={id}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>{option.label}</option>
      ))}
    </select>
  );
};

export default Select;