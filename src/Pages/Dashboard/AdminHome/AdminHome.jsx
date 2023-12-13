import React from 'react';
import AdminStat from '../../../Components/AdminStat/AdminStat';
import useAdminUtility from '../../../hooks/useAdminUtility';
import useAdminStats from '../../../hooks/useAdminStats';

const AdminHome = () => {
    const { totalSaleCount, totalInvest, totalProfit } = useAdminUtility();
    const income = useAdminStats();
    return (
        <div className='flex gap-4'>
              <AdminStat title={'Total Revenue'} value={income?.adminIncomeData} ></AdminStat>
              <AdminStat title={'Total product'} value={income?.productCountData} ></AdminStat>
            <AdminStat title={'profit'} value={totalProfit?.toFixed(2)} ></AdminStat>

        </div>
    );
};

export default AdminHome;