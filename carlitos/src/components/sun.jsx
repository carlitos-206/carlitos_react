import Carousel from 'react-bootstrap/Carousel';
import { techList } from './img/techList.js';
import shuffle from './globalFunctions/randomTechList.js';

// This function holds the center slideshow of imgs in the site
// It shuffles the array on reload
// it then loops infinately by using bootstrap carrusul
export default function Sun() {
  let randomIdx = shuffle(techList) 
  return (
    <div className='sun_container'>
      <div className='sunCarusel carousel-fade'>

        <Carousel className='carousel-fade'>
        {randomIdx.map((item, idx)=>{
              return(
                <Carousel.Item interval={90}className="carousel-item imgContainer" key={idx}>
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
    </div>
  );
}
