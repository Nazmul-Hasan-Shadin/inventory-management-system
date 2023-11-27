
import useShop from '../../../hooks/useShop';
import useaxiosSecure from '../../../hooks/useaxiosSecure';

import { useQuery } from '@tanstack/react-query';

const SysAllProduct = () => {



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
        <th>Shop Name </th>
        <th>Logo</th>
        <th>Product Limit</th>
      
        <th>Product desc</th>
        <th>Delete</th>
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
        
        <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle  h-16">
                <img  src={product?.shopLogo} />
              </div>
            </div>
            <div>
           
            
            </div>
          </div>
        </td>
        <td> {product?.productLimit} </td>

        <td> {product?.shopInfo} </td>

        <td>  <button className='btn btn-outline btn-accent'>Send Notice</button> </td>
     
       
  
      </tr> )
 }

      

    </tbody>
    
    
  </table>
</div>
        </div>
    );
};

export default SysAllProduct;