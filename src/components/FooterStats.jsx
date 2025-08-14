import React from 'react';

const FooterStats = () => {
  return (
    <div className="footer-stats">
      <p className="sync-time">Last synced 12 min ago</p>
      <div className="footer-cards">
        <div className="footer-card">
          <h2>75</h2>
          <p>Patients Onboarded</p>
        </div>
        <div className="footer-card">
          <h2>
            750<span className="total">/1000</span>
          </h2>
          <p>Total Test Taken</p>
        </div>
      </div>
    </div>
  );
};

export default FooterStats;