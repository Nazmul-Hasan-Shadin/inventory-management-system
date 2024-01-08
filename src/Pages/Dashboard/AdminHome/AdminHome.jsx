import React from "react";
import AdminStat from "../../../Components/AdminStat/AdminStat";
import useAdminUtility from "../../../hooks/useAdminUtility";
import useAdminStats from "../../../hooks/useAdminStats";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Label,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import useShop from "../../../hooks/useShop";
import RecentShop from "../../../Components/RecentShop/RecentShop";

const AdminHome = () => {
  const { totalSaleCount, totalInvest, totalProfit } = useAdminUtility();
  const income = useAdminStats();
  const [products, isLoading] = useShop();

  const dynamicData = {
    Sales: totalSaleCount,

    Profit: totalProfit,
    totalInvest: totalInvest,
    // ... Add more properties as needed
  };

  // Transform object into an array for the BarChart
  //   const data = Object.entries(dynamicData).map(([label, value]) => ({
  //     name: label,
  //     value,
  //   }));

  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  const data = Object.entries(dynamicData).map(([Label, value]) => ({
    name: Label,
    sales: totalSaleCount,
    profit: totalProfit,
    totalInvest: totalInvest,
  }));

  return (
    <div className="w-full">
      <h2 className="text-2xl p-5">Dashboard</h2>

      {/* ===================card======================================= */}
      <div className="grid grid-cols-1 w-full  md:grid-cols-2 lg:grid-cols-4  gap-4 justify-items-center">
        <AdminStat
          bg={"#FF9F43"}
          title={"Total Revenue"}
          value={income?.adminIncomeData}
        ></AdminStat>
        <AdminStat
          bg={"#00CFE8"}
          title={"Total product"}
          value={income?.productCountData}
        ></AdminStat>
        <AdminStat
          bg={"#1B2850"}
          title={"profit"}
          value={totalProfit?.toFixed(2)}
        ></AdminStat>
        <AdminStat
          shop={true}
          bg={"#28C76F"}
          title={"Total Shop"}
          value={products?.data.length}
        ></AdminStat>
      </div>
      {/*========================= Bar chart==================================== */}

      <div className="my-8 flex flex-col lg:flex-row items-center">
        {/* ========================bar chart=========================== */}
        <div className="">
          <BarChart width={430} height={250} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sales" fill="#8884d8" />
            <Bar dataKey="profit" fill="#82ca9d" />
            <Bar dataKey="totalInvest" fill="#82ca9d" />
          </BarChart>
        </div>

        <div>
          <BarChart
            width={400}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Bar
              dataKey="sales"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
              ))}
            </Bar>
          </BarChart>
        </div>
      </div>

      <RecentShop></RecentShop>
    </div>
  );
};

export default AdminHome;
