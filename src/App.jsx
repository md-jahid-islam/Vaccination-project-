 import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Services from './Pages/Services'
import Schedule from './Pages/Schedule'
import ContactUs from './Pages/ContactUs'
import LayoutOne from './Layouts/LayoutOne'

 function App() {
 const route  = createBrowserRouter(
  createRoutesFromElements(
    <Route>
    <Route path='/' element = {<LayoutOne/>}>
    <Route index element = {<Home/>} />
    <Route path='/Services' element = {<Services/>} />
    <Route path='/ Schedule' element = {<Schedule/>} />
    <Route path='/Contactus' element = {<ContactUs/>} />
    
    
    </Route>
    </Route>
  )
 )


  return (
    <>
    <RouterProvider router={route} />
    </>
  )
  }

 export default App
