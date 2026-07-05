import React from 'react';
import './Cards.css';

export const StatisticCard = ({ title, value, icon, trend, trendLabel }) => (
  <div className="ds-card ds-stat-card">
    <div className="flex justify-between items-start mb-4">
      <div>
        <h4 className="ds-stat-title">{title}</h4>
        <div className="ds-stat-value">{value}</div>
      </div>
      {icon && <div className="ds-stat-icon">{icon}</div>}
    </div>
    {trend && (
      <div className="ds-stat-footer flex items-center gap-1">
        <span className={`ds-trend ${trend > 0 ? 'ds-trend-up' : 'ds-trend-down'}`}>
          {trend > 0 ? '+' : ''}{trend}%
        </span>
        <span className="small-text">{trendLabel}</span>
      </div>
    )}
  </div>
);

export const ProfileCard = ({ name, role, avatar, bio, children }) => (
  <div className="ds-card ds-profile-card text-center flex flex-col items-center">
    <div className="ds-avatar mb-4">
      {avatar ? <img src={avatar} alt={name} /> : <span>{name.charAt(0)}</span>}
    </div>
    <h3 className="ds-profile-name">{name}</h3>
    <p className="small-text mb-4">{role}</p>
    {bio && <p className="body-text mb-4">{bio}</p>}
    <div className="ds-profile-actions w-full flex justify-center gap-2">
      {children}
    </div>
  </div>
);

export const PricingCard = ({ title, price, period, features, isPopular, buttonText, onSelect }) => (
  <div className={`ds-card ds-pricing-card ${isPopular ? 'ds-popular' : ''}`}>
    {isPopular && <div className="ds-popular-badge">Most Popular</div>}
    <h3 className="ds-pricing-title">{title}</h3>
    <div className="ds-price-block">
      <span className="ds-currency">$</span>
      <span className="ds-price">{price}</span>
      <span className="ds-period">/{period}</span>
    </div>
    <ul className="ds-pricing-features">
      {features.map((feature, idx) => (
        <li key={idx} className="flex items-center gap-2">
          <span className="ds-check-icon">✓</span> {feature}
        </li>
      ))}
    </ul>
    <button className={`ds-btn ${isPopular ? 'ds-btn-primary' : 'ds-btn-outline'} ds-btn-full`} onClick={onSelect}>
      {buttonText}
    </button>
  </div>
);
