import React from 'react';
import useAllProducts from './useAllProducts';

const useAdminUtility = () => {
    const [products]=useAllProducts()
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


      )
      return { totalSaleCount, totalInvest, totalProfit };
};

export default useAdminUtility;