import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import ResponsiveNavCompo from '../Components/ReponsivNavbar/ResponsiveNavCompo'

const LayoutOne = () => {
  return (
    <>
    <Navbar/>
    <ResponsiveNavCompo/>
    <Outlet/>
    
    </>
  )
}

export default LayoutOne