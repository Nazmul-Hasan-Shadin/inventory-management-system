import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useStore from "../hooks/useStore";


const AdminRoutes = ({children}) => {
    const {user,loading}=useAuth()
    const [store,isManagerLoading]=useStore()
     
   console.log(store,'store')
    if (loading || isManagerLoading) {
        return   <span className="loading loading-ball loading-lg"></span>
    }

     if (user && store.sysadmin) {
         return children
     }


    return <Navigate to={'/unauthorized'}>   </Navigate>
};

export default AdminRoutes;