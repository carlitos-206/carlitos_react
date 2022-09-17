import React from "react";
import { techList } from "./img/techList";

export default function HomePage(){
  return(
    <div>
      <div className="banner">
        <h1>Coming Soon</h1>
      </div>
      {techList.map((pic ,idx )=>{
        return(
          <img key={idx} src={pic} alt="Tech Img" style={{width: '150px', padding: '20px', borderRadius: '25%'}} />
        )
      })}
        <div className="footer">
          <h1>Carlos R. Caceres Martinez | <a href="https://github.com/carlitos-206" target="_blank" rel="noopener noreferrer" >GitHub</a></h1>
        </div>
    </div>
  )
}