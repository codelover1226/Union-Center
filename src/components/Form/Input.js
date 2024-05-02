import React, { useState } from 'react';
import './index.css'

const Input = ({ placeholder, type, onValueChange, id }) => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
    if (onValueChange) {
      onValueChange(event.target.value, event.target.id);
    }
  };

  return (
    <input
      className="bg-transparent border-b border-[#153644] rounded-none w-full h-10 focus:border-none"
      type={type || 'text'}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      id={id}
      required
    />
  );
};

export default Input;