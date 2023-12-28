import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useaxiosPublic";
import useaxiosSecure from "../../../hooks/useaxiosSecure";
import ProductTable from "../ProductTable/ProductTable";
import useAuth from "../../../hooks/useAuth";
import { FaPlus } from "react-icons/fa";

const AddProduct2 = () => {
  const { user } = useAuth();
  const axiosSecure = useaxiosSecure();
  const {
    data: productCount,
    isLoading,
    refetch: refetchCount,
  } = useQuery({
    queryKey: ["pdCount"],
    queryFn: async () => {
      const productCount = await axiosSecure.get(
        `/productCountByEmail/${user?.email}`
      );

      return productCount?.data?.count;
    },
  });

  if (isLoading) {
    return <p className="text-center">Loading</p>;
  }

  return (
    <div className="w-full">
      {/* <input
        type="text"
        readOnly
        defaultValue={` total  ${productCount} product has added`}
        className="input  input-bordered w-7/12"
      />

      <Link to={"/dashboard/addproduct-final"}>
        <button className={`btn btn-outline btn-secondary ${""} `}>
          Add Product
        </button>
      </Link> */}

<div className="flex bg-[#FAFBFE] p-12  justify-between">
        <div>
          <h2 className="text-2xl">Total Product</h2>
          <p>Manage Your Product</p>
        </div>

        <Link to={"/dashboard/addproduct-final"}>
        <button className="btn px-10 bg-[#FF9F43]">
          {" "}
          <FaPlus /> Add Product
        </button>
      </Link>
        
      </div>

      {/* =======================================show here all product============================================================ */}

      <ProductTable refetchCount={refetchCount}></ProductTable>
    </div>
  );
};

export default AddProduct2;
