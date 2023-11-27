
import useShop from '../../../hooks/useShop';
import useaxiosSecure from '../../../hooks/useaxiosSecure';

import { useQuery } from '@tanstack/react-query';

const SysUsers = () => {



    const [products]=useShop()




   
     
     console.log(products,'djffffffffff');

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
        <th>Name </th>
        <th>Email</th>
        <th>Shop Name </th>
      
        <th> Role</th>
        <th>Promotion</th>
      </tr>
    </thead>
    <tbody>
  
 {
  products?.data?.map((product,index)=> <tr key={product._id}>
        <th>
          <label>
          {index+1}
          </label>
        </th>
        <td>
        <td> {product.shopName}</td>
        </td>
        <td>
        
    <td> {product.email} </td>
        </td>
        <td> {product?.shopName} </td>

        <td> {product?.roll} </td>

        <td>  <button className='btn btn-outline btn-accent'>Promotion</button> </td>
     
       
  
      </tr> )
 }

      

    </tbody>
    
    
  </table>
</div>
        </div>
    );
};

export default SysUsers;