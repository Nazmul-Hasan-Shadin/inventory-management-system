import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'
import './banner.css'
import orange from '../../../assets/orange.png'
const Banner = () => {

  AOS.init();
  return (
    <div data-aos="fade-up"
    data-aos-anchor-placement="center-bottom">
      <div className="hero h-[100vh] lg:h-[80vh]  bg-[#f0e9e8]">
        <div className="hero-content  flex-col lg:flex-row-reverse ">
          <div  className="flex-1 relative    lg:block  ">

    
            <img
              src="https://i.ibb.co/b14GZPJ/banner.png"
              className=" rounded-lg shadow-2xl"
            />
        <img className="absolute moving-animation top-7 lg:top-9 right-0  h-40 lg:h-full  " src="https://i.ibb.co/TtytPD0/girl.png" alt="" />

        <img src={orange} className=" absolute top-16 lg:top-24   h- lg:h  left-6   h-24 lg:h-72 orange-vibrate" alt="" />

          </div>
          <div className="flex-1 text-center space-y-5 pb-8 lg:p"  >
          <p className=" text-xl lg:text-3xl font-bold ">
The Most Customizable</p>
            <h1 className=" text-2xl lg:text-4xl font-bold text-[#ff7b31]">
Inventory System Dashboard</h1>
            <p className="text-center  text-xs md:text-md text-gray-500 lg:w-[526px] mx-auto ">
            Choose us for seamless inventory control and real-time insights. Experience efficiency with our user-friendly interface and advanced features
            </p>

            {/* ====================accordion======================  */}




          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Banner;
