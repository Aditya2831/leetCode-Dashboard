import React, { useContext } from "react";
import UserContext from '../context/UserContext'
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from 'chart.js'
Chart.register(ArcElement);

const Statistics = () => {
  const chartOptions2 = {
    plugins: {
      legend: {
        display: false,
      },
    },
    cutout: '50%',
    elements: {
      arc: {
        borderRadius: 4,
      },
    },
  };

  const { user } = useContext(UserContext);

  if (!user) {
    return <div>Loading...</div>;
  }

  const TotalData = {
    labels: ["Solved", "Remaining"],
    datasets: [
      {
        data: [user.mediumSolved+user.easySolved+user.hardSolved, user.mediumSolved+user.easySolved+user.hardSolved-(user.totalEasy+user.totalMedium+user.totalHard)],
        backgroundColor: ["#b3ccff", "black"],
      },
    ],
  };

  return (
    <div className="big flex justify-between mb-10">
      <div className="p-4 flex-col">
        <div className="bg-white p-6 bg-opacity-20 font-orbitron m-2 text-left w-80">GLOBAL RANK: {user.ranking}</div>
        <div className="bg-white p-6 bg-opacity-20 font-orbitron m-2 text-left w-80">CONTRIBUTION POINTS: {user.contributionPoints}</div>
        <div className="bg-white p-6 bg-opacity-20 font-orbitron m-2 text-left w-80">ACCEPTANCE RATE: {user.acceptanceRate}%</div>
        <div className="bg-white p-6 bg-opacity-20 font-orbitron m-2 text-left w-80">REPUTATION: {user.reputation}</div>
      </div>

      <div className="flex-col">
        <div className="bg-white bg-opacity-20 p-4 rounded-lg ml-3 font-chakraPetch mr-7" style={{ width: '300px' }}>
          <h1 className="mb-2">TOTAL SOLVED: {user.mediumSolved+user.easySolved+user.hardSolved}/{user.totalEasy+user.totalMedium+user.totalHard}</h1>
          <Doughnut data={TotalData} options={chartOptions2} />
        </div>
      </div>
    </div>
  );
};

export default Statistics;
