import React from 'react';
import FeatureTitle from '../../Shared/FeatureTitle/FeatureTitle';
import {MdAddBusiness, MdDashboardCustomize, MdOutlinePayment} from 'react-icons/md'
import {FaListUl, FaPeopleCarry, FaPrint, FaStore, FaTags} from 'react-icons/fa'

const MainTheme = () => {
    return (
        <div className='bg-[#F3F4F6] p-14'>
           <FeatureTitle heading={'Main Theme '} colorHeading={'Feature'} text={'What makes Dreams POS Powerfull'}></FeatureTitle>
         {/* container */}
           <div className='space-y-16' > 
           
            {/* row */}
          <div className='grid grid-cols-5 gap-5'>
         <div className='h-40 text-center'> 
            <div className='bg-[#f8f8fa] text-5xl p-12 '>
            <MdDashboardCustomize  />
            </div>
            <p className='pt-5'>Admin Dashboard</p>
         </div>


         <div className='h-40 text-center'> 
            <div className='bg-[#f8f8fa] text-5xl  p-12 '>
            <FaPeopleCarry  />
            </div>
            <p className='pt-5'>Customer List</p>
         </div>

  <div className='h-40 text-center'> 
            <div className='bg-[#f8f8fa] text-5xl p-12 '>
            <FaPrint  />
            </div>
            <p className='pt-5'>Admin Dashboard</p>
         </div>

         
        <div className='h-40 text-center'> 
            <div className='bg-[#f8f8fa] text-5xl p-12 '>
            <MdAddBusiness  />
            </div>
            <p className='pt-5'>Import Products</p>
         </div>


        <div className='h-40 text-center'> 
            <div className='bg-[#f8f8fa] text-5xl p-12 '>
            <FaTags  />
            </div>
            <p className='pt-5'>Brand List</p>
         </div>


          </div>


          {/*=======================2nd row=================================  */}


          <div className='grid grid-cols-4 gap-5  px-28'>
         <div className='h-40 text-center'> 
            <div className='bg-[#f8f8fa] text-5xl p-12 '>
            <FaListUl />  
            </div>
            <p className='pt-5'>Side List</p>
         </div>


         <div className='h-40 text-center'> 
            <div className='bg-[#f8f8fa] text-5xl  p-12 '>
            <MdOutlinePayment />
            </div>
            <p className='pt-5'>Payment Setting</p>
         </div>

  <div className='h-40 text-center'> 
            <div className='bg-[#f8f8fa] text-5xl p-12 '>
            <FaStore  />
            </div>
            <p className='pt-5'>Store List</p>
         </div>

         
        <div className='h-40 text-center'> 
            <div className='bg-[#f8f8fa] text-5xl p-12 '>
            <MdAddBusiness  />
            </div>
            <p className='pt-5'>Import Products</p>
         </div>

          </div>

          <div></div>
          <div></div>
           </div>
           
 



        </div>
    );
};

export default MainTheme;