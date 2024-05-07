import React, { useState } from 'react';

function CustomTabButton({ label, width, backgroundColor, fontColor, outline, centre, focus, onFocus }) {

	const customStyles = {
		width: width,
		backgroundColor: !focus ? backgroundColor : '#F1ECE2',
		color: !focus? fontColor : '#153644',
		border: outline ? `1px solid #F1ECE2` : 'none',
		cursor: 'pointer',
		transition: 'background-color 1s ease',
		padding: '2px',
		textAlign: "center",
		margin: centre ? 'auto' : 'none'
	};

	return (
		<div
			className="custom-button"
			style={customStyles}
			onMouseEnter={onFocus}  
		>
			<p style={{ color: !focus? fontColor : '#153644' }}>
				{label}
			</p>
		</div>
	);
}

export default CustomTabButton;