import React from 'react';
import './TrustSection.css';

const TrustSection = () => {
  const trustedEntities = [
    'Students', 'Businesses', 'Startups', 'Professionals', 'Educational Institutions', 'Law Clients'
  ];

  return (
    <section className="trust-section">
      <div className="container">
        <p className="trust-title">TRUSTED BY 10,000+ GLOBALLY</p>
        
        <div className="marquee-container">
          <div className="marquee-content">
            {/* Double the list for infinite scroll effect */}
            {[...trustedEntities, ...trustedEntities].map((entity, index) => (
              <div key={index} className="trust-item">
                <span className="trust-dot"></span>
                {entity}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
