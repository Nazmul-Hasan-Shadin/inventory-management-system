import React from 'react';
import AdminStat from '../../../Components/AdminStat/AdminStat';
import useAdminUtility from '../../../hooks/useAdminUtility';
import useAdminStats from '../../../hooks/useAdminStats';
import { Bar, BarChart, CartesianGrid, Cell, Label, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const AdminHome = () => {
    const { totalSaleCount, totalInvest, totalProfit } = useAdminUtility();
    const income = useAdminStats();
  
    const dynamicData = {
        Sales: totalSaleCount,
     
        Profit: totalProfit,
        totalInvest: totalInvest
        // ... Add more properties as needed
      };
    
      // Transform object into an array for the BarChart
    //   const data = Object.entries(dynamicData).map(([label, value]) => ({
    //     name: label,
    //     value,
    //   }));
 
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
  };
  
  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
  
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };


    
    const data= Object.entries(dynamicData).map(([Label,value])=>({
         name:Label,
         sales:totalSaleCount,
         profit:totalProfit,
         totalInvest:totalInvest
    }))
    console.log(data);
    

 

    return (
        <>
        <h2 className='text-2xl p-5'>Dashboard</h2>
                <div className='flex gap-4'>
              <AdminStat title={'Total Revenue'} value={income?.adminIncomeData} ></AdminStat>
              <AdminStat title={'Total product'} value={income?.productCountData} ></AdminStat>
            <AdminStat title={'profit'} value={totalProfit?.toFixed(2)} ></AdminStat>

        </div>
        {/* Bar chart  */}

   
                               
  <div className='my-8 flex flex-col lg:flex-row items-center'>
 <div>
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
      <Bar dataKey="sales" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
 </div>

  </div>

        </>

    );
};

export default AdminHome;