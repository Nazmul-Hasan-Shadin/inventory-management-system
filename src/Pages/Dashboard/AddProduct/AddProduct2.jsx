import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import useAxiosPublic from '../../../hooks/useaxiosPublic';
import useaxiosSecure from '../../../hooks/useaxiosSecure';

const AddProduct2 = () => {
    const axiosSecure= useaxiosSecure()
    const { data:productCount,isLoading } = useQuery({
        queryKey: ['pdCount'],
        queryFn: async() => {
 
          const productCount= await axiosSecure.get('/productCount')
 
          return productCount?.data?.count
   
         
        }
        
      });

      if (isLoading) {
        return <p className='text-center'>Loading</p>
      }
      console.log(productCount);
    return (
        <div className='w-full'>
            <input type="text"  readOnly defaultValue={` total  ${productCount} product has added`} className="input  input-bordered w-7/12" />


            <Link to={'/dashboard/addproduct'}><button   className={`btn btn-outline btn-secondary ${''} `}>Add Product</button></Link>

        </div>
    );
};

export default AddProduct2;