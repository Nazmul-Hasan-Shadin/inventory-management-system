import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProductTableRow = ({product,index,handleDelete}) => {
    return (
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
                <FaEdit className="text-xl"></FaEdit>{" "}
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
    );
};

export default ProductTableRow;