import { useEffect, useContext, useState } from 'react';
import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import UserContext from './context/UserContext';
import ClipLoader from "react-spinners/ClipLoader";

const App = () => {
  const { setUser } = useContext(UserContext);
  const { inputValue, setInputValue } = useContext(UserContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    localStorage.setItem('inputValue', e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when the button is clicked

    try {
      const response = await axios.get(`https://leetcode-stats-api.herokuapp.com/${inputValue}`);
      setUser(response.data);
      navigate('/home');
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false); // Set loading to false when data fetching completes (whether success or failure)
    }
  };

  return (
    <div className="App">
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
          {/* <button
            type="submit"
            className="text-white font-chakraPetch bg-gradient-to-r from-slate-900 to-indigo-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] shadow-blue-800/90 dark:shadow-lg dark:shadow-blue-800/40 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-[180px]  border-black h-[50px] mt-3"
          >
            COMPARE
          </button> */}
        </form>
        <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg bg-gradient-to-r from-slate-900 to-slate-900 border-t border-gray-200 shadow md:flex md:items-center md:justify-center md:p-3 dark:bg-gray-800 dark:border-gray-600">
          <span className="text-sm text-gray-200 dark:text-gray-100 font-chakraPetch  ">© 2024 LEETRACK. All Rights Reserved.</span>
        </footer>
        {/* Loader */}
        {loading && (
          <ClipLoader
          className="mt-5"
            color={'#c2e9fb'}
            loading={loading}
            size={50}
            aria-label="BounceLoader"
            data-testid="loader"
          />
        )}
      </div>
    </div>
  );
};

export default App;
