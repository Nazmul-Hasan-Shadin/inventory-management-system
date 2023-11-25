import { useQuery } from '@tanstack/react-query';

import useaxiosSecure from './useaxiosSecure';
import useAuth from './useAuth';

const useAllProducts = () => {
    const {user,loading}=useAuth()
    console.log(user,'from all');
    const axiosSecure=useaxiosSecure()
  const {data:products,refetch,isLoading}=useQuery({
  queryKey:['manager-products'],
  enabled:!loading,
  queryFn:async()=>{
 try {
    const res= await axiosSecure.get(`/admin/products/${user?.email}`)
    return res.data
 } catch (error) {
    console.log(error);
 }
  }
  })
  return [products,refetch,isLoading,loading]
};

export default useAllProducts;