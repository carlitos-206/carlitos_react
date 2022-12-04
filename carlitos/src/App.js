// Packages
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css'
import {  Routes, Route } from 'react-router-dom'

// --------

// Database

import { CollectArrival } from './components/data/firebaseDB/visitorCollection';

// ----------




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

import CollectionAgreement from './components/collectionWindow';
// --------

// Global Functions
// import sleep  from './components/globalFunctions/sleep.js'

// ---------

// CSS
import './App.css';

// ---------

function App() {
  // CollectArrival()
  // history.go(-1)
  // this gets the screen dimension
  let screenInfo = {width: window.innerWidth, height: window.innerHeight}
  
  // this is the arrival page 
  const LandingPage = () =>{
    const killSlides = () =>{
      setTimeout(()=>{
        let slideShow = document.getElementsByClassName('slideDiv')[0]
        slideShow.remove()
      },2100)
    }
    // on mobile devices dont show the planets since its width constricted
    if(screenInfo.width < 1204){
      return(
        <main id='top'>
          <div className='slideDiv animate__animated animate__fadeOut animate__delay-1s'>
            <SlideShow />
          </div>
          <div className='animate__animated animate__fadeIn animate__delay-2s universeDIV'>
            <Stars screenInfo={screenInfo} />
            {killSlides()}
            <nav>
              <NavBar screenInfo={screenInfo}/>
            </nav>
            <div className='component_collection'>
              <Sun />
              <AboutMe />
              <Projects />
              <Resume screenInfo={screenInfo} />
              <CollectionAgreement />
              <Footer/>
            </div>
          </div>
        </main>
      )
    }else{
      return(
        <main id='top'>
          <div className='slideDiv animate__animated animate__fadeOut animate__delay-1s'>
            <SlideShow />
          </div>
          <div className='animate__animated animate__fadeIn animate__delay-2s universeDIV'>
            <Stars screenInfo={screenInfo} />
            {killSlides()}
            <nav>
              <NavBar screenInfo={screenInfo}/>
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
              <Resume screenInfo={screenInfo} />
              <CollectionAgreement />
              <Footer />
            </div>
          </div>
        </main>
      )
    }
  }
  // this is the routing of the app
  return (
    <div className="App">
        <Routes>
            <Route path="/" element = { <LandingPage /> } />
        </Routes>
    </div>
  );
}


export default App;