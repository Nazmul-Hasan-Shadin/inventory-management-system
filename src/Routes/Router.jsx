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
      }
    ]
  }




  ]
  
  
  
  
  
  );



export default router;