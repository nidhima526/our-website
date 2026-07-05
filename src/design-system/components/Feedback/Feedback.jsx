import React, { useState } from 'react';
import { X } from 'lucide-react';
import './Feedback.css';

export const Badge = ({ children, variant = 'primary', className = '' }) => {
  return (
    <span className={`ds-badge ds-badge-${variant} ${className}`}>
      {children}
    </span>
  );
};

export const Modal = ({ isOpen, onClose, title, children, footer }) => {
  if (!isOpen) return null;
  return (
    <div className="ds-modal-overlay" onClick={onClose}>
      <div className="ds-modal-content animate-slide-up" onClick={(e) => e.stopPropagation()}>
        <div className="ds-modal-header flex justify-between items-center">
          <h3 className="m-0">{title}</h3>
          <button className="ds-modal-close" onClick={onClose}><X size={20}/></button>
        </div>
        <div className="ds-modal-body">{children}</div>
        {footer && <div className="ds-modal-footer">{footer}</div>}
      </div>
    </div>
  );
};

export const Drawer = ({ isOpen, onClose, direction = 'right', children }) => {
  if (!isOpen) return null;
  return (
    <div className="ds-drawer-overlay animate-fade-in" onClick={onClose}>
      <div className={`ds-drawer-content ds-drawer-${direction}`} onClick={(e) => e.stopPropagation()}>
        <button className="ds-drawer-close" onClick={onClose}><X size={24}/></button>
        {children}
      </div>
    </div>
  );
};

export const Toast = ({ type = 'info', message, onClose }) => {
  return (
    <div className={`ds-toast ds-toast-${type} animate-slide-up`}>
      <span className="ds-toast-msg">{message}</span>
      {onClose && <button className="ds-toast-close" onClick={onClose}><X size={16}/></button>}
    </div>
  );
};
