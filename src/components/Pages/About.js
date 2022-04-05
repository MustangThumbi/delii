import React from 'react'
import '../Styles/About.css'
function About() {
  return (
    <div className='Amain'>
        <h1>On door delivery</h1>
        <div id='deli'>
            <div className='coures'>
                <img src={process.env.PUBLIC_URL +'/images/ondoordelivery.png'} alt="" width="800" height="500"/>
            </div>
            <div className='expla'>
                <p>Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. <br/>Labore doloremque quam
                     veritatis excepturi molestiae tempora <br/>quasi pariatur, <br/>
                ipsa autem, illum impedit totam commodi quos molestias ducimus,<br/> dicta inventore dignissimos ipsum!</p>
            </div>

        </div>
        <h1>Packaging</h1>
        <div id='package'>
             <div className='coures'>
                 <img src={process.env.PUBLIC_URL +'/images/packaging.png'} alt="" width="800" height="500"/>
             </div>
            <div className='expla'>
                <p>Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. <br/>Labore doloremque quam
                     veritatis excepturi molestiae tempora <br/>quasi pariatur, <br/>
                ipsa autem, illum impedit totam commodi quos molestias ducimus,<br/> dicta inventore dignissimos ipsum!</p>
            </div>

        </div>
        <h1>Valuable deliveries</h1>
        <div id='security'>
             <div className='coures'>
                 <img src={process.env.PUBLIC_URL +'/images/Secure_deli.jpg'} alt="" width="800" height="500"/>

             </div>
            <div className='expla'>
                <p>Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. <br/>Labore doloremque quam
                     veritatis excepturi molestiae tempora <br/>quasi pariatur, <br/>
                ipsa autem, illum impedit totam commodi quos molestias ducimus,<br/> dicta inventore dignissimos ipsum!</p>
            </div>

        </div>
        <h1>Cutting edge storage facility
            
        </h1>
        <div id='store'>
             <div className='coures'>
                 <img src={process.env.PUBLIC_URL +'/images/storage.jpg'} alt="" width="800" height="500"/>
             </div>
            <div className='expla'>
                <p>Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. <br/>Labore doloremque quam
                     veritatis excepturi molestiae tempora <br/>quasi pariatur, <br/>
                ipsa autem, illum impedit totam commodi quos molestias ducimus,<br/>
                 dicta inventore dignissimos ipsum!</p>
            </div>

        </div>
    </div>
  )
}

export default About