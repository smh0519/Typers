import React from 'react';
import { Chart } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  ChartDataLabels
);

const UserChart = () => {
  const labels = ['월', '화', '수', '목', '금', '토', '일'];
  const dataValues = [190, 210, 350, 398, 299, 333, 380];

  const data = {
    labels: labels,
    datasets: [
      {
        type: 'bar',
        label: '활동량',
        data: dataValues,
        backgroundColor: '#6E58FF',
        borderRadius: {
          topLeft: 100,
          topRight: 100,
          bottomLeft: 0,
          bottomRight: 0,
        },
        barThickness: 50,
        datalabels: {
          anchor: 'end',
          align: 'start',
          color: '#4C1D95',
          font: {
            weight: 'bold',
            size: 14,
          },
        },
      },
      {
        type: 'line',
        label: '활동 추세',
        data: dataValues,
        borderColor: '#00FF99',
        backgroundColor: 'transparent',
        tension: 0,
        pointRadius: 0,
        datalabels: {
          display: false,
        },
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      datalabels: { display: true },
      tooltip: {
        enabled: true,
        backgroundColor: '#fff',
        titleColor: '#000',
        bodyColor: '#333',
        borderColor: '#ccc',
        borderWidth: 1,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          display: false,
        },
        grid: {
          color: '#6E58FF',
          drawTicks: false,
          drawBorder: false,
        },
      },
      x: {
        grid: {
          display: true,
          color: 'rgba(110, 88, 255, 0.2)',
        },
        ticks: {
          color: '#6D28D9',
          font: {
            size: 14,
            weight: 'bold',
          },
        },
      },
    },
  };

  return (
    <Chart type="bar" data={data} options={options} plugins={[ChartDataLabels]} />
  );
};

export default UserChart;
