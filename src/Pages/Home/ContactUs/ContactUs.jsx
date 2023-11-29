import { IoCallSharp } from "react-icons/io5";
import { MdMarkEmailRead } from "react-icons/md";
import {BsWhatsapp} from "react-icons/bs"

const ContactUs = () => {
    return (
     <div className='  lg:max-w-4xl mx-auto -translate-y-28 p-4 lg:p-0  '   >
           <div  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000"  className='bg-[#1b2950] rounded-3xl text-white p-12 space-y-12'>
           

           <h2 className='text-xl lg:text-4xl text-center'>LOOKING FOR A CUSTOM DESIGN?</h2>           
            
        <p className='text-sm lg:text-md lg:w-[480px] mx-auto'>
        We (Dreamguys Technologies) are happy to customise your products based on your needs, <span className='text-[#FF792E]'>send us a note </span> 
                
        </p>
    
    
    
     <div className='flex flex-col lg:flex-row justify-center  gap-5'>
         <button className="btn btn-sm lg:btn-md  btn-outline btn-secondary">
            
         <IoCallSharp /> Call Us</button>
         <button className="btn btn-sm lg:btn-md  btn-outline btn-secondary">
            
         <MdMarkEmailRead />  Email us</button>
         <button className="btn btn-sm lg:btn-md btn-outline btn-secondary">
            
         <BsWhatsapp /> whatsapp</button>
     </div>
    
    
    
                </div>  
     </div>
    
    );
};

export default ContactUs;