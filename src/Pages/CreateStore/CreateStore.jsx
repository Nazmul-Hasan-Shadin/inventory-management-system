import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useaxiosPublic";
import useStore from "../../hooks/useStore";
import { Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
const CreateStore = () => {
  const navigate=useNavigate()
  const {store}=useStore()
    const {user}=useAuth()
    const axiosPublic=useAxiosPublic()
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) =>{
   console.log(data);
   const shopInfo= {
    shopName:data.shopName,
    shopLogo:data.shopLogo,
    shopInfo:data.shopInfo,
    location:data.location,
     email:data.email,
     name:data.name
   }
   console.log(shopInfo);

//   ============= post users store informations ===============

axiosPublic.post('/user-shop',shopInfo)
   .then(result=>{
    console.log(result);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "successfully created store",
      showConfirmButton: false,
      timer: 1500
    });
    
    if (store) {
       <Navigate to={'/dashboard'}></Navigate>
    }

   })
   .catch(error=>{
    console.log(error);
    toast.error('shop already exist please login')
   })
  


  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
            <Helmet>
        <title> inventory || shop create</title>
       </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h2 className="text-2xl text-center">Add book to database</h2>

            <div className="card-body grid grid-cols-1 md:grid-cols-2 w-full">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Shop Name</span>
                </label>
                <input
                  {...register("shopName")}
                  type="text"
            
                  placeholder="Shop Name"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Shop Logo</span>
                </label>
                <input
                  {...register("shopLogo")}
                  type="text"
             
                  placeholder="shop image url"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Shop Desc</span>
                </label>
                <input
                  {...register("shopInfo")}
                  type="text"
    
                  placeholder="shop description"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">shop location</span>
                </label>
                <input
                  {...register("location")}
                  type="text"
               
                  placeholder="shop locationn "
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Shop Email</span>
                </label>
                <input readOnly 
                  {...register("email")}
                  type="text"
                  defaultValue={user?.email}
                  placeholder=""
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Owner</span>
                </label>
                <input 
                 {...register("name")}
                  
                  type="text"
                  defaultValue={user?.displayName}
                  placeholder="Owner"
             
                  className="input input-bordered"
                  readOnly
                />
              </div>
            </div>

            <div className="form-control mt-6">
              <input
                type="submit"
                value={"create shop"}
                className="btn btn-primary"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CreateStore;
