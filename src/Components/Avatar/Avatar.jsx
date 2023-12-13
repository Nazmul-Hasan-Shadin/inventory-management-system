import React from 'react';
import { AuthContext } from '../../AuthProvider/AutProvider';
import useAuth from '../../hooks/useAuth';
import useStore from '../../hooks/useStore';

const Avatar = () => {
    const {user}= useAuth()
    const [store]=useStore()
 
    return (
    <div className='flex justify-center mb-4'>
             <div>
    <div className="avatar">
  <div className="w-24  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={user?.photoURL}/>
     
  </div>

</div>
<h2 className='block font-bold ml-4 mt-1'>{user?.displayName}</h2>
        </div>
    </div>
    );
};

export default Avatar;