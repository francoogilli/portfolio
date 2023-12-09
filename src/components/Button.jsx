// Button.jsx
import React from 'react';
import '../App.css'; // Importa tu archivo CSS de botones

function Button({ children, secondary }) {
  const buttonClass = secondary ? 'genButton secondary' : 'genButton';

  return (
    <button className={buttonClass}>
      {children}
    </button>
  );
}

export default Button;
