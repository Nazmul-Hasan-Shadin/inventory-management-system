import { FcGoogle } from "react-icons/fc";
import { AiOutlineGithub } from "react-icons/ai";

import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";

import useAxiosPublic from "../../hooks/useaxiosPublic";
import useAuth from "../../hooks/useAuth";
import useStore from "../../hooks/useStore";

const Login = () => {
  const {store}=useStore()
  const axiosPublic = useAxiosPublic();
  const { googleSignIn, handleSignedIn, logOut, user } = useAuth();
  console.log(user);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    // ++++++++++++manual Login +++++++++++++++++

    handleSignedIn(email, password)
      .then((result) => {
        console.log(result);
        navigate(location?.state ? location.state : "/");
        //   try to find user stroe if available then redirect to dashboard
        if (store) {
          navigate('/dashboard')
        }
        
      })

      .catch((error) => {
        toast.error(error.message);
      });
  };

  const googleHandler = () => {
    googleSignIn()
      .then((res) => {
        console.log(res);
        navigate(location?.state ? location.state : "/");
        const userInfo = {
          name: user?.displayName,
          email: user?.email,
          photo: user?.photoURL,
        };
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

        toast.success("Successfully Logged In");
      })

      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="h-[100vh] p-5 lg:p-20 bg-[#F9FAFB]">
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

          <Link className="text-blue-700" to={"/signup"}>
            {" "}
            Register Now
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
