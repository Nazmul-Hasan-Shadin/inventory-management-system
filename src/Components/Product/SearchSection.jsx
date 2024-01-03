import React from 'react';
import { FaFilePdf, FaFilter, FaList, FaPrint } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useaxiosSecure from '../../hooks/useaxiosSecure';
import useAxiosPublic from '../../hooks/useaxiosPublic';
import useAuth from '../../hooks/useAuth';

const SearchSection = ({handleSearch}) => {

  return (
    
       <div className="flex bg-[#FFFFFF] lg:p-12  justify-between">
     <form onSubmit={e=>e.preventDefault()} className='p-3'  action="">

     <div  className="flex gap-3 lg:gap-5 items-center">
        <FaFilter className="text-5xl p-1 rounded-md bg-[#FF9F43]"/>
          <input name='search' onChange={handleSearch} type="text" placeholder="search here" className="input input-bordered h-11  w-full  max-w-xs" />
        </div>
     </form>


        <Link to={"/dashboard/addproduct-final"}>
         <span className="text-xl lg:text-2xl  flex gap-1 lg:gap-3 py-3">
          <FaPrint className="text-green-500 flex "></FaPrint>
          <FaFilePdf className="text-red-700"></FaFilePdf>
          <FaList></FaList>
         </span>
      </Link>
        
      </div>
    
  );
};

export default SearchSection;