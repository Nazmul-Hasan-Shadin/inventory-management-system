import toast from "react-hot-toast";
import useShop from "../../../hooks/useShop";
import useaxiosSecure from "../../../hooks/useaxiosSecure";
import emailjs from "@emailjs/browser";
import { useQuery } from "@tanstack/react-query";
import { useRef, useState } from "react";

const SysUsers = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const perPage=10;
  const initalIndex= currentPage * perPage
  const lastIndex= initalIndex + perPage


  const form = useRef();
  const axiosSecure = useaxiosSecure();

  const { data: users, isLoading: alluserLoading } = useQuery({
    queryKey: ["usersall"],
    queryFn: async () => {
      const allusers = await axiosSecure.get("/users");
      return allusers?.data.data;
    },
  });

  const [products, isLoading] = useShop();

  if (isLoading || alluserLoading) {
    return <span> loading</span>;
  }

  const combineDatas = [...products.data, ...users];
  console.log(combineDatas);

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

  console.log(pureData,'purrrrrrrrrrrrrrrrrrrrrrr');
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

 


  return (
    <div className="">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>#</label>
              </th>
              <th>Name </th>
              <th>Email</th>
              <th>Shop Name </th>

              <th> Role</th>
            </tr>
          </thead>
          <tbody>
            {startPagi.map((product, index) => (
           
              <tr key={product._id}>

                
                <th>
                  <label>{index + 1}</label>
                </th>
                <td>
                  <td> {product.shopName}</td>
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
