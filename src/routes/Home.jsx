import React from 'react'
import Charts from '../Components/Chart'
import Welcome from '../Components/Welcome';
import SearchBar from '../Components/SearchBar';
import Statistics from '../Components/Statistics';


 const Home= () => {
  return (
    <div className='flex-col justify-center   text-center mx-44  border border-blue-400'>
   {/*   <div className=''>

      <SearchBar/>
      </div>
      <Welcome/>  
      <div>
       < Statistics/>
  </div>*/}
  
       <Charts/> 
   
    </div>
  )
}

export default Home;