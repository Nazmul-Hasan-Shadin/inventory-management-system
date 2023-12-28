import { FaCross, FaEdit, FaFilePdf, FaFilter, FaList, FaPlus, FaPrint, FaTrashAlt } from "react-icons/fa";
import useAllProducts from "../../../hooks/useAllProducts";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useaxiosSecure from "../../../hooks/useaxiosSecure";
import { Helmet } from "react-helmet-async";

const ProductTable = ({ refetchCount }) => {
  const [products, refetch] = useAllProducts();
  console.log(products);
  const axiosSecure = useaxiosSecure();

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
  return (
    <div>
 
 <div className="flex bg-[#FFFFFF] p-12  justify-between">
        <div className="flex gap-5 items-center">
        <FaFilter  className="text-4xl"/>
          <input type="text" placeholder="Type here" className="input input-bordered h-11 input-primary w-full  max-w-xs" />
        </div>

        <Link to={"/dashboard/addproduct-final"}>
         <span className="text-2xl flex gap-3">
          <FaPrint className="text-green-500"></FaPrint>
          <FaFilePdf className="text-red-700"></FaFilePdf>
          <FaList></FaList>
         </span>
      </Link>
        
      </div>

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
            {products?.product?.map((product, index) => (
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
                  <Link to={`/dashboard/update/${product._id}`}>
                    <td>
                      {" "}
                      <button className="btn">
                        {" "}
                        <FaEdit></FaEdit>{" "}
                      </button>{" "}
                    </td>
                  </Link>{" "}
                </td>

                <td>
                  {" "}
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="btn"
                  >
                    {" "}
                    <FaTrashAlt className="text-xl text-red-600"></FaTrashAlt>{" "}
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

export default ProductTable;
