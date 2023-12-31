import axios from "axios";
import useAllProducts from "../../../hooks/useAllProducts";
import SalesProductInfo from "../SaleSummery/salesProductInfo";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useaxiosPublic";
import SysUsers from "../sysUsers/sysUsers";
import { FaPeopleArrows, FaPeopleCarry } from "react-icons/fa";
import useAdminStats from "../../../hooks/useAdminStats";
import useAdminUtility from "../../../hooks/useAdminUtility.jsx";

const SysSellSummery = () => {
  const axiosPublic = useAxiosPublic();
  // const [countt,setCount]=useState()
  const [products] = useAllProducts();
  // const saleCount= products?.product.reduce((total,item)=>total+item.saleCount,0)
  // const invest= products?.product.reduce((total,item)=>total+item.buyPrice,0)
  // console.log(products,'djfkdjjjjjjjjjjj');

  const income = useAdminStats();
  // cannot read undefiend product
  const { totalSaleCount, totalInvest, totalProfit } = useAdminUtility();

  // console.log(data,'iam data bro');

  return (
    <div className="overflow-x-auto  ">
        
     
      <div className="stats  stats-vertical lg:stats-horizontal  gap-5 shadow">
        <div className="stat ">
          <div className="stat-figure text-secondary">
            <FaPeopleArrows className="text-4xl"></FaPeopleArrows>
          </div>
          <div className="stat-title">Income of SysAdmin </div>
          <div className="stat-value"> $ {income?.adminIncomeData}</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Total product</div>
          <div className="stat-value"> {income?.productCountData}</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Total Sales</div>
          <div className="stat-value">$ {totalProfit}</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>
      </div>

      {/*============================ sales product==================== */}

      <div className="my-5  ">
        <h2 className="text-3xl text-center text-[#FF00D3]">
          {" "}
          All Users Section
        </h2>
        <SysUsers></SysUsers>
      </div>
    </div>
  );
};

export default SysSellSummery;
