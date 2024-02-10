import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, Routes } from "react-router-dom"
import Home from './routes/Home';
import Context from './UserContext.jsx';

/*
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App  />
  </React.StrictMode>,
)
*/
 

import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <Context> 
 <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<Home />} />
    </Routes>   
    </Context>                                                  
</BrowserRouter>
);  


/*
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import { UserProvider } from './UserContext.jsx'; // Import UserProvider

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider> 
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
*/