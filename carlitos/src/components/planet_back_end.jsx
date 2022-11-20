import React from "react";

// This function is for the single planet div in the monitor Screen witdh
// it cannot be visibible by screens under 1024px 
// a new refactoring will be done on a new update
export default function PlanetBackEnd(){
  return(
    <div className="planet_back_end_container">
      <div className="planets" id="planet_back_end" >
          <h1 id="planet_back_end_text">Back-End:~$<span id="planet_back_end_text_square">⬜</span></h1>
      </div>
    </div>
  )
}