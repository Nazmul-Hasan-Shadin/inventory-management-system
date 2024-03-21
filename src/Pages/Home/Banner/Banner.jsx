import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'
import './banner.css'
import orange from '../../../assets/orange.png'
import banner from '../../../assets/banner-bg.png'
import Container from "../../Shared/Container/Container";
const Banner = () => {

  AOS.init();
  return ( 
 <div style={{ backgroundImage: ` url(${banner})` ,backgroundSize:'cover'}}>
      <Container>
          <div data-aos="fade-up"
      data-aos-anchor-placement="center-bottom">
      <div  className="hero h-[100vh] lg:h-[80vh] ">
        <div className="hero-content  flex-col lg:flex-row-reverse ">
        
        <Container>

        <div className="flex-1 relative lg:block  ">
            <img className=" rounded-lg shadow-2xl" src="https://i.ibb.co/b14GZPJ/banner.png" />
            <img className="absolute top-7 lg:top-9 right-0  h-40 lg:h-full moving-animation " src="https://i.ibb.co/TtytPD0/girl.png" alt="" />
            <img src={orange} className=" absolute top-16 lg:top-24   h- lg:h  left-6   h-24 lg:h-72 orange-vibrate" alt="" />

          </div>
        </Container>

 <Container>
 <div className="flex-1  space-y-5 pb-8  text-white"  >
            <p className=" text-xl lg:text-4xl font-bold "> he Most Customizable </p>
            <h1 className="text-2xl lg:text-4xl font-bold text-white"> Inventory System Dashboard </h1>
            <p className="text-xs sm:text-sm md:text-md text-[#fff] lg:w-[526px]  ">
              Choose us for seamless inventory control and real-time insights. Experience efficiency with our user-friendly interface and advanced features
            </p>

            <div className="flex gap-4">
              <button className="px-4 py-3  hover:bg-black bg-gradient-to-r from-[#FB9A3E] to-[#EE132F] rounded-[8px] ">see overview</button>
              <button className="px-4 py-3 bg-black rounded-[8px] hover:bg-gradient-to-r from-[#FB9A3E] to-[#EE132F] transition duration-0 hover:duration-1000">see overview</button>
            </div>



          </div>
 </Container>
        </div>
      </div>

    </div>
    </Container>
 </div>
  );
};

export default Banner;
