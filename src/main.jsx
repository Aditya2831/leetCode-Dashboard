import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, Routes } from "react-router-dom"
import Home from './routes/Home';
//import Context from './UserContext.jsx';

/*
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App  />
  </React.StrictMode>,
)
*/
 
import UserContextProvider from './context/UserContextProvider'
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserContextProvider>
  <BrowserRouter>

 <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<Home />} />
    </Routes>   
                                                     
</BrowserRouter>
</UserContextProvider>
);  


