import React from "react";

// This function is for the single planet div in the monitor Screen witdh
// it cannot be visibible by screens under 1024px 
// a new refactoring will be done on a new update
export default function PlanetFrontEnd(){
  return(
    <div className="planet_front_end_container">
      <div className="planets" id="planet_front_end" >
          <h1 id="planet_front_end_text">Front-End</h1>
      </div>
    </div>
  )
}