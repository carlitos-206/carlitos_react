import React from 'react';
import {  Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import SlideShow  from './components/slideShow';
import './App.css';

function App() {
  const LandingPage = () =>{
    return(
      <main>
        <div className='head'>
          <h1>Coming Soon</h1>
        </div>
        <div className='slideDiv'>
          <SlideShow />
        </div>
        <div className='foot'>
          <h1>Carlos R. Cáceres Martínez <span class='desktop-tablet-only'>|</span> <span><a id='gitProfileLink' href="https://github.com/carlitos-206" target="_blank" rel="noopener noreferrer" >GitHub</a></span></h1>
        </div>
      </main>
    )
}
  return (
    <div className="App">
        <Routes>
            <Route path="/" element = { <LandingPage /> } />
        </Routes>
    </div>
  );
}

export default App;
