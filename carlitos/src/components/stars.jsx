import React from "react";
import starImg from './img/random/blackStar.png'

export default function Stars(){
  let array = []
  function random(min, max) {
    return min + Math.random() * (max + 1 - min);
  }

  for(let i = 0; i < 10000; i++){
    let item = <img src={starImg} alt='*' className='stars' id={`star_${i}`} style={{
      width: `${random(0,15)}px`,
      position: 'relative',
      top: `${random(0, 3580)}px`,
      zIndex: '-4'
    }
    } />
    array.push(item)
  }
  return(
    <div className="starContainer" style={{zIndex:'-6'}}>
      {array.map(item => item)}
    </div>
  )
}