import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useaxiosSecure from './useaxiosSecure';

const useShop = () => {
    const axiosSecure=useaxiosSecure() 
    const {data:products,isLoading}=useQuery({
        queryKey:['shop-Info'],
        queryFn: async ()=>{
          const result= await axiosSecure.get('/user-shop')
          return result.data
        }
     
       })
       const shopLength= products?.length
  return [products,isLoading,shopLength]
};

export default useShop;