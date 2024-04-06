import React, { useContext } from "react";
import UserContext from '../context/UserContext'
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from 'chart.js'
Chart.register(ArcElement);

const Charts = () => {
  
  const chartOptions2 = {
    plugins: {
      legend: {
        display: false,
      },
    },
    cutout: '50%',
    elements: {
      arc: {
        borderRadius: 2,
      },
    },
  };
  
  const { user } = useContext(UserContext);

  if (!user) {
    return <div>Loading...</div>;
  }

  const easyData = {
    labels: ["Solved", "Remaining"],
    datasets: [
      {
        data: [user.easySolved, user.totalEasy - user.easySolved],
        backgroundColor: ["#00bf63ff", "black"],
      },
    ],
  };

  const mediumData = {
    labels: ["Solved", "Remaining"],
    datasets: [
      {
        data: [user.mediumSolved, user.totalMedium - user.mediumSolved],
        backgroundColor: ["#ff6d12ff", "black"],
      },
    ],
  };

  const hardData = {
    labels: ["Solved", "Remaining"],
    datasets: [
      {
        data: [user.hardSolved, user.totalHard - user.hardSolved],
        backgroundColor: ["#ff3030ff", "black"],
      },
    ],
  };

  // const TotalData = {
  //   labels: ["Solved", "Remaining"],
  //   datasets: [
  //     {
  //       data: [user.mediumSolved+user.easySolved+user.hardSolved  ,user.mediumSolved+user.easySolved+user.hardSolved-(user.totalEasy+user.totalMedium+user.totalHard)],
  //       backgroundColor: ["#b3ccff", "black"],
  //     },
  //   ],
  // };

  return (
    <div className="flex flex-row justify-evenly mb-14 mt-3">
      <div className="flex items-center">
        <div className="bg-white bg-opacity-20 p-3 rounded-lg  ml-3 font-chakraPetch " style={{ width: '250px', }}>
          <h1 className="mb-2 font-semibold">EASY SOLVED: {user.easySolved}/{user.totalEasy}</h1>
          <Doughnut data={easyData} options={chartOptions2} />
        </div>
      </div>

      <div className="flex items-center">
        <div className="bg-white bg-opacity-20 p-4 rounded-lg ml-3 font-chakraPetch" style={{ width: '250px' }}>
          <h1 className="mb-2 font-semibold">MEDIUM SOLVED: {user.mediumSolved}/{user.totalMedium}</h1>
          <Doughnut data={mediumData} options={chartOptions2} />
        </div>
      </div>

      <div className="flex items-center">
        <div className="bg-white bg-opacity-20 p-4 rounded-lg  mr-3 font-chakraPetch" style={{ width: '250px' }}>
          <h1 className="mb-2 font-semibold ">HARD SOLVED: {user.hardSolved}/{user.totalHard}</h1>
          <Doughnut data={hardData} options={chartOptions2} />
        </div>
      </div>

      
    </div>
  );
};

export default Charts;
