import React from "react";
import starImg from './img/random/blackStar.png'

export default function Stars({screenInfo}){
  console.log(`
    W: ${screenInfo.width}
    H: ${screenInfo.height}

  `)
  let array = []
  function random(min, max) {
    return min + Math.random() * (max + 1 - min);
  }
  if(screenInfo.width>=768 && screenInfo.width<=1024){
    let heightAdjustment = (screenInfo.width - 768)*3
    console.log(heightAdjustment)
    for(let i = 0; i < 10000; i++){
      let item = <img src={starImg} key={i} alt='*' className='stars' id={`star_${i}`} style={{
        width: `${random(0,15)}px`,
        position: 'relative',
        top: `${random(0, 2300+heightAdjustment)}px`,
        zIndex: '-4'
      }
      } />
      array.push(item)
    }
  } else if(screenInfo.width>=1025 && screenInfo.width<=1536){
    let heightAdjustment = (screenInfo.width - 1025)*2.5
    if(screenInfo.width === 1536){
      heightAdjustment = 1200
    }
    for(let i = 0; i < 10000; i++){
      let item = <img src={starImg} key={i} alt='*' className='stars' id={`star_${i}`} style={{
        width: `${random(0,15)}px`,
        position: 'relative',
        top: `${random(0, 2300+heightAdjustment)}px`,
        zIndex: '-4'
      }
      } />
      array.push(item)
    }
  } else if(screenInfo.width>=1537){
    let heightAdjustment = (screenInfo.width - 1537)*1.5
    if(screenInfo.width === 1920){
      heightAdjustment = 200
    }
    for(let i = 0; i < 10000; i++){
      let item = <img src={starImg} key={i} alt='*' className='stars' id={`star_${i}`} style={{
        width: `${random(0,15)}px`,
        position: 'relative',
        top: `${random(0, 3350+heightAdjustment)}px`,
        zIndex: '-4'
      }
      } />
      array.push(item)
    }
  }

  // else if(screenInfo.width>=768 && screenInfo.width<=1024){
  //   for(let i = 0; i < 10000; i++){
  //     let item = <img src={starImg} key={i} alt='*' className='stars' id={`star_${i}`} style={{
  //       width: `${random(0,15)}px`,
  //       position: 'relative',
  //       top: `${random(0, 3000)}px`,
  //       zIndex: '-4'
  //     }
  //     } />
  //     array.push(item)
  //   }
  // }
  return(
    <div className="starContainer" style={{zIndex:'-6'}}>
      {array.map(item => item)}
    </div>
  )
}