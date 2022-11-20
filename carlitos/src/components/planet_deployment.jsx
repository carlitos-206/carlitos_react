import React from "react";



// This function is for the single planet div in the monitor Screen witdh
// it cannot be visibible by screens under 1024px 
// a new refactoring will be done on a new update
export default function PlanetDeployment(){
  return(
    <div className="planet_deployment_container">
      <div className="planets" id="planet_deployment" >
          <h1 id="planet_deployment_text">Deployment</h1>
      </div>
    </div>
  )
}