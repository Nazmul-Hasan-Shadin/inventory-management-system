import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import logo from "../../../assets/pos-logo.png";
import useStore from "../../../hooks/useStore";
import { AuthContext } from "../../../AuthProvider/AutProvider";
import avatar from '../../../assets/download.png'
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";
import NavbarLink from "./NavbarLink";
import Container from "../Container/Container";
import DropDownProfile from "./DropDownProfile";
import { useState } from "react";
import './Navbar.css'

const Navbar = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false)
  const { user } = useContext(AuthContext);
  const { handleLogOut: handleSignOut, loading } = useAuth();

  const [manager, isManagerLoading] = useStore();
  console.log(manager, "storesdjfkjdkf");


  const handleMouseLeave = () => {
    setIsDropDownOpen(false);
  };



  return (
    <div className="bg-[#FFFFFF]">
      <Container>
        <div className="flex justify-between items-center relative p-3">
          <div>
            <img className=" h-6 sm:h-8 md:h-10 lg:h-12 " src={logo} alt="" />
          </div>

          <div className=' hidden md:block'>
            <ul className="flex gap-5 text-[17px]  ">
              <NavbarLink />
            </ul>
          </div>

          <div className="flex mr-9 md:mr-0 gap-1 sm:gap-4 md:gap-5">
            <CiSearch className="text-2xl  " />
            <span className="border-r-2 "> <CiShoppingCart className="text-2xl mr-2" /> </span>
            <div> <img onMouseOver={() => setIsDropDownOpen(!isDropDownOpen)} src={avatar} className='w-6' alt="" /> </div>


            <div className={`${isDropDownOpen ? 'active animation' : ''} absolute z-10 -right-1 top-12  dropDownContainer `} >
              {isDropDownOpen ? <DropDownProfile isDropDownOpen={isDropDownOpen} /> : ''}
            </div>





          </div>

          <div className=" block md:hidden absolute  right-1">
            <CiMenuBurger />
          </div>
        </div>

      </Container>
    </div>

  );
};

export default Navbar;
