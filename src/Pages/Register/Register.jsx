import { AiFillLock, AiFillFacebook, AiOutlineTwitter } from "react-icons/ai";
import { GoPeople } from "react-icons/go";
import { FcGoogle } from "react-icons/fc";

import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useaxiosPublic";
import useStore from "../../hooks/useStore";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";



const Register = () => {



  const { createUser, logOut, updateUser,user } = useAuth();
  const [store]=useStore()
  
   

  const navigate = useNavigate();
  const location=useLocation()
  const axiosPublic= useAxiosPublic()
  useEffect(() => {
    // Check if user is logged in and store manager is true, navigate to dashboard
    if (user && !store?.manager) {
      navigate('/create-store');
    } 


  }, [user, store?.manager, navigate]);


  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const name = form.get("name");
    const profile = form.get("profile");
    const password = form.get("password");

    createUser(email, password)
      .then((res) => {
        updateUser(name, profile)
          .then((result) => {
       

            toast.success("Successfully Register");
         const userInfo={
           name,
           email,
           photo:profile
         }
          //  post user information to db
          // posting
     
          
       axiosPublic.post(`/users`,userInfo)
       .then(res=>{
        console.log(res);
       })
       .catch(err=>{
        console.log(err);
       })
          
      


          })

          .catch((error) => {
            console.log(error.message);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>  
     
    <div className="hero min-h-screen  bg-base-200">

    <Helmet>
        <title> inventory || Reg</title>
       </Helmet>
      <div className="hero-content flex-col">
        <div className="card flex-shrink-0 w-full max-w-sm   shadow-2xl bg-base-100">
          <h2 className="tect-center text-3xl">Register Now</h2>
          <form
            onSubmit={handleFormSubmit}
            className="card-body mx-auto -ml-5 "
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <span className="relative">
                <GoPeople className="absolute left-2 top-1/3"></GoPeople>
                <input
                  name="name"
                  type="text"
                  placeholder="Type Your Name"
                  className="input border border-b-slate-400 border-t-0 border-x-0 px-7"
                  required
                />
              </span>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Profile</span>
              </label>
              <span className="relative">
                <GoPeople className="absolute left-2 top-1/3"></GoPeople>
                <input
                  name="profile"
                  type="text"
                  placeholder="Your Profile Image Url"
                  className="input border border-b-slate-400 border-t-0 border-x-0 px-7"
                  required
                />
              </span>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <span className="relative">
                <GoPeople className="absolute left-2 top-1/3"></GoPeople>
                <input
                  type="email"
                  name="email"
                  placeholder="Type Your email"
                  className="input border border-b-slate-400 border-t-0 border-x-0 px-7"
                  required
                />
              </span>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text ">Password</span>
              </label>

              <span className="relative">
                <AiFillLock className="absolute top-1/3 left-2"></AiFillLock>
                <input
                  type="password"
                  name="password"
                  placeholder="type your password"
                  className="input  px-7 border border-b-slate-400 border-t-0 border-x-0 "
                  required
                />
              </span>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control  mt-6">
              <input
                type="submit"
                className="btn btn-primary   bg-gradient-to-r from-[#22c3d8] via-purple-500 to-pink-500"
                value={"Register"}
                name=""
                id=""
              />
            </div>
            <p>Or Sign In with</p>
            {/* <div className='form-control'>
                  <span className=' flex gap-4 justify-center text-3xl'>
                  <FcGoogle></FcGoogle>
                  <AiFillFacebook className='text-blue-700 rounded-full'></AiFillFacebook>
                  <AiOutlineTwitter className='text-blue-700'></AiOutlineTwitter>
        
        
                  </span>
                </div> */}
            <p>
              Have an Account ? <Link to={"/login"}>Log In</Link>
            </p>
            <div></div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default Register;
