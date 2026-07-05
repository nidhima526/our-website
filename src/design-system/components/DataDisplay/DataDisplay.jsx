import React from 'react';
import './DataDisplay.css';

export const ProgressBar = ({ progress, label, showValue = true, color = 'var(--color-primary)' }) => (
  <div className="ds-progress-wrapper">
    {(label || showValue) && (
      <div className="flex justify-between mb-1 small-text font-medium">
        {label && <span>{label}</span>}
        {showValue && <span>{progress}%</span>}
      </div>
    )}
    <div className="ds-progress-track">
      <div 
        className="ds-progress-fill" 
        style={{ width: `${progress}%`, backgroundColor: color }}
      ></div>
    </div>
  </div>
);

export const Table = ({ columns, data }) => (
  <div className="ds-table-container">
    <table className="ds-table">
      <thead>
        <tr>
          {columns.map((col, idx) => (
            <th key={idx}>{col.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIdx) => (
          <tr key={rowIdx}>
            {columns.map((col, colIdx) => (
              <td key={colIdx}>{row[col.accessor]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
