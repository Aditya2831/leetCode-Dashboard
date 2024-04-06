/*import React,{useContext} from 'react';
import UserContext from '../context/UserContext'

export const SearchBar = () => {

  const { user,setuser, inputValue, setInputValue} = useContext(UserContext);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    localStorage.setItem('inputValue', e.target.value);
  }
  return (
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
  );
};

export default SearchBar;
*/
import React, { useContext } from 'react';
import UserContext from '../context/UserContext';
import axios from 'axios';

export const SearchBar = () => {
  const { inputValue,setInputValue,user, setUser } = useContext(UserContext);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    localStorage.setItem('inputValue', e.target.value);
  };

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
    <form
      className="flex flex-col items-center text-black"
      onSubmit={handleSubmit}
    >
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
