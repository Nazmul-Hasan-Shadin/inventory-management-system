import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import CreateStore from "../Pages/CreateStore/CreateStore";

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
            element: <CreateStore></CreateStore>
        }
      ],
    },
  ]);



export default router;