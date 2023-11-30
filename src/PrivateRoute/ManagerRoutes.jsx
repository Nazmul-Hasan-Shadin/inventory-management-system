
import useAuth from '../hooks/useAuth';
import useStore from '../hooks/useStore';
import { Navigate } from 'react-router-dom';

const ManagerRoutes = ({children}) => {
    const {user,loading}=useAuth()
    const [store,isManagerLoading]=useStore()
   console.log(store,'store');
    if (loading || isManagerLoading) {
        return   <span className="loading loading-ball loading-lg"></span>
    }

     if (user && store) {
         return children
     }


    return <Navigate to={'/login'}></Navigate>
};

export default ManagerRoutes;