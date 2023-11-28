import React from 'react';
import '../App.css'; // Import your button CSS file

function Button({ text, secondary, svgPath }) {
  const buttonClass = secondary ? 'genButton secondary' : 'genButton';

  return (
    <button className={buttonClass}>
      {svgPath && <svg height="24" width="24" fill="#FFFFFF" viewBox="0 0 24 24" className="sparkle">
        <path d={svgPath}></path>
      </svg>}
      {text}
    </button>
  );
}

export default Button;
