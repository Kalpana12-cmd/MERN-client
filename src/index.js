import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import Navbar from './components/navbar'
import {BrowserRouter as Router, 
  Routes, 
  Link, 
  Route} from 'react-router-dom'
  import Register from './components/register';
  import Login from './components/login';
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <div>
  <Router>
    <Navbar/>
    <Routes>
    <Route path="/register" element={<Register/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/register" element={<h1>Logout</h1>} />
    </Routes>
  </Router>
 </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
