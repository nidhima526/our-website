import React from 'react';
import './Button.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  isFullWidth = false, 
  iconLeft, 
  iconRight, 
  disabled = false, 
  onClick, 
  type = 'button',
  className = ''
}) => {
  const baseClass = 'ds-btn';
  const variantClass = `ds-btn-${variant}`;
  const sizeClass = `ds-btn-${size}`;
  const widthClass = isFullWidth ? 'ds-btn-full' : '';
  
  return (
    <button
      type={type}
      className={`${baseClass} ${variantClass} ${sizeClass} ${widthClass} ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {iconLeft && <span className="ds-btn-icon-left">{iconLeft}</span>}
      <span className="ds-btn-text">{children}</span>
      {iconRight && <span className="ds-btn-icon-right">{iconRight}</span>}
    </button>
  );
};

export default Button;
