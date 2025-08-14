import React, { useState, useMemo } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const getScoreCategory = (score) => {
  if (score >= 80) return 'Good';
  if (score >= 60) return 'Fair';
  return 'Poor';
};

const TestAnalytics = ({ data }) => {
  const [selectedScore, setSelectedScore] = useState('liver_score');

  const analyticsData = useMemo(() => {
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

  return (
    <div className="card test-analytics-card">
      <h3>Test Analytics</h3>
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
    </div>
  );
};

export default TestAnalytics;