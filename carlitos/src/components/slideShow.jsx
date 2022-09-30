import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { techList } from './img/techList.js';
import shuffle from './globalFunctions/randomTechList.js';
export default function SlideShow() {
  let randomIdx = shuffle(techList) 
  return (
    <div className='openingCarusel'>

      <Carousel>
      {randomIdx.map((item, idx)=>{
            return(
              <Carousel.Item interval={50} className="imgContainer" key={idx}>
              <img
                className="d-block w-10 openingIMG"
                src={item}
                alt={`slide_${idx}`}
                id={`slide_img_${idx}`}
                />
            </Carousel.Item>
            )
        })}
      </Carousel>
    </div>
  );
}
