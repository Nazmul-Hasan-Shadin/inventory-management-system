
import { Helmet } from 'react-helmet-async';
import useAllProducts from '../../../hooks/useAllProducts';
import SalesProductInfo from './salesProductInfo';

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
  <div className='overflow-x-auto'>
              <Helmet>
            <title> inven || sales </title>
          </Helmet>
<div className="stats  shadow">
  
 


<div className="stat">
<div className="stat-figure text-secondary">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
</div>
<div className="stat-title">Total Sale</div>
<div className="stat-value">{totalSaleCount}</div>
<div className="stat-desc">Jan 1st - Feb 1st</div>
</div>

<div className="stat">
<div className="stat-figure text-secondary">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
</div>
<div className="stat-title">Total Invest</div>
<div className="stat-value"> $ {totalInvest}</div>
<div className="stat-desc">Jan 1st - Feb 1st</div>
</div>


<div className="stat">
<div className="stat-figure text-secondary">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
</div>
<div className="stat-title">Total Profit</div>
<div className="stat-value">{totalProfit}</div>
<div className="stat-desc">Jan 1st - Feb 1st</div>
</div>


  </div>


 {/*============================ sales product==================== */}
  
<div>
<SalesProductInfo totalProfit={totalProfit}></SalesProductInfo>
</div>
  </div>

    );
};

export default SaleSummery;