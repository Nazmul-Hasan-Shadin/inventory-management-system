
import useShop from '../../../hooks/useShop';
import useaxiosSecure from '../../../hooks/useaxiosSecure';

import { useQuery } from '@tanstack/react-query';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import useAuth from '../../../hooks/useAuth';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
const SysAllProduct = () => {
  const form = useRef();

  const {user}=useAuth()
    const [products]=useShop()



// send notice to ussr


const sendEmail = (e) => {

  e.preventDefault();

  emailjs.sendForm('service_mh4yybj', 'template_8p4zpwq', form.current, '05SFtOhQvrIffDR9G')
    .then((result) => {
        console.log(result.text);
        toast.success('Notice send succesfull')
    }, (error) => {
        console.log(error.text);
    });
};
   

    return (
        <div className=''>
          <Helmet>
            <title> inven || allpro </title>
          </Helmet>
            <div className="overflow-x-auto">
              <h2 className='text-center text-xl font-bold mb-7'>Users With Shop</h2>
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

        <td>  
      {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>  Send Notice </button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box ">
  

<form onSubmit={sendEmail}  ref={form} action="">

<div className='flex flex-col gap-4 justify-center  p-10'>
<textarea name='message'  placeholder="write here your legendary notice  " className="textarea  textarea-bordered textarea-lg w-full max-w-xs" ></textarea>

<input type="text" name='from_name' defaultValue={product?.name} placeholder="Type here" className="input input-bordered input-info w-full max-w-xs" />
<input type="text" name='user_email' defaultValue={product?.email} placeholder="Type here" className="input input-bordered input-info w-full max-w-xs" />
   
<button type='submit' className="btn btn-outline bg-red-700 text-white">Send Notice</button>
</div>


  
</form>




    <div className="modal-action">

      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>


             
        
        </td>
     
       
  
      </tr> )
 }

      

    </tbody>
    
    
  </table>
</div>
        </div>
    );
};

export default SysAllProduct;