import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'
const Banner = () => {

  AOS.init();
  return (
    <div data-aos="fade-up"
    data-aos-anchor-placement="top-bottom"    data-aos-duration="500">
      <div className="hero h-[80vh] bg-[#f0e9e8]">
        <div className="hero-content  flex-col lg:flex-row-reverse ">
          <div  className="flex-1 relative  hidden lg:block">

    
            <img
              src="https://i.ibb.co/b14GZPJ/banner.png"
              className=" rounded-lg shadow-2xl"
            />
        <img className="absolute top-0 right-0" src="https://i.ibb.co/TtytPD0/girl.png" alt="" />

          </div>
          <div className="flex-1 text-center space-y-5 "  data-aos="zoom-out-left">
          <p className=" text-xl lg:text-3xl font-bold ">
The Most Customizable</p>
            <h1 className=" text-2xl lg:text-4xl font-bold text-[#ff7b31]">
Inventory System Dashboard</h1>
            <p className="text-center  md:text-md text-gray-500 lg:w-[526px] mx-auto ">
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
