
import useAllProducts from "../../../hooks/useAllProducts";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useaxiosSecure from "../../../hooks/useaxiosSecure";
import { Helmet } from "react-helmet-async";
import SearchSection from "../../../Components/Product/SearchSection";
import useAxiosPublic from "../../../hooks/useaxiosPublic";
import useAuth from "../../../hooks/useAuth";
import { useRef, useState } from "react";
import ProductTableRow from "./ProductTableRow";
import useSearch from "../../../hooks/useSearch";

const ProductTable = ({ refetchCount }) => {
  const debounceTimer = useRef(null);
  console.log(debounceTimer,'iam ref bro');
  const [products, refetch] = useAllProducts();
  const [ishandleSearch, setIsHandleSearch] = useState(false);

   
  const{debouncedSearch,searchContent}=useSearch()
  const { user } = useAuth();
  console.log(products);
  const axiosSecure = useaxiosSecure();
  const axiosPublic = useAxiosPublic();

  //  ==========================handle Delete product=======================================
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/admin/product/${id}`)
          .then((res) => {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });

            refetch();
            refetchCount();
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  // ===============================product hand;esearch for manager=======================================================

  const handleSearch = async (e) => {
 
    e.preventDefault();
    const form = new FormData(document.querySelector('form'));
    const searchString = form.get('search');
    setIsHandleSearch(true);
    debouncedSearch(searchString, user?.email);
 
    

   
  };



  return (
    <div>
      <SearchSection handleSearch={handleSearch}></SearchSection>

      <div className="w-[100%]">
        <Helmet>
          <title> inven || control </title>
        </Helmet>

        <table className="table  ">
          <thead className="bg-[#FAFBFE]">
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
              <th className="text-black">update here</th>
              <th className="text-black">Delete</th>
            </tr>
          </thead>
          <tbody className="bg-[#FFFFFF]">
            {ishandleSearch
              ? searchContent?.data?.map((product, index) => (
                  <ProductTableRow
                    handleDelete={handleDelete}
                    key={index}
                    product={product}
                  ></ProductTableRow>
                ))
              : products?.product?.map((product, index) => (
                  <ProductTableRow
                    handleDelete={handleDelete}
                    key={index}
                    product={product}
                  ></ProductTableRow>
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;
