
import { Helmet } from 'react-helmet-async';
import useAllProducts from '../../../hooks/useAllProducts';
import SalesProductInfo from './salesProductInfo';
import AdminStat from '../../../Components/AdminStat/AdminStat';

const SaleSummery = () => {
    const [products]=useAllProducts()
    // const saleCount= products?.product.reduce((total,item)=>total+item.saleCount,0)
    // const invest= products?.product.reduce((total,item)=>total+item.buyPrice,0)
    // console.log(products,'djfkdjjjjjjjjjjj');
    if (!products || !products.product) {
     
      return <div>Loading...</div>;
    }
 
 

    const { totalSaleCount, totalInvest, totalProfit } = products.product.reduce(
      (accumulator, item) => {
        const productProfit = item.saleCount * (item.sellingPrice - item.buyPrice);
    
        return {
          totalSaleCount: accumulator.totalSaleCount + item.saleCount,
          totalInvest: accumulator.totalInvest + item.buyPrice,
          totalProfit: accumulator.totalProfit + productProfit,
          
        };
      },
      { totalSaleCount: 0, totalInvest: 0, totalProfit: 0 }
    );
    

    return (
  <div className='overflow-x-auto mt-12'>
              <Helmet>
            <title> inven || sales </title>
          </Helmet>


<div className=" grid grid-cols-1 px-7 md:grid-cols-2 lg:grid-cols-3 gap-8  lg:px-12">



<AdminStat value={totalSaleCount} title={'Total Sale'} bg={'orange'} ></AdminStat>



<AdminStat value={totalInvest} title={'Total Invest'} bg={'orange'} ></AdminStat>



<AdminStat value={totalProfit.toFixed(2)} title={'Total Profit'} bg={'orange'} ></AdminStat>
  </div>


 {/*============================ sales product==================== */}
  
<div className='py-10'>
<SalesProductInfo totalProfit={totalProfit}></SalesProductInfo>
</div>
  </div>

    );
};

export default SaleSummery;