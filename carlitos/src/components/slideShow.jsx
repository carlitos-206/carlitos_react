import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { techList } from './img/techList.js';
import shuffle from './globalFunctions/randomTechList.js';

// this function is for the opening of the site. 
// it might be removed for mobile devices since its taking longer to load
export default function SlideShow() {
  // this shuffles all the imgs on reload like a poker deck
  let randomIdx = shuffle(techList) 
  return (
    <div className='openingCarusel'>
      <Carousel>
      {randomIdx.map((item, idx)=>{
            return(
              <Carousel.Item interval={90} className="imgContainer" key={idx}>
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
