import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { AuthContext } from '../../../AuthProvider/AutProvider';
import useStore from '../../../hooks/useStore';
import useAuth from '../../../hooks/useAuth';
const NavbarLink = () => {
    const {user}=useContext(AuthContext)
    const [manager, isManagerLoading] = useStore();
    console.log(manager, "storesdjfkjdkf")
    const { handleLogOut: handleSignOut, loading } = useAuth();
    const handleLogout = () => {
      handleSignOut()
        .then((res) => {
          console.log(res, "succes logout");
        })
        .catch((err) => {
          console.log(err, "logout error");
        });
    };
    return  <>
          <li className="flex items-center gap-2">
            {" "}
            <NavLink
              to={"/"}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
         
              Home
            </NavLink>
            <MdOutlineKeyboardArrowDown/>
          </li>
    
          {user ? (
            <li className="flex items-center gap-2">
             
              <Link>
                <button onClick={handleLogout}> Log Out</button>
              </Link>
              <MdOutlineKeyboardArrowDown/>
            </li>
          ) : (
            <li className="flex items-center gap-2">
            
              <Link to={"/login"}> Login</Link>
              <MdOutlineKeyboardArrowDown/>
            </li>
         
          )}
          {!user?.email && (
            <li>
              {" "}
              <Link to={"/register"}> Register</Link>
            </li>
          )}
    
          {manager.manager || (manager.sysadmin && !isManagerLoading) ? (
            <li>
              {" "}
              <Link to={"/dashboard"}> Dashboard</Link>
            </li>
          ) : (
            <li>
              {" "}
              <Link to={"/create-store"}> Create-Shop</Link>
            </li>
          )}
          <li>
            {" "}
            <Link to="/watch-demo" target="_blank"> Watch Overview</Link>
          </li>
        </>
      
    
};

export default NavbarLink;