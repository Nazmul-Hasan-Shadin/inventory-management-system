import toast from "react-hot-toast";
import useShop from "../../../hooks/useShop";
import useaxiosSecure from "../../../hooks/useaxiosSecure";
import emailjs from "@emailjs/browser";
import { useQuery } from "@tanstack/react-query";
import { useRef, useState } from "react";
import SearchSection from "../../../Components/Product/SearchSection";
import { FaTrashAlt } from "react-icons/fa";
import useSearch from "../../../hooks/useSearch";

const SysUsers = () => {
  const{debouncedSearch,searchContent}=useSearch()
  console.log(searchContent,'iam admin search fbro');

  const [currentPage, setCurrentPage] = useState(0);
  const [products, isLoading] = useShop();
  const [ishandleSearch, setIsHandleSearch] = useState(false);
  const perPage=10;
  const initalIndex= currentPage * perPage
  const lastIndex= initalIndex + perPage


  const form = useRef();
  const axiosSecure = useaxiosSecure();
          // ==========================================get all registerd user==================================================================
  const { data: users, isLoading: alluserLoading } = useQuery({
    queryKey: ["usersall"],
    queryFn: async () => {
      const allusers = await axiosSecure.get("/users");
      return allusers?.data.data;
    },
  });



  if (isLoading || alluserLoading) {
    return <span className="loading loading-dots loading-lg"></span>;
  }

  const combineDatas = [...products.data, ...users];


  //  find duplicate
  const pureData = [];
  for (const uniqueData of combineDatas) {
    if (uniqueData && uniqueData.shopName) {
      const checkExistData = pureData.find(
        (item) => item.shopName === uniqueData.shopName
      );

      if (!checkExistData) {
        pureData.push(uniqueData);
      }
    }

    if (uniqueData && !uniqueData.shopName) {
      const checkExistData = pureData.find(
        (item) => item.email === uniqueData.email
      );
      if (!checkExistData) {
        pureData.push(uniqueData);
      }
    }
  }

  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mh4yybj",
        "template_8p4zpwq",
        form.current,
        "05SFtOhQvrIffDR9G"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Notice send succesfull");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  // ===================pagination logic===================

  const startPagi= pureData.slice(initalIndex,lastIndex)

  const totalPages = Math.ceil(pureData.length / perPage);

 const handleNext=()=>{
   
  if (currentPage < totalPages - 1) {
    setCurrentPage(currentPage + 1);
  }

 }

 const handlePrevClick = () => {
  if (currentPage > 0) {
    setCurrentPage(currentPage - 1);
  }
};

   const searchQuery=async(e)=>{
            e.preventDefault()
      const form= new FormData(document.querySelector('form'))

      const  searchString= form.get('search')
      setIsHandleSearch(true)
      debouncedSearch(searchString,)


   }

 


  return (
    <div className="">
 
     <SearchSection handleSearch={searchQuery}></SearchSection>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-[#FAFBFE]">
            <tr>
              <th>
                <label>#</label>
              </th>
              <th>Image</th>
              <th>Name </th>
              <th>Emakidddddddddddl</th>
              <th>Shop Name </th>

              <th> Role</th>
              <th className="text-black">Delete</th>
            </tr>
          </thead>
          <tbody className="bg-[#FFFFFF]">
            {   ishandleSearch ?  searchContent?.data?.map((product,index)=>(       <tr key={product._id}>

          
<th>
  <label>{index + 1}</label>
</th>
<th>
  <img className="w-16 rounded-full" src={product?.photo} alt="" />
 </th>
<td>
  <td> {product?.name}</td>
</td>
<td>
  <td> {product.email} </td>
</td>
<td> {product?.shopName ? product.shopName : "No shop"} </td>

<td>
  {product?.roll ? (
    product.roll
  ) : (
    <>
      <button
        className="btn"
        onClick={() =>
          document.getElementById("my_modal_1").showModal()
        }
      >
        {" "}
        Send promotional sms{" "}
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <form onSubmit={sendEmail} ref={form} action="">
            <div className="flex flex-col gap-4 justify-center p-10">
              <textarea
                name="message"
                placeholder="write here your legendary notice  "
                className="textarea textarea-bordered textarea-lg w-full max-w-xs"
              ></textarea>

              <input
                type="text"
                name="from_name"
                defaultValue={product?.name}
                placeholder="Type here"
                className="input input-bordered input-info w-full max-w-xs"
              />
              <input
                type="text"
                name="user_email"
                defaultValue={product?.email}
                placeholder="Type here"
                className="input input-bordered input-info w-full max-w-xs"
              />

              <button
                type="submit"
                className="btn btn-outline bg-red-700 text-white"
              >
                Send Notice
              </button>
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
    </>
  )}
</td>




<td>
  {" "}
  <button
   
    className="btn"
  >
    {" "}
    <FaTrashAlt className="text-xl text-red-600"></FaTrashAlt>{" "}
  </button>{" "}
</td>





</tr>))         : startPagi.map((product, index) => (
           
              <tr key={product._id}>

          
                <th>
                  <label>{index + 1}</label>
                </th>
                <th>
                  <img className="w-16 rounded-full" src={product?.photo} alt="" />
                 </th>
                <td>
                  <td> {product?.name}</td>
                </td>
                <td>
                  <td> {product.email} </td>
                </td>
                <td> {product?.shopName ? product.shopName : "No shop"} </td>

                <td>
                  {product?.roll ? (
                    product.roll
                  ) : (
                    <>
                      <button
                        className="btn"
                        onClick={() =>
                          document.getElementById("my_modal_1").showModal()
                        }
                      >
                        {" "}
                        Send promotional sms{" "}
                      </button>
                      <dialog id="my_modal_1" className="modal">
                        <div className="modal-box">
                          <form onSubmit={sendEmail} ref={form} action="">
                            <div className="flex flex-col gap-4 justify-center p-10">
                              <textarea
                                name="message"
                                placeholder="write here your legendary notice  "
                                className="textarea textarea-bordered textarea-lg w-full max-w-xs"
                              ></textarea>

                              <input
                                type="text"
                                name="from_name"
                                defaultValue={product?.name}
                                placeholder="Type here"
                                className="input input-bordered input-info w-full max-w-xs"
                              />
                              <input
                                type="text"
                                name="user_email"
                                defaultValue={product?.email}
                                placeholder="Type here"
                                className="input input-bordered input-info w-full max-w-xs"
                              />

                              <button
                                type="submit"
                                className="btn btn-outline bg-red-700 text-white"
                              >
                                Send Notice
                              </button>
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
                    </>
                  )}
                </td>



           
                <td>
                  {" "}
                  <button
                   
                    className="btn"
                  >
                    {" "}
                    <FaTrashAlt className="text-xl text-red-600"></FaTrashAlt>{" "}
                  </button>{" "}
                </td>





              </tr>
            ))}
          </tbody>



          <div className="join">

  

  <button onClick={handlePrevClick} className="join-item  btn" type="radio" name="options" aria-label="1"  >  Previous </button>

  <button onClick={handleNext} className="join-item ml-4  btn" type="radio" name="options" aria-label="1"  >  Next </button>

</div>






        </table>
      </div>
    </div>
  );
};

export default SysUsers;
