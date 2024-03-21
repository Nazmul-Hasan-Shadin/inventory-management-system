import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AutProvider';
import avatar from '../../../assets/download.png'
import './Navbar.css'
import { CiHome } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { CiBookmark } from "react-icons/ci";
import { IoStorefrontOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";

const DropDownProfile = ({ isDropDownOpen }) => {
    console.log(isDropDownOpen)
    const { user } = useContext(AuthContext)
    return (

        <div className={`rounded-md bg-[#ffffff] z-10 h-full `}>
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
                    <li className='flex gap-2 items-center'> <CiHome/>  My Dashboard</li>
                    <li className='flex gap-2 items-center'> <CgProfile/> Profile</li>
                    <li  className='flex gap-2 items-center'> <CiBookmark/> Bookmark</li>
                    <li className='flex gap-2 items-center'> <IoStorefrontOutline></IoStorefrontOutline> Store </li>
                    <li  className='flex gap-2 items-center'>  <CiSettings/> Settings</li>
                </ul>
            </div>
        </div>

    );
};

export default DropDownProfile;