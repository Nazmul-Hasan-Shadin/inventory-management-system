import React from "react";

const WhyChoiceUs = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-[#FFFFFF]">
        <div className="hero-content flex-col lg:flex-row px-36">
          <div className="flex-1">
            <img
              src="https://i.ibb.co/6vgTrX3/boy-img.png"
              className="max-w-sm rounded-lg shadow-2xl"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-5xl font-bold text-[#ff7b31]">Why Choose Us ?</h1>
            <p className="py-6 text-gray-500  ">
            Choose us for seamless inventory control and real-time insights. Experience efficiency with our user-friendly interface and advanced features
            </p>

            {/* accordion  */}

            <div className="join join-vertical w-full">
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" checked="checked" /> 
    <div className="collapse-title text-xl font-medium">
    Efficient Tracking
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
      </div>
    </div>
  );
};

export default WhyChoiceUs;
