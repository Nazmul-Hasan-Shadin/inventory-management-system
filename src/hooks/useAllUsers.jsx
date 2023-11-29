import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useaxiosSecure from './useaxiosSecure';

const useShop = () => {
    const axiosSecure=useaxiosSecure() 
    const {data:products}=useQuery({
        queryKey:['shop-Info'],
        queryFn: async ()=>{
          const whoHaveShop= await axiosSecure.get('/user-shop')
          const allusers= await axiosSecure.get('/users')
          const result=  whoHaveShop.data
          const alluserinfo= allusers.data.data
          return result
        }
       })
  return products
};

export default useShop;