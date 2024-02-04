import React from 'react';

const Statistics = ({ data }) => {
  return (
    <div>
      <p>Total Questions Solved: {data.totalSolved}</p>
      <p>Global Rank: {data.ranking}</p>
      <p>Acceptance Rate: {data.acceptanceRate}</p>
      <p>Contribution Points: {data.contributionPoints}</p>
    </div>
  );
};

export default Statistics;
