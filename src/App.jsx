
// import { useEffect } from 'react';
// import React, { useState, useContext } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import UserContext from './context/UserContext';


// const App = () => {
//   const { user, setUser } = useContext(UserContext);
//   const {inputValue, setInputValue } = useContext(UserContext);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setInputValue(e.target.value);
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.get(`https://leetcode-stats-api.herokuapp.com/${inputValue}`);
//       setUser(response.data);
//       navigate('/home');
//       console.log(response.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen">
//       <h1 className="text-4xl font-bold mb-6">LeetCode Dashboard</h1>
//       <form className="flex flex-col items-center" onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={inputValue}
//           onChange={handleChange}
//           className="mb-4 p-2 text-lg border border-gray-400 rounded"
//         />
//         <button className="w-[300px] border-black h-[30px]" type="submit">
//           Submit
//         </button>
        
//       </form>
//     </div>
//   );
// };

// export default App;


import { useEffect, useContext } from 'react';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import UserContext from './context/UserContext';

const App = () => {
  const { user, setUser } = useContext(UserContext);
 const {inputValue, setInputValue } = useContext(UserContext);
   const navigate = useNavigate();

  // Retrieve stored input value from localStorage on component mount
  useEffect(() => {
    const storedInputValue = localStorage.getItem('inputValue');
    if (storedInputValue) {
      setInputValue(storedInputValue);
    }
  }, [setInputValue]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    // Store input value in localStorage
    localStorage.setItem('inputValue', e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`https://leetcode-stats-api.herokuapp.com/${inputValue}`);
      setUser(response.data);
      navigate('/home');
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-slate-700 to-slate-900">
    <h1 className="text-5xl font-bold mb-6 text-slate-450 bg-gradient-to-bl from-zinc-200 to-sky-50 bg-clip-text text-transparent font-orbitron">
  LEETCODE DASHBOARD
</h1>

      <form className="flex flex-col items-center" onSubmit={handleSubmit}>
      <input
  type="text"
  value={inputValue}
  onChange={handleChange}
  className="mb-3 p-3 text-small border border-gray-900 rounded-xl mt-7 w-[280px] font-chakraPetch"
  placeholder='Enter Your Leetcode ID'
/>

        <button
  type="submit"
  className="text-white font-chakraPetch bg-gradient-to-r from-slate-900 to-indigo-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] shadow-blue-800/90 dark:shadow-lg dark:shadow-blue-800/40 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-[180px]  border-black h-[50px] mt-3"
>
  SUBMIT
</button>
      </form>
      <footer class="fixed bottom-0 left-0 z-20 w-full p-4 bg bg-gradient-to-r from-slate-900 to-slate-900 border-t border-gray-200 shadow md:flex md:items-center md:justify-center md:p-3 dark:bg-gray-800 dark:border-gray-600">
    <span class="text-sm text-gray-200 dark:text-gray-100">© 2024 LEETRACK. All Rights Reserved.</span>
</footer>



    </div>
  );
};

export default App;
