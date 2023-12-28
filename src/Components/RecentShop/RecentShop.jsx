import React from 'react';
import useShop from '../../hooks/useShop';

const RecentShop = () => {
    const [products]=useShop()
    
    return (
        <div>
            <h2 className='text-2xl my-7'>Recently Created Shop</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
           Index
        </th>
        <th>Shop</th>
        <th>
            Name

        </th>
        <th>Owner</th>
        <th></th>
      </tr>
    </thead>
    <tbody>

  {
     products?.data?.map(product=>     <tr key={product._id}>
        <th>
          Index
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={product?.shopLogo} />
              </div>
            </div>
            <div>
              
            </div>
          </div>
        </td>
        <td>
         {
            product?.shopName
         }
     
        </td>
        <td>{product?.name}</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>)
  }
      



    </tbody>


  </table>
</div>
        </div>
    );
};

export default RecentShop;