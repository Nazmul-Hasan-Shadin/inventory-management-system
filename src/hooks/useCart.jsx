import { useQuery } from "@tanstack/react-query"
import useAuth from "./useAuth"
import useaxiosSecure from "./useaxiosSecure"

const useCart=()=>{
    const {user,loading}=useAuth()
    const axiosSecure=useaxiosSecure()
     const {data:carts=[]}=useQuery({
      queryKey:['cart'],
      enabled:!loading,
      queryFn:async ()=>{
          const res= await axiosSecure.get(`/admin/cart/${user?.email}`)
          return res.data.data
      }


     }
     
    
     )
     return carts
    
}

export default useCart