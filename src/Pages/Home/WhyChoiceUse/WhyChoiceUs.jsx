import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'
import backgroundImg from '../../../assets/why-us-bg.png'
import './whyChoiceUS.css'
import Container from "../../Shared/Container/Container";
const WhyChoiceUs = () => {

  AOS.init();
  return (
    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="500">
      <div className="hero min-h-screen bg-[#FFFBF6]">
   <Container>
   <div className="hero-content flex-col lg:flex-row lg:px-36">
          <div className="flex-1 relative  hidden lg:block">
            <img src="https://i.ibb.co/6vgTrX3/boy-img.png" className="max-w-sm  rounded-lg shadow-2xl"/>
         
           <img src={backgroundImg} className="max-w-sm rounded-lg shadow-2xl absolute top-10 -z-10 boys-behind "/>

          </div>
          <div className="flex-1 " >
            <h1 className=" text-2xl lg:text-5xl font-bold text-[#ff7b31]">Why Choose Us ?</h1>
            <p className="py-6 text-xs md:text-md text-gray-500  ">
            Choose us for seamless inventory control and real-time insights. Experience efficiency with our user-friendly interface and advanced features
            </p>

            {/* ====================accordion======================  */}

      <div className="join join-vertical w-full">

    <div className="collapse collapse-arrow join-item border border-base-300">
    <input className="w-full" type="radio" name="my-accordion-4" checked="checked" /> 
    <div className="collapse-title text-xl font-medium">
   <span className="text-orange-500">   Efficient Tracking</span>
    </div>
    <div className="collapse-content"> 
      <p>Keep a pulse on your inventory with our robust tracking system, ensuring accuracy and minimizing discrepancies.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
    User-Friendly Interface
    </div>
    <div className="collapse-content"> 
  <p>    Navigate effortlessly through our intuitive interface, designed to simplify inventory management for all users.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
    Real-Time Updates
    </div>
    <div className="collapse-content"> 
      <p>Stay informed with instant, real-time updates on stock levels and movement, empowering you to make timely and informed decisions.

</p>
    </div>
  </div>

  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
    Customizable Solutions
    </div>
    <div className="collapse-content"> 
      <p>Tailor our inventory management system to fit your unique needs, offering flexibility and adaptability for your business processes.

</p>
    </div>
  </div>


                </div>


          </div>
        </div>
   </Container>
      </div>
      
    </div>
  );
};

export default WhyChoiceUs;
