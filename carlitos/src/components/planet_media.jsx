import React from "react";

// This function is for the single planet div in the monitor Screen witdh
// it cannot be visibible by screens under 1024px 
// a new refactoring will be done on a new update
export default function PlanetVisualMedia(){
  return(
    <div className="planet_visual_media_container">
      <div className="planet_media" id="planet_visual_media" >
          <h1 id="planet_visual_media_text">Visual Media.</h1>
      </div>
    </div>
  )
}