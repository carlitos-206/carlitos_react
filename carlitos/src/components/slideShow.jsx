import Carousel from 'react-bootstrap/Carousel';
import { techList } from './img/techList.js';
import randomTechList from './globalFunctions/randomTechList.js';

export default function SlideShow() {
  let randomIdx = randomTechList(techList) 
  return (
    <main className='openingCarusel'>

      <Carousel>
        <Carousel.Item interval={50} className="imgContainer">
          <img
            className="d-block w-10 openingIMG"
            src={techList[randomIdx[0]]}
            alt="First slide"
            id='img_1'
            />
        </Carousel.Item>


        <Carousel.Item interval={50}>
          <img
            className="d-block w-10 openingIMG"
            src={techList[randomIdx[1]]}
            alt="Second slide"
            id='img_2'
            />
        </Carousel.Item>

        <Carousel.Item interval={50}>
          <img
            className="d-block w-10 openingIMG"
            src={techList[randomIdx[2]]}
            alt="Third slide"
            id='img_3'
            />
        </Carousel.Item>
      </Carousel>
    </main>
  );
}
