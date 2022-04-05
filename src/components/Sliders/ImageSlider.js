// import React from 'react'
// import { SliderData } from './SliderData'
// import { useState } from 'react'
// import '../Pages/Home.css'
// import {FaArrowAltCircleRight,FaArrowAltCircleLeft, FaRegArrowAltCircleRight} from 'react-icons/fa'

// const ImageSlider = ({slides}) => {
//     const[current, setCurrent]= useState(0);
//     const length=slides.length;

//     const nextSlide = () => {
//       setCurrent(current === length - 1 ? 0 : current + 1)

//     }

//     const prevSlide = ()=>{
//       setCurrent(current === 0 ? length-1: current -1)
//     }

//     if(!Array.isArray(slides) || slides.length <= 0){
//       return null;
//     }


//   return (
//     <section className='slider'>
//         <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide}/>
//          <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide}/>
//     {SliderData.map((slide,index) => {
//         return 
//         <div className={index === current ? 'slide active' : 'slide'} key = {index}>
//           {index === current && ( <img src={slide.image} alt="" className='image'/>)}
//           </div>
           
        
//     }
//     )}

//     </section>
//   );
// }

// export default ImageSlider;


import '../Pages/Home.css'
import React from 'react'
import {Carousel} from 'react-bootstrap'

function ImageSlider() {
  return (
    <div><Carousel>
    <Carousel.Item>
      <img
        className="image"
        src={process.env.PUBLIC_URL +'/images/wideload.jpg'}
        alt=""
      />
      <Carousel.Caption>
        <h3>Wide and oversized loads</h3>
        <p> With state of the art capabilities in clearing and fowarding.<br/> worry no more about heavy wide loads. We got your back.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="image"
        src={process.env.PUBLIC_URL +'/images/refrigerated.jpg'}
        alt=""
      />
  
      <Carousel.Caption>
        <h3>Perishable goods</h3>
        <p>Perishable goods needs special care.<br/> We have refrigeration facilities to handle goods like<br/>
        fish, meat,milk, peas and green fresh vegitables</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="image"
        src={process.env.PUBLIC_URL +'/images/secure_deli.jpg'}
        alt="Third slide"
      />
  
      <Carousel.Caption>
        <h3>Valuable goods</h3>
        <p>We deliver secure high value goods with our armored vehicles and<br/> onboard high trained personell.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel></div>
  )
}

export default ImageSlider
