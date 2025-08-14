import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const StatsCards = ({ totalTests }) => {

  const weeklyData = {
    labels: ['1 May', '2 May', '3 May', '4 May', '5 May', '6 May', '7 May'],
    datasets: [
      {
        label: 'Tests Taken',
        data: [20, 34, 15, 40, 25, 30, 45],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderRadius: 5,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 20,
        },
      },
    },
  };

  return (
    <div className="stats-grid">
      <div className="stat-card date-card">
        <div className="date-box">
          <span className="day">2</span>
          <span className="month">MAY</span>
        </div>
        <div className="test-count">
          <h2>{totalTests}</h2>
          <p>test taken</p>
        </div>
      </div>
      <div className="stat-card chart-card">
        <div className="chart-header">
          <h3>Test Taken</h3>
          <select defaultValue="one-week">
            <option value="one-week">One week</option>
          </select>
        </div>
        <div className="bar-chart-container">
           <Bar data={weeklyData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default StatsCards;