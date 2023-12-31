import { useQuery } from "@tanstack/react-query"
import useAuth from "./useAuth"
import useAxiosPublic from "./useaxiosPublic"


const useStore=()=>{
    const {user,loading}= useAuth()
    const axiosPublic=useAxiosPublic()


   const {data:store=[],isPending:isManagerLoading}= useQuery({
    queryKey:[user?.email,'store'],
    enabled:!loading,
     queryFn: async()=>{
         try {
            const isStore= await axiosPublic.get(`/users/${user?.email}`)
            return isStore.data
         } catch (error) {
             return false
         }
     }
   })
 
   return [store,isManagerLoading]
}

export default useStore