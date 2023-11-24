import React from 'react';
import { useForm } from 'react-hook-form';
import useaxiosSecure from '../../../hooks/useaxiosSecure';
const image_host_key=import.meta.env.VITE_IMAGE_API_KEY
const image_host_api=`https://api.imgbb.com/1/upload?key=${image_host_key}`
const AddProduct = () => {

  const axiosSecure= useaxiosSecure()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit =async(data) =>{
        console.log(data);
        // ===================added product information============================
         const productInfo= {
          cost:data.cost,
          desc:data.desc,
          discount:data.discount,
          image:'',
          location:data.location,
          name:data.name,
          profit:data.profit,
          quantity:data.quantity
         }

        //  =====================upload image if succeess then add product==============================================
 const file={image:data.image[0]}
         
    const result=await axiosSecure.post(image_host_api,file,{
       headers:{
        'content-type':'multipart/form-data'
       }
    })
   console.log(result,'imageeeee');



      }
      console.log(watch("example")) 
    
    return (
        <div className="hero min-h-screen bg-base-200 w-full">
        <div className="hero-content flex-col lg:flex-row-reverse w-[100%]">
      
          <div className="card flex-shrink-0 w-full sm:max-w-sm md:w-full shadow-2xl bg-base-100">
               <h2 className='text-2xl text-center'>Add Product</h2>
            <form onSubmit={handleSubmit(onSubmit)} >
           <div className="card-body grid grid-cols-1 md:grid-cols-2 w-full" >
           <div className="form-control">
                <label className="label">
                  <span className="label-text">product Name</span>
                </label>

                <input {...register("name")} type="text" placeholder="product name" className="input input-bordered  w-full" required />

              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">product img</span>
                </label>

  <input {...register("image")} type="file" className="file-input file-input-bordered w-full max-w-xs" />

          
              </div>
      
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Quantity</span>
                </label>
                <input  {...register("quantity")} type="number" name='quantity' placeholder="book quantity" className="input input-bordered" required />
      
              </div>
      
      
              <div className="form-control">
                <label className="label">
                  <span className="label-text">product location</span>
                </label>
                <input {...register("location")} type="text" placeholder="location " className="input input-bordered" required />
          
              </div>
      
     
      
      
              <div className="form-control">
                <label className="label">
                  <span className="label-text">product cost</span>
                </label>
                <input {...register("cost")} type="number" placeholder="" className="input input-bordered" required />
         
              </div>
      
      
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Profit you want gain %</span>
                </label>
                <input {...register("profit")} type="number" placeholder="profit"  className="input input-bordered" required />
      
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Discount in percentage</span>
                </label>
                <input {...register("discount")} type="number" placeholder="profit"  className="input input-bordered" required />
      
              </div>

            
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <input {...register("desc")} type="text" placeholder="Description"  className="input input-bordered" required />
      
              </div>  


           </div>
      
          
           <div className="form-control mt-6">
              
              <input type="submit" value={'Add Product'} className="btn btn-primary" />
            </div>
             
             
            </form>
         
      
          </div>
        </div>
      </div>
    );
};

export default AddProduct;