import React,{Component} from 'react'
import ReactElasticCarousel from 'react-elastic-carousel'
import ImageSlider from '../Sliders/ImageSlider'
import { SliderData } from '../Sliders/SliderData'

import './Home.css'
import Offerslider from './Offerslider'





function Home() {
  return (
    <div id='main'>
        <div id='dh-one'>
        <div className='types'>
            <div id='title'></div>
            <div id='content'>
                <ul id='hul'>
                <li id='hlist' className='fluid'>
                    <img src={process.env.PUBLIC_URL +'/images/perishableicon.jpg'} alt="" width="30" height="30"/> 
                     <a className='lists' href='#perishable'> Perishable</a>
                     </li>
                     <li id='hlist' className='fluid'>
                         
                    <img src={process.env.PUBLIC_URL +'/images/bulkyicon.jpg'} alt="" width="30" height="30"/> 
                     <a className='lists' href='javascript:disp(0)'> Bulky</a>
                     </li>
                     <li id='hlist' className='fluid'>
                    <img src={process.env.PUBLIC_URL +'/images/fragile.png'} alt="" width="30" height="30"/> 
                     <a className='lists' href='#fragile'> fragile</a>
                     </li>
                     <li id='hlist' className='fluid'>
                    <img src={process.env.PUBLIC_URL +'/images/parcel.png'} alt="" width="30" height="30"/> 
                     <a className='lists' href='#letters'>Letters</a>
                     </li>
                     <li id='hlist' className='fluid'>
                    <img src={process.env.PUBLIC_URL +'/images/animalicon.png'} alt="" width="30" height="30"/> 
                     <a className='lists' href='#animals'> Animals</a>
                     </li>
                     <li id='hlist' className='fluid'>
                    <img src={process.env.PUBLIC_URL +'/images/valuable.jpg'} alt="" width="30" height="30"/> 
                     <a className='lists' href='#valuables'> Valuables</a>
                     
                     </li>
                     <li id='hlist' className='fluid'>
                    <img src={process.env.PUBLIC_URL +'/images/wideload.jpeg'} alt="" width="70" height="40"/> 
                     <a className='lists' href='#wideload'> WideLoad</a>
                     </li>
                     <li id='hlist' className='fluid'>
                    <img src={process.env.PUBLIC_URL +'/images/aurgent.png'} alt="" width="30" height="30"/> 
                     <a className='lists' href='#aurgent'> Aurgent</a>
                     </li>
                
                       </ul>
            </div>
        </div>
        <div id='couresel'><ImageSlider/>
</div>
        <div id='ob'> 
        <div className='items'>
        <p><img src={process.env.PUBLIC_URL +'/images/help_icon.png'} alt="" width="30" height="30"/> help</p>
         <p><img src={process.env.PUBLIC_URL +'/images/services.png'} alt="" width="30" height="30"/>services</p>
          <p><img src={process.env.PUBLIC_URL +'/images/email.png'} alt="" width="30" height="30"/> Email Us</p>
          </div>
          <div className='some-ads'> 

</div>
          </div>
    </div>

    </div>
  )
}

export default Home