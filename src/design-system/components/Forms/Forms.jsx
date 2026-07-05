import React from 'react';
import './Forms.css';

export const Input = ({ 
  label, 
  error, 
  helperText, 
  iconLeft, 
  iconRight, 
  className = '', 
  id, 
  ...props 
}) => {
  return (
    <div className={`ds-form-group ${className}`}>
      {label && <label htmlFor={id} className="ds-label">{label}</label>}
      <div className="ds-input-wrapper">
        {iconLeft && <span className="ds-input-icon ds-icon-left">{iconLeft}</span>}
        <input 
          id={id} 
          className={`ds-input ${iconLeft ? 'has-icon-left' : ''} ${iconRight ? 'has-icon-right' : ''} ${error ? 'ds-input-error' : ''}`} 
          {...props} 
        />
        {iconRight && <span className="ds-input-icon ds-icon-right">{iconRight}</span>}
      </div>
      {error && <span className="ds-helper-text error-text">{error}</span>}
      {!error && helperText && <span className="ds-helper-text">{helperText}</span>}
    </div>
  );
};

export const Textarea = ({ label, error, helperText, className = '', id, ...props }) => {
  return (
    <div className={`ds-form-group ${className}`}>
      {label && <label htmlFor={id} className="ds-label">{label}</label>}
      <textarea 
        id={id} 
        className={`ds-input ds-textarea ${error ? 'ds-input-error' : ''}`} 
        {...props} 
      />
      {error && <span className="ds-helper-text error-text">{error}</span>}
      {!error && helperText && <span className="ds-helper-text">{helperText}</span>}
    </div>
  );
};

export const Checkbox = ({ label, id, checked, onChange, disabled }) => {
  return (
    <label className={`ds-checkbox-wrapper ${disabled ? 'disabled' : ''}`}>
      <input type="checkbox" id={id} checked={checked} onChange={onChange} disabled={disabled} className="ds-checkbox-input" />
      <span className="ds-checkbox-custom"></span>
      {label && <span className="ds-checkbox-label">{label}</span>}
    </label>
  );
};

export const ToggleSwitch = ({ label, id, checked, onChange, disabled }) => {
  return (
    <label className={`ds-toggle-wrapper ${disabled ? 'disabled' : ''}`}>
      <input type="checkbox" id={id} checked={checked} onChange={onChange} disabled={disabled} className="ds-toggle-input" />
      <span className="ds-toggle-slider"></span>
      {label && <span className="ds-toggle-label">{label}</span>}
    </label>
  );
};
