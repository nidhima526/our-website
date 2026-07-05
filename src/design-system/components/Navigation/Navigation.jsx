import React, { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import './Navigation.css';

export const Tabs = ({ tabs, defaultActive = 0, onChange }) => {
  const [active, setActive] = useState(defaultActive);

  const handleTabClick = (index) => {
    setActive(index);
    if (onChange) onChange(index);
  };

  return (
    <div className="ds-tabs-container">
      <div className="ds-tabs-list">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`ds-tab ${active === index ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="ds-tab-content">
        {tabs[active]?.content}
      </div>
    </div>
  );
};

export const Breadcrumb = ({ items }) => {
  return (
    <nav className="ds-breadcrumb">
      {items.map((item, index) => (
        <span key={index} className="ds-breadcrumb-item">
          <a href={item.href || '#'} className={index === items.length - 1 ? 'active' : ''}>
            {item.label}
          </a>
          {index < items.length - 1 && <ChevronRight size={14} className="ds-breadcrumb-separator" />}
        </span>
      ))}
    </nav>
  );
};

export const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  return (
    <div className="ds-pagination">
      <button 
        className="ds-page-btn" 
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <ChevronLeft size={16} />
      </button>
      
      {[...Array(totalPages)].map((_, idx) => (
        <button
          key={idx}
          className={`ds-page-btn ${currentPage === idx + 1 ? 'active' : ''}`}
          onClick={() => onPageChange(idx + 1)}
        >
          {idx + 1}
        </button>
      ))}

      <button 
        className="ds-page-btn" 
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <ChevronRight size={16} />
      </button>
    </div>
  );
};

export const Stepper = ({ steps, currentStep }) => {
  return (
    <div className="ds-stepper">
      {steps.map((step, index) => {
        const isActive = index === currentStep;
        const isCompleted = index < currentStep;
        
        return (
          <div key={index} className={`ds-step ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}>
            <div className="ds-step-circle">
              {isCompleted ? '✓' : index + 1}
            </div>
            <span className="ds-step-label">{step.label}</span>
            {index < steps.length - 1 && <div className="ds-step-line"></div>}
          </div>
        );
      })}
    </div>
  );
};
