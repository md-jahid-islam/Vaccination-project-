
import React from 'react';
import './BannerCompo.css';
import { FaClock } from "react-icons/fa6";
import { TiLocation } from "react-icons/ti";
import { Link } from 'react-router-dom';
import { MdDateRange } from "react-icons/md";

const BannerCompo = () => {
  return (
    <>
    <section className='banner'>
        <div className="container">
          <div className="banner-row">
            <div className="bnner-part">
              <h2>Get Vaccinated. Boost your Immune System</h2>
              <h3>
                COVID-19 Vaccination
                <br /> Got Easier With,
                <span> <br /> Vaccination.ng</span>
              </h3>
              <p>Vaccination.ng will help you find the nearest <br />
              centre for vaccination, in all 36 states in Nigeria.</p>
              <button>Get Vaccine</button>
              <button>Help Centre</button>
            </div>
            <div className='image'>
              <img className='' src=" public/images/Group1.png" alt="img" />
          
            
            </div>
          </div>
          <div className='schedule'>
            <div className='schedule-icon'>
              <FaClock className='clock-icon' />
            </div>
            <h4 className='schedule-text'>Schedule your Vaccination</h4>
          </div>
        
   
 <div className="main-banner-row flex items-center justify-center space-x-4 pt-24">
  <img 
    src="public/images/Rectangle2.png" 
    alt="Location Marker" 
    className="transition-transform duration-300 ease-in-out transform hover:translate-x-3 hover:scale-105" 
  />
 </div>

 <div className='absolute mt-[-100px] p-5 flex flex-col md:flex-row justify-center items-center gap-16'>
  <div className='flex items-center'>
    <TiLocation className='w-10 h-10 py-2 px-2 bg-[#31363F] rounded-[10px] border border-green-500' />
    <div className='ml-5'>
      <h3 className='text-[16px] md:text-[18px] text-[hsla(0,3%,48%,50)] font-Montserrat'>Location</h3>
      <h4 className='text-base md:text-xl font-Montserrat text-[#fff]'>Ikeja Lagos, Nigeria</h4>
    </div>
  </div>

  <div className='flex items-center'>
    <MdDateRange className='w-10 h-10 py-2 px-2 bg-[#31363F] rounded-[10px] border border-green-500' />
    <div className='ml-5'>
      <h3 className='text-[16px] md:text-[18px] text-[hsla(0,3%,48%,50)] font-Montserrat'>Date</h3>
      <h4 className='text-base md:text-xl font-Montserrat text-[#fff]'>29 February, 2022</h4>
    </div>
  </div>

  <div className='flex items-center'>
    <TiLocation className='w-10 h-10 py-2 px-2 bg-[#31363F] rounded-[10px] border border-green-500' />
    <div className='ml-5'>
      <h3 className='text-[16px] md:text-[18px] text-[hsla(0,3%,48%,50)] font-Montserrat'>Vaccine Type</h3>
      <h4 className='text-base md:text-xl font-Montserrat text-[#fff]'>Moderna</h4>
    </div>
  </div>

  <div className='ml-0 md:ml-[180px] mt-4 md:mt-0'>
    <Link className='text-[#FFFFFF] text-xl md:text-2xl bg-[#17C2EC] py-3 px-5 rounded-[20px] transition' to={'/'}>
      <button>Submit</button>
    </Link>
  </div>
 </div>


           
        </div>
    </section>
    </>
  );
 }

 export default BannerCompo;
