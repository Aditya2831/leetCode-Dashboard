
import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

const SearchBar = () => {
  const { user } = useContext(UserContext);
  console.log(user);

  // Assuming user is an object with the provided data structure
  const {
    status,
    message,
    totalSolved,
    totalQuestions,
    easySolved,
    totalEasy,
    mediumSolved,
    totalMedium,
    hardSolved,
    totalHard,
    acceptanceRate,
    ranking,
    contributionPoints,
    reputation,
    submissionCalendar,
  } = user;

  return (
    <div>
      <form>
      
        <div>
          <p>Status: {status}</p>
          <p>Message: {message}</p>
          <p>Total Solved: {totalSolved}</p>
           
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
