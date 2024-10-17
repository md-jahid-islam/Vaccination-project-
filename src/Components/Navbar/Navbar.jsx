import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
     <nav className='main-menu'>
     <div className="container">
     <div className="menu-row">
     <div className="menu-logo">
    <img src=" public/images/logo.png" alt="img" />
     </div>
       <div className="nav-menu">
        <ul>
            <li> <Link to={'/'}>Home</Link></li>
            <li> <Link to={'/'}>Services</Link></li>
            <li> <Link to={'/'}>Schedule</Link></li>
            <li> <Link to={'/'}>ContactUs</Link></li>

        </ul>
       </div>
       <div className='menu-button'>
         <Link to={'/'} > Check Status</Link>

       </div>
        </div>
    </div>
    </nav>
    
    
    </>
  )
}

export default Navbar