import { FcGoogle } from "react-icons/fc";
import { FaLock } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";
import toast from "react-hot-toast";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";

import useAxiosPublic from "../../hooks/useaxiosPublic";
import useAuth from "../../hooks/useAuth";
import useStore from "../../hooks/useStore";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import signInText from "../../assets/loginText.png";
import loginImage from "../../assets/Mobile login-pana 1.png"
const Login = () => {
  const [store] = useStore();
  const axiosPublic = useAxiosPublic();
  const { googleSignIn, handleSignedIn, logOut, user, loading } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    // ++++++++++++manual Login +++++++++++++++++

    try {
      const result = await handleSignedIn(email, password);
      console.log(result, "manual login");
      console.log(store?.manager, "before");
      await result;
      await new Promise((resolve) => setTimeout(resolve, 0));

      toast.success("Login Successful");
    } catch (error) {
      toast.error(error.message);
      return;
    }
  };

  useEffect(() => {
    // Check if user is logged in and store manager is true, navigate to dashboard
    if (user && store.sysadmin) {
      navigate("/mainDashboard");
    } else if (user && store.manager) {
      // If user is logged in but store manager is still false, navigate to create-store
      navigate("/dashboard");
    }
  }, [user, store?.manager, navigate, store.sysadmin]);

  const googleHandler = () => {
    googleSignIn()
      .then((res) => {
        const userInfo = {
          name: res?.user?.displayName,
          email: res?.user?.email,
          photo: res?.user?.photoURL,
        };
        console.log(userInfo, "iam user info");
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

      <div className="flex flex-col p-5 lg:flex-row ">
        <div className="">
        <img src={loginImage} alt="" />
        </div>
        <form onSubmit={handleLogin} className="space-y-5">
          <div className="flex flex-col space-y-4 h-[480] w-480 items-center justify-center md:p-10 ">
            <div>
              <img src={signInText} alt="" />
              <h2> Login To Your Account</h2>
            </div>
            <div className="form-control w-full relative">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="Type here"
                className="input input-bordered bg-[#F1F3F6] md:w-[429px] h-11 "
              />
              <IoMdMail className="text-6xl absolute -right-1 text-[#FD7401]  top-[35%]  "></IoMdMail>
            </div>
            <div className="form-control w-full relative">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="password"
                placeholder="Type here"
                className="input input-bordered h-11 bg-[#F1F3F6] w-full md:w-[429px]   "
              />
              <FaLock className="text-5xl h-10 absolute -right-1 text-[#FD7401]  top-[46%]" />
            </div>
            {/* <span className="">
           <span className="">Forget Password ?</span>
         </span> */}
            <div className="w-full ">
              <button className="btn btn-primary w-full bg-orange-500 block ">
                Sign In
              </button>
            </div>
            <span>Or Continiou With</span>
            <span className="flex gap-10">
              <button onClick={() => googleHandler()} className="btn bg-orange-500 text-white">
                {" "}
                <FcGoogle className="text-2xl"> </FcGoogle> Google
              </button>
              <button className="btn bg-orange-500 text-white">
                {" "}
                <AiOutlineGithub className="text-2xl"></AiOutlineGithub> Github
              </button>
            </span>{" "}
            <div className="w-full">
              <Link className="text-blue-700" to={"/register"}>
                <button className="  w-full btn  btn-outline btn-info   block ">
                  Register Now
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
