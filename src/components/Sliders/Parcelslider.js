import React from 'react'
import '../Pages/Home.css'
import {Carousel} from 'react-bootstrap'
    

function Parcelslider() {
  return (
    <div>
   <Carousel>
        <Carousel.Item>
          <img
            className="pimage"
            src={process.env.PUBLIC_URL +'/images/carsdeli.jpg'}
            alt=""
          />
          <Carousel.Caption>
            <h3>BULKY DELIVERIES</h3>
            <p>We have excellent facilities to handle bulky goods and experienced drivers.<br/>
            Derveries  done in every part of fast and secure no damages, with extra insurace cover</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="pimage"
            src={process.env.PUBLIC_URL +'/images/bridge.jpg'}
            alt=""
          />
      
          <Carousel.Caption>
            <h3>We connect Towns</h3>
            <p>We connect all cities in surrounding countries without any barriers. Feel the connectivity everywhere you are.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="pimage"
            src={process.env.PUBLIC_URL +'/images/oversize.jpg'}
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>Oversize loads</h3>
            <p> We deliver oversize loads with a capability of clearing and fowarding in all roads.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel></div>
      )
    }
    

export default Parcelslider