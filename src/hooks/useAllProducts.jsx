import { useQuery } from '@tanstack/react-query';

import useaxiosSecure from './useaxiosSecure';
import useAuth from './useAuth';
import useStore from './useStore';

const useAllProducts = (search) => {
  //    find all prodouct of user by email and for admin get all product of all user
  console.log(search);
  // admin role and manager role check by store
    const [store]=useStore()

    const {user,loading}=useAuth()
 
    const axiosSecure=useaxiosSecure()
  const {data:products,refetch,isLoading}=useQuery({
  queryKey:['manager-products'],
  enabled:!loading,
  queryFn:async()=>{
 try {
    if (store.sysadmin) {
      const res= await axiosSecure.get(`/sysadmin/products`)
      return res.data
    }

    const res= await axiosSecure.get(`/admin/products/${user?.email}?search=${search}`)
    return res.data
 } catch (error) {
    console.log(error);
 }
  }
  })
  return [products,refetch,isLoading,loading]
};

export default useAllProducts;