import React, { useState, useEffect } from 'react';
import Charts from '../Components/Chart';
import Welcome from '../Components/Welcome';
import SearchBar from '../Components/SearchBar';
import Statistics from '../Components/Statistics';
import MonthlyProblemsChart from '../Components/BarGraph';

const Home = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
      setShowFooter(isBottom);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='flex-col justify-center text-center border border-blue-400 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white'>
      <div>
        <SearchBar />
      </div>
      
      <Welcome />
      <div>
        <Statistics />
      </div>
      <div>
        <Charts />
      </div>
      {showFooter && (
        <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg bg-gradient-to-r from-slate-900 to-slate-900 border-t border-gray-200 shadow md:flex md:items-center md:justify-center md:p-3 dark:bg-gray-800 dark:border-gray-600">
          <span className="text-sm text-gray-200 dark:text-gray-100">© 2024 LEETRACK. All Rights Reserved.</span>
        </footer>
      )}
    </div>
  );
};

export default Home;
