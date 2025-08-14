import React from 'react';
import { Bar } from 'react-chartjs-2';

//
const genderAgeData = {
  labels: ['18-24 yrs', '25-32 yrs', '33-40 yrs', '40-50 yrs', '50+ yrs'],
  datasets: [
    {
      label: 'Male',
      data: [-10, -12, -8, -14, -7], 
      backgroundColor: '#ffa726', 
      borderRadius: 5,
    },
    {
      label: 'Female',
      data: [12, 15, 10, 16, 9], 
      backgroundColor: '#8e44ad', 
      borderRadius: 5,
    },
  ],
};

const chartOptions = {
  indexAxis: 'y', 
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: function(context) {
          return `${context.dataset.label}: ${Math.abs(context.raw)}`;
        }
      }
    }
  },
  scales: {
    x: {
      stacked: true,
      ticks: {
        callback: (value) => Math.abs(value), 
      },
      grid: {
        display: false,
      },
      min: -20,
      max: 20,
    },
    y: {
      stacked: true,
      grid: {
        display: false,
      },
    },
  },
};

const GenderAgeAnalytics = () => {
  return (
    <div className="card gender-age-card">
      <h3>Gender & Age Wise Score Analytics</h3>
      <div className="filters">
        <select defaultValue="glucose">
          <option value="glucose">Glucose Metabolism Score</option>
        </select>
        <select defaultValue="good">
          <option value="good">Good</option>
        </select>
      </div>
      <div className="gender-legend">
        <div><span className="dot male"></span> Male</div>
        <div><span className="dot female"></span> Female</div>
      </div>
      <div className="pyramid-chart-container">
        <Bar data={genderAgeData} options={chartOptions} />
      </div>
    </div>
  );
};

export default GenderAgeAnalytics;