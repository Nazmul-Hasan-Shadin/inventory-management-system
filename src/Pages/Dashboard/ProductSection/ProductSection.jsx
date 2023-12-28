import React, { useState } from "react";
import useAllProducts from "../../../hooks/useAllProducts";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import useaxiosSecure from "../../../hooks/useaxiosSecure";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import SearchSection from "../../../Components/Product/SearchSection";

const ProductSection = () => {
  const [search, setSearch] = useState("");

  const [products] = useAllProducts(search);
  const axiosSecure = useaxiosSecure();
  const { user } = useAuth();
  const handlAddToCart = async (product) => {
    let cartInfo = {
      cartId: product._id,
      desc: product.desc,
      discount: parseFloat(product.discount),

      image: product.image,
      name: product.name,

      quantity: parseFloat(product.quantity),
      email: user?.email,

      sellingPrice: parseFloat(product.sellingPrice),
    };

    //    ===================post to cart db=========================
    axiosSecure.post("/admin/cart", cartInfo).then((res) => {
      console.log(res);
      toast.success("Added to Cart");
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const search = e.target.search.value;
    setSearch(search);
  };

  return (
    <div>
      <Helmet>
        <title> inventory || product </title>
      </Helmet>
         <SearchSection></SearchSection>

      <div className="overflow-x-auto">
        <form action="" onSubmit={handleSearch}>
          <input
            type="text"
            name="search"
            placeholder="search here"
            className="input w-full max-w-xs"
          />
          <input type="submit" className="btn" />
        </form>

        <table className="table">
          {/* head */}
          <thead>
          <tr className="">
              <th>
                <label>#</label>
              </th>
             
              <th className="text-black">Product image </th>
              <th className="text-black">Name</th>
              <th className="text-black">Sale Count</th>
              <th className="text-black">Product Quantity</th>

              <th className="text-black">selling price</th>
              <th className="text-black">Buy price</th>
              <th className="text-black">Location</th>
         
              <th className="text-black">checkout</th>
            </tr>
          </thead>
          <tbody>
            {products?.product?.map((product,index) => (
                     <tr className="" key={product._id}  >
                     <th>
                       <label>{index + 1}</label>
                     </th>
                    
                     <td>
                       <div className="flex items-center gap-3">
                         <div className="avatar">
                           <div className="mask mask-squircle  h-16">
                             <img src={product?.image} />
                           </div>
                         </div>
                       </div>
                     </td>
                     <td className="text-black">{product.name}</td>
                     <td>
                       <span className="badge badge-ghost badge-sm">
                         Sale Count: {product.saleCount}{" "}
                       </span>
                     </td>
     
                     <td> {product?.quantity} </td>
     
                     <td>
                       <span className="badge badge-ghost badge-sm">
                         $ {product?.sellingPrice}
                       </span>
                     </td>
     
                     <td>
                       <span className="badge badge-ghost badge-sm">
                         $ {product?.buyPrice}
                       </span>
                     </td>
     
                     <td>
                       <span className="badge badge-ghost badge-sm">
                         {product?.location}
                       </span>
                     </td>
     
         
     
                     <td>
                       {" "}
                       <button
                         onClick={() => handlAddToCart(product)}
                         className="btn bg-orange-500 text-white"
                       >
                         {" Add to checkout"}
                       
                       </button>{" "}
                     </td>
                   </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductSection;
