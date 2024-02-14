import React from 'react'
import Charts from '../Components/Chart'
import Welcome from '../Components/Welcome';
import SearchBar from '../Components/SearchBar';
import Statistics from '../Components/Statistics';


 const Home= () => {
  return (
    <div className='flex-col justify-center   text-center  border border-blue-400 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white'>

     <div className=''>

      <SearchBar/>

      </div>
      <Welcome/>  
      <div>
       <Statistics/>
  </div>
       
       <Charts/> 
    
    </div>
  )
}

export default Home;