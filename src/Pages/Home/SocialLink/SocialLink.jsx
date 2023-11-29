import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { TbWorldPlus } from 'react-icons/tb';

const SocialLink = () => {
    return (
 <div  data-aos="zoom-in">
         <div className='grid w-full  grid-cols-1 md:grid-cols-3 my-6 px-5 lg-px'>

<div>
<h2 className='text-xl text-center lg:text-start font-bold '>Social Link</h2>
<div className=' grid grid-col-4 gap-4  mt-4'>
 
 <div className='bg-[#d1d4dc] p-5  lg:w-96'>
   <img src="https://i.ibb.co/gZ16VVP/code.png" alt="" />
 </div>

 <div className='bg-[#ffe4d5] p-5 lg:w-96'>
   <img src="https://i.ibb.co/gys6wwm/themeforest.png" alt="" />
 </div>

 <div className='bg-[#d1d4dc] p-5 lg:w-96'>
   <div className='flex gap-2 mx-auto'>
       <FaFacebook></FaFacebook>
       <FaYoutube></FaYoutube>
       <FaTwitter></FaTwitter>
       <FaLinkedin></FaLinkedin>
       <FaInstagram></FaInstagram>
   </div>
 </div>



</div>

</div>
 
 

 {/*========================= 2nd colulm =========================*/}
   <div>
<h2 className='text-xl text-center lg:text-start font-bold '>Other Template</h2>
<div className=' grid grid-col-4 gap-4  mt-4'>
 
 <div className='bg-[#d1d4dc] p-5 lg:w-96'>
    <div className='flex items-center gap-2'>
    <img src="https://i.ibb.co/DLnRSrt/hr.png" alt="" />
   <span>Smart Hr Mobile template</span>
    </div>
 </div>

 <div className='bg-[#ffe4d5] p-5 lg:w-96'>
 <div className='flex items-center gap-2'>
    <img src="https://i.ibb.co/T8fmn5J/preadmin.png" alt="" />
   <span>Medifab Medical template</span>
    </div>
 </div>

 <div className='bg-[#d1d4dc] p-5 lg:w-96'>
   <div className='flex gap-2 mx-auto'>
       <FaFacebook></FaFacebook>
       <FaYoutube></FaYoutube>
       <FaTwitter></FaTwitter>
       <FaLinkedin></FaLinkedin>
       <FaInstagram></FaInstagram>
   </div>
 </div>



</div>

</div>

{/* ============================3rd column================================== */}



<div>
<h2 className='text-xl text-center lg:text-start font-bold '>Contact Info</h2>
<div className=' grid grid-col-4 gap-4  mt-4'>
 
 <div className='bg-[#d1d4dc] p-5 lg:w-96'>
 <div className='flex items-center gap-3'>
 <TbWorldPlus />
 <span className='text-sm'>www.github.com/Nazmul-Hasan-Shadin  </span>
 </div>
 </div>

 <div className='bg-[#ffe4d5] p-5 lg:w-96'>
 <div className='flex items-center gap-3'>
 <FaFacebook />
 <span className='text-sm'>www.facebook.com/shadin  </span>
 </div>
 </div>

 <div className='bg-[#d1d4dc] p-5 lg:w-96'>
   <div className='flex gap-2 mx-auto'>
       <FaFacebook></FaFacebook>
       <FaYoutube></FaYoutube>
       <FaTwitter></FaTwitter>
       <FaLinkedin></FaLinkedin>
       <FaInstagram></FaInstagram>
   </div>
 </div>



</div>

</div>







</div>
 </div>
    );
};

export default SocialLink;