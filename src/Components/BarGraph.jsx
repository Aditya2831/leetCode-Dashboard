import React, { useContext, useEffect, useRef } from "react";
import Chart from 'chart.js/auto';
import UserContext from '../context/UserContext';

const MonthlyProblemsChart = () => {
  const { user } = useContext(UserContext);
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    if (!user) return;

    const submissionCalendar = user.submissionCalendar;
    const monthsData = {};

    for (const timestamp in submissionCalendar) {
      const date = new Date(parseInt(timestamp) * 1000);
      const monthYear = `${date.getMonth() + 1}/${date.getFullYear()}`;
      
      if (!monthsData[monthYear]) {
        monthsData[monthYear] = 0;
      }
      monthsData[monthYear] += submissionCalendar[timestamp];
    }

    const labels = Object.keys(monthsData);
    const data = Object.values(monthsData);

    const ctx = chartRef.current.getContext("2d");

    // Destroy existing chart if it exists
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    // Create a new chart instance
    chartInstanceRef.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            type: 'line',
            label: 'Line Dataset',
            data: data,
            fill: false,
            borderColor: "#80ccff"
          },
          {
            label: 'Submissions',
            data: data,
            backgroundColor: 'rgb(37, 35, 140)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          x: {
            stacked: true
          },
          y: {
            stacked: true,
            beginAtZero: true
          }
        }
      }
    });

  }, [user]);

  return (
    <div className="flex justify-center" style={{ width: '600px', height: '400px' }}>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default MonthlyProblemsChart;
