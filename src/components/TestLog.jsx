import React from 'react';

const getStatusColor = (score) => {
  if (score >= 80) return '#28a745'; // Good
  if (score >= 60) return '#ffc107'; // Fair
  return '#dc3545'; // Poor
};

const TestLog = ({ data }) => {

  const recentTests = data.slice(0, 5);

  return (
    <div className="card test-log-card">
      <div className="card-header">
        <h3>Test log</h3>
        <a href="#">See All </a>
      </div>
      <ul className="test-log-list">
        {recentTests.map((test, index) => (
          <li key={index} className="test-log-item">
            <div className="patient-info">
              <span className="patient-name">{test.name}</span>
              <span className="test-time">
                {new Date(test.date_time).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}, {new Date(test.date_time).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}
              </span>
            </div>
            <div className="patient-score">
              <span className="score-dot" style={{ backgroundColor: getStatusColor(test.liver_score) }}></span>
              <span>{test.liver_score}%</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TestLog;