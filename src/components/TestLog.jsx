import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';

const getStatusColor = (score) => {
  if (score >= 80) return '#28a745'; // Good
  if (score >= 60) return '#ffc107'; // Fair
  return '#dc3545'; // Poor
};

const TestLog = ({ data }) => {

  const recentTests = data.slice(0, 5);
  const navigate = useNavigate();

  const handleTestClick = (testId) => {
    navigate(`/user/${testId}`, { state:  test  });
  };
   

  return (
    <div className="card test-log-card">
      <div className="card-header">
        <h3>Test log</h3>
        <a href="#">See All </a>
      </div>
      <ul className="test-log-list">
        {recentTests.map((test, index) => (
          <li key={index} className="test-log-item">
            <Link to={`/user/${test.id}`} state={test} className="test-link">
            <div className="patient-info" onClick={() => handleTestClick(test)}>
              <span className="patient-name">{test.name}</span>
              <span className="test-time">
                {new Date(test.date_time).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}, {new Date(test.date_time).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}
              </span>
            </div>
            <div className="patient-score">
              <span className="score-dot" style={{ backgroundColor: getStatusColor(test.liver_score) }}></span>
              <span>{test.liver_score}%</span>
            </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TestLog;