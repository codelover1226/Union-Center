import React, { useState } from 'react';

function CustomButton({ label, width, backgroundColor, fontColor, outline, centre, onClick }) {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const customStyles = {
    width: width,
    backgroundColor: !hovered ? backgroundColor : '#F1ECE2',
    border: outline ? `1px solid #F1ECE2` : 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, color 0.3s ease',
    padding: '2px',
    textAlign: "center",
    margin: centre ? 'auto' : 'none',
    color: !hovered? fontColor : '#153644' 
  };

  return (
    <div
      className="custom-button"
      style={customStyles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {label}
    </div>
  );
}

export default CustomButton;