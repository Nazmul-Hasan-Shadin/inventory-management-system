import axios from "axios";

export const axioPublic = axios.create({
    baseURL:'http://localhost:5000'
})

const useAxiosPublic=()=>{
    return axioPublic
}

export default  useAxiosPublic