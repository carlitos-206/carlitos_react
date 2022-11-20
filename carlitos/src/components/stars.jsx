import React from "react";
import starImg from './img/random/blackStar.png'

// this function hold the stars background of the site. 
// it has been modified for various screen sizes
// concept is simple:
//    Check for screen width
//    randomly place a star img in the screen with given params
//    star width is randomly given also
//    on refresh a new deployment is done
// meaning you might never see the same pattern again making each pattern brand new everytime
export default function Stars({screenInfo}){
  console.log(`
    W: ${screenInfo.width}
    H: ${screenInfo.height}

  `)
  let array = []
  // function to give random input
  function random(min, max) {
    return min + Math.random() * (max + 1 - min);
  }
  // all mobile devices
  if(screenInfo.width>=360 && screenInfo.width<540){
    let heightAdjustment = (screenInfo.width - 360)*3
    console.log(heightAdjustment)
    for(let i = 0; i < 10000; i++){
      let item = <img src={starImg} key={i} alt='*' className='stars' id={`star_${i}`} style={{
        width: `${random(0,15)}px`,
        position: 'relative',
        top: `${random(0, 300)}px`,
        zIndex: '-4'
      }
      } />
      array.push(item)
    }
  } 
     // EDGECASE --- SURFACE DUO TABLET
    else if(screenInfo.width === 540){
      let heightAdjustment = (screenInfo.width - 540)
      console.log(heightAdjustment)
      for(let i = 0; i < 10000; i++){
        let item = <img src={starImg} key={i} alt='*' className='stars' id={`star_${i}`} style={{
          width: `${random(0,15)}px`,
          position: 'relative',
          top: `${random(0, 800)}px`,
          zIndex: '-4'
        }
        } />
        array.push(item)
      }
    } 
   // This is for med tablets
  else if(screenInfo.width>540 && screenInfo.width<=768){
    let heightAdjustment = (screenInfo.width - 540)
    console.log(heightAdjustment)
    for(let i = 0; i < 10000; i++){
      let item = <img src={starImg} key={i} alt='*' className='stars' id={`star_${i}`} style={{
        width: `${random(0,15)}px`,
        position: 'relative',
        top: `${random(0, 2250+heightAdjustment)}px`,
        zIndex: '-4'
      }
      } />
      array.push(item)
    }
  } 
   // This is for large tablets
  else if(screenInfo.width>=768 && screenInfo.width<=1024){
    let heightAdjustment = (screenInfo.width - 768)*3
    console.log(heightAdjustment)
    for(let i = 0; i < 10000; i++){
      let item = <img src={starImg} key={i} alt='*' className='stars' id={`star_${i}`} style={{
        width: `${random(0,15)}px`,
        position: 'relative',
        top: `${random(0, 2500+heightAdjustment)}px`,
        zIndex: '-4'
      }
      } />
      array.push(item)
    }
  } 
   // This is for med monitors
  else if(screenInfo.width>=1025 && screenInfo.width<=1536){
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
  } 
    // This is for larger monitors
  else if(screenInfo.width>=1537){
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