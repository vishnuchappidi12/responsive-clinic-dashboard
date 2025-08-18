import React from 'react';
// import Header from './Header'; // <-- REMOVE THIS LINE
import StatsCards from './StatsCards';
import TestAnalytics from './TestAnalytics';
import TestLog from './TestLog';
import GenderAgeAnalytics from './GenderAgeAnalytics';
import FooterStats from './FooterStats';

const Dashboard = ({ data }) => {
  return (
    
    <div className="dashboard-content">
      <StatsCards totalTests={data.length} />
      <div className="analytics-grid">
        <TestAnalytics data={data} />
        {/* <TestLog data={data} /> */}
        <GenderAgeAnalytics />
      </div>
      <FooterStats />
    </div>
  );
};

export default Dashboard;