import { FcGoogle } from "react-icons/fc";
import { AiOutlineGithub } from "react-icons/ai";

import toast from "react-hot-toast";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";

import useAxiosPublic from "../../hooks/useaxiosPublic";
import useAuth from "../../hooks/useAuth";
import useStore from "../../hooks/useStore";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const Login = () => {
  
  const {store}=useStore()
  const axiosPublic = useAxiosPublic();
  const { googleSignIn, handleSignedIn, logOut, user,loading } = useAuth();
  console.log(user,'iam user ho');
  console.log(user);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);

  const handleLogin = async(e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    // ++++++++++++manual Login +++++++++++++++++

    try {
      const result = await handleSignedIn(email, password);
      if (store?.manager) {
        navigate('/dashboard')
      }
      console.log('iam result', result);
      console.log(result);
      toast.success('Login Successful');
    } catch (error) {
      toast.error(error.message);
      return;
    }


 
  }

    

  

  const googleHandler = () => {
    googleSignIn()
      .then((res) => {
    
      
        const userInfo = {
          name: res?.user?.displayName,
          email: res?.user?.email,
          photo: res?.user?.photoURL,
        };
        console.log(userInfo,'iam user info');
        //  post user information to db
        // posting
        console.log("posting");
        axiosPublic
          .post(`/users`, userInfo)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
          navigate(location?.state ? location.state : "/");

        toast.success("Successfully Logged In");
      })

      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="h-[100vh] p-5 lg:p-20 bg-[#F9FAFB]">
            <Helmet>
        <title> inventory || Login</title>
       </Helmet>
      <form onSubmit={handleLogin}>
        <div className="flex flex-col space-y-4 h-[480] w-480 items-center justify-center p-10 ">
          <h2 className="text-2xl font-bold text-center">
            Sign In To Your Account
          </h2>
          <label className="space-y-4  " htmlFor="email">
            {" "}
            <span>Email Address</span>
            <input
              type="text"
              name="email"
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </label>

          <label className="space-y-4  " htmlFor="email">
            {" "}
            <span>Your Password</span>
            <input
              type="text"
              name="password"
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </label>

          <span className="">
            <span className="">Forget Password ?</span>
          </span>

          <div className="w-4/12">
            <button className="btn btn-primary w-full block ">Sign In</button>
          </div>

          <span>Or Continiou With</span>

          <span className="flex gap-10">
            <button onClick={() => googleHandler()} className="btn">
              {" "}
              <FcGoogle className="text-2xl"> </FcGoogle> Google
            </button>
            <button className="btn bg-black text-white">
              {" "}
              <AiOutlineGithub className="text-2xl"></AiOutlineGithub> Github
            </button>
          </span>

          <Link className="text-blue-700" to={"/register"}>
            {" "}
            Register Now
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
