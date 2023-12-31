import React from "react";
import { useForm } from "react-hook-form";
import useaxiosSecure from "../../../hooks/useaxiosSecure";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useaxiosPublic";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
const image_host_key = import.meta.env.VITE_IMAGE_API_KEY;
const image_host_api = `https://api.imgbb.com/1/upload?key=${image_host_key}`;
// const image_host_api = 'https://cors.bridged.cc/https://api.imgbb.com/1/upload?key=' + image_host_key;

const AddProduct = ({ singleProduct, isUpdate }) => {
  const {
    name,
    buyPrice,
    cost,
    desc,
    discount,
    email,
    image,
    location,
    profit,
    quantity,
    sellingPrice,
    _id,
  } = singleProduct || {};

  // const {name}=singleProduct || {}
  const { user } = useAuth();
  const axiosSecure = useaxiosSecure();
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // ===================added product information============================

    //  =====================upload image if succeess then add product==============================================

    const buyingPrice = parseFloat(data.buyPrice);
    const tax = buyingPrice * 0.075;
    const profitPercentage = buyingPrice * (data.profit / 100);
    const discountAmount = buyingPrice * (data.discount / 100);
    const sellingPrice = buyingPrice + tax + profitPercentage - discountAmount;

    if (!isUpdate) {
      try {
        const res = await axiosPublic.get(
          `/manager/products-count/${user?.email}`
        );
        if (res.count >= 2) {
          console.log(res);

          console.log(
            "Product count limit reached. Payment needed for more products."
          );
          return;
        }
      } catch (error) {
        toast.error(error.response.data.message);
        return;
      }
    }

    const file = { image: data.image[0] };

    const result = await axiosPublic.post(image_host_api, file, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (result.data.success) {
      let productInfo = {
        cost: parseFloat(data.cost),
        desc: data.desc,
        discount: parseFloat(data.discount),
        image: result.data.data.display_url,
        location: data.location,
        name: data.name,
        profit: parseFloat(data.profit),
        quantity: parseFloat(data.quantity),
        email: user?.email,
        buyPrice: parseFloat(data.buyPrice),
        // sellingPrice: parseFloat(data.buyPrice + data.buyPrice * 0.075 + data.buyPrice * data.profit / 100).toFixed(2),
        sellingPrice: sellingPrice,

        saleCount: 0,
      };

      if (isUpdate) {
        axiosSecure
          .put(`/admin/product/update/${_id}`, productInfo)
          .then((res) => {
            console.log(res);

            toast.success("Updated Succesfull");

            return;
          })
          .catch((err) => {
            console.log(err);
          });
      }

      if (!isUpdate) {
        axiosSecure
          .post("/admin/products", productInfo)
          .then((res) => {
            console.log(result);

            toast.success("product added succesful");

            console.log("product insert done");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  };
  console.log(watch("example"));

  return (
    <div className="hero min-h-screen bg-base-200 w-full">
      <Helmet>
        <title> inventory || add</title>
      </Helmet>
      <div className="hero-content flex-col lg:flex-row-reverse w-[100%]">
        <div className="card flex-shrink-0 w-full sm:max-w-sm md:w-full shadow-2xl bg-base-100">
          <h2 className="text-2xl text-center">
            {" "}
            {isUpdate ? "Update Product" : "Add Product"}{" "}
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="card-body grid grid-cols-1 md:grid-cols-2 w-full">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">product Name</span>
                </label>

                <input
                  defaultValue={isUpdate && name}
                  {...register("name")}
                  type="text"
                  placeholder="product name"
                  className="input input-bordered  w-full"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">product img</span>
                </label>

                <input
                  required
                  defaultValue={isUpdate && image}
                  {...register("image")}
                  type="file"
                  className="file-input file-input-bordered w-full max-w-xs"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Quantity</span>
                </label>
                <input
                  defaultValue={isUpdate && quantity}
                  {...register("quantity")}
                  type="number"
                  name="quantity"
                  placeholder="product quantity"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">product location</span>
                </label>
                <input
                  defaultValue={isUpdate && location}
                  {...register("location")}
                  type="text"
                  placeholder="location "
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">product cost</span>
                </label>
                <input
                  defaultValue={isUpdate && cost}
                  {...register("cost")}
                  placeholder="product cost"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Profit you want gain %</span>
                </label>
                <input
                  defaultValue={isUpdate && profit}
                  {...register("profit")}
                  type="number"
                  placeholder="profit"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Discount in percentage</span>
                </label>
                <input
                  defaultValue={isUpdate && discount}
                  {...register("discount")}
                  type="number"
                  placeholder="profit"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <input
                  defaultValue={isUpdate && desc}
                  {...register("desc")}
                  type="text"
                  placeholder="Description"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Buying Price</span>
                </label>
                <input
                  required
                  defaultValue={isUpdate && buyPrice}
                  {...register("buyPrice")}
                  type="number"
                  placeholder="Buy price"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Selling Price</span>
                </label>
                <input
                  readOnly
                  defaultValue={isUpdate && sellingPrice}
                  {...register("sellingPrice")}
                  type="number"
                  placeholder="its will auto generate"
                  className="input input-bordered"
                />
              </div>
            </div>

            <div className="form-control mt-6">
              <input
                type="submit"
                value={`${isUpdate ? "Update Product" : "Add Product"}`}
                className="btn btn-primary"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
