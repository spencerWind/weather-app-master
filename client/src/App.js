import React, {useState} from 'react';
import axios from 'axios'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './views/Main';
import './App.css';
import AddLocationForm from "./views/AddLocationForm"
import EditLocationForm from './views/EditLocationForm';

function App() {

  return (
      <div className="app">
          <BrowserRouter>
              <Routes>
                  <Route
                      element={<Main />}
                      path="/"
                      default
                  />
                  <Route
                      element={<AddLocationForm />}
                      path="/add"
                  />
                  <Route
                      element={<EditLocationForm />}
                      path="/edit/:id"
                  />
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
