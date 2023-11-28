import React from 'react';
import FeatureTitle from '../../Shared/FeatureTitle/FeatureTitle';
import {MdAddBusiness, MdDashboardCustomize, MdOutlineCurrencyBitcoin, MdOutlinePayment, MdOutlineScreenSearchDesktop, MdOutlineSecurityUpdate} from 'react-icons/md'
import {FaCarSide, FaCartPlus, FaListUl, FaPeopleCarry, FaPrint, FaStar, FaStore, FaTags} from 'react-icons/fa'
import {DiResponsive} from 'react-icons/di'
import {TbWorldCog} from 'react-icons/tb'

const MainTheme = () => {
    return (
        <div className='bg-[#F3F4F6] p-14 pb-48'>
          {/* <h2 className=' text-xl lg:text-3xl text-center'>Our Social Links</h2> */}
           <FeatureTitle heading={'Main Theme '} colorHeading={'Feature'} text={'What makes Dreams POS Powerfull'}></FeatureTitle>
         {/* container */}
           <div className='space-y-16' > 
           
            {/* row */}
          <div className='grid grid-cols-2  md:grid-cols-5 gap-5'>
         <div className='h-40 text-center'> 
            <div className='bg-[#f8f8fa] text-5xl p-12 '>
            <MdDashboardCustomize className='mx-auto' />
            </div>
            <p className='pt-5'>Admin Dashboard</p>
         </div>


         <div className='h-40 text-center'> 
            <div className='bg-[#f8f8fa] text-5xl  p-12 '>
            <FaPeopleCarry className='mx-auto' />
            </div>
            <p className='pt-5'>Customer List</p>
         </div>

  <div className='h-40 text-center'> 
            <div className='bg-[#f8f8fa] text-5xl p-12 '>
            <FaPrint className='mx-auto' />
            </div>
            <p className='pt-5'>Admin Dashboard</p>
         </div>

         
        <div className='h-40 text-center'> 
            <div className='bg-[#f8f8fa] text-5xl p-12 '>
            <MdAddBusiness className='mx-auto'  />
            </div>
            <p className='pt-5'>Import Products</p>
         </div>


        <div className=' w-3 mx-auto md:w-full'> 
           <div className='w-40 justify-center mx-auto h-40 text-center'>
           <div className='bg-[#f8f8fa] text-5xl p-12 '>
            <FaTags className='mx-auto'  />
            </div>
            <p className='pt-5'>Brand List</p>
           </div>
         </div>


          </div>


          {/*=======================2nd row=================================  */}


          <div className='grid grid-cols-2  md:grid-cols-4 gap-5  lg:px-28'>
         <div className='h-40 text-center'> 
            <div className='bg-[#f8f8fa] text-5xl p-12 '>
            <FaListUl className='mx-auto' />  
            </div>
            <p className='pt-5'>Side List</p>
         </div>


         <div className='h-40 text-center'> 
            <div className='bg-[#f8f8fa] text-5xl  p-12 '>
            <MdOutlinePayment className='mx-auto'  />
            </div>
            <p className='pt-5'>Payment Setting</p>
         </div>

  <div className='h-40 text-center'> 
            <div className='bg-[#f8f8fa] text-5xl p-12 '>
            <FaStore  className='mx-auto'  />
            </div>
            <p className='pt-5'>Store List</p>
         </div>

         
        <div className='h-40 text-center'> 
            <div className='bg-[#f8f8fa] text-5xl p-12 '>
            <FaCarSide  className='mx-auto'  />
            </div>
            <p className='pt-5'>Supplier List</p>
         </div>

          </div>
  {/* =========================3rd row================================== */}
  
  <div className='grid grid-cols-2 md:grid-cols-5 gap-5'>
         <div className='h-40 text-center'> 
            <div className='bg-[#f8f8fa] text-5xl p-12 '>
            <FaStar  className='mx-auto'  />
            </div>
            <p className='pt-5'>Ratings</p>
         </div>


         <div className='h-40 text-center'> 
            <div className='bg-[#f8f8fa] text-5xl  p-12 '>
            <MdOutlineScreenSearchDesktop className='mx-auto'  />  
            </div>
            <p className='pt-5'>Seo Ready</p>
         </div>

  <div className='h-40 text-center'> 
            <div className='bg-[#f8f8fa] text-5xl p-12 '>
            <DiResponsive className='mx-auto'  />
            </div>
            <p className='pt-5'>Responsive Ready</p>
         </div>

         
        <div className='h-40 text-center'> 
            <div className='bg-[#f8f8fa] text-5xl p-12 '>
            <MdOutlineSecurityUpdate className='mx-auto'  />
            </div>
            <p className='pt-5'>Update Ready</p>
         </div>


    <div className='flex items-center mx-auto w-1 lg:w-full lg:m-0'>
    <div className='h-40 text-center'> 
            <div className='bg-[#f8f8fa] text-5xl p-12 '>
            <FaTags  className='mx-auto'  />
            </div>
            <p className='pt-5'>Brand List</p>
         </div>
    </div>
       


          </div>


          <div className='grid  grid-cols-2 md:grid-cols-4 gap-5  lg:px-28'>
         <div className='h-40 text-center'> 
            <div className='bg-[#f8f8fa] text-5xl p-12 '>
            <TbWorldCog className='mx-auto'  />
            </div>
            <p className='pt-5'>Country& sale List</p>
         </div>


         <div className='h-40 text-center'> 
            <div className='bg-[#f8f8fa] text-5xl  p-12 '>
            <FaCartPlus className='mx-auto'  />
            </div>
            <p className='pt-5'>Pos</p>
         </div>

  <div className='h-40 text-center'> 
            <div className='bg-[#f8f8fa] text-5xl p-12 '>
            <FaStore className='mx-auto'   />
            </div>
            <p className='pt-5'>Store List</p>
         </div>

         
         
        <div className='h-40 text-center'> 
            <div className='bg-[#f8f8fa] text-5xl p-12 '>
            <MdOutlineCurrencyBitcoin className='mx-auto'  />

            </div>
            <p className='pt-5'>Currency setting</p>
         </div>

          </div>
           </div>
           
 



        </div>
    );
};

export default MainTheme;