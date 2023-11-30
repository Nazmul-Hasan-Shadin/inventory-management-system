import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import CreateStore from "../Pages/CreateStore/CreateStore";
import Dashboard from "../Layout/Dashboard";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ManagerRoutes from "../PrivateRoute/ManagerRoutes";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import Payment from "../Pages/Payment/Payment";
import ProductTable from "../Pages/Dashboard/ProductTable/ProductTable";
import ProductUpdate from "../Pages/Dashboard/Updata/ProductUpdate";
import ProductSection from "../Pages/Dashboard/ProductSection/ProductSection";
import Cart from "../Pages/Dashboard/Cart/Cart";
import CheckOutCart from "../Pages/Dashboard/Cart/CheckOutCart";
import SaleSummery from "../Pages/Dashboard/SaleSummery/SaleSummery";
import Subscription from "../Pages/Dashboard/Subscription/Subscription";
import SysAllProduct from "../Pages/Dashboard/SysAllProduct/SysAllProduct";
import SysSellSummery from "../Pages/Dashboard/SysSellSummery/SysSellSummery";
import SysUsers from "../Pages/Dashboard/sysUsers/sysUsers";
import WatchVideo from "../Pages/watchVIde/WatchVideo";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AddProduct2 from "../Pages/Dashboard/AddProduct/AddProduct2";
import AdminRoutes from "../PrivateRoute/AdminRoutes";
import PageError from "../PrivateRoute/SpecialError";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path:'/unauthorized',
          element: <PageError></PageError>
        }
        ,
        {
            path:'login',
            element: <Login></Login>
        },
        {
            path:'register',
            element:<Register></Register>
        },
        {
            path:'create-store',
            element:  <PrivateRoute><CreateStore></CreateStore></PrivateRoute>
        },

        {
          path:'watch-demo',
          element:  <WatchVideo></WatchVideo>
      }
      ],
    },
 
  {
    path:'/dashboard',
    element:<Dashboard></Dashboard>,
    children:[

      {
        path:'/dashboard',
        element:  <ManagerRoutes><AddProduct2></AddProduct2></ManagerRoutes>
      },
      {
        path:'/dashboard/managerHome',
        element: <ManagerRoutes><Dashboard></Dashboard></ManagerRoutes>
      },
      {
        path:'/dashboard/addproduct-final',
        element:  <ManagerRoutes><AddProduct></AddProduct></ManagerRoutes>
      },
      {
        path:'/dashboard/payment',
        element: <ManagerRoutes><Payment></Payment></ManagerRoutes>
      },
      {
        path:'/dashboard/products',
        element: <PrivateRoute><ProductTable></ProductTable></PrivateRoute>
      },
      {
        path:'/dashboard/update/:id',
        element: <ProductUpdate>  </ProductUpdate>
      },
      {
        path:'/dashboard/all-product',
        element:<ProductSection></ProductSection>
      }
      ,
      {
        path:'/dashboard/checkout',
        element: <Cart></Cart>
      },
      {
        path:'/dashboard/checkout/paid',
        element: <CheckOutCart></CheckOutCart>
      },
      {
        path:'/dashboard/sell-summery',
        element: <ManagerRoutes><SaleSummery></SaleSummery></ManagerRoutes>
      },
      {
        path:'/dashboard/subscription',
        element:  <ManagerRoutes><Subscription></Subscription></ManagerRoutes>
      },

      

    ]
  },



  {
    path:'/mainDashboard',
    element:<Dashboard></Dashboard>,
    children:[
      {
        path:'/mainDashboard/all-store',
        element:<AdminRoutes><SysAllProduct></SysAllProduct></AdminRoutes>
      },
      {
        path:'/mainDashboard/syssale-summery',
        element:<AdminRoutes> <SysSellSummery></SysSellSummery></AdminRoutes>
      },
      {
        path:'/mainDashboard/all-users',
        element: <AdminRoutes><SysUsers></SysUsers></AdminRoutes>
      }
    ]
  }




  ]
  
  
  
  
  
  );



export default router;