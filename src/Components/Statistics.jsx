import React, { useContext } from "react";
import UserContext from '../context/UserContext'
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from 'chart.js'
Chart.register(ArcElement);
import MonthlyProblemsChart from "./BarGraph";

const Statistics = () => {
  const chartOptions2 = {
    plugins: {
      legend: {
        display: false,
      },
    },
    cutout: '0%',
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

  // Function to calculate maximum streak
  const calculateMaxStreak = (submissionCalendar) => {
    const submissionCalendarKeys = Object.keys(submissionCalendar);
    let maxStreak = 0;
    let currentStreak = 0;
    let previousTimestamp = null;

    for (const timestamp of submissionCalendarKeys) {
      const currentTimestamp = parseInt(timestamp);
      if (!previousTimestamp || currentTimestamp - previousTimestamp <= 86400) {
        // If the current submission is within one day of the previous one
        currentStreak++;
      } else {
        // If there is a gap of more than one day, reset the streak
        maxStreak = Math.max(maxStreak, currentStreak);
        currentStreak = 1; // Start counting streak again
      }
      previousTimestamp = currentTimestamp;
    }

    // Check the last streak if it's the longest
    maxStreak = Math.max(maxStreak, currentStreak);
    return maxStreak;
  };

  // Function to calculate total active days
  const calculateTotalActiveDays = (submissionCalendar) => {
    return Object.keys(submissionCalendar).length;
  };

  const maxStreak = calculateMaxStreak(user.submissionCalendar);
  const totalActiveDays = calculateTotalActiveDays(user.submissionCalendar);

  const TotalData = {
    labels: ["Solved", "Remaining"],
    datasets: [
      {
        data: [user.mediumSolved+user.easySolved+user.hardSolved, (user.totalEasy+user.totalMedium+user.totalHard) - (user.mediumSolved+user.easySolved+user.hardSolved)],
        backgroundColor: ["#b3ccff", "black"],
      },
    ],
  };

  const lastTimestamp = Object.keys(user.submissionCalendar).pop();
  const lastDate = new Date(parseInt(lastTimestamp) * 1000);

  return (
    <div className="big flex justify-between mb-10">
      <div className="p-4 flex-col">
        <div className="bg-white p-6 bg-opacity-20 font-orbitron m-2 text-left w-80 transition duration-300 hover:bg-gradient-to-r from-gray-900 to-blue-900">
          GLOBAL RANK: {user.ranking}
        </div>
        <div className="bg-white p-6 bg-opacity-20 font-orbitron m-2 text-left w-80 transition duration-300 hover:bg-gradient-to-r from-gray-900 to-blue-900">
          CONTRIBUTION POINTS: {user.contributionPoints}
        </div>
        <div className="bg-white p-6 bg-opacity-20 font-orbitron m-2 text-left w-80 transition duration-300 hover:bg-gradient-to-r from-gray-900 to-blue-900">
          ACCEPTANCE RATE: {user.acceptanceRate}%
        </div>
        <div className="bg-white p-6 bg-opacity-20 font-orbitron m-2 text-left w-80 transition duration-300 hover:bg-gradient-to-r from-gray-900 to-blue-900">
          REPUTATION: {user.reputation}
        </div>
        <div className="bg-white p-6 bg-opacity-20 font-orbitron m-2 text-left w-80 transition duration-300 hover:bg-gradient-to-r from-gray-900 to-blue-900">
          LAST ACTIVE: {lastDate.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}
        </div>
        <div className="bg-white p-6 bg-opacity-20 font-orbitron m-2 text-left w-80 transition duration-300 hover:bg-gradient-to-r from-gray-900 to-blue-900">
          MAXIMUM STREAK: {maxStreak} days
        </div>
        <div className="bg-white p-6 bg-opacity-20 font-orbitron m-2 text-left w-80 transition duration-300 hover:bg-gradient-to-r from-gray-900 to-blue-900">
          TOTAL ACTIVE DAYS: {totalActiveDays}
        </div>
      </div>

      <MonthlyProblemsChart/>

      <div className="flex-col">
        <div className="bg-white bg-opacity-20 p-4 rounded-lg ml-3 font-chakraPetch mr-7" style={{ width: '300px' }}>
          <h1 className="mb-2 font-semibold">TOTAL SOLVED: {user.mediumSolved+user.easySolved+user.hardSolved}/{user.totalEasy+user.totalMedium+user.totalHard}</h1>
          <Doughnut data={TotalData} options={chartOptions2} />
        </div>
      </div>
    </div>
  );
};

export default Statistics;
