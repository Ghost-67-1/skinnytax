"use client"
import { Bar } from 'react-chartjs-2';
import { Chart, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChart = () => {
  const data = {
    labels: ['Page A', 'Page B', 'Page C', 'Page D', 'Page E', 'Page F', 'Page G'],
    datasets: [
      {
        label: 'pv',
        data: [2500, 4000, 9800, 2000, 5000, 3000, 6000],
        backgroundColor: '#4CAF50',
        borderColor: '#4CAF50',
        borderWidth: 1,
      },
      {
        label: 'uv',
        data: [1500, 3000, 2000, 1000, 2500, 2000, 1000],
        backgroundColor: '#D3D3D3',
        borderColor: '#4CAF50',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: {
        callbacks: {
          title: function (tooltipItems) {
            return tooltipItems[0].label;
          },
          label: function (tooltipItem) {
            const datasetLabel = tooltipItem.dataset.label || '';
            const value = tooltipItem.raw;
            return `${datasetLabel} : ${value}`;
          },
        },
      },
      legend: {
        display: true,
        position: 'bottom',
      },
    },
    responsive: true,
    scales: {
        x: {
            beginAtZero: true,
            grid: {
              borderDash: [5, 5],
            },
          },
      y: {
        beginAtZero: true,
        max: 10000,
        grid: {
          borderDash: [5, 5],
        },
      },
    },
  };

  return (
    <div style={{ width: '80%', margin: 'auto' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
