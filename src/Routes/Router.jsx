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

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    //   errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
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
        }
      ],
    },
 
  {
    path:'/dashboard',
    element:<Dashboard></Dashboard>,
    children:[
      {
        path:'/dashboard/managerHome',
        element: <ManagerRoutes><Dashboard></Dashboard></ManagerRoutes>
      },
      {
        path:'/dashboard/addproduct',
        element:  <ManagerRoutes><AddProduct></AddProduct></ManagerRoutes>
      },
      {
        path:'/dashboard/payment',
        element: <Payment></Payment>
      },
      {
        path:'/dashboard/products',
        element: <ProductTable></ProductTable>
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
        element: <SaleSummery></SaleSummery>
      },
      {
        path:'/dashboard/subscription',
        element: <Subscription></Subscription>
      },

      

    ]
  }




  ]
  
  
  
  
  
  );



export default router;