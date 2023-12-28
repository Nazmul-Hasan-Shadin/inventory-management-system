import React from 'react';
import { FaFilePdf, FaFilter, FaList, FaPrint } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SearchSection = () => {
  return (
    
       <div className="flex bg-[#FFFFFF] p-12  justify-between">
        <div className="flex gap-5 items-center">
        <FaFilter className="text-5xl p-1 rounded-md bg-[#FF9F43]"/>
          <input type="text" placeholder="search here" className="input input-bordered h-11  w-full  max-w-xs" />
        </div>

        <Link to={"/dashboard/addproduct-final"}>
         <span className="text-2xl flex gap-3">
          <FaPrint className="text-green-500"></FaPrint>
          <FaFilePdf className="text-red-700"></FaFilePdf>
          <FaList></FaList>
         </span>
      </Link>
        
      </div>
    
  );
};

export default SearchSection;