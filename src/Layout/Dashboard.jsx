import { NavLink, Outlet } from "react-router-dom";
import {
  FaCartPlus,
  FaHome,
  FaList,
  FaPlus,
  FaProductHunt,
} from "react-icons/fa";
import { CiViewTable } from "react-icons/ci";
import useStore from "../hooks/useStore";
import useAuth from "../hooks/useAuth";
import Avatar from "../Components/Avatar/Avatar";


const Dashboard = () => {
  const [store, isManagerLoading] = useStore();

 const {handleLogOut}=useAuth()
  return (
    <div className="flex  m-0 flex-col lg:flex-row  ">
      {/* <div className="   lg:min-h-screen w-full lg:w-[300px] bg-[#21263c] text-white"> */}
    
    <div className=" w-80">

    <div className="drawer  lg:drawer-open z-20">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer" aria-label="open sidebar" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
  <div className="drawer-side  ">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
  
      {/* Sidebar content here */}
             {/* profile image */}


{/* porfile image end */}

      <ul className=" menu p-4 w-80 min-h-full bg-base-200 text-base-content  ">
          {/* =======================admin routes================================== */}
          <Avatar></Avatar>
          {store.manager && (
            <>
              <li>
                {" "}
                <NavLink to={"/"}>
                  <FaHome></FaHome>
                 <span>
                  <img src={''} alt="" />
                 </span>
                </NavLink>{" "}
              </li>

              <li>
                {" "}
                <NavLink to={"/"}>
                  <FaList></FaList>
                  admin Menues{" "}
                </NavLink>{" "}
              </li>

              <li>
                {" "}
                <NavLink to={"/dashboard"}>
                  <FaPlus />
                  Add Product{" "}
                </NavLink>{" "}
              </li>

              <li>
                {" "}
                <NavLink to={"/"}>
                  <FaHome></FaHome>
                  admin Home{" "}
                </NavLink>{" "}
              </li>

              <li>
                {" "}
                <NavLink to={"/dashboard/payment"}>
                  <FaHome></FaHome>
                  Payment{" "}
                </NavLink>{" "}
              </li>
{/* 
              <li>
                {" "}
                <NavLink to={"/dashboard/products"}>
                  <FaHome></FaHome>
                  product table{" "}
                </NavLink>{" "}
              </li> */}

              <li>
                {" "}
                <NavLink to={"/dashboard/all-product"}>
                  <CiViewTable />
                  All Proucts{" "}
                </NavLink>{" "}
              </li>

              <li>
                {" "}
                <NavLink to={"/dashboard/checkout/paid"}>
                  <FaCartPlus></FaCartPlus>
                  Carts{" "}
                </NavLink>{" "}
              </li>

              <li>
                {" "}
                <NavLink to={"/dashboard/sell-summery"}>
                  <FaCartPlus></FaCartPlus>
                  Sale Summery{" "}
                </NavLink>{" "}
              </li>

              <li>
                {" "}
                <NavLink onClick={()=>handleLogOut()} to={"/"}>
                  <FaHome></FaHome>
                  Logout{" "}
                </NavLink>{" "}
              </li>

              <li>
                {" "}
                <NavLink to={"/dashboard/subscription"}>
                  <FaHome></FaHome>
                  subscription{" "}
                </NavLink>{" "}
              </li>
            </>
          ) 
          
     
          
          
          
          }
{/* =========================================System admin route============================================================ */}
   {
      store.sysadmin && <>
      
      <li>
                {" "}
                <NavLink to={"/mainDashboard/all-store"}>
                  <FaHome></FaHome>
               Manage Shop {" "}
                </NavLink>{" "}
              </li>


              <li>
                {" "}
                <NavLink to={"/mainDashboard/syssale-summery"}>
                  <FaHome></FaHome>
                   Admin Sales  Summery  {" "}
                </NavLink>{" "}
              </li>
        

              <li>
                {" "}
                <NavLink to={"/mainDashboard/all-users"}>
                  <FaHome></FaHome>
                Admin  Users  {" "}
                </NavLink>{" "}
              </li>    

                   <li>
                {" "}
                <NavLink to={"/mainDashboard"}>
                  <FaHome></FaHome>
                  Home  {" "}
                </NavLink>{" "}
              </li>                
      
      </>
   }


        </ul>
      

  </div>
</div>
    </div>


    
      {/* </div> */}

      {/* Admin content */}
      <div className=" w-full  lg:max-w-7xl mx-auto md:p-12">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
