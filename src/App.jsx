import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './Components/SearchBar';
import Statistics from './Components/Statistics';
// import Charts from './Components/Chart';


const App = () => {

  //userdata=null
  const [userData, setUserData] = useState("");

  const handleChange=(e)=>{
  setUserData=e.target.value;
  }
  console.log(userData);

  const handleSubmit=()=>{

  }

  const fetchData = async (username) => {

    try {
      const response = await axios.get(`https://leetcode-stats-api.herokuapp.com/${username}`);
      console.log(response);
      //console.log(userData);
      setUserData(response.data);
      //console.log(userData);
    } 
    
    catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>LeetCode Dashboard</h1>
      <form action="" onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} />
      </form>
      {/* <SearchBar onSubmit={fetchData} /> */}
      {/* {userData && (
        <>
          <Statistics data={userData} />
          <Charts data={userData} />
        </>
      )} */}
     
    </div>
  );
};

export default App;
