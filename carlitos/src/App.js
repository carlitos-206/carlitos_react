import React from 'react';
import './App.css';
import {  Routes, Route, Router } from 'react-router-dom'
import HomePage  from './components/index';

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element = { <HomePage /> } />
        </Routes>
    </div>
  );
}

export default App;
