import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AutProvider';

const useAuth = () => {
    const auth= useContext(AuthContext)
    return auth
};

export default useAuth;