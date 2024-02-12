  import React, { useState, useEffect,useContext } from "react";
  import UserContext from '../context/UserContext'
  import axios from "axios";
  import { Doughnut } from "react-chartjs-2";
  

  const Charts = () => {

    const {data, setdata} = useContext(UserContext);
   

  /*  useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            "https://leetcode-stats-api.herokuapp.com/adityaa_gupta"
          );
          setData(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData();
    }, []); // Empty dependency array ensures this effect runs only once, similar to componentDidMount

    if (!data) {
      return <div>Loading...</div>;
    }
*//*
    const easyData = {
      labels: ["Solved", "Remaining"],
      datasets: [
        {
          data: [data.easySolved, data.totalEasy - data.easySolved],
          backgroundColor: ["green", "black"],
        },
      ],
    };

    const mediumData = {
      labels: ["Solved", "Remaining"],
      datasets: [
        {
          data: [data.mediumSolved, data.totalMedium - data.mediumSolved],
          backgroundColor: ["orange", "black"],
        },
      ],
    };

    const hardData = {
      labels: ["Solved", "Remaining"],
      datasets: [
        {
          data: [data.hardSolved, data.totalHard - data.hardSolved],
          backgroundColor: ["red", "black"],
        },
      ],
    };
*/
    return (
      <div>
{/*
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
    */}
         {data}
      
      </div>
    );
  };

  export default Charts;

