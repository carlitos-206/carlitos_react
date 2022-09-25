import Carousel from 'react-bootstrap/Carousel';
import { techList } from './img/techList.js';
import randomTechList from './globalFunctions/randomTechList.js';

export default function SlideShow() {
  let randomIdx = randomTechList(techList) 
  return (
    <main className='openingCarusel'>

      <Carousel>
        {randomIdx.map((item, idx)=>{
            return(
              <Carousel.Item interval={50} className="imgContainer" key={idx}>
              <img
                className="d-block w-10 openingIMG"
                src={techList[item]}
                alt="First slide"
                id='img_1'
                />
            </Carousel.Item>
            )
        })}
        {/* <Carousel.Item interval={50}>
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

        <Carousel.Item interval={50}>
          <img
            className="d-block w-10 openingIMG"
            src={techList[randomIdx[3]]}
            alt="Third slide"
            id='img_3'
            />
        </Carousel.Item>

        <Carousel.Item interval={50}>
          <img
            className="d-block w-10 openingIMG"
            src={techList[randomIdx[4]]}
            alt="Third slide"
            id='img_3'
            />
        </Carousel.Item>
        
        <Carousel.Item interval={50}>
          <img
            className="d-block w-10 openingIMG"
            src={techList[randomIdx[5]]}
            alt="Third slide"
            id='img_3'
            />
        </Carousel.Item>

        <Carousel.Item interval={50}>
          <img
            className="d-block w-10 openingIMG"
            src={techList[randomIdx[6]]}
            alt="Third slide"
            id='img_3'
            />
        </Carousel.Item>
    
        <Carousel.Item interval={50}>
          <img
            className="d-block w-10 openingIMG"
            src={techList[randomIdx[7]]}
            alt="Third slide"
            id='img_3'
            />
        </Carousel.Item>
    
        <Carousel.Item interval={50}>
          <img
            className="d-block w-10 openingIMG"
            src={techList[randomIdx[8]]}
            alt="Third slide"
            id='img_3'
            />
        </Carousel.Item>
    
        <Carousel.Item interval={50}>
          <img
            className="d-block w-10 openingIMG"
            src={techList[randomIdx[9]]}
            alt="Third slide"
            id='img_3'
            />
        </Carousel.Item>
    
        <Carousel.Item interval={50}>
          <img
            className="d-block w-10 openingIMG"
            src={techList[randomIdx[10]]}
            alt="Third slide"
            id='img_3'
            />
        </Carousel.Item>
    
        <Carousel.Item interval={50}>
          <img
            className="d-block w-10 openingIMG"
            src={techList[randomIdx[11]]}
            alt="Third slide"
            id='img_3'
            />
        </Carousel.Item>
    
        <Carousel.Item interval={50}>
          <img
            className="d-block w-10 openingIMG"
            src={techList[randomIdx[12]]}
            alt="Third slide"
            id='img_3'
            />
        </Carousel.Item>
        <Carousel.Item interval={50}>
          <img
            className="d-block w-10 openingIMG"
            src={techList[randomIdx[13]]}
            alt="Third slide"
            id='img_3'
            />
        </Carousel.Item>
        <Carousel.Item interval={50}>
          <img
            className="d-block w-10 openingIMG"
            src={techList[randomIdx[14]]}
            alt="Third slide"
            id='img_3'
            />
        </Carousel.Item>
        <Carousel.Item interval={50}>
          <img
            className="d-block w-10 openingIMG"
            src={techList[randomIdx[15]]}
            alt="Third slide"
            id='img_3'
            />
        </Carousel.Item>
        <Carousel.Item interval={50}>
          <img
            className="d-block w-10 openingIMG"
            src={techList[randomIdx[16]]}
            alt="Third slide"
            id='img_3'
            />
        </Carousel.Item>
        <Carousel.Item interval={50}>
          <img
            className="d-block w-10 openingIMG"
            src={techList[randomIdx[17]]}
            alt="Third slide"
            id='img_3'
            />
        </Carousel.Item>
        <Carousel.Item interval={50}>
          <img
            className="d-block w-10 openingIMG"
            src={techList[randomIdx[18]]}
            alt="Third slide"
            id='img_3'
            />
        </Carousel.Item>
        <Carousel.Item interval={50}>
          <img
            className="d-block w-10 openingIMG"
            src={techList[randomIdx[19]]}
            alt="Third slide"
            id='img_3'
            />
        </Carousel.Item>
        <Carousel.Item interval={50}>
          <img
            className="d-block w-10 openingIMG"
            src={techList[randomIdx[20]]}
            alt="Third slide"
            id='img_3'
            />
        </Carousel.Item>
        <Carousel.Item interval={50}>
          <img
            className="d-block w-10 openingIMG"
            src={techList[randomIdx[21]]}
            alt="Third slide"
            id='img_3'
            />
        </Carousel.Item>
        <Carousel.Item interval={50}>
          <img
            className="d-block w-10 openingIMG"
            src={techList[randomIdx[22]]}
            alt="Third slide"
            id='img_3'
            />
        </Carousel.Item>
        <Carousel.Item interval={50}>
          <img
            className="d-block w-10 openingIMG"
            src={techList[randomIdx[23]]}
            alt="Third slide"
            id='img_3'
            />
        </Carousel.Item>
        <Carousel.Item interval={50}>
          <img
            className="d-block w-10 openingIMG"
            src={techList[randomIdx[24]]}
            alt="Third slide"
            id='img_3'
            />
        </Carousel.Item> */}
      </Carousel>
    </main>
  );
}
