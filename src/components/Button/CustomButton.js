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
    backgroundColor: !hovered ? backgroundColor : '#153644',
    border: outline ? `1px solid #153644` : 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, color 0.3s ease',
    padding: '2px',
    textAlign: "center",
    margin: centre ? 'auto' : 'none',
    color: !hovered? fontColor : '#F3EBDD',
    height : "39px",
  };

  return (
    <div
      className="custom-button text-[20px]"
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