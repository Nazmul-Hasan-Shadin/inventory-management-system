import useaxiosSecure from "../../../hooks/useaxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";

const SalesProductInfo = ({}) => {
  const axiosSecure = useaxiosSecure();
  const { user, loading } = useAuth();

  const { data: products } = useQuery({
    queryKey: ["saleProduct"],
    enabled: !loading,
    queryFn: async () => {
      const result = await axiosSecure.get(`/sales-collection/${user?.email}`);
      return result.data;
    },
  });



  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>#</label>
              </th>
        
              <th>Product Name </th>
              <th>Sale Date</th>

              <th>Profit </th>
            </tr>
          </thead>
          <tbody>
            {products?.data.map((product) => (
              <tr key={product._id}>
                <th>
                  <label></label>
                </th>



                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle  h-16"></div>
                    </div>
                    <div>
                      <div className="text-sm opacity-50 text-black">
                        {" "}
                        {product?.cartId?.map((item) => item.name).join(", ")}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge badge-ghost badge-sm">
                    {" "}
                    {product.date}
                  </span>
                </td>

                <td>
                  <td>
                    ${" "}
                    <span>
                      {" "}
                      {product?.cartId
                        .reduce(
                          (initialPrice, item) =>
                            initialPrice + (item.sellingPrice - item.buyPrice),
                          0
                        )
                        .toFixed(2)}{" "}
                    </span>{" "}
                  </td>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesProductInfo;
