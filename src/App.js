import logo from './logo.svg';
import './App.css';
import Home from './components/pages/home';
import { useState } from 'react';
import GettingData from './components/Data/api';
import { BrowserRouter as Router, Routes, Switch, Route } from 'react-router-dom'; 
import Navbar from './components/navbar';
import Example from './components/pages/example';

function App() { 
    return ( 
      <>
       <Router>
       <Navbar/>
         <Routes>
          <Route path='/' exact  element={<Home />}></Route>
          <Route path='/Example' exact  element={<Example />}></Route>
        </Routes> 
      </Router>
      </>
  );
}

export default App;
