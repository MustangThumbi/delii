import React from 'react'

import './Styles/Navbar.css'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className='Nmain'>
        <div id='logo'><img src={process.env.PUBLIC_URL +'/images/logo.jpg'} alt="" width="40" height="50" /></div>
        <div id=' pages'>
            <ul id='Nul'>
              
                <li className='p1'>
                    <img src={process.env.PUBLIC_URL +'/images/homeicon.png'} alt="" width="30" height="30" color='#fff'/>
                   <Link className='lists' to='/'> Home</Link>
                </li>
                <li className='p1'>
                    <img src={process.env.PUBLIC_URL +'/images/parcel_icon.png'} alt="" width="30" height="30"/>
                    <Link className='lists' to='/parcel'> parcel</Link>
                </li>
                <li className='p1'>
                    <img src={process.env.PUBLIC_URL +'/images/account.png'} alt="" width="30" height="30"/>
                   <Link className='lists' to='/account'> Account</Link>
                </li>
                <li className='p1'>
                    <img src={process.env.PUBLIC_URL +'/images/about_us.png'} alt="" width="30" height="30"/>
                    <Link className='lists' to='/about'> About Us</Link>
                </li>
                <li className='p1'>
                    <img src={process.env.PUBLIC_URL +'/images/help_icon.png'} alt="" width="30" height="30"/>
                  <Link className='lists' to='/help'> Help</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar