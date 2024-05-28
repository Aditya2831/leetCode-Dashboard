import React, { useContext } from 'react';
import UserContext from '../context/UserContext';
import axios from 'axios';
import { createClient } from '@supabase/supabase-js';
import { useNavigate } from 'react-router-dom'; 

export const SearchBar = () => {
  const { inputValue, setInputValue, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputValue(e.target.value);
    localStorage.setItem('inputValue', e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue) {
      console.error('Input value is required');
      return;
    }

    try {
      const response = await axios.get(`https://leetcode-stats-api.herokuapp.com/${inputValue}`);
      setUser(response.data);

      if (error) {
        console.error('Error inserting data:', error.message);
        return; // Stop further execution in case of error
      }

      console.log('Inserted data:', data);
      navigate('/home');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form className="flex flex-col items-center text-black" onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSubmit(e);
          }
        }}
        className="mb-3 p-3 text-small border border-gray-900 rounded-xl mt-7 w-[280px] font-chakraPetch"
        placeholder="Enter Your Leetcode ID"
      />
    </form>
  );
};

export default SearchBar;
