import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Link } from 'react-router-dom';

ChartJS.register(ArcElement, Tooltip, Legend);

// Helper functions
const getStatusColor = (score) => {
  if (score >= 80) return '#28a745';
  if (score >= 60) return '#ffc107';
  return '#dc3545';
};
const getScoreCategory = (score) => {
  if (score >= 80) return 'Good';
  if (score >= 60) return 'Fair';
  return 'Poor';
};

const TestAnalytics = ({ data }) => {
  const [selectedScore, setSelectedScore] = useState('liver_score');

  const analyticsData = React.useMemo(() => {
    const counts = { Good: 0, Fair: 0, Poor: 0 };
    data.forEach(item => {
      const category = getScoreCategory(item[selectedScore]);
      counts[category]++;
    });
    return counts;
  }, [data, selectedScore]);

  const chartData = {
    labels: ['Good', 'Fair', 'Poor'],
    datasets: [{
      data: [analyticsData.Good, analyticsData.Fair, analyticsData.Poor],
      backgroundColor: ['#28a745', '#ffc107', '#dc3545'],
      borderColor: '#ffffff',
      borderWidth: 4,
      cutout: '75%',
    }],
  };
  
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const recentTests = data.slice(0, 5);

  return (
    <div className="card combined-analytics-card">
      <h3>Employees Test Analytics</h3>
      <select value={selectedScore} onChange={(e) => setSelectedScore(e.target.value)}>
        <option value="liver_score">Fat Metabolism Score</option>
        <option value="sugar_score">Glucose Metabolism Score</option>
        <option value="respiratory_score">Respiratory Score</option>
        <option value="gut_score">Gut Health Score</option>
      </select>

      <div className="doughnut-chart-container">
        <Doughnut data={chartData} options={chartOptions} />
        <div className="chart-center-text">
          <span className="date">24 Apr 2025</span>
          <span className="total-patients">{data.length}</span>
          <span className="label">patients taken test</span>
        </div>
      </div>
      <div className="chart-legend">
        <div><span className="dot good"></span>Good: {analyticsData.Good}</div>
        <div><span className="dot fair"></span>Fair: {analyticsData.Fair}</div>
        <div><span className="dot poor"></span>Poor: {analyticsData.Poor}</div>
      </div>

      <div className="test-log-header">
        <h3>Test log</h3>
        <Link to="/test-history">See All </Link>
      </div>
      <ul className="test-log-list">
        {recentTests.map((test, index) => (
          // The structure inside this 'li' is the only part that changed
          <li key={index} className="test-log-item">
            <div className="test-log-item-top">
              <span className="patient-name">{test.name}</span>
              <div className="patient-score">
                <span className="score-dot" style={{ backgroundColor: getStatusColor(test.liver_score) }}></span>
                <span>{test.liver_score}%</span>
              </div>
            </div>
            <span className="test-time">
              {new Date(test.date_time).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TestAnalytics;