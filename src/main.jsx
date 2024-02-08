import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, Routes } from "react-router-dom"
import Home from './routes/Home';
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
 <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<Home />} />
    </Routes>                                                     
</BrowserRouter>
);  