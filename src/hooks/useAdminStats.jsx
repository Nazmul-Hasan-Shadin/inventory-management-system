import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useaxiosPublic";


const useAdminStats = () => {
       const axiosPublic=useAxiosPublic()
    const { data:income } = useQuery({
      queryKey: ['adminIncomebd'],
      queryFn: async() => {
        const adminIncome = await axiosPublic.get('/totalIncomeOfAdmin');
        const productCount= await axiosPublic.get('/productCount')
        const adminIncomeData= adminIncome.data.data
        const productCountData=productCount.data.count
        console.log(productCount, 'dkfjjjjjj');
        return {adminIncomeData,productCountData}
      }
    })

    return income

};

export default useAdminStats;