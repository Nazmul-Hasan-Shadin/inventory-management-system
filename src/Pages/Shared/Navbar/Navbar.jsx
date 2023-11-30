import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import logo from "../../../assets/pos-logo.png";
import useStore from "../../../hooks/useStore";
import { AuthContext } from "../../../AuthProvider/AutProvider";
import avatar from '../../../assets/download.png'
const Navbar = () => {
  const { user } = useContext(AuthContext);
  const { handleLogOut: handleSignOut, loading } = useAuth();

  const [manager, isManagerLoading] = useStore();
  console.log(manager, "storesdjfkjdkf");

  const handleLogout = () => {
    handleSignOut()
      .then((res) => {
        console.log(res, "succes logout");
      })
      .catch((err) => {
        console.log(err, "logout error");
      });
  };

  const links = (
    <>
      <li>
        {" "}
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          {" "}
          Home
        </NavLink>
      </li>

      {user ? (
        <li>
          {" "}
          <Link>
            <button onClick={handleLogout}> Log Out</button>
          </Link>{" "}
        </li>
      ) : (
        <li>
          {" "}
          <Link to={"/login"}> Login</Link>{" "}
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
        <Link to="/watch-demo" target="_blank"> Watch Demo</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100  items-center">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>

        <img className=" w-20  md:w-28 rounded-full" src={logo} alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div>
        <div className="nvbar-end   flex items-center gap-8  ">
          <div>
            <p> {user?.displayName} </p>
          </div>
          <div className="dropdown  left-8 dropdown-end ">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">

             { user? <div className="w-10 rounded-full">
                <img src={user?.photoURL} />
              </div>:           <div className="w-10 rounded-full">
              <img src={avatar} />
            </div>
              
              }

     

            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                {user?.displayName}
                
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a onClick={handleLogout}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
