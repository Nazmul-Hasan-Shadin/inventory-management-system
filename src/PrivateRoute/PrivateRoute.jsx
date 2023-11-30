import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import useStore from '../hooks/useStore';

const PrivateRoute = ({children}) => {
    const location=useLocation()
   const{user,loading}=useAuth()
   console.log(loading,'losd');


//    if (loading) {
//     return <span className="loading loading-ball loading-lg"></span>
//  }
    if (user ) {
        return children
    }


    return <Navigate  to={'/'}></Navigate>


};

export default PrivateRoute;