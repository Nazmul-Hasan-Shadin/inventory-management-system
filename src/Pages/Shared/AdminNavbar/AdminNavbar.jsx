
import { GiEarthAfricaEurope } from "react-icons/gi";
import { SiGmail } from "react-icons/si";
import { IoIosNotifications } from "react-icons/io";
const AdminNavbar = () => {
    return (
        <div>
            <div className="navbar justify-between bg-base-100">
            <div className="form-control   ">
      <input type="text" placeholder="Search" className="input input-bordered w-60 bg-[#F6F6F7] h-10 md:w-auto" />
    </div>
  {/* <div className="flex-1">
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div> */}
  <div className="flex-none gap-12">
 <div className="flex text-5xl gap-7"> 
 <GiEarthAfricaEurope className="bg-[#F6F7F8] rounded-xl p-2" />
 <SiGmail className="bg-[#F6F7F8] rounded-xl p-2" />
 <IoIosNotifications className="bg-[#F6F7F8] rounded-xl p-2" />
 </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
        </div>
    );
};

export default AdminNavbar;