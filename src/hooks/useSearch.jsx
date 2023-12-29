import React, { useRef, useState } from 'react';
import useAxiosPublic from './useaxiosPublic';
import useStore from './useStore';
import useaxiosSecure from './useaxiosSecure';

const useSearch = () => {
     const [store]= useStore()
     console.log(store,'iam from useSearch');
    const [searchContent, setSearchContent] = useState([]);
    const axiosPublic= useAxiosPublic()
    const axiosSecure= useaxiosSecure()
    const debounceTimer = useRef(null);

    const handleSearch = async (search,email) => {
 

    if (store?.sysadmin) {
        const searchQury = await axiosSecure.get(
            `/productSearch?search=${search}&&userType=admin`
          );
          setSearchContent(searchQury);
          return
    }
      
  
      try {
        const searchQury = await axiosPublic.get(
          `/productSearch?search=${search}&&email=${email}`
        );
        setSearchContent(searchQury);
      
      } catch (error) {
        console.log(error);
      }
    };
  

  const debouncedSearch=(search,email)=>{

  

    // clearTimeout(debounceTimer.current);

     debounceTimer.current=setTimeout(()=>{
        handleSearch(search,email)
     },300)

  }

  return {debouncedSearch,searchContent}
};

export default useSearch;