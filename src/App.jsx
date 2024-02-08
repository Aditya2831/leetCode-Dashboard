import React, { useState } from 'react';
import axios from 'axios';
 
    import { useNavigate } from 'react-router-dom';

   

const App = () => {
  const [userData, setUserData] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`https://leetcode-stats-api.herokuapp.com/${inputValue}`);
      setUserData(response.data);
      navigate('/home');
      //console.log(userData); 
      console.log(response.data); 

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
     
    <div className="flex flex-col items-center justify-center h-screen">
    <h1 className="text-4xl font-bold mb-6">LeetCode Dashboard</h1>
    <form className="flex flex-col items-center" onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        className="mb-4 p-2 text-lg border border-gray-400 rounded"
      />
      <button className="w-[300px] border-black h-[30px] " type="submit">
        Submit
      </button>

       
    </form>
  </div>
  );
};

export default App;
