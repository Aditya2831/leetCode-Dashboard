import React from 'react';
import { Pie } from 'react-chartjs-2';

//import { Chart } from 'react-chartjs-2';

const Charts = ({ data }) => {
  const easyData = {
    labels: ['Solved', 'Remaining'],
    datasets: [
      {
        data: [data.easySolved, data.totalEasy - data.easySolved],
        backgroundColor: ['#4CAF50', '#FF6384'],
      },
    ],
  };

  const mediumData = {
    labels: ['Solved', 'Remaining'],
    datasets: [
      {
        data: [data.mediumSolved, data.totalMedium - data.mediumSolved],
        backgroundColor: ['#4CAF50', '#FF6384'],
      },
    ],
  };

  const hardData = {
    labels: ['Solved', 'Remaining'],
    datasets: [
      {
        data: [data.hardSolved, data.totalHard - data.hardSolved],
        backgroundColor: ['#4CAF50', '#FF6384'],
      },
    ],
  };


  return (
    <div>
      <h2>Easy Questions</h2>
      <Pie data={easyData} />

      <h2>Medium Questions</h2>
      <Pie data={mediumData} />

      <h2>Hard Questions</h2>
      <Pie data={hardData} />
    </div>
  );
};

export default Charts;
