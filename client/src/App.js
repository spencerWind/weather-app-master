import React, {useState} from 'react';
import axios from 'axios'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './views/Main';
import './App.css';

function App() {

  //const url = `https://api.openweathermap.org/data/2.5/weather?q=miami&appid=`


  return (
    <div className="app">
    <BrowserRouter>
      <Routes>
      <Route element={<Main/>} path="/" default /> 
      </Routes>
    </BrowserRouter>    
    </div>
  );
}

export default App;
