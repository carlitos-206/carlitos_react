import React from "react";
import databaseIcon from './img/random/database.png'

export default function PlanetDataBase(){
  return(
    <div className="planet_database_container">
      <div className="planets" id="planet_database" >
          <h1 id="planet_database_text"><img src={databaseIcon} />Databases</h1>
      </div>
    </div>
  )
}