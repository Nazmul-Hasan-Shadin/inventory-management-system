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

const Dashboard = () => {
  const [store, isManagerLoading] = useStore();

  return (
    <div className="flex  ">
      <div className="min-h-screen bg-orange-400">
        <ul className=" menu p-4">
          {/* =======================admin routes================================== */}
          {store.manager && (
            <>
              <li>
                {" "}
                <NavLink to={"/"}>
                  <FaHome></FaHome>
                  Shop Logos{" "}
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
                <NavLink to={"/dashboard/addproduct"}>
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

              <li>
                {" "}
                <NavLink to={"/dashboard/products"}>
                  <FaHome></FaHome>
                  product table{" "}
                </NavLink>{" "}
              </li>

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
                <NavLink to={"/"}>
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
                   System Admin  {" "}
                </NavLink>{" "}
              </li>


              <li>
                {" "}
                <NavLink to={"/mainDashboard/syssale-summery"}>
                  <FaHome></FaHome>
                   Sales  Summery  {" "}
                </NavLink>{" "}
              </li>
        

              <li>
                {" "}
                <NavLink to={"/mainDashboard/all-users"}>
                  <FaHome></FaHome>
                  Users  {" "}
                </NavLink>{" "}
              </li>    

                   <li>
                {" "}
                <NavLink to={"/"}>
                  <FaHome></FaHome>
                  Home  {" "}
                </NavLink>{" "}
              </li>                
      
      </>
   }


        </ul>
      </div>

      {/* Admin content */}
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
