import React from 'react';
import useAllProducts from '../../../hooks/useAllProducts';
import { FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProductSection = () => {
    const [products]=useAllProducts()
    return (
        <div>
        <div className="overflow-x-auto">
<table className="table">
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
products?.product?.map((product,index)=> <tr key={product._id}>
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
    
      <span className="badge badge-ghost badge-sm">Sale Count: {} </span>
    </td>
    <td> {product?.quantity} </td>
    <td> <Link to={`/dashboard/update/${product._id}`}> 
       <td>something </td>
       
       </Link> </td>
 
    <td>  d</td>

  </tr> )
}

  

</tbody>


</table>
</div>
    </div>
    );
};

export default ProductSection;