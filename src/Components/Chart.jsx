  import React, { useState, useEffect,useContext } from "react";
  import UserContext from '../context/UserContext'
  import axios from "axios";
  import { Doughnut } from "react-chartjs-2";
  import {Chart, ArcElement} from 'chart.js'
      Chart.register(ArcElement);
  

  const Charts = () => {

    const { user } = useContext(UserContext);
    console.log(user);

    
    if (!user) {
      return <div>Loading...</div>;
    }


    const easyData = {
      labels: ["Solved", "Remaining"],
      datasets: [
        {
          data: [user.easySolved, user.totalEasy - user.easySolved],
          backgroundColor: ["green", "black"],
        },
      ],
    };

    const mediumData = {
      labels: ["Solved", "Remaining"],
      datasets: [
        {
          data: [user.mediumSolved, user.totalMedium - user.mediumSolved],
          backgroundColor: ["orange", "black"],
        },
      ],
    };

    const hardData = {
      labels: ["Solved", "Remaining"],
      datasets: [
        {
          data: [user.hardSolved, user.totalHard - user.hardSolved],
          backgroundColor: ["red", "black"],
        },
      ],
    };

    return (
      <div>

                <h2>Easy Questions</h2>
                <div>
                  <Doughnut data={easyData} />
                </div>

                <h2>Medium Questions</h2>
                <div>
                  <Doughnut data={mediumData} />
                </div>

                <h2>Hard Questions</h2>
                <div>
                  <Doughnut data={hardData} />
                </div> 
   
        
      
      </div>
    );
  };

  export default Charts;

