
import useShop from '../../../hooks/useShop';
import useaxiosSecure from '../../../hooks/useaxiosSecure';

import { useQuery } from '@tanstack/react-query';

const SysUsers = () => {

const axiosSecure=useaxiosSecure()

const {data:users,isLoading:alluserLoading}=useQuery({
  queryKey: ['usersall'],
  queryFn: async()=>{
   const allusers= await axiosSecure.get('/users')
   return allusers?.data.data
  }
})

    const [products,isLoading]=useShop()

if (isLoading || alluserLoading) {
  return <span> loading</span>
}

 const combineDatas=[...products.data, ...users]

//  find duplicate
 const pureData=[]
  for (const uniqueData of combineDatas) {
      if (uniqueData && uniqueData.shopName) {
         
    
        const checkExistData= pureData.find(item=>item.shopName===uniqueData.shopName)
       
          

         if (!checkExistData) {
          pureData.push(uniqueData)
         }


     
      }


      if (uniqueData && !uniqueData.shopName) {
        const checkExistData= pureData.find(item=>item.email===uniqueData.email)
          if (!checkExistData) {
            pureData.push(uniqueData)
          }
     }


  }



   
     
     console.log(pureData,'puredataa');

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
      
      </tr>
    </thead>
    <tbody>
  
 {
  pureData.map((product,index)=> <tr key={product._id}>
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
        <td> {product?.shopName?product.shopName: 'No shop'} </td>

        <td> {product?.roll ?product.roll: <button className='btn btn-outline btn-accent'>send Promotion Email</button>  } </td>

    
     
       
  
      </tr> )
 }

      

    </tbody>
    
    
  </table>
</div>
        </div>
    );
};

export default SysUsers;