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
import PlanetBackEnd from './components/planet_back_end';
import PlanetDataBase from './components/planet_data_base';
import PlanetDeployment from './components/planet_deployment';
import PlanetVisualMedia from './components/planet_media';

import AboutMe from './components/aboutMe';
import Projects from './components/projects';
import Resume from './components/resume';
import Footer from './components/footer';

// --------

// Global Functions
// import sleep  from './components/globalFunctions/sleep.js'

// ---------

// CSS
import './App.css';

// ---------

function App() {
  const LandingPage = () =>{
    const killSlides = () =>{
      setTimeout(()=>{
        let slideShow = document.getElementsByClassName('slideDiv')[0]
        slideShow.remove()
      },2100)
    }
      return(
        <main id='top'>
          <div className='slideDiv animate__animated animate__fadeOut animate__delay-1s'>
            <SlideShow />
          </div>
          <div className='animate__animated animate__fadeIn animate__delay-2s universeDIV'>
            <Stars />
            {killSlides()}
            <nav>
              <NavBar />
            </nav>
            <div className='component_collection'>
              <Sun />
              <PlanetBackEnd />
              <PlanetDataBase />
              <PlanetDeployment />
              <PlanetVisualMedia />
              <PlanetFrontEnd />
              <AboutMe />
              <Projects />
              <Resume />
              <Footer />
            </div>
            {/* <div className='nav_contact'>

            </div>
            <div className='project_contact'>

            </div> */}
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
