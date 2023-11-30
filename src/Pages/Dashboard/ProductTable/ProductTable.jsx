import { FaCross, FaEdit, FaTrashAlt } from "react-icons/fa";
import useAllProducts from "../../../hooks/useAllProducts";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useaxiosSecure from "../../../hooks/useaxiosSecure";
import { Helmet } from "react-helmet-async";


const ProductTable = ({refetchCount}) => {
    const [products,refetch]=useAllProducts()
    const axiosSecure=useaxiosSecure() 
const handleDelete=(id)=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {

   axiosSecure.delete(`/admin/product/${id}`)
   .then(res=>{
   
     Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      })

      refetch()
      refetchCount()

   })
   .catch(err=>{
    console.log(err);
   })




        }
      });
}
    return (
        <div>

            <div className="overflow-x-auto">
            <Helmet>
            <title> inven || control </title>
          </Helmet>
  <table className="table ">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
          #
          </label>
        </th>
        <th>Product Name and Image </th>
        <th>Sale Count</th>
        <th>Product Quantity</th>
      
        <th>update here</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
  
 {
  products?.product?.map((product,index)=> <tr className="" key={product._id}>
        <th>
          <label>
          {index+1}
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle  h-16">
                <img  src={product?.image} />
              </div>
            </div>
            <div>
           
              <div className="text-sm opacity-50"> {product.name}</div>
            </div>
          </div>
        </td>
        <td>
        
          <span className="badge badge-ghost badge-sm">Sale Count: {product.saleCount} </span>
        </td>
        <td> {product?.quantity} </td>
        <td> <Link to={`/dashboard/update/${product._id}`}> 
           <td> <button  className="btn"> <FaEdit></FaEdit> </button> </td>
           
           </Link> </td>
     
        <td> <button onClick={()=>handleDelete(product._id)} className="btn"> <FaTrashAlt></FaTrashAlt> </button> </td>
  
      </tr> )
 }

      

    </tbody>
    
    
  </table>
</div>
        </div>
    );
};

export default ProductTable;