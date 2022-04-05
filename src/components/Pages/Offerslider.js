import React from 'react'
import {Carousel} from 'react-bootstrap'
import '../Pages/Home.css'

function Offerslider() {
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


export default Offerslider