import React, { useState } from 'react';

function CustomButton({ label, width, backgroundColor, fontColor, outline }) {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
    console.log("1");
  };

  const handleMouseLeave = () => {
    setHovered(false);
    console.log("0");
  };

  const customStyles = {
    width: width,
    backgroundColor: !hovered ? backgroundColor : '#F1ECE2',
    color: !hovered? fontColor : '#153644',
    border: outline ? `2px solid ${backgroundColor}` : 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  return (
    <div
      className="custom-button"
      style={customStyles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
        <p style={{ color: !hovered? fontColor : '#153644' }}>
            {label}
        </p>
    </div>
  );
}

export default CustomButton;