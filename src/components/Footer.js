import React from 'react'
import { useState } from 'react'
import styles from './Styles/Footer.css'

function Footer() {
    const [fom,setForm]=useState("")
  return (
    <div className='main'>
        <div className='fit'>
            <div id='title'>Contacts</div>
            <div><img src={process.env.PUBLIC_URL +'/images/call.png'} alt="" width="30" height="30"/> Tel:+2547 123 4567</div>
            <div> <img src={process.env.PUBLIC_URL +'/images/parcel.png'} alt="" width="30" height="30"/>Email</div>
            <div> <img src={process.env.PUBLIC_URL +'/images/twitter.png'} alt="" width="30" height="30"/>Twitter</div>
            <div> <img src={process.env.PUBLIC_URL +'/images/instagram.jpg'} alt="" width="30" height="30"/>instagram</div>
        </div>
        <div className='fit'>
            <div id='title'>About Us</div>
            <div className='aboutext'>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br/>
                    Sit culpa rem eum aspernatur atque.<br/> Voluptatibus, cumque? <br/>
                    Soluta velit natus praesentium doloribus sed maxime.<br/> 
                    Laborum quis mollitia molestias, <br/>
                    vitae neque reiciendis!</p>
            </div>
        </div>
        
        <div className='fit'>
            <div id='title'><img src={process.env.PUBLIC_URL +'/images/navi.png'} alt="" width="30" height="30"/>Warehouses</div>
            <div>
                <h1>Warehouses located in:</h1>
                <p>Nyeri</p>
                <p>Karatina</p>
                <p>Mombasa</p>
                <p>Nairobi</p>
                <p>Nakuru</p>
                <p>Kisumu</p>
                <p>Eldoret</p>
            </div>
            
        </div>
        <div className='fit'>
            <div id='title'>Talk to us</div>
            <form> 
                <label> We listen to suggestions</label>
                <input
                id='in'
                type= "text"
                placeholder="send your complaints, suggestions or compliments here"
                onChange={(e)=> setForm(e.target.value)}
                />
                <button id='fbtn'>Send</button>
            </form>
        </div>
    </div>
  )
}

export default Footer