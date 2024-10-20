import React, { useState } from 'react'
import './ResponsiveNavCompo.css'
import { MdCancel } from "react-icons/md";
import { Link } from 'react-router-dom';
import { BiAlignRight } from 'react-icons/bi';

const ResponsiveNavCompo = () => {
  //====== state part start ============== 
  const [show , setShow] = useState (false)
  return (
    <nav className='responsivmenu'>
        <div className="container">
            <div className="responsive-logo">
           <img src=" public/images/logo.png" alt="img" />
           <div className=' Resslidemenu'>
            <BiAlignRight  onClick={()=> setShow(!show)}  className="menu-icon" />
           
           </div>
           {
          show&&
          <div className="slide-menu">
          <MdCancel onClick={()=> setShow(! show)} className=' cancel'/>

           <ul>
             <li> <Link to={''}>Home</Link></li>
             <li> <Link to={''}>Services</Link></li>
             <li> <Link to={''}>Schedule</Link></li>
             <li> <Link to={''}>ContactUs</Link></li>

           </ul>
           </div>
           }
          
          </div>

          </div>

    </nav>
  )
}

export default ResponsiveNavCompo