import React, { useState } from "react";
import useAllProducts from "../../../hooks/useAllProducts";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import useaxiosSecure from "../../../hooks/useaxiosSecure";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

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
            <tr>
              <th>
                <label>#</label>
              </th>
              <th>Product Name and Image </th>
              <th>Quantity</th>
              <th>Product Quantity</th>

              <th>Selling Price</th>
              <th>Check Out</th>
            </tr>
          </thead>
          <tbody>
            {products?.product?.map((product) => (
              <tr key={product._id}>
                <th>
                  <label>{product._id}</label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle  h-16">
                        <img src={product?.image} />
                      </div>
                    </div>
                    <div>
                      <div className="text-sm opacity-50"> {product.name}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge badge-ghost badge-sm">
                    {" "}
                    quantity <span>{product.quantity}</span>{" "}
                  </span>
                </td>

                <td>
                  <td>
                    Discount: <span>{product.discount}</span>%{" "}
                  </td>
                </td>

                <td> selling price: {product.sellingPrice} </td>
                <button
                  onClick={() => handlAddToCart(product)}
                  className="btn btn-outline mt-4"
                >
                  {" "}
                  <td> Add For Check Out</td>{" "}
                </button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductSection;
