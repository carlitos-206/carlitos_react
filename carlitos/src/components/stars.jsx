// https://stackoverflow.com/questions/1510512/how-to-draw-points-in-x-y-positions-using-javascript
// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes

import React from "react";
import starImg from './img/random/blackStar.png'

export default function Stars(){
  const body = document.querySelector('body');
  let array = []
  function random(min, max) {
    return min + Math.random() * (max + 1 - min);
  }

  for(let i = 0; i < 4500; i++){
    let item = <img src={starImg} alt='*' className='stars' id={`star_${i}`} style={{
      width: `${random(0,15)}px`,
      position: 'relative',
      top: `${random(0, 3080)}px`
    }
    } />
    array.push(item)
  }
  return(
    <div className="starCointainer">
      {array.map(item => item)}
    </div>
  )
}