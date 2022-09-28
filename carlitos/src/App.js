// Packages
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css'
import {  Routes, Route } from 'react-router-dom'

// --------
// Components
import SlideShow from './components/slideShow';
import NavBar from './components/navbar';
import Stars from './components/stars';
import Sun from './components/sun'
import PlanetFrontEnd from './components/planet_front_end';


// --------
// Functions
// import sleep  from './components/globalFunctions/sleep.js'

// ---------
// CSS
import './App.css';

function App() {
  const LandingPage = () =>{
    const killSlides = () =>{
      setTimeout(()=>{
        let slideShow = document.getElementsByClassName('slideDiv')[0]
        slideShow.remove()
      },2100)
      
    }
      return(
        <main>
          <div className='slideDiv animate__animated animate__fadeOut animate__delay-1s'>
            <SlideShow />
          </div>
          <div className='animate__animated animate__fadeIn animate__delay-2s'>
            <Stars />
            {killSlides()}
            <nav>
              <NavBar />
            </nav>
            <Sun />
            <PlanetFrontEnd />
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
