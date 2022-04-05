import React from 'react'
import '../Styles/Help.css'

function Help() {
  return (
    <div id='Hemain'>
        <div id='frontdesk'>
            <img src={process.env.PUBLIC_URL +'/images/help centre.jpg'} alt="" width="100%" height="500"/>
        </div>
        <h1>For more information</h1>
        <div id='description'>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                 Quae ratione corporis repellendus culpa veritatis perferendis ut 
                 <br/>nihil placeat eveniet reprehenderit voluptates voluptate 
            fugiat voluptatem unde doloremque, <br/>rem optio veniam autem.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolor error assumenda corporis maiores facilis corrupti, vero in veniam velit consectetur numquam culpa,
              <br/> rerum perspiciatis itaque iure consequatur omnis optio.</p>
        </div>
        <div className='helplines' 
>
          <div className='reach'>  <h1>You can reach us in these channels</h1></div>
              <div className='fit'>
            <div id='title'>Contacts</div>
            <div className='cells'>
            <div><img src={process.env.PUBLIC_URL +'/images/call.png'} alt="" width="30" height="30"/> Tel:+2547 123 4567</div>
            <div> <img src={process.env.PUBLIC_URL +'/images/parcel.png'} alt="" width="30" height="30"/>Email</div>
            <div> <img src={process.env.PUBLIC_URL +'/images/twitter.png'} alt="" width="30" height="30"/>Twitter</div>
            <div> <img src={process.env.PUBLIC_URL +'/images/instagram.jpg'} alt="" width="30" height="30"/>instagram</div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Help