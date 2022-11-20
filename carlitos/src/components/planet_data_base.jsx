import React from "react";
import databaseIcon from './img/random/database.png'


// This function is for the single planet div in the monitor Screen witdh
// it cannot be visibible by screens under 1024px 
// a new refactoring will be done on a new update
export default function PlanetDataBase(){
  return(
    <div className="planet_database_container">
      <div className="planets" id="planet_database" >
          <h1 id="planet_database_text"><img src={databaseIcon} alt="DB Planet" />SQL &&  NoSQL</h1>
      </div>
    </div>
  )
}