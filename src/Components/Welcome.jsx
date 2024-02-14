import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

const Welcome = () => {
  const { inputValue } = useContext(UserContext);
  const leetCodeProfileUrl = `https://leetcode.com/${inputValue}/`;

  return (
    <div className="flex justify-start">
      <h1 className="text-4xl font-bold mb-6 text-slate-450 bg-gradient-to-bl from-zinc-200 to-sky-50 bg-clip-text text-transparent font-orbitron ml-5 mt-5 text-left " style={{paddingleft:"200px"}}>
        Welcome <br/> 
        <a href={leetCodeProfileUrl} target="_blank" rel="noopener noreferrer" className=" hover:text-blue-500">{inputValue}</a>
      </h1>
    </div>
  );
};

export default Welcome;
