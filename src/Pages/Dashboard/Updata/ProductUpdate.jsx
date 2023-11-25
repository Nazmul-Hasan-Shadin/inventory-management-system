import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useaxiosSecure from '../../../hooks/useaxiosSecure';
import { useParams } from 'react-router-dom';
import AddProduct from '../AddProduct/AddProduct';

const ProductUpdate = () => {

    const {id}= useParams()
    
    
    console.log( id);
    const axiosSecure=useaxiosSecure()
    const {data:singleProduct=[]}=useQuery({
        queryKey:['singleProductByID'],
        queryFn:async ()=>{
            const response= await axiosSecure.get(`/admin/products-id/${id}`)
             return response.data.product
        }
    })
     console.log(singleProduct);
    return (
        <div>
      <AddProduct  isUpdate={true}  singleProduct={singleProduct} ></AddProduct>
        </div>
    );
};

export default ProductUpdate;