import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AutProvider';
import avatar from '../../../assets/download.png'
import './Navbar.css'

const DropDownProfile = ({ isDropDownOpen }) => {
    console.log(isDropDownOpen)
    const { user } = useContext(AuthContext)
    return (

        <div className={`dropDown ${isDropDownOpen ? "active" : ''} rounded-md bg-[#f5e0d2f1] z-10 h-full `}>
            <div className='w-44  p-4'>
                <div className='flex gap-3 items-center '>
                    <figure>
                        <img className='w-10 rounded-[50%]' src={avatar} alt="" />
                    </figure>
                    <div className=''>
                        <h2>Nazmul </h2>
                        <p className='text-xs text-blue-600'>See Profile</p>
                    </div>
                </div>

                <ul className='mt-4 space-y-2'>
                    <li>My Dashboard</li>
                    <li>Profile</li>
                    <li>Bookmark</li>
                    <li>Store</li>
                    <li>Settings</li>
                </ul>
            </div>
        </div>

    );
};

export default DropDownProfile;