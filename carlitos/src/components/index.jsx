import React from "react";
import { techList } from "./img/techList";

export default function HomePage(){
  let curIndex = 0;
  let imgDuration = 1000;
  let picture
  const slideShow = () => {
      picture = techList[curIndex];
      curIndex++;
      if (curIndex === techList.length) { 
        curIndex = 0; }
      setTimeout("slideShow()", imgDuration);
  }
  slideShow();
  
  return(
    <div>
      <div className="banner">
        <h1>Coming Soon</h1>
      </div>
        <img src={picture} alt="" />
      
      <img id="image1" />
      <div className="footer">
          <h1>Carlos R. Caceres Martinez | <a href="https://github.com/carlitos-206" target="_blank" rel="noopener noreferrer" >GitHub</a></h1>
      </div>
    </div>
  )
}